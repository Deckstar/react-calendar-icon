"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("./config");
describe('config', function () {
    describe('DEFAULT_CONFIG', function () {
        it('should be an object', function () {
            expect(config_1.DEFAULT_CONFIG).toBeInstanceOf(Object);
        });
        it('should contain calendarIcon property', function () {
            expect(config_1.DEFAULT_CONFIG).toHaveProperty('calendarIcon');
        });
    });
    describe('themedConfig', function () {
        it('should be a functon', function () {
            expect(config_1.themedConfig).toBeInstanceOf(Function);
        });
    });
});
