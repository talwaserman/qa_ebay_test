"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ControlledBtn;

require("antd/es/button/style/css");

var _button = _interopRequireDefault(require("antd/es/button"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function ControlledBtn(_ref) {
  var loading = _ref.loading,
      iconImage = _ref.iconImage,
      btnText = _ref.btnText,
      onClickHandler = _ref.onClickHandler,
      loadingDelay = _ref.loadingDelay,
      isDisabled = _ref.isDisabled;

  var _useState = (0, _react.useState)(loading),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isLoading = _useState2[0],
      setLoading = _useState2[1];

  return /*#__PURE__*/_react.default.createElement(_button.default, {
    disabled: isDisabled,
    loading: isLoading,
    icon: iconImage,
    onClick: clickHandler
  }, btnText);
  /* istanbul ignore next */

  function clickHandler() {
    if (loadingDelay) {
      setLoading(true);
      onClickHandler();
      setTimeout(function () {
        return setLoading(false);
      }, loadingDelay);
    } else {
      onClickHandler();
    }
  }
}

ControlledBtn.propTypes = {
  /** iconImage - add string of icon if icon is required in this button */
  iconImage: _propTypes.default.string,

  /** loadingDelay - miliseconds to show loading indicator to indicate to the user something is working */
  loadingDelay: _propTypes.default.number,

  /** btnText - text to show on the button */
  btnText: _propTypes.default.string,

  /** loading - indication if the button is loading to prevent the user from clicking multiple times */
  loading: _propTypes.default.bool,

  /** onClickHandler - handler function to be called on click */
  onClickHandler: _propTypes.default.func,

  /** isDisabled - indiciation if the button is disabled or enabled */
  isDisabled: _propTypes.default.bool
};
ControlledBtn.defaultProps = {
  loading: false,
  iconImage: null,
  btnText: 'click me',
  onClickHandler: function onClickHandler() {},
  loadingDelay: null,
  isDisabled: false
};