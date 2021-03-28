"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var CalendarIcon_1 = __importDefault(require("./CalendarIcon"));
var react_test_renderer_1 = __importDefault(require("react-test-renderer"));
it('renders without crashing', function () {
    var div = react_test_renderer_1.default.create(react_1.default.createElement(CalendarIcon_1.default, { date: new Date() })).toJSON();
    expect(div).toMatchSnapshot();
});
