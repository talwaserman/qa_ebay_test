"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DisabledScreen;

require("antd/es/icon/style/css");

var _icon = _interopRequireDefault(require("antd/es/icon"));

var _react = _interopRequireDefault(require("react"));

require("./style.less");

function DisabledScreen() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "disabled-screen-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_icon.default, {
    type: "loading",
    className: "disabled-screen-spinner"
  }), ";");
}