"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = UmsInput;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ControlledSelect = _interopRequireDefault(require("../../ControlledSelect"));

require("./style.less");

function UmsInput(_ref) {
  var suggestedValues = _ref.suggestedValues,
      onAspectChange = _ref.onAspectChange,
      aspect = _ref.aspect,
      umsValues = _ref.umsValues,
      checkAspectValuesDifference = _ref.checkAspectValuesDifference,
      aspectIdentifier = _ref.aspectIdentifier,
      handleCopy = _ref.handleCopy;
  var distinctValuesUmsValues = (0, _toConsumableArray2.default)(new Set([].concat((0, _toConsumableArray2.default)(umsValues), (0, _toConsumableArray2.default)(aspect.currentValues.map(function (item) {
    return item.value;
  })))));
  checkAspectValuesDifference(suggestedValues);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "ums-input-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_ControlledSelect.default, {
    optionValues: distinctValuesUmsValues,
    selectedValues: suggestedValues.map(function (item) {
      return item.value;
    }),
    onSelectChange: handleSelectChange,
    handleCopy: handleInputCopy
  }));

  function handleInputCopy(aspectValue) {
    handleCopy(aspectValue, aspect.aspectName);
  }

  function handleSelectChange(changedValues) {
    var updatedAspect = Object.assign({}, aspect);
    var changedValuesArray = changedValues.map(function (item) {
      return {
        value: item,
        information: {
          umsAlignedValue: true,
          crawlingValue: false
        }
      };
    });
    updatedAspect.propertyDecisionContract.changed = true;
    updatedAspect.propertyDecisionContract.suggestedValues = changedValuesArray;
    onAspectChange(updatedAspect, aspectIdentifier);
  }
}

UmsInput.propTypes = {
  isValueAlreadySelected: _propTypes.default.func,
  setSuggestedValues: _propTypes.default.func,
  checkAspectValuesDifference: _propTypes.default.func
};
UmsInput.defaultProps = {
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