"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Filters;

require("antd/es/popover/style/css");

var _popover = _interopRequireDefault(require("antd/es/popover"));

require("antd/es/button/style/css");

var _button = _interopRequireDefault(require("antd/es/button"));

require("antd/es/checkbox/style/css");

var _checkbox = _interopRequireDefault(require("antd/es/checkbox"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./style.less");

var Content = function Content(_ref) {
  var initialValues = _ref.initialValues,
      updateFilters = _ref.updateFilters;

  var _useState = (0, _react.useState)(initialValues),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      checkedList = _useState2[0],
      setCheckList = _useState2[1];

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_checkbox.default.Group, {
    className: "filters-inner-wrapper",
    onChange: onChange,
    value: checkedList
  }, /*#__PURE__*/_react.default.createElement(_checkbox.default, {
    className: "label-wrapper",
    value: "added",
    checked: checkedList.includes('added')
  }, "Show Added"), /*#__PURE__*/_react.default.createElement(_checkbox.default, {
    className: "label-wrapper",
    value: "rejected",
    checked: checkedList.includes('rejected')
  }, "Show Rejected"), /*#__PURE__*/_react.default.createElement(_checkbox.default, {
    className: "label-wrapper",
    value: "mapped",
    checked: checkedList.includes('mapped')
  }, "Show Mapped"), /*#__PURE__*/_react.default.createElement(_checkbox.default, {
    className: "label-wrapper",
    value: "notReviewed",
    checked: checkedList.includes('notReviewed')
  }, "Show Not Reviewed")));

  function onChange(values) {
    setCheckList(values); //update inner state

    updateFilters(values); //updat outer state
  }
};

function Filters(initialValues) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "filters-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_popover.default, {
    placement: "bottom",
    content: Content(initialValues),
    title: null,
    trigger: "click"
  }, /*#__PURE__*/_react.default.createElement(_button.default, {
    size: 'small'
  }, "Filters")));
}

Filters.propTypes = {
  /** initialValues - the initial values used for the filters, [mapped, rejected, added] */
  initialValues: _propTypes.default.array.isRequired,

  /** updateFilters - callback function used to update parent component that state of checked list has changed */
  updateFilters: _propTypes.default.func.isRequired
};