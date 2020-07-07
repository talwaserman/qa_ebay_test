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
      reasonType = _ref.reasonType,
      currentSelectedObservation = _ref.currentSelectedObservation,
      dropdownStyle = _ref.dropdownStyle,
      dropdownMenuStyle = _ref.dropdownMenuStyle,
      isDisabled = _ref.isDisabled,
      rowId = _ref.rowId,
      page = _ref.page;

  var _useState = (0, _react.useState)(currentSelectedObservation || ''),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      selectedReason = _useState2[0],
      setSelectedReason = _useState2[1];

  (0, _react.useEffect)(function () {
    setSelectedReason(currentSelectedObservation);
  }, [currentSelectedObservation, rowId, page]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "reason-select-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_select.default, {
    dropdownStyle: dropdownStyle,
    dropdownMenuStyle: dropdownMenuStyle,
    showSearch: true,
    disabled: isDisabled,
    value: selectedReason,
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
  }, reasonArray.map(function (item) {
    return /*#__PURE__*/_react.default.createElement(Option, {
      key: item.reason,
      value: JSON.stringify(item)
    }, item.reason);
  })));

  function onChange(value) {
    setSelectedReason(value);
    updateReason(value, reasonType);
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

  /** currentSelectedObservation - initial selected value to show in the reason dopdown */
  currentSelectedObservation: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.string]),

  /** resonType -should be reason or observation */
  reasonType: _propTypes.default.string.isRequired,

  /** isDisabled - indicate if the select is disabled */
  isDisabled: _propTypes.default.bool,

  /** dropdownStyle - style of dropdown menu	*/
  dropdownStyle: _propTypes.default.object,

  /** dropdownMenuStyle - additional style applied to dropdown menu */
  dropdownMenuStyle: _propTypes.default.object,

  /** rowId - the row identifier, used here to refersh initial value used in the dropdown */
  rowId: _propTypes.default.string.isRequired,

  /** page - page is indicating our location in the cluster. page number is the current pair index */
  page: _propTypes.default.number.isRequired
};
ReasonSelect.defaultProps = {
  defaultValue: false,
  isDisabled: false,
  dropdownStyle: null,
  dropdownMenuStyle: null
};