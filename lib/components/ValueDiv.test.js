"use strict";

var _react = _interopRequireDefault(require("react"));

var _IconDiv = _interopRequireDefault(require("./IconDiv"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

it('renders without crashing', () => {
  const div = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_IconDiv.default, null)).toJSON();

  expect(div).toMatchSnapshot();
});