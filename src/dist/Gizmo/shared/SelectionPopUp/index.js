"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SelectionPopUp;

require("antd/es/input/style/css");

var _input = _interopRequireDefault(require("antd/es/input"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

require("antd/es/select/style/css");

var _select = _interopRequireDefault(require("antd/es/select"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _get = _interopRequireDefault(require("lodash/get"));

require("./style.less");

var Option = _select.default.Option;

function SelectionPopUp(_ref) {
  var inputLabel = _ref.inputLabel,
      selectPlaceHolder = _ref.selectPlaceHolder,
      dropDownKeyLabel = _ref.dropDownKeyLabel,
      dropDownValuesArray = _ref.dropDownValuesArray,
      handleModalChange = _ref.handleModalChange,
      loading = _ref.loading;

  var _useState = (0, _react.useState)(),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      inputData = _useState2[0],
      setInputData = _useState2[1];

  var _useState3 = (0, _react.useState)(),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      dropDownData = _useState4[0],
      setDropDownData = _useState4[1];

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "selection-popup-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_input.default, {
    addonBefore: inputLabel,
    value: inputData,
    onChange: function onChange(e) {
      return updateInputData(e.target.value);
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "select-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_select.default, {
    placeholder: selectPlaceHolder,
    onChange: onChange,
    loading: loading,
    disabled: loading
  }, dropDownValuesArray.map(function (item) {
    return /*#__PURE__*/_react.default.createElement(Option, {
      key: (0, _get.default)(item, dropDownKeyLabel, null),
      value: JSON.stringify(item)
    }, item.name);
  }))));

  function onChange(value) {
    setDropDownData(JSON.parse(value));
    handleModalChange({
      selectionData: JSON.parse(value),
      inputData: inputData
    }, value ? false : true);
  }

  function updateInputData(value) {
    setInputData(value);
    handleModalChange({
      selectionData: dropDownData,
      inputData: value
    }, value && dropDownData ? false : true);
  }
}

SelectionPopUp.propTypes = {
  /** inputLabel - Input ui field label */
  inputLabel: _propTypes.default.string.isRequired,

  /** selectPlaceHolder - select place holder text */
  selectPlaceHolder: _propTypes.default.string,

  /** dropDownKeyLabel - represent for each key name in the dropDownvalues array */
  dropDownKeyLabel: _propTypes.default.string.isRequired,

  /** dropDownValuesArray - array of dropdown values */
  dropDownValuesArray: _propTypes.default.array.isRequired,

  /** loading - set the loading status of select data */
  loading: _propTypes.default.bool
};