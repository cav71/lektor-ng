import dataclasses as dc
import json
import queue
import socket
import threading
import time
from datetime import UTC, datetime

from flask import Flask, Response, jsonify
from werkzeug.serving import make_server

# Thread-safe event queue
EVENTS: queue.Queue[(datetime, datetime)] = queue.Queue()

app = Flask(__name__)


def now() -> tuple[datetime, datetime]:
    tz = datetime.now().astimezone().tzinfo
    return datetime.now(tz=tz), datetime.now(tz=UTC)


@dc.dataclass
class EventPublisher:
    address: str | tuple[str, int] | None = None
    thread: threading.Thread | None = None

    def _target(self):
        kwargs = {}
        if isinstance(self.address, str):
            sock = socket.socket(socket.AF_UNIX, socket.SOCK_STREAM)
            sock.bind(self.address)
            sock.listen(1)
            server = make_server(sock, app, threaded=True, use_debugger=False, use_reloader=False)
            target = server.serve_forever
        else:
            kwargs = {"port": self.address[1], "host": self.address[0], "debug": False}
            target = app.run
        return target, kwargs

    def start(self) -> threading.Thread | None:
        if not self.address:
            return None
        target, kwargs = self._target()
        self.thread = threading.Thread(target=target, kwargs=kwargs, daemon=True)
        self.thread.start()
        return self.thread

    def __repr__(self) -> str:
        return f"{self.__class__.__name__}(address={self.address})"

    def update(self) -> None:
        if not self.thread:
            return
        EVENTS.put(now())


def event_producer():
    """Background thread that pushes events to the queue."""
    while True:
        tz = datetime.datetime.now().astimezone().tzinfo
        event_data = {"time": datetime.now(tz=tz).isoformat(), "message": "Server time update"}
        EVENTS.put(json.dumps(event_data))
        time.sleep(1)


@app.route("/api/data", methods=["GET"])
def get_data():
    return jsonify({"status": "ok", "message": "Hello from Flask", "data": {"version": "2.0"}})


@app.route("/events")
def events():
    def event_stream():
        while True:
            event_data = EVENTS.get()
            yield f"data: {event_data}\n\n"
            EVENTS.task_done()

    return Response(event_stream(), mimetype="text/event-stream")


if __name__ == "__main__":
    if (ev := EventPublisher(("127.0.0.1", 5000))).thread:
        ev.thread.start()

        # Start event producer thread
        producer_thread = threading.Thread(target=event_producer, daemon=True)
        producer_thread.start()
        ev.thread.join()
