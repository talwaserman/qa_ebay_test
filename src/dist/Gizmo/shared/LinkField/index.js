"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = LinkField;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./style.less");

function LinkField(_ref) {
  var label = _ref.label,
      value = _ref.value,
      onClickCallBack = _ref.onClickCallBack,
      url = _ref.url,
      isDifferentValue = _ref.isDifferentValue;
  var styleClasses = isDifferentValue ? 'link-field-wrapper different-value' : 'link-field-wrapper';
  return /*#__PURE__*/_react.default.createElement("div", {
    className: styleClasses
  }, /*#__PURE__*/_react.default.createElement("strong", null, /*#__PURE__*/_react.default.createElement("label", {
    className: "label"
  }, label)), url && /*#__PURE__*/_react.default.createElement("a", {
    href: url,
    target: "_blank",
    rel: "noopener noreferrer"
  }, value), onClickCallBack && /*#__PURE__*/_react.default.createElement("a", {
    onClick: onClickCallBack
  }, value));
}

LinkField.propTypes = {
  /** label used for the row of lable and value */
  label: _propTypes.default.string.isRequired,

  /** value used in the input field and is a controlled input field */
  value: _propTypes.default.string.isRequired,

  /** url - used to redirect user onclick */
  url: _propTypes.default.string,

  /** isDifferentValue - indicate if the value is different from the compared value*/
  isDifferentValue: _propTypes.default.bool,

  /** onClickCallBack - callback function for clicking on the a link */
  onClickCallBack: _propTypes.default.func
};
LinkField.defaultProps = {
  isDifferentValue: false,
  url: '',
  onClickCallBack: null
};