"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = InputField;

require("antd/es/input/style/css");

var _input = _interopRequireDefault(require("antd/es/input"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./style.less");

function InputField(_ref) {
  var label = _ref.label,
      value = _ref.value,
      updateValue = _ref.updateValue,
      isChanged = _ref.isChanged,
      isDifferentValue = _ref.isDifferentValue;
  var styleClasses = "input-field-wrapper ".concat(isChanged && 'changed-value', " ").concat(isDifferentValue && 'different-value');
  return /*#__PURE__*/_react.default.createElement("div", {
    className: styleClasses
  }, /*#__PURE__*/_react.default.createElement("strong", null, /*#__PURE__*/_react.default.createElement("label", {
    className: "label"
  }, label)), /*#__PURE__*/_react.default.createElement(_input.default, {
    value: value,
    onChange: function onChange(e) {
      return updateValue(e.target.value);
    }
  }));
}

InputField.propTypes = {
  /** label used for the row of lable and value */
  label: _propTypes.default.string.isRequired,

  /** value used in the input field and is a controlled input field */
  value: _propTypes.default.string.isRequired,

  /** updateValue - function used to notify the parent that the value changed, we send the new value */
  updateValue: _propTypes.default.func.isRequired,

  /** isChanged - indicate if the field value was changed */
  isChanged: _propTypes.default.bool.isRequired,

  /**  isDifferentValue - indicate if the images in the list are the same as the images on the compared image list*/
  isDifferentValue: _propTypes.default.bool
};
InputField.defaultProps = {
  isDifferentValue: false
};