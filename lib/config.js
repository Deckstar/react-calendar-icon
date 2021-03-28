"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.themedConfig = exports.DEFAULT_CONFIG = void 0;
exports.DEFAULT_CONFIG = {
    calendarIcon: {
        textColor: 'white',
        primaryColor: '#e85650',
        backgroundColor: '#fafafa',
    },
};
var themedConfig = function (theme) {
    var config = __assign(__assign({}, exports.DEFAULT_CONFIG.calendarIcon), theme === null || theme === void 0 ? void 0 : theme.calendarIcon);
    return config;
};
exports.themedConfig = themedConfig;
