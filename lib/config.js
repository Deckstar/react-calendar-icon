"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.themedConfig = exports.DEFAULT_CONFIG = void 0;
const DEFAULT_CONFIG = {
  calendarIcon: {
    textColor: 'white',
    // text color of the header and footer
    primaryColor: '#e85650',
    // used as background of the header and footer
    backgroundColor: '#fafafa'
  }
};
exports.DEFAULT_CONFIG = DEFAULT_CONFIG;

const themedConfig = theme => {
  const config = { ...DEFAULT_CONFIG.calendarIcon,
    ...(theme === null || theme === void 0 ? void 0 : theme.calendarIcon)
  };
  return config;
};

exports.themedConfig = themedConfig;