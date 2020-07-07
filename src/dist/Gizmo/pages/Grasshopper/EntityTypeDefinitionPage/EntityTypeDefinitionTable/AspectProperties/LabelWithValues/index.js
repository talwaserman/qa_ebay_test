"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = LabelWithValues;

require("antd/es/button/style/css");

var _button = _interopRequireDefault(require("antd/es/button"));

require("./../style.less");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function LabelWithValues(_ref) {
  var propertyName = _ref.propertyName,
      propertyOptions = _ref.propertyOptions,
      setPropertyValue = _ref.setPropertyValue,
      getButtonClass = _ref.getButtonClass,
      recommendation = _ref.recommendation,
      disableValues = _ref.disableValues;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "property-row"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "property-name-left-label"
  }, propertyName), /*#__PURE__*/_react.default.createElement("div", {
    className: "property-values-wrapper"
  }, propertyOptions.map(function (value, index) {
    return /*#__PURE__*/_react.default.createElement(_button.default, {
      onClick: function onClick() {
        return setPropertyValue(propertyName, value);
      },
      key: index,
      className: getButtonClass(propertyName, value),
      disabled: disableValues
    }, value);
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "recommendation"
  }, recommendation));
}

LabelWithValues.prototypes = {
  /** propertyname - the property label */
  propertyName: _propTypes.default.string.isRequired,

  /** setPropertyValue - callback to choose an option */
  setPropertyValue: _propTypes.default.func.isRequired,

  /** getButtonType - get the type of the button by value callback */
  getButtonType: _propTypes.default.func.isRequired,

  /** recommendation - reccomendation label */
  recommendation: _propTypes.default.string,

  /** disableValues - whether to disable values selection */
  disableValues: _propTypes.default.bool
};
LabelWithValues.defaultProps = {
  reccomendation: 'N/A',
  disableValues: false
};