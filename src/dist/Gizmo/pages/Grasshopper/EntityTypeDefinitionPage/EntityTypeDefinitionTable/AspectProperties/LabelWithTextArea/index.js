"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = LabelWithTextArea;

require("antd/es/input/style/css");

var _input = _interopRequireDefault(require("antd/es/input"));

require("./../style.less");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var TextArea = _input.default.TextArea;

function LabelWithTextArea(_ref) {
  var propertyName = _ref.propertyName,
      value = _ref.value,
      setPropertyValue = _ref.setPropertyValue,
      numberOfRows = _ref.numberOfRows,
      maxLength = _ref.maxLength,
      disableValue = _ref.disableValue;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "property-row"
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("span", {
    className: "textarea-label"
  }, propertyName)), /*#__PURE__*/_react.default.createElement(TextArea, {
    value: value,
    onChange: function onChange(e) {
      return setPropertyValue(propertyName, e.target.value);
    },
    rows: numberOfRows,
    maxLength: maxLength,
    disabled: disableValue
  }));
}

LabelWithTextArea.prototypes = {
  /** propertyname - the property label */
  propertyName: _propTypes.default.string.isRequired,

  /** value - the field model */
  setPropertyValue: _propTypes.default.func.isRequired,

  /** numberOfRows - number of rows of the textarea */
  numberOfRows: _propTypes.default.number.isRequired,

  /** disableValue - whether to disable the value */
  disableValue: _propTypes.default.bool.isRequired
};