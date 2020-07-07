"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NoUmsInput;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

require("antd/es/tooltip/style/css");

var _tooltip = _interopRequireDefault(require("antd/es/tooltip"));

require("antd/es/icon/style/css");

var _icon = _interopRequireDefault(require("antd/es/icon"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../../../utils");

require("./style.less");

function NoUmsInput(_ref) {
  var suggestedValues = _ref.suggestedValues,
      isValueAlreadySelected = _ref.isValueAlreadySelected,
      setSuggestedValues = _ref.setSuggestedValues,
      checkAspectValuesDifference = _ref.checkAspectValuesDifference,
      onAspectChange = _ref.onAspectChange,
      aspect = _ref.aspect,
      handleCopy = _ref.handleCopy,
      aspectIdentifier = _ref.aspectIdentifier;

  var _useState = (0, _react.useState)(''),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      inputVal = _useState2[0],
      setInputVal = _useState2[1];

  var values = suggestedValues;
  var uniqueId = (0, _utils.uuid)();
  checkAspectValuesDifference(values);
  return /*#__PURE__*/_react.default.createElement("form", {
    className: "no-ums-input-wrapper",
    onSubmit: handleSubmit
  }, /*#__PURE__*/_react.default.createElement("label", {
    className: "values-wrapper",
    htmlFor: "no-ums-input-".concat(uniqueId)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "values-wrapper"
  }, values.map(function (item) {
    return /*#__PURE__*/_react.default.createElement("span", {
      className: "selected-item",
      key: item.value
    }, /*#__PURE__*/_react.default.createElement("span", {
      onClick: function onClick(e) {
        return handleInputCopy(item.value);
      }
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "copy-icon"
    }, /*#__PURE__*/_react.default.createElement(_icon.default, {
      type: "copy"
    }))), /*#__PURE__*/_react.default.createElement(_tooltip.default, {
      placement: "top",
      title: item.value
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "text-wrapper"
    }, item.value)), /*#__PURE__*/_react.default.createElement("svg", {
      onClick: function onClick(e) {
        return handleDelete(e, item.value);
      },
      viewBox: "64 64 896 896",
      focusable: "false",
      "data-icon": "close",
      width: "1em",
      height: "1em",
      fill: "currentColor",
      "aria-hidden": "true"
    }, /*#__PURE__*/_react.default.createElement("path", {
      d: "M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"
    })));
  }), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    value: inputVal,
    onChange: handleInputChange,
    id: "no-ums-input-".concat(uniqueId),
    onBlur: handleOnBlur
  }))));

  function handleOnBlur(e) {
    setSelectedValues(e);
  }

  function setSelectedValues(e) {
    e.preventDefault();

    if (isValueAlreadySelected((0, _toConsumableArray2.default)(values), inputVal) || inputVal === '') {
      return;
    }

    var newValue = {
      value: inputVal,
      information: {
        umsAlignedValue: false,
        crawlingValue: false
      }
    };
    var newValues = [].concat((0, _toConsumableArray2.default)(values), [newValue]);
    setSuggestedValues(newValues);
    setInputVal('');
    var updatedAspect = Object.assign({}, aspect);
    updatedAspect.propertyDecisionContract.suggestedValues = newValues;
    updatedAspect.propertyDecisionContract.changed = true;
    onAspectChange(updatedAspect, aspectIdentifier);
  }

  function handleSubmit(e) {
    setSelectedValues(e);
  }

  function handleInputCopy(aspectValue) {
    handleCopy(aspectValue, aspect.aspectName);
  }

  function handleInputChange(e) {
    setInputVal(e.target.value);
  }

  function handleDelete(e, value) {
    e.preventDefault();
    var newValues = values.filter(function (item) {
      return item.value !== value;
    });
    setSuggestedValues(newValues);
    var updatedAspect = Object.assign({}, aspect);
    updatedAspect.propertyDecisionContract.suggestedValues = newValues;
    updatedAspect.propertyDecisionContract.changed = true;
    onAspectChange(updatedAspect, aspectIdentifier);
  }
}

NoUmsInput.propTypes = {
  isValueAlreadySelected: _propTypes.default.func,
  setSuggestedValues: _propTypes.default.func,
  checkAspectValuesDifference: _propTypes.default.func
};
NoUmsInput.defaultProps = {
  /** suggestedValues - list of suggested values that will be displayed in the suggested list bellow the input field */
  suggestedValues: [],

  /** isValueAlreadySelected - funciton that will check that the values you add for the input field are unique */
  isValueAlreadySelected: function isValueAlreadySelected() {},

  /** setSuggestedValues - function used to set the suggestion to the input field */
  setSuggestedValues: function setSuggestedValues() {},

  /** checkAspectValuesDifference - function that is passed as prop and specify a funciton that check if aspect value is different from the mirror aspect */
  checkAspectValuesDifference: function checkAspectValuesDifference() {},

  /** handleCopy - callback function to be called and copy a value from survivor to victim and vise versa */
  handleCopy: _propTypes.default.func
};