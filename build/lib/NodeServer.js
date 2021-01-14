"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _compression = _interopRequireDefault(require("compression"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _cors = _interopRequireDefault(require("cors"));

var _http = require("http");

var _express = _interopRequireDefault(require("express"));

var _helmet = _interopRequireDefault(require("helmet"));

var _methodOverride = _interopRequireDefault(require("method-override"));

var _apolloServerExpress = require("apollo-server-express");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Server = /*#__PURE__*/function () {
  function Server(config) {
    _classCallCheck(this, Server);

    this.config = config;
    this.app = new _express["default"]();
    this.run = this.run.bind(this);
  }

  _createClass(Server, [{
    key: "bootstrap",

    /**
     * To enable all the setting on our express app
     * @returns -Instance of Current Object
     */
    value: function bootstrap() {
      this._initHelmet();

      this._initCompress();

      this._initCookieParser();

      this._initCors();

      this._initJsonParser();

      this._initMethodOverride();

      return this;
    }
    /**
     *
     * @returns -Instance of Current Object
     */

  }, {
    key: "run",
    value: function run() {
      var _this$config = this.config,
          port = _this$config.port,
          env = _this$config.env;
      this.httpServer.listen(port, function () {
        console.info("server started on port ".concat(port, " (").concat(env, ")")); // eslint-disable-line no-console
      });
      return this;
    }
  }, {
    key: "setupApollo",
    value: function () {
      var _setupApollo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(schema) {
        var app;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                app = this.app;
                this.server = new _apolloServerExpress.ApolloServer(_objectSpread(_objectSpread({}, schema), {}, {
                  context: function context(_ref) {
                    var req = _ref.req;
                    return {
                      request: req,
                      token: req.headers.authorization || ''
                    };
                  },
                  onHealthCheck: function onHealthCheck() {
                    return new Promise(function (resolve) {
                      resolve('I am OK');
                    });
                  }
                }));
                this.server.applyMiddleware({
                  app: app
                });
                this.httpServer = (0, _http.createServer)(app);
                this.server.installSubscriptionHandlers(this.httpServer);
                this.run();

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function setupApollo(_x) {
        return _setupApollo.apply(this, arguments);
      }

      return setupApollo;
    }()
    /**
     * Compression of the output
     */

  }, {
    key: "_initCompress",
    value: function _initCompress() {
      this.app.use((0, _compression["default"])());
    }
    /**
     * Parse Cookie header and populate req.cookies with an object keyed by the cookie names
     */

  }, {
    key: "_initCookieParser",
    value: function _initCookieParser() {
      this.app.use((0, _cookieParser["default"])());
    }
    /**
     *
     * Lets you to enable cors
     */

  }, {
    key: "_initCors",
    value: function _initCors() {
      this.app.use((0, _cors["default"])());
    }
    /**
     *
     * Helmet helps you secure your Express apps by setting various HTTP headers.
     */

  }, {
    key: "_initHelmet",
    value: function _initHelmet() {
      this.app.use((0, _helmet["default"])());
    }
    /**
     *  - Parses urlencoded bodies & JSON
     */

  }, {
    key: "_initJsonParser",
    value: function _initJsonParser() {
      this.app.use(_bodyParser["default"].json());
      this.app.use(_bodyParser["default"].urlencoded({
        extended: true
      }));
    }
    /**
     *
     * Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it.
     */

  }, {
    key: "_initMethodOverride",
    value: function _initMethodOverride() {
      this.app.use((0, _methodOverride["default"])());
    }
  }, {
    key: "application",
    get: function get() {
      return this.app;
    }
  }]);

  return Server;
}();

exports["default"] = Server;