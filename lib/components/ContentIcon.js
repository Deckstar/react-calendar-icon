"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _IconDiv = _interopRequireDefault(require("./IconDiv"));

var _HeaderDiv = _interopRequireDefault(require("./HeaderDiv"));

var _FooterDiv = _interopRequireDefault(require("./FooterDiv"));

var _ValueDiv = _interopRequireDefault(require("./ValueDiv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ContentIcon = ({
  theme,
  header,
  value,
  footer
}) => /*#__PURE__*/_react.default.createElement(_IconDiv.default, {
  theme: theme
}, /*#__PURE__*/_react.default.createElement(_HeaderDiv.default, {
  theme: theme
}, header), /*#__PURE__*/_react.default.createElement(_ValueDiv.default, null, value), /*#__PURE__*/_react.default.createElement(_FooterDiv.default, {
  theme: theme
}, footer));

var _default = ContentIcon;
exports.default = _default;