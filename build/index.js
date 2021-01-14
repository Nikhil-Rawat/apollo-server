"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "resolvers", {
  enumerable: true,
  get: function get() {
    return _module["default"];
  }
});
exports.typeDefs = void 0;

var _mergeGraphqlSchemas = require("merge-graphql-schemas");

var _path = _interopRequireDefault(require("path"));

var _module = _interopRequireDefault(require("./module"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var typesArray = (0, _mergeGraphqlSchemas.fileLoader)(_path["default"].join(__dirname, './**/*.graphql'));
var typeDefs = (0, _mergeGraphqlSchemas.mergeTypes)(typesArray, {
  all: true
});
exports.typeDefs = typeDefs;