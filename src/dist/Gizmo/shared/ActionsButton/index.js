"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ActionsButton;

require("antd/es/popover/style/css");

var _popover = _interopRequireDefault(require("antd/es/popover"));

require("antd/es/button/style/css");

var _button = _interopRequireDefault(require("antd/es/button"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./style.less");

function ActionsButton(_ref) {
  var content = _ref.content;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "action-btn-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_popover.default, {
    content: content,
    title: "",
    trigger: "click",
    placement: "topLeft"
  }, /*#__PURE__*/_react.default.createElement(_button.default, {
    icon: "setting",
    size: "small"
  })));
}

ActionsButton.propTypes = {
  content: _propTypes.default.any.isRequired
};