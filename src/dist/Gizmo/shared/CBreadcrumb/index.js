"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CBreadcrumb;

var _react = _interopRequireDefault(require("react"));

require("./style.less");

function CBreadcrumb(_ref) {
  var path = _ref.path;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "breadcrumb-style"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "path-items"
  }, path.map(function (item) {
    return /*#__PURE__*/_react.default.createElement("span", {
      key: item
    }, item, " ");
  })));
}