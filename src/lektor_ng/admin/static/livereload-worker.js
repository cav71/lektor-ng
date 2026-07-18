"use strict";
(() => {
  // tooldrawer/lib/condition.ts
  var Condition = class {
    constructor() {
      this._resolve = () => {
      };
      this.notify_all();
    }
    notify_all() {
      this._resolve(), this._promise = new Promise((resolve) => {
        this._resolve = resolve;
      });
    }
    wait() {
      return this._promise;
    }
  }, condition_default = Condition;

  // tooldrawer/lib/server-sent-events.ts
  async function* sseDataStream(url, options) {
    let queue = new Array(), condition = new condition_default(), eventSource = new EventSource(url);
    eventSource.addEventListener("message", (event) => {
      queue.push(JSON.parse(event.data)), condition.notify_all();
    });
    let name = (options == null ? void 0 : options.name) || "sseDataStream";
    for (eventSource.addEventListener("open", () => {
      console.debug(`\u{1F60E} ${name} connected to ${url}`);
    }), eventSource.addEventListener("error", () => {
      console.debug(`\u{1F61E} ${name} connection to ${url} failed`);
    }); ; )
      yield* queue.splice(0), await condition.wait();
  }

  // tooldrawer/livereload-worker.ts
  async function worker({ eventsUrl }) {
    let broadcastChannel = new BroadcastChannel("live-reload"), broadcast = (message) => broadcastChannel.postMessage(message), prevVID;
    for await (let sse of sseDataStream(eventsUrl, {
      name: self.name
    }))
      switch (sse.type) {
        case "reload":
          broadcast(sse);
          break;
        case "ping":
          prevVID && sse.versionId !== prevVID && (console.debug("\u{1F501} live-reload triggering reload."), broadcast({ type: "restart" })), prevVID = sse.versionId;
          break;
      }
  }
  function getConfig() {
    return new Promise((resolve) => {
      self.addEventListener("connect", (event) => {
        let port = event.ports[0];
        port.addEventListener(
          "message",
          (event2) => resolve(event2.data),
          { once: !0 }
        ), port.start();
      });
    });
  }
  getConfig().then((config) => worker(config)).catch(console.error);
})();
//# sourceMappingURL=livereload-worker.js.map
