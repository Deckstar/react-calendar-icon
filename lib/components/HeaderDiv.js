"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _config = require("../config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const HeaderDiv = _styledComponents.default.div`
  color: ${props => {
  var _themedConfig;

  return (_themedConfig = (0, _config.themedConfig)(props.theme)) === null || _themedConfig === void 0 ? void 0 : _themedConfig.textColor;
}};
  background-color: ${props => {
  var _themedConfig2;

  return (_themedConfig2 = (0, _config.themedConfig)(props.theme)) === null || _themedConfig2 === void 0 ? void 0 : _themedConfig2.primaryColor;
}};
  width: 100%;
  text-align: center;
  font-size: 1.2em;
  line-height: 1.4em;
`;
var _default = HeaderDiv;
exports.default = _default;