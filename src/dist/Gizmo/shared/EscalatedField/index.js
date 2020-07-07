"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = EscalatedField;

require("antd/es/icon/style/css");

var _icon = _interopRequireDefault(require("antd/es/icon"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./style.less");

function EscalatedField(_ref) {
  var escalator = _ref.escalator;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "escalated-field-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "escalated-field-wrapper-flag"
  }, /*#__PURE__*/_react.default.createElement(_icon.default, {
    type: "flag"
  })), "Record was escalated by: ".concat(escalator));
}

EscalatedField.propTypes = {
  /** escalator - name of escalator*/
  escalator: _propTypes.default.string.isRequired
};