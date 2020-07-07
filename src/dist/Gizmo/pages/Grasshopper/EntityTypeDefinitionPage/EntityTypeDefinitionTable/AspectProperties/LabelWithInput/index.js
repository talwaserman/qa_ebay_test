"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = LabelWithInput;

require("antd/es/input/style/css");

var _input = _interopRequireDefault(require("antd/es/input"));

require("./../style.less");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function LabelWithInput(_ref) {
  var propertyName = _ref.propertyName,
      inputType = _ref.inputType,
      getInputValue = _ref.getInputValue,
      setPropertyValue = _ref.setPropertyValue,
      recommendation = _ref.recommendation,
      disableValue = _ref.disableValue;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "property-row"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "property-name-left-label"
  }, propertyName), /*#__PURE__*/_react.default.createElement("div", {
    className: "property-values-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_input.default, {
    type: inputType,
    value: getInputValue(propertyName),
    onChange: function onChange(e) {
      return setPropertyValue(propertyName, e.target.value);
    },
    disabled: disableValue
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "recommendation"
  }, recommendation));
}

LabelWithInput.prototypes = {
  /** propertyName - the property name */
  propertyName: _propTypes.default.string.isRequired,

  /** inputType - input type */
  inputType: _propTypes.default.string.isRequired,

  /** setPropertyValue - callback to choose an option */
  setPropertyValue: _propTypes.default.func.isRequired,

  /** getButtonType - get the type of the button by value callback */
  getButtonType: _propTypes.default.func.isRequired,

  /** recommendation - reccomendation label */
  recommendation: _propTypes.default.string,

  /** disableValue - whether to disable the input */
  disableValue: _propTypes.default.bool.isRequired
};
LabelWithInput.defaultProps = {
  reccomendation: ''
};