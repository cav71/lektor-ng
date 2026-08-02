from __future__ import annotations

from pathlib import Path

from ..utils import deprecated
from .exif import read_exif
from .image_info import get_image_info
from .thumbnail import (
    Thumbnail,
    ThumbnailMode,
    compute_dimensions,
    make_image_thumbnail,
)

__all__ = [
    "Thumbnail",
    "ThumbnailMode",
    "compute_dimensions",
    "get_image_info",
    "get_quality",
    "make_image_thumbnail",
    "read_exif",
]


@deprecated(version="3.4.0")
def get_quality(source_filename: str | Path) -> int:
    """Get the effective default thumbnail _quality_.

    This is the ImageMagick "quality" that is used, by default, when generating
    thumbnails.

    """
    if get_image_info(source_filename).format == "png":
        return 75
    return 85
