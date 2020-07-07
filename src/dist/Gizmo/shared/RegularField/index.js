"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RegularField;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./style.less");

function RegularField(_ref) {
  var label = _ref.label,
      value = _ref.value,
      isDifferentValue = _ref.isDifferentValue;
  var styleClasses = isDifferentValue ? 'regular-field-wrapper different-value' : 'regular-field-wrapper';
  return /*#__PURE__*/_react.default.createElement("div", {
    className: styleClasses
  }, /*#__PURE__*/_react.default.createElement("strong", null, /*#__PURE__*/_react.default.createElement("label", {
    className: "label"
  }, label)), /*#__PURE__*/_react.default.createElement("span", null, value));
}

RegularField.propTypes = {
  /** label used for the row of lable and value */
  label: _propTypes.default.string.isRequired,

  /** value used in the input field and is a controlled input field */
  value: _propTypes.default.string.isRequired,

  /** isDifferentValue - indicate if the value is different from the compared value*/
  isDifferentValue: _propTypes.default.bool
};
RegularField.defaultProps = {
  isDifferentValue: false
};