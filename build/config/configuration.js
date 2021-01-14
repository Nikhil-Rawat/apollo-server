"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var envparsed = _dotenv["default"].config().parsed;

var config = {
  port: envparsed.port
};
Object.freeze(config);
console.log('Configuration is locked');
var _default = config;
exports["default"] = _default;