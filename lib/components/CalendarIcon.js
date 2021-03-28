"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultOptions = void 0;
var react_1 = __importDefault(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var ContentIcon_1 = __importDefault(require("./ContentIcon"));
exports.defaultOptions = {
    header: { weekday: 'long' },
    footer: { month: 'long' },
    value: { day: '2-digit' },
    locale: [],
};
var formatDate = function (date, locale, formatOptions) {
    return date.toLocaleDateString(locale, formatOptions);
};
var CalendarIcon = function (_a) {
    var date = _a.date, theme = _a.theme, options = _a.options;
    var _b = options || {}, locale = _b.locale, header = _b.header, value = _b.value, footer = _b.footer;
    var defaultLocaleOption = exports.defaultOptions.locale, defaultHeaderOption = exports.defaultOptions.header, defaultValueOption = exports.defaultOptions.value, defaultFooterOption = exports.defaultOptions.footer;
    return (react_1.default.createElement(ContentIcon_1.default, { theme: theme, header: formatDate(date, locale || defaultLocaleOption, header || defaultHeaderOption), value: formatDate(date, locale || defaultLocaleOption, value || defaultValueOption), footer: formatDate(date, locale || defaultLocaleOption, footer || defaultFooterOption) }));
};
CalendarIcon.propTypes = {
    date: prop_types_1.default.instanceOf(Date).isRequired,
};
exports.default = CalendarIcon;
