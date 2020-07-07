"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = LabelWithTagsInput;

require("antd/es/select/style/css");

var _select = _interopRequireDefault(require("antd/es/select"));

require("./../style.less");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function LabelWithTagsInput(_ref) {
  var label = _ref.label,
      setValidValues = _ref.setValidValues,
      validValues = _ref.validValues,
      disableValue = _ref.disableValue,
      shouldOpenDropDown = _ref.shouldOpenDropDown;
  var Option = _select.default.Option;
  var validValuesTags = [];
  validValues.forEach(function (value) {
    validValuesTags.push( /*#__PURE__*/_react.default.createElement(Option, {
      key: value
    }, value));
  });
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "property-row"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "property-name-left-label-tags-input"
  }, label), /*#__PURE__*/_react.default.createElement("div", {
    className: "property-values-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_select.default, {
    className: "valid-values-input",
    defaultValue: validValues,
    onChange: function onChange(values) {
      return setValidValues(values);
    },
    mode: "tags",
    disabled: disableValue
  }, validValuesTags)));
}

LabelWithTagsInput.prototypes = {
  label: _propTypes.default.string.isRequired,

  /** setValidValues - callback to set the valid values  */
  setValidValues: _propTypes.default.func.isRequired,

  /** validValues - array of default valid values  */
  validValues: _propTypes.default.array.isRequired
};
LabelWithTagsInput.defaultProps = {
  validValues: []
};