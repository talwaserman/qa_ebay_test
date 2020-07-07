"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AspectsSelect;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

require("antd/es/select/style/css");

var _select = _interopRequireDefault(require("antd/es/select"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var Option = _select.default.Option;

function AspectsSelect(_ref) {
  var aspectsNames = _ref.aspectsNames,
      placeHolder = _ref.placeHolder,
      updateReason = _ref.updateReason,
      defaultValue = _ref.defaultValue,
      dropdownMenuStyle = _ref.dropdownMenuStyle,
      dropdownStyle = _ref.dropdownStyle;

  var _useState = (0, _react.useState)(defaultValue || []),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      selectedAspectName = _useState2[0],
      setSelectedAspectName = _useState2[1];

  (0, _react.useEffect)(function () {
    setSelectedAspectName(defaultValue);
  }, [defaultValue]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "aspects-select-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_select.default, {
    dropdownMenuStyle: dropdownMenuStyle,
    dropdownStyle: dropdownStyle,
    mode: "multiple",
    style: {
      width: '300px'
    },
    value: selectedAspectName,
    placeholder: placeHolder,
    onChange: onChange
  }, aspectsNames.map(function (aspectName) {
    return /*#__PURE__*/_react.default.createElement(Option, {
      key: aspectName,
      value: aspectName
    }, aspectName);
  })));

  function onChange(value) {
    setSelectedAspectName(value);
    updateReason(value, 'reasonDetails');
  }
}

AspectsSelect.propTypes = {
  /** aspectsNames - array of aspects Names to show in the select component */
  aspectsNames: _propTypes.default.array.isRequired,

  /** updateAspectsNames - function used to update the selected Aspect Names from the dropdown */
  updateReason: _propTypes.default.func.isRequired,

  /** defaultValue - initial selected value to show in the Aspect dropdown */
  defaultValue: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.string])
};
AspectsSelect.defaultProps = {};