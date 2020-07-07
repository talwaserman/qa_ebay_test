"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ReasonSelect;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

require("antd/es/select/style/css");

var _select = _interopRequireDefault(require("antd/es/select"));

var _react = _interopRequireWildcard(require("react"));

var _get = _interopRequireDefault(require("lodash/get"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./style.less");

/* eslint-disable */
var Option = _select.default.Option;

function ReasonSelect(_ref) {
  var reasonArray = _ref.reasonArray,
      updateReason = _ref.updateReason,
      resonType = _ref.resonType,
      selectedReason = _ref.selectedReason,
      dropdownStyle = _ref.dropdownStyle,
      dropdownMenuStyle = _ref.dropdownMenuStyle,
      isDisabled = _ref.isDisabled,
      selectedDecision = _ref.selectedDecision;

  var _useState = (0, _react.useState)(initialSelectedReason()),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      localSelectedReason = _useState2[0],
      setSelectedReason = _useState2[1];

  (0, _react.useEffect)(function () {
    setSelectedReason((0, _get.default)(selectedReason, 'decisionInfo.reason.value'));
  }, [selectedReason]);
  var reasonMap = selectedDecision ? reasonArray[selectedDecision] : [];
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "reason-select-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_select.default, {
    dropdownStyle: dropdownStyle,
    dropdownMenuStyle: dropdownMenuStyle,
    showSearch: true,
    disabled: isDisabled,
    value: localSelectedReason,
    style: {
      width: 200
    },
    placeholder: "Select a reason",
    optionFilterProp: "children",
    onChange: onChange,
    onFocus: onFocus,
    onBlur: onBlur,
    onSearch: onSearch,
    filterOption: function filterOption(input, option) {
      return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    }
  }, reasonMap.map(function (item) {
    return /*#__PURE__*/_react.default.createElement(Option, {
      key: item,
      value: item
    }, item);
  })));

  function initialSelectedReason() {
    return selectedDecision ? reasonArray[selectedDecision][0] : null;
  }

  function onChange(value) {
    setSelectedReason(value);
    updateReason(value, resonType);
  }

  function onBlur() {// console.log("blur");
  }

  function onFocus() {// console.log("focus");
  }

  function onSearch(val) {// console.log("search:", val);
  }
}

ReasonSelect.propTypes = {
  /** reasonArray - array of reasons to show in the select component */
  reasonArray: _propTypes.default.array.isRequired,

  /** updateReason - function used to update the selected reason from the dropdown */
  updateReason: _propTypes.default.func.isRequired,

  /** defaultValue - initial selected decision (option1 / option2 / option3) */
  selectedDecision: _propTypes.default.string.isRequired,

  /** resonType -should be reason or observation */
  resonType: _propTypes.default.string.isRequired,

  /** isDisabled - indicate if the select is disabled */
  isDisabled: _propTypes.default.bool,

  /** dropdownStyle - style of dropdown menu	*/
  dropdownStyle: _propTypes.default.object,

  /** dropdownMenuStyle - additional style applied to dropdown menu */
  dropdownMenuStyle: _propTypes.default.object
};
ReasonSelect.defaultProps = {
  defaultValue: false,
  isDisabled: false,
  dropdownStyle: null,
  dropdownMenuStyle: null
};