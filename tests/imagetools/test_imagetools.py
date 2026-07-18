from pathlib import Path

import pytest

import lektor_ng
from lektor_ng.imagetools import compute_dimensions
from lektor_ng.imagetools import get_quality


HERE = Path(__file__).parent
EXAMPLE = Path(lektor_ng.__file__).parent / "example"


def test_compute_dimensions():
    assert compute_dimensions(10, 10, 200, 100) == (10, 5)
 

@pytest.mark.parametrize(
    "image, expected",
    [
        (HERE / "exif-test-1.jpg", 85),
        ("content/logo.png", 75),
    ],
)
def test_get_quality(image, expected, example_path):
    with pytest.deprecated_call():
        assert get_quality(example_path / image) == expected
