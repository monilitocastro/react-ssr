/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchCurrentUser = exports.fetchUsers = exports.fetchAdmins = undefined;

var _axios = __webpack_require__(7);

var _axios2 = _interopRequireDefault(_axios);

var _types = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var fetchAdmins = exports.fetchAdmins = function fetchAdmins() {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {
      var results, admins;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return api.get("/admins");

            case 3:
              results = _context.sent;
              admins = results.data;

              dispatch({
                type: _types.ADMINS_FETCHED,
                admins: admins
              });
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);

              console.error(_context.t0);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, undefined, [[0, 8]]);
    }));

    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();
};

var fetchUsers = exports.fetchUsers = function fetchUsers() {
  return function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, getState, api) {
      var results, users;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return api.get("/users");

            case 3:
              results = _context2.sent;
              users = results.data;

              dispatch({
                type: _types.USERS_FETCHED,
                users: users
              });
              _context2.next = 11;
              break;

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](0);

              console.error(_context2.t0);

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, undefined, [[0, 8]]);
    }));

    return function (_x4, _x5, _x6) {
      return _ref2.apply(this, arguments);
    };
  }();
};

var fetchCurrentUser = exports.fetchCurrentUser = function fetchCurrentUser() {
  return function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dispatch, getState, api) {
      var results, currentUser;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return api.get("/current_user");

            case 3:
              results = _context3.sent;
              currentUser = results.data;

              dispatch({
                type: _types.CURRENT_USER_FETCHED,
                currentUser: currentUser
              });
              _context3.next = 11;
              break;

            case 8:
              _context3.prev = 8;
              _context3.t0 = _context3["catch"](0);

              console.error(_context3.t0);

            case 11:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, undefined, [[0, 8]]);
    }));

    return function (_x7, _x8, _x9) {
      return _ref3.apply(this, arguments);
    };
  }();
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var USERS_FETCHED = exports.USERS_FETCHED = "USERS_FETCHED";
var CURRENT_USER_FETCHED = exports.CURRENT_USER_FETCHED = "CURRENT_USER_FETCHED";
var ADMINS_FETCHED = exports.ADMINS_FETCHED = "ADMINS_FETCHED";

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Home = __webpack_require__(16);

var _Home2 = _interopRequireDefault(_Home);

var _Users = __webpack_require__(17);

var _Users2 = _interopRequireDefault(_Users);

var _App = __webpack_require__(18);

var _App2 = _interopRequireDefault(_App);

var _NotFound = __webpack_require__(20);

var _NotFound2 = _interopRequireDefault(_NotFound);

var _Admins = __webpack_require__(21);

var _Admins2 = _interopRequireDefault(_Admins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = [_extends({}, _App2.default, {
  routes: [_extends({
    path: "/",
    exact: true
  }, _Home2.default), _extends({
    path: "/users",
    exact: true
  }, _Users2.default), _extends({
    path: "/admins",
    exact: true
  }, _Admins2.default), _extends({}, _NotFound2.default)]
})];

exports.default = routes;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(10);

var _express = __webpack_require__(11);

var _express2 = _interopRequireDefault(_express);

var _reactRouterConfig = __webpack_require__(4);

var _expressHttpProxy = __webpack_require__(12);

var _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);

var _renderer = __webpack_require__(13);

var _renderer2 = _interopRequireDefault(_renderer);

var _createStore = __webpack_require__(23);

var _createStore2 = _interopRequireDefault(_createStore);

var _Routes = __webpack_require__(6);

var _Routes2 = _interopRequireDefault(_Routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use("/api", (0, _expressHttpProxy2.default)("http://react-ssr-api.herokuapp.com/", {
  proxyReqOptDecorator: function proxyReqOptDecorator(opts) {
    opts.headers["x-forwarded-host"] = "localhost:3000";

    return opts;
  }
}));
app.use(_express2.default.static("public"));

app.get("*", function (req, res) {
  var store = (0, _createStore2.default)(req);
  var context = {};

  // let all promise resolve or reject before
  // placing in another promise
  var routes = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref) {
    var route = _ref.route;

    return route.loadData ? route.loadData(store) : null;
  });

  Promise.all(routes).then(function () {
    var renderer = (0, _renderer2.default)(store, req, context);

    var NotFound = context.NotFound,
        url = context.url;

    if (NotFound) {
      res.status(404);
    }
    if (url) {
      res.redirect("/");
    }

    res.send((0, _renderer2.default)(store, req, context));
  });
});

