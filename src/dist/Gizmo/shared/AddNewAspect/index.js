"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AddNewAspect;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

require("antd/es/alert/style/css");

var _alert = _interopRequireDefault(require("antd/es/alert"));

require("antd/es/tooltip/style/css");

var _tooltip = _interopRequireDefault(require("antd/es/tooltip"));

require("antd/es/input/style/css");

var _input = _interopRequireDefault(require("antd/es/input"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./style.less");

function AddNewAspect(_ref) {
  var handleModalChange = _ref.handleModalChange,
      isNewAspectModalOpen = _ref.isNewAspectModalOpen,
      checkAspectIsUnique = _ref.checkAspectIsUnique;

  var _useState = (0, _react.useState)(''),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      aspectName = _useState2[0],
      updateAspectName = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      isAspectUnique = _useState4[0],
      updateIsAspectUnique = _useState4[1];

  var _useState5 = (0, _react.useState)(''),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      inputVal = _useState6[0],
      setInputVal = _useState6[1];

  var _useState7 = (0, _react.useState)([]),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      values = _useState8[0],
      setValues = _useState8[1];

  (0, _react.useEffect)(function () {
    updateAspectName('');
    setValues([]);
    setInputVal('');
  }, [isNewAspectModalOpen]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "add-new-aspect-wrapper"
  }, /*#__PURE__*/_react.default.createElement("section", null, /*#__PURE__*/_react.default.createElement("label", null, "Aspect name:"), /*#__PURE__*/_react.default.createElement(_input.default, {
    type: "text",
    autoFocus: true,
    placeholder: "Enter Aspect Name",
    value: aspectName,
    onChange: handleAspectNameChange
  }), isAspectUnique && /*#__PURE__*/_react.default.createElement("div", {
    className: "unique-warning"
  }, "This aspect name is already used, please enter a different name")), /*#__PURE__*/_react.default.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/_react.default.createElement("label", null, "Aspect values:"), /*#__PURE__*/_react.default.createElement("div", {
    className: "values-wrapper"
  }, values.map(function (item) {
    return /*#__PURE__*/_react.default.createElement("span", {
      className: "selected-item",
      key: item
    }, /*#__PURE__*/_react.default.createElement(_tooltip.default, {
      placement: "top",
      title: item
    }, item), /*#__PURE__*/_react.default.createElement("svg", {
      onClick: function onClick(e) {
        return handleDelete(item);
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
    onBlur: handleOnBlur
  }))), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("section", null, /*#__PURE__*/_react.default.createElement(_alert.default, {
    message: "New aspect will be added at the bottom of the aspect list",
    type: "info",
    showIcon: true
  })));
  /* istanbul ignore next */

  function handleAspectNameChange(e) {
    var newValue = e.target.value;
    updateAspectName(newValue);
    var isUnique = checkAspectIsUnique(newValue);
    updateIsAspectUnique(isUnique);
    handleModalChange({
      aspectName: newValue,
      aspectValues: values
    }, isUnique || newValue.length === 0);
  }
  /* istanbul ignore next */


  function handleInputChange(e) {
    setInputVal(e.target.value);
  }
  /* istanbul ignore next */


  function handleOnBlur(e) {
    setSelectedValues(e);
  }
  /* istanbul ignore next */


  function handleSubmit(e) {
    setSelectedValues(e);
  }
  /* istanbul ignore next */


  function setSelectedValues(e) {
    e.preventDefault();

    if (values.includes(inputVal) || inputVal === '') {
      return;
    }

    var newValues = [].concat((0, _toConsumableArray2.default)(values), [inputVal]);
    setValues(newValues);
    setInputVal('');
    handleModalChange({
      aspectName: aspectName,
      aspectValues: newValues
    }, false //don't disable the add aspect button
    );
  }
  /* istanbul ignore next */


  function handleDelete(value) {
    var newValues = values.filter(function (item) {
      return item !== value;
    });
    setValues(newValues);
    handleModalChange({
      aspectName: aspectName,
      aspectValues: newValues
    }, false //don't disable the add aspect button
    );
  }
}

AddNewAspect.propTypes = {
  /** handleModalChange - function that is called to updated the modal state, so when the user click the ok button the updated data is transmited*/
  handleModalChange: _propTypes.default.func.isRequired,

  /** isNewAspectModalOpen - indicate if the modal is open and also used to clean the component state */
  isNewAspectModalOpen: _propTypes.default.bool.isRequired,

  /** checkAspectIsUnique - check is the anspect in the input field does not appear in the list of aspects */
  checkAspectIsUnique: _propTypes.default.func.isRequired
};
AddNewAspect.defaultProps = {
  handleModalChange: function handleModalChange() {}
};