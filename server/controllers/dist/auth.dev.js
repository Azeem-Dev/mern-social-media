"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.register = void 0;

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _User = _interopRequireDefault(require("../models/User.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// REGISTER USER
var register = function register(req, res) {
  return regeneratorRuntime.async(function register$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log(req.body);

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.register = register;