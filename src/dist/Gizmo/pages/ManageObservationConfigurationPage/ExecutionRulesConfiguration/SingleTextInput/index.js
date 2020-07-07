"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SingleTextInput;

require("antd/es/input/style/css");

var _input = _interopRequireDefault(require("antd/es/input"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _cloneDeep = _interopRequireDefault(require("lodash/cloneDeep"));

require("./style.less");

function SingleTextInput(_ref) {
  var inputLabel = _ref.inputLabel,
      handleModalChange = _ref.handleModalChange,
      currentInputData = _ref.currentInputData;

  var _useState = (0, _react.useState)(currentInputData),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      inputData = _useState2[0],
      setInputData = _useState2[1];

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "single-text-input-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "input-label"
  }, inputLabel), /*#__PURE__*/_react.default.createElement("div", {
    className: "configuration-input"
  }, /*#__PURE__*/_react.default.createElement(_input.default, {
    value: inputData.name,
    onChange: function onChange(e) {
      return updateInputData(e.target.value);
    }
  })), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null));

  function updateInputData(value) {
    var tempInputData = (0, _cloneDeep.default)(inputData);
    tempInputData.name = value;
    setInputData(tempInputData);
    handleModalChange(tempInputData, tempInputData.name ? false : true);
  }
}

SingleTextInput.propTypes = {
  /** inputLabel - represent title label above input field */
  inputLabel: _propTypes.default.string,

  /**  currentInputData - hold the existing input data if exists*/
  currentInputData: _propTypes.default.object
};