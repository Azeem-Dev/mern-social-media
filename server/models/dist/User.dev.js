"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var UserSchema = new _mongoose["default"].Schema({
  firstName: {
    type: String,
    required: true,
    min: 2,
    max: 50
  },
  lastName: {
    type: String,
    required: true,
    min: 2,
    max: 50
  },
  email: {
    type: String,
    required: true,
    max: 50,
    unique: true
  },
  password: {
    type: String,
    required: true,
    min: 5,
    max: 50
  },
  picturePath: {
    type: String,
    "default": ""
  },
  friends: {
    type: Array,
    "default": []
  },
  location: String,
  occupation: String,
  viewedProfile: Number,
  impressions: Number
}, {
  timestamps: true
});

var User = _mongoose["default"].model("User", UserSchema);

var _default = User;
exports["default"] = _default;