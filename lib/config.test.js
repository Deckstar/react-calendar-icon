"use strict";

var _config = require("./config");

describe('config', () => {
  describe('DEFAULT_CONFIG', () => {
    it('should be an object', () => {
      expect(_config.DEFAULT_CONFIG).toBeInstanceOf(Object);
    });
    it('should contain calendarIcon property', () => {
      expect(_config.DEFAULT_CONFIG).toHaveProperty('calendarIcon');
    });
  });
  describe('themedConfig', () => {
    it('should be a functon', () => {
      expect(_config.themedConfig).toBeInstanceOf(Function);
    });
  });
});