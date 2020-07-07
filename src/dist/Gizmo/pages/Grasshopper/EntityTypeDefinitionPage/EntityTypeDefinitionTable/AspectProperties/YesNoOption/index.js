"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = YesNoOption;

require("antd/es/button/style/css");

var _button = _interopRequireDefault(require("antd/es/button"));

require("./../style.less");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function YesNoOption(_ref) {
  var propertyName = _ref.propertyName,
      setPropertyValue = _ref.setPropertyValue,
      getButtonClass = _ref.getButtonClass,
      recommendation = _ref.recommendation,
      disableValues = _ref.disableValues;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "property-row"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "property-name-right-label"
  }, propertyName), /*#__PURE__*/_react.default.createElement("div", {
    className: "property-values-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_button.default, {
    onClick: function onClick() {
      return setPropertyValue(propertyName, 'true');
    },
    className: getButtonClass(propertyName, 'true'),
    disabled: disableValues
  }, "Y"), /*#__PURE__*/_react.default.createElement(_button.default, {
    onClick: function onClick() {
      return setPropertyValue(propertyName, 'false');
    },
    className: getButtonClass(propertyName, 'false'),
    disabled: disableValues
  }, "N")), /*#__PURE__*/_react.default.createElement("div", {
    className: "recommendation"
  }, recommendation));
}

YesNoOption.prototypes = {
  /** propertyname - the property label */
  propertyName: _propTypes.default.string.isRequired,

  /** setPropertyValue - callback to choose an option */
  setPropertyValue: _propTypes.default.func.isRequired,

  /** getButtonType - get the type of the button by value callback */
  getButtonType: _propTypes.default.func.isRequired,

  /** recommendation - reccomendation label */
  recommendation: _propTypes.default.string,

  /** disableValues - whether to disable the values */
  disableValues: _propTypes.default.bool.isRequired
};
YesNoOption.defaultProps = {
  reccomendation: ''
};