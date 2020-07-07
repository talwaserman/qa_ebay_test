"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ProductIndicationSelect;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

require("antd/es/select/style/css");

var _select = _interopRequireDefault(require("antd/es/select"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var Option = _select.default.Option;

function ProductIndicationSelect(_ref) {
  var urlIndex = _ref.urlIndex,
      selectPlaceHolder = _ref.selectPlaceHolder,
      dropDownValuesArray = _ref.dropDownValuesArray,
      currentSelection = _ref.currentSelection,
      updateData = _ref.updateData,
      dropDownStyle = _ref.dropDownStyle,
      isDisabled = _ref.isDisabled;

  var _useState = (0, _react.useState)(currentSelection || ''),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      inputSelection = _useState2[0],
      setInputSelection = _useState2[1];

  (0, _react.useEffect)(function () {
    setInputSelection(currentSelection);
  }, [currentSelection]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "select-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_select.default, {
    style: dropDownStyle,
    dropdownMenuStyle: {
      borderColor: 'red'
    },
    placeholder: selectPlaceHolder,
    onChange: function onChange(value) {
      return _onChange(value, urlIndex);
    },
    value: inputSelection,
    disabled: isDisabled
  }, dropDownValuesArray.map(function (value, index) {
    return /*#__PURE__*/_react.default.createElement(Option, {
      key: index,
      value: value
    }, value);
  })));

  function _onChange(value, urlIndex) {
    setInputSelection(value);
    updateData(value, urlIndex);
  }
}

ProductIndicationSelect.propTypes = {
  /** dropDownValuesArray - array of values to show in the select component */
  dropDownValuesArray: _propTypes.default.array.isRequired,

  /** dropDownStyle - style of select component */
  dropDownStyle: _propTypes.default.object,

  /** urlIndex - position where to store the selected data */
  urlIndex: _propTypes.default.number.isRequired,

  /** selectPlaceHolder - select place holder label */
  selectPlaceHolder: _propTypes.default.string,

  /** currentSelection - existing selection if exists */
  currentSelection: _propTypes.default.string,

  /** updateData - update selected data which value and correct index (position) */
  updateData: _propTypes.default.func.isRequired
};
ProductIndicationSelect.defaultProps = {};