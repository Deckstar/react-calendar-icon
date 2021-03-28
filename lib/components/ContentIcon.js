"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var IconDiv_1 = __importDefault(require("./IconDiv"));
var HeaderDiv_1 = __importDefault(require("./HeaderDiv"));
var FooterDiv_1 = __importDefault(require("./FooterDiv"));
var ValueDiv_1 = __importDefault(require("./ValueDiv"));
var ContentIcon = function (_a) {
    var theme = _a.theme, header = _a.header, value = _a.value, footer = _a.footer;
    return (react_1.default.createElement(IconDiv_1.default, { theme: theme },
        react_1.default.createElement(HeaderDiv_1.default, { theme: theme }, header),
        react_1.default.createElement(ValueDiv_1.default, null, value),
        react_1.default.createElement(FooterDiv_1.default, { theme: theme }, footer)));
};
exports.default = ContentIcon;