app.listen(3000, function () {
  console.log("listening on port 3000");
});

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("express-http-proxy");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(5);

var _reactRedux = __webpack_require__(1);

var _server = __webpack_require__(14);

var _reactRouterConfig = __webpack_require__(4);

var _serializeJavascript = __webpack_require__(15);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _Routes = __webpack_require__(6);

var _Routes2 = _interopRequireDefault(_Routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (store, req, context) {
  var content = (0, _server.renderToString)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactRouterDom.StaticRouter,
      { location: req.path, context: context },
      _react2.default.createElement(
        "div",
        null,
        (0, _reactRouterConfig.renderRoutes)(_Routes2.default)
      )
    )
  ));

  var html = "\n    <html>\n        <head>\n        <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css\">\n        </head>\n        <body>\n            <div id='root'>" + content + "</div>\n            <script>\n              window.INITIAL_STATE = " + (0, _serializeJavascript2.default)(store.getState()) + "\n            </script>\n            <script src='bundle.js'></script>\n        </body>\n    </html>\n  ";
  return html;
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function Home() {
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "div",
      null,
      "I'm the really really BEST home component 2"
    ),
    _react2.default.createElement(
      "button",
      {
        onClick: function onClick() {
          console.log("Hi there... hydrated much?");
        }
      },
      "Hello"
    )
  );
};

exports.default = { component: Home };

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _actions = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Users = function (_Component) {
  _inherits(Users, _Component);

  function Users(props) {
    _classCallCheck(this, Users);

    var _this = _possibleConstructorReturn(this, (Users.__proto__ || Object.getPrototypeOf(Users)).call(this, props));

    _this.state = { users: [] };
    return _this;
  }

  _createClass(Users, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.visited) {
        this.props.fetchUsers();
      }
      this.visited = true;
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var users = nextProps.users;

      if (users) {
        this.setState({ users: users });
      }
    }
  }, {
    key: "renderUsers",
    value: function renderUsers() {
      var users = this.props.users;

      if (!users) {
        return;
      }
      var result = users.map(function (user) {
        return _react2.default.createElement(
          "li",
          { key: user.id },
          user.name
        );
      });
      return result;
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "ul",
        null,
        this.renderUsers.bind(this)()
      );
    }
  }]);

  return Users;
}(_react.Component);

function loadData(store) {
  return store.dispatch((0, _actions.fetchUsers)());
}

function mapStateToProps(state) {
  return {
    users: state.usersReducer.users
  };
}

Users = (0, _reactRedux.connect)(mapStateToProps, { fetchUsers: _actions.fetchUsers })(Users);
exports.default = { loadData: loadData, component: Users };

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = __webpack_require__(4);

var _Header = __webpack_require__(19);

var _Header2 = _interopRequireDefault(_Header);

var _index = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(_ref) {
  var route = _ref.route;

  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(_Header2.default, null),
    (0, _reactRouterConfig.renderRoutes)(route.routes)
  );
};

exports.default = {
  component: App,
  loadData: function loadData(store) {
    return store.dispatch((0, _index.fetchCurrentUser)());
  }
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(5);

var _reactRedux = __webpack_require__(1);

var _actions = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderAuthButtons = function renderAuthButtons(auth) {
  var result = [];
  if (auth) {
    return [_react2.default.createElement(
      "li",
      { key: "1" },
      _react2.default.createElement(
        _reactRouterDom.Link,
        { to: "/Users" },
        "Users"
      )
    ), _react2.default.createElement(
      "li",
      { key: "2" },
      _react2.default.createElement(
        _reactRouterDom.Link,
        { to: "/Admins" },
        "Admin"
      )
    ), _react2.default.createElement(
      "li",
      { key: "3" },
      _react2.default.createElement(
        "a",
        { href: "/api/Logout" },
        "Logout"
      )
    )];
  } else {
    return _react2.default.createElement(
      "li",
      null,
      _react2.default.createElement(
        "a",
        { href: "/api/auth/google" },
        "Sign In"
      )
    );
  }
  return result;
};
var Header = function Header(_ref) {
  var auth = _ref.auth;

  return _react2.default.createElement(
    "nav",
    null,
    _react2.default.createElement(
      "div",
      { className: "nav-wrapper" },
      _react2.default.createElement(
        "a",
        { href: "#", className: "brand-logo" },
        "Logo"
      ),
      _react2.default.createElement(
        "ul",
        { id: "nav-mobile", className: "right hide-on-med-and-down" },
        renderAuthButtons(auth)
      )
    )
  );
};

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Header);

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotFound = function NotFound(_ref) {
  var _ref$staticContext = _ref.staticContext,
      staticContext = _ref$staticContext === undefined ? {} : _ref$staticContext;

  staticContext.NotFound = true;
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "h1",
      null,
      "Page Not Found"
    )
  );
};

