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
var FooterDiv = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: ", ";\n  background-color: ", ";\n  width: 100%;\n  text-align: center;\n  font-size: 1.2em;\n  line-height: 1.4em;\n"], ["\n  color: ", ";\n  background-color: ", ";\n  width: 100%;\n  text-align: center;\n  font-size: 1.2em;\n  line-height: 1.4em;\n"])), function (props) { var _a; return (_a = config_1.themedConfig(props.theme)) === null || _a === void 0 ? void 0 : _a.textColor; }, function (props) { var _a; return (_a = config_1.themedConfig(props.theme)) === null || _a === void 0 ? void 0 : _a.primaryColor; });
exports.default = FooterDiv;
var templateObject_1;
