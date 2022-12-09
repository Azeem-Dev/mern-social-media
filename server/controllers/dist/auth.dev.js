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
  var _req$body, firstName, lastName, email, password, picturePath, friends, location, occupation, salt, passwordHash, newUser, savedUser;

  return regeneratorRuntime.async(function register$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, firstName = _req$body.firstName, lastName = _req$body.lastName, email = _req$body.email, password = _req$body.password, picturePath = _req$body.picturePath, friends = _req$body.friends, location = _req$body.location, occupation = _req$body.occupation;
          _context.next = 4;
          return regeneratorRuntime.awrap(_bcrypt["default"].genSalt());

        case 4:
          salt = _context.sent;
          _context.next = 7;
          return regeneratorRuntime.awrap(_bcrypt["default"].hash(password, salt));

        case 7:
          passwordHash = _context.sent;
          newUser = new _User["default"]({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: passwordHash,
            picturePath: picturePath,
            friends: friends,
            location: location,
            occupation: occupation,
            viewedProfile: Math.floor(Math.random() * 1000),
            impressions: Math.floor(Math.random() * 1000)
          });
          _context.next = 11;
          return regeneratorRuntime.awrap(newUser.save());

        case 11:
          savedUser = _context.sent;
          res.status(201).json(savedUser);
          _context.next = 18;
          break;

        case 15:
          _context.prev = 15;
          _context.t0 = _context["catch"](0);
          res.status(400).send(_context.t0.message);

        case 18:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 15]]);
};

exports.register = register;