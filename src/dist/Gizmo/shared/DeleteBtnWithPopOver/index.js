"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DeleteBtnWithPopOver;

require("antd/es/popover/style/css");

var _popover = _interopRequireDefault(require("antd/es/popover"));

require("antd/es/button/style/css");

var _button = _interopRequireDefault(require("antd/es/button"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ReasonSelect = _interopRequireDefault(require("./ReasonSelect"));

function DeleteBtnWithPopOver(_ref) {
  var options = _ref.options,
      data = _ref.data,
      selectReason = _ref.selectReason,
      title = _ref.title;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isShowingDeletePopover = _useState2[0],
      updateDeletePopover = _useState2[1];

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "deleteBtnWithPopOver-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "delete-btn-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_popover.default, {
    placement: "top",
    content: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_ReasonSelect.default, {
      changeReason: handleChange,
      options: options,
      title: title
    })),
    trigger: "click",
    visible: isShowingDeletePopover,
    onVisibleChange: onVisibleChange
  }, /*#__PURE__*/_react.default.createElement(_button.default, {
    shape: "circle",
    icon: "delete",
    onClick: onVisibleChange
  }))));

  function handleChange(selectedReason) {
    updateDeletePopover(false);
    selectReason(data, selectedReason);
  }

  function onVisibleChange(visible) {
    updateDeletePopover(visible);
  }
}

DeleteBtnWithPopOver.propTypes = {
  /** data - data that can be passed by consuming component  */
  data: _propTypes.default.object,

  /** options - array of options to show in the select popover  */
  options: _propTypes.default.array.isRequired,

  /** selectReason - callback function for the consuming component */
  selectReason: _propTypes.default.func.isRequired,

  /** title - the title that is used in the popover */
  title: _propTypes.default.string
};
DeleteBtnWithPopOver.defaultProps = {
  title: '',
  data: {}
};