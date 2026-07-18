from lektor_ng.types.base import BadValue  # noqa - reexport
from lektor_ng.types.base import get_undefined_info  # noqa - reexport
from lektor_ng.types.base import RawValue  # noqa - reexport
from lektor_ng.types.base import Type  # noqa - reexport
from lektor_ng.types.fake import HeadingType
from lektor_ng.types.fake import InfoType
from lektor_ng.types.fake import LineType
from lektor_ng.types.fake import SpacingType
from lektor_ng.types.flow import FlowType
from lektor_ng.types.formats import MarkdownType
from lektor_ng.types.multi import CheckboxesType
from lektor_ng.types.multi import SelectType
from lektor_ng.types.primitives import BooleanType
from lektor_ng.types.primitives import DateTimeType
from lektor_ng.types.primitives import DateType
from lektor_ng.types.primitives import FloatType
from lektor_ng.types.primitives import HtmlType
from lektor_ng.types.primitives import IntegerType
from lektor_ng.types.primitives import StringsType
from lektor_ng.types.primitives import StringType
from lektor_ng.types.primitives import TextType
from lektor_ng.types.special import SlugType
from lektor_ng.types.special import SortKeyType
from lektor_ng.types.special import UrlType


builtin_types = {
    # Primitive
    "string": StringType,
    "strings": StringsType,
    "text": TextType,
    "html": HtmlType,
    "integer": IntegerType,
    "float": FloatType,
    "boolean": BooleanType,
    "date": DateType,
    "datetime": DateTimeType,
    # Multi
    "checkboxes": CheckboxesType,
    "select": SelectType,
    # Special
    "sort_key": SortKeyType,
    "slug": SlugType,
    "url": UrlType,
    # Formats
    "markdown": MarkdownType,
    # Flow
    "flow": FlowType,
    # Fake
    "line": LineType,
    "spacing": SpacingType,
    "info": InfoType,
    "heading": HeadingType,
}
