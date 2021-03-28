"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.defaultOptions = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ContentIcon = _interopRequireDefault(require("./ContentIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const defaultOptions = {
  header: {
    weekday: 'long'
  },
  footer: {
    month: 'long'
  },
  value: {
    day: '2-digit'
  },
  locale: []
};
exports.defaultOptions = defaultOptions;

const formatDate = (date, locale, formatOptions) => {
  return date.toLocaleDateString(locale, formatOptions);
};

const CalendarIcon = ({
  date,
  theme,
  options
}) => {
  const {
    locale,
    header,
    value,
    footer
  } = options || {};
  const {
    locale: defaultLocaleOption,
    header: defaultHeaderOption,
    value: defaultValueOption,
    footer: defaultFooterOption
  } = defaultOptions;
  return /*#__PURE__*/_react.default.createElement(_ContentIcon.default, {
    theme: theme,
    header: formatDate(date, locale || defaultLocaleOption, header || defaultHeaderOption),
    value: formatDate(date, locale || defaultLocaleOption, value || defaultValueOption),
    footer: formatDate(date, locale || defaultLocaleOption, footer || defaultFooterOption)
  });
};

CalendarIcon.propTypes = {
  date: _propTypes.default.instanceOf(Date).isRequired
};
var _default = CalendarIcon;
exports.default = _default;