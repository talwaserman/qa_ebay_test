"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/popover/style/css");

var _popover = _interopRequireDefault(require("antd/es/popover"));

require("antd/es/button/style/css");

var _button = _interopRequireDefault(require("antd/es/button"));

require("antd/es/icon/style/css");

var _icon = _interopRequireDefault(require("antd/es/icon"));

require("antd/es/tooltip/style/css");

var _tooltip = _interopRequireDefault(require("antd/es/tooltip"));

require("antd/es/notification/style/css");

var _notification2 = _interopRequireDefault(require("antd/es/notification"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _utils = require("../../utils");

var _NoUmsInput = _interopRequireDefault(require("./NoUmsInput"));

var _UmsInput = _interopRequireDefault(require("./UmsInput"));

var _ReasonSelect = _interopRequireDefault(require("./ReasonSelect"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./style.less");

/* eslint-disable */
var Aspect = /*#__PURE__*/_react.default.memo(function AspectWrapper(_ref) {
  var aspect = _ref.aspect,
      showSuggestions = _ref.showSuggestions,
      showOriginalValues = _ref.showOriginalValues,
      aspectIdentifier = _ref.aspectIdentifier,
      onAspectChange = _ref.onAspectChange,
      differentValues = _ref.differentValues,
      handleCopy = _ref.handleCopy,
      showBlankAspect = _ref.showBlankAspect,
      blankAspectHight = _ref.blankAspectHight;

  var _useState = (0, _react.useState)(isValuesChanged()),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      changedValue = _useState2[0],
      setChangedValue = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      showSingleWarning = _useState4[0],
      updateSingleWarning = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      isShowingDeletePopover = _useState6[0],
      updateDeletePopover = _useState6[1];

  (0, _react.useEffect)(function () {
    verifyMultiValueMode((0, _toConsumableArray2.default)(aspect.propertyDecisionContract.suggestedValues));
    updateDeletePopover(false);
  }, [aspect]);
  var AspectTitle = aspect.aspectName;
  var currentValues = aspect.currentValues;
  var crawlingData = aspect.crawlingData.values; //AspectMetadata information which extracted and calculated from aspectInformation // 

  var aspectMetadata = (0, _utils.getAspectMetadata)(aspect.aspectInformation);
  var isDeleted = aspect.propertyDecisionContract.status === "DELETED";
  var deleteReason = aspect.propertyDecisionContract.deleteReason;
  var styleClasses = "aspect-wrapper ".concat(differentValues ? "different-value" : "", " ").concat(changedValue ? "changed-value" : "", " ").concat(isDeleted ? "deleted-value" : "");

  var openNotificationWithIcon = function openNotificationWithIcon(type, title, message) {
    _notification2.default[type]({
      message: title,
      description: message
    });
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "aspect-outer-wrapper"
  }, isDeleted && /*#__PURE__*/_react.default.createElement("div", {
    className: "deleted-aspect"
  }, "Deleted", /*#__PURE__*/_react.default.createElement("span", null, " - ", deleteReason)), showBlankAspect && /*#__PURE__*/_react.default.createElement("div", {
    className: "blank-aspect",
    style: {
      height: blankAspectHight
    }
  }), !showBlankAspect && /*#__PURE__*/_react.default.createElement("div", {
    className: styleClasses
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "aspect-title-wrapper"
  }, /*#__PURE__*/_react.default.createElement("label", null, /*#__PURE__*/_react.default.createElement("strong", null, /*#__PURE__*/_react.default.createElement(_tooltip.default, {
    placement: "top",
    title: AspectTitle
  }, (0, _utils.shortedText)(AspectTitle, 18)), !aspectMetadata.umsAlignedAspect && /*#__PURE__*/_react.default.createElement(_tooltip.default, {
    placement: "top",
    title: "Aspect not aligned with UMS"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "aspect-not-aligned"
  }, /*#__PURE__*/_react.default.createElement(_icon.default, {
    type: "info-circle"
  }))), aspectMetadata.isRequired && /*#__PURE__*/_react.default.createElement("span", {
    className: "required-icon"
  }, "*"), showSingleWarning && /*#__PURE__*/_react.default.createElement(_tooltip.default, {
    placement: "top",
    title: "Single value mode is used with more then one value"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "single-value-warning"
  }, /*#__PURE__*/_react.default.createElement(_icon.default, {
    type: "warning"
  }))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "importance-level"
  }, aspectMetadata.levelOfImportance, /*#__PURE__*/_react.default.createElement("span", null, aspectMetadata.isMultiValue ? "[M]" : ""))), /*#__PURE__*/_react.default.createElement("div", {
    className: "input-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "input-inner-wrapper"
  }, aspectMetadata.isWithUms && /*#__PURE__*/_react.default.createElement(_UmsInput.default, {
    suggestedValues: aspect.propertyDecisionContract.suggestedValues,
    umsValues: aspectMetadata.umsValues,
    aspect: aspect,
    onAspectChange: onAspectChange,
    aspectIdentifier: aspectIdentifier,
    checkAspectValuesDifference: checkAspectValuesDifference,
    handleCopy: handleInputCopy
  }), !aspectMetadata.isWithUms && /*#__PURE__*/_react.default.createElement(_NoUmsInput.default, {
    suggestedValues: aspect.propertyDecisionContract.suggestedValues,
    aspect: aspect,
    isValueAlreadySelected: isValueAlreadySelected,
    checkAspectValuesDifference: checkAspectValuesDifference,
    onAspectChange: onAspectChange,
    aspectIdentifier: aspectIdentifier,
    handleCopy: handleInputCopy
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "actions-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "delete-btn-wrapper"
  }, !isDeleted && /*#__PURE__*/_react.default.createElement(_popover.default, {
    placement: "top",
    content: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_ReasonSelect.default, {
      deleteAspect: deleteAspect
    })),
    trigger: "click",
    visible: isShowingDeletePopover,
    onVisibleChange: onVisibleChange
  }, /*#__PURE__*/_react.default.createElement(_button.default, {
    shape: "circle",
    icon: "delete",
    onClick: handleDeleteButton
  })), isDeleted && /*#__PURE__*/_react.default.createElement(_button.default, {
    shape: "circle",
    icon: "rollback",
    onClick: restoreAspect
  })))), showSuggestions && /*#__PURE__*/_react.default.createElement("div", {
    className: "crawling"
  }, "Suggestions: ", " ", crawlingData.map(function (item) {
    return /*#__PURE__*/_react.default.createElement("span", {
      className: "crawling-suggestions",
      key: item.value,
      onClick: clickSuggestionHandler
    }, item.value);
  })), showOriginalValues && /*#__PURE__*/_react.default.createElement("div", {
    className: "original-values"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "title"
  }, "Original values:"), currentValues.map(function (item) {
    return /*#__PURE__*/_react.default.createElement("span", {
      className: "original-value",
      key: item.value,
      onClick: clickSuggestionHandler
    }, item.value);
  })))));

  function handleDeleteButton() {
    var updatedState = aspect.propertyDecisionContract.status === "DELETED" ? false : !isShowingDeletePopover;
    updateDeletePopover(updatedState);
  }

  function handleInputCopy(aspectValue) {
    event.preventDefault();
    handleCopy(aspectValue, aspect.aspectName, aspectIdentifier);
  }

  function onVisibleChange(visible) {
    updateDeletePopover(visible);
  }

  function checkAspectValuesDifference(updatedValues) {
    var check = false;

    if (currentValues.length !== updatedValues.length) {
      check = true;
    } else {
      var valueArray = currentValues.map(function (item) {
        return item.value.toLowerCase();
      });
      var suggestedArray = updatedValues.map(function (item) {
        return item.value.toLowerCase();
      });
      valueArray.forEach(function (value) {
        if (!suggestedArray.includes(value.toLowerCase())) {
          check = true;
        }
      });
    }

    setChangedValue(check);
  }

  function deleteAspect(deleteReason) {
    var updatedAspect = Object.assign({}, aspect);
    updatedAspect.propertyDecisionContract.changed = true;
    updatedAspect.propertyDecisionContract.status = "DELETED";
    updatedAspect.propertyDecisionContract.deleteReason = deleteReason;
    onAspectChange(updatedAspect, aspectIdentifier);
  }

  function restoreAspect() {
    var updatedState = aspect.propertyDecisionContract.status === "DELETED" ? false : !isShowingDeletePopover;
    updateDeletePopover(updatedState);
    var updatedAspect = Object.assign({}, aspect);
    updatedAspect.propertyDecisionContract.changed = false;
    updatedAspect.propertyDecisionContract.status = "NONE";
    updatedAspect.propertyDecisionContract.deleteReason = null;
    onAspectChange(updatedAspect, aspectIdentifier);
  }

  function isValuesChanged() {
    var suggestedValues = aspect.propertyDecisionContract.suggestedValues.map(function (item) {
      return item.value;
    });
    var originalValues = aspect.currentValues.map(function (item) {
      return item.value;
    });
    return !(0, _utils.compareArray)(suggestedValues, originalValues);
  } //make sure that the values in the array are distinct


  function isValueAlreadySelected(values, value) {
    var flage = false;
    flage = values.map(function (item) {
      return item.value;
    }).includes(value);
    flage && openNotificationWithIcon("info", "Value unique restriction", "".concat(value, " already selected"));
    return flage;
  }

  function verifyMultiValueMode(updatedValues) {
    if (updatedValues.length > 1 && !aspectMetadata.isMultiValue) {
      updateSingleWarning(true);
      openNotificationWithIcon("info", "Single mode violation", "".concat(aspect.aspectName, " should contain a single value"));
    } else {
      updateSingleWarning(false);
    }
  }

  function clickSuggestionHandler(e) {
    var value = e.target.textContent;
    var tempValues = (0, _toConsumableArray2.default)(aspect.propertyDecisionContract.suggestedValues);

    if (isValueAlreadySelected((0, _toConsumableArray2.default)(tempValues), value) || value === '') {
      return;
    }

    tempValues.push({
      value: value,
      information: {
        umsAlignedValue: aspectMetadata.umsValues.map(function (item) {
          return item.toLowerCase();
        }).includes(value.toLowerCase()) ? true : false,
        crawlingValue: false
      }
    });
    checkAspectValuesDifference(tempValues); //verifyMultiValueMode(tempValues);

    var updatedAspect = (0, _utils.copyObject)(aspect);
    updatedAspect.propertyDecisionContract.suggestedValues = tempValues;
    onAspectChange(updatedAspect, aspectIdentifier);
  }
});

Aspect.propTypes = {
  /** Aspect data required to show that input field */
  aspect: _propTypes.default.object.isRequired,

  /** should show suggestions */
  showSuggestions: _propTypes.default.bool,

  /** This is the identifier key of the aspect example: additional aspects, both aspects, identifiers etc. */
  aspectIdentifier: _propTypes.default.string.isRequired,

  /** onAspectChange - callback function that is called to indicate that the aspect has changed */
  onAspectChange: _propTypes.default.func.isRequired,

  /** differentValues - boolean that indicate if this aspect contain different value from another mirror aspect */
  differentValues: _propTypes.default.bool,

  /** handleCopy - callback function to be called and copy a value from survivor to victim and vise versa */
  handleCopy: _propTypes.default.func
};
Aspect.defaultProps = {
  showSuggestions: true,
  showOriginalValues: true,
  differentValues: false
};
var _default = Aspect;
exports.default = _default;