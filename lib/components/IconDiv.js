"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(require("styled-components"));
var config_1 = require("../config");
var IconDiv = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-size: 0.7em;\n  background-color: ", ";\n  height: 8em;\n  width: 8em;\n  border-radius: 0.7em;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n"], ["\n  font-size: 0.7em;\n  background-color: ", ";\n  height: 8em;\n  width: 8em;\n  border-radius: 0.7em;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n"])), function (props) { var _a; return (_a = config_1.themedConfig(props.theme)) === null || _a === void 0 ? void 0 : _a.backgroundColor; });
exports.default = IconDiv;
var templateObject_1;
