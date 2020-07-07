"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ReasonSelection;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

require("antd/es/input/style/css");

var _input = _interopRequireDefault(require("antd/es/input"));

require("antd/es/select/style/css");

var _select = _interopRequireDefault(require("antd/es/select"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./style.less");

var Option = _select.default.Option;
var TextArea = _input.default.TextArea;

function ReasonSelection(_ref) {
  var select1Label = _ref.select1Label,
      input2Label = _ref.input2Label,
      input3Label = _ref.input3Label,
      handleModalChange = _ref.handleModalChange,
      currentInputData = _ref.currentInputData,
      selectCloseListValues = _ref.selectCloseListValues;

  var _useState = (0, _react.useState)(currentInputData),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      inputData = _useState2[0],
      setInputData = _useState2[1];

  (0, _react.useEffect)(function () {
    setInputData(currentInputData);
  }, [currentInputData]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "reason-selection-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "first-label"
  }, select1Label), /*#__PURE__*/_react.default.createElement("div", {
    className: "decision-type-select"
  }, /*#__PURE__*/_react.default.createElement(_select.default, {
    placeholder: select1Label,
    onChange: onDecisionChange,
    value: inputData.decision === '' ? undefined : inputData.decision,
    style: {
      width: '30%'
    }
  }, selectCloseListValues.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement(Option, {
      key: index,
      value: item.value
    }, item.name);
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "second-label"
  }, input2Label), /*#__PURE__*/_react.default.createElement("div", {
    className: "reason-text-area"
  }, /*#__PURE__*/_react.default.createElement(TextArea, {
    value: inputData.reason,
    onChange: function onChange(e) {
      return updateReasonInputData(e.target.value);
    },
    autoSize: true
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "third-label"
  }, input3Label), /*#__PURE__*/_react.default.createElement("div", {
    className: "explanation-text-area"
  }, /*#__PURE__*/_react.default.createElement(TextArea, {
    value: inputData.explanation,
    onChange: function onChange(e) {
      return updateExplanationInputData(e.target.value);
    },
    autoSize: true
  })));

  function onDecisionChange(value) {
    setInputData({
      index: inputData.index,
      decision: value,
      reason: inputData.reason,
      explanation: inputData.explanation
    });
    handleModalChange({
      index: inputData.index,
      decision: value,
      reason: inputData.reason,
      explanation: inputData.explanation
    }, value && inputData.reason && inputData.explanation ? false : true);
  }

  function updateReasonInputData(value) {
    setInputData({
      index: inputData.index,
      decision: inputData.decision,
      reason: value,
      explanation: inputData.explanation
    });
    handleModalChange({
      index: inputData.index,
      decision: inputData.decision,
      reason: value,
      explanation: inputData.explanation
    }, value && inputData.decision && inputData.explanation ? false : true);
  }

  function updateExplanationInputData(value) {
    setInputData({
      index: inputData.index,
      decision: inputData.decision,
      reason: inputData.reason,
      explanation: value
    });
    handleModalChange({
      index: inputData.index,
      decision: inputData.decision,
      reason: inputData.reason,
      explanation: value
    }, value && inputData.decision && inputData.reason ? false : true);
  }
}

ReasonSelection.propTypes = {
  /** select1Label - represent place holder label for select component */
  select1Label: _propTypes.default.string,

  /** input2Label - represent title label above input field */
  input2Label: _propTypes.default.string,

  /** input3Label - represent title label above input field */
  input3Label: _propTypes.default.string,

  /**  currentInputData - hold the existing input data if exists*/
  currentInputData: _propTypes.default.object,

  /**  selectCloseListValues - static close list of select name and value*/
  selectCloseListValues: _propTypes.default.arrayOf(_propTypes.default.shape({
    name: _propTypes.default.string.isRequired,
    value: _propTypes.default.string.isRequired
  }))
};