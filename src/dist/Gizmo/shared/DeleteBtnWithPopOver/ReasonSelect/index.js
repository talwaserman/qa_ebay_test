"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ReasonSelect;

require("antd/es/button/style/css");

var _button = _interopRequireDefault(require("antd/es/button"));

var _react = _interopRequireDefault(require("react"));

require("./style.less");

function ReasonSelect(_ref) {
  var changeReason = _ref.changeReason,
      options = _ref.options,
      title = _ref.title;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "reason-select-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", null, title), /*#__PURE__*/_react.default.createElement("div", {
    className: "delete-btn-wrapper"
  }, options.map(function (item) {
    return /*#__PURE__*/_react.default.createElement(_button.default, {
      key: item.value,
      type: "default",
      onClick: function onClick(e) {
        return clickHandler(item.value);
      }
    }, item.title);
  })));

  function clickHandler(changedReason) {
    changeReason(changedReason);
  }
}