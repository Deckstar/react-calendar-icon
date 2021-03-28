"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _config = require("../config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const IconDiv = _styledComponents.default.div`
  font-size: 0.7em;
  background-color: ${props => {
  var _themedConfig;

  return (_themedConfig = (0, _config.themedConfig)(props.theme)) === null || _themedConfig === void 0 ? void 0 : _themedConfig.backgroundColor;
}};
  height: 8em;
  width: 8em;
  border-radius: 0.7em;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
var _default = IconDiv;
exports.default = _default;