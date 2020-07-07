"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DemoContainer;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _GenericModal = _interopRequireDefault(require("../../GenericModal"));

function DemoContainer() {
  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isModalVisible = _useState2[0],
      setModalVisible = _useState2[1];

  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("button", {
    onClick: clickHandler
  }, "open modal"), /*#__PURE__*/_react.default.createElement(_GenericModal.default, {
    modalVisibleState: isModalVisible,
    modalTitle: 'modal title',
    modalContent: /*#__PURE__*/_react.default.createElement("div", null, "modal content element"),
    onCancel: onCancel,
    onOk: onOk,
    width: 520,
    isOkDisabledInitialValue: true
  }));

  function clickHandler() {
    setModalVisible(true);
  }

  function onCancel(data) {
    setModalVisible(false);
  }

  function onOk(data) {
    setModalVisible(false);
  }
}

DemoContainer.propTypes = {};
DemoContainer.defaultProps = {};