exports.default = { component: NotFound };

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _actions = __webpack_require__(2);

var _authRequired = __webpack_require__(22);

var _authRequired2 = _interopRequireDefault(_authRequired);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Admins = function (_Component) {
  _inherits(Admins, _Component);

  function Admins(props) {
    _classCallCheck(this, Admins);

    var _this = _possibleConstructorReturn(this, (Admins.__proto__ || Object.getPrototypeOf(Admins)).call(this, props));

    _this.state = { admins: "" };
    return _this;
  }

  _createClass(Admins, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.visited) {
        this.props.fetchAdmins();
      }
      this.visited = true;
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var admins = nextProps.admins;

      if (admins) {
        this.setState({ admins: admins });
      }
    }
  }, {
    key: "renderAdmins",
    value: function renderAdmins() {
      var admins = this.props.admins;

      if (!admins) {
        return;
      }
      var result = admins.map(function (admin) {
        return _react2.default.createElement(
          "li",
          { key: admin.id },
          admin.name
        );
      });
      return result;
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "ul",
        null,
        this.renderAdmins.bind(this)()
      );
    }
  }]);

  return Admins;
}(_react.Component);

function loadData(store) {
  return store.dispatch((0, _actions.fetchAdmins)());
}

function mapStateToProps(state) {
  return {
    admins: state.adminsReducer.admins
  };
}

Admins = (0, _authRequired2.default)((0, _reactRedux.connect)(mapStateToProps, { fetchAdmins: _actions.fetchAdmins })(Admins));
exports.default = { loadData: loadData, component: Admins };

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _reactRouterDom = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var authRequired = function authRequired(WrappedComponent) {
  var ParentComponent = function (_Component) {
    _inherits(ParentComponent, _Component);

    function ParentComponent() {
      _classCallCheck(this, ParentComponent);

      return _possibleConstructorReturn(this, (ParentComponent.__proto__ || Object.getPrototypeOf(ParentComponent)).apply(this, arguments));
    }

    _createClass(ParentComponent, [{
      key: "render",
      value: function render() {
        var auth = this.props.auth;

        switch (auth) {
          case false:
          case null:
          case "":
            return _react2.default.createElement(_reactRouterDom.Redirect, { to: "/" });
          default:
            return _react2.default.createElement(WrappedComponent, this.props);
        }
      }
    }]);

    return ParentComponent;
  }(_react.Component);

  ParentComponent = (0, _reactRedux.connect)(function (state) {
    return { auth: state.auth };
  }, null)(ParentComponent);
  return ParentComponent;
};

exports.default = authRequired;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(8);

var _reduxThunk = __webpack_require__(24);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _axios = __webpack_require__(7);

var _axios2 = _interopRequireDefault(_axios);

var _reducers = __webpack_require__(25);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req) {
  var axiosInstance = _axios2.default.create({
    baseURL: "http://react-ssr-api.herokuapp.com",
    headers: {
      cookie: req.get("cookie") || ""
    }
  });
  var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(axiosInstance)));
  return store;
};

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(8);

var _usersReducer = __webpack_require__(26);

var _usersReducer2 = _interopRequireDefault(_usersReducer);

var _adminsReducer = __webpack_require__(27);

var _adminsReducer2 = _interopRequireDefault(_adminsReducer);

var _authReducer = __webpack_require__(28);

var _authReducer2 = _interopRequireDefault(_authReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  usersReducer: _usersReducer2.default,
  auth: _authReducer2.default,
  adminsReducer: _adminsReducer2.default
});

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = usersReducer;

var _types = __webpack_require__(3);

function usersReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case _types.USERS_FETCHED:
      return _extends({}, state, { users: action.users });
    default:
      return state;
  }
}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = usersReducer;

var _types = __webpack_require__(3);

function usersReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case _types.ADMINS_FETCHED:
      return _extends({}, state, { admins: action.admins });
    default:
      return state;
  }
}

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = authReducer;

var _types = __webpack_require__(3);

function authReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var action = arguments[1];

  switch (action.type) {
    case _types.CURRENT_USER_FETCHED:
      return action.currentUser || false;
    default:
      return state;
  }
}

/***/ })
/******/ ]);