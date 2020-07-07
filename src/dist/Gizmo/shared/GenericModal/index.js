"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = GenericModal;

require("antd/es/modal/style/css");

var _modal = _interopRequireDefault(require("antd/es/modal"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

/* istanbul ignore file */

/**
 * GenericModal is a generic implementation of modal that get a set of parameters including another component
 * and render that component inside the modal. it also knows how to pass data from the inner component to the outer modal
 * and in that way when the modal is closed it can transmit informaiton (data) to the parent that activated the modal
 *
 * Requirements & Information:
 * 1. all of the required props should be passed by the consuming component
 * 2. modalContent is a prop that us passed to the GenericModal and it should be another react component
 * 3. the react component that is passed in modalContent should recive as props handleModalChange
 * function and pass updated data once it's get updated in the modal
 * 4. the onOk prop function will be passed the updated modal data
 */
function GenericModal(_ref) {
  var modalVisibleState = _ref.modalVisibleState,
      modalTitle = _ref.modalTitle,
      modalContent = _ref.modalContent,
      onCancel = _ref.onCancel,
      onOk = _ref.onOk,
      okText = _ref.okText,
      width = _ref.width,
      isOkDisabledInitialValue = _ref.isOkDisabledInitialValue,
      isOkButtonVisible = _ref.isOkButtonVisible,
      isCancelButtonVisible = _ref.isCancelButtonVisible;

  var _useState = (0, _react.useState)(modalVisibleState),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      modaldata = _useState4[0],
      updateModalData = _useState4[1];

  var _useState5 = (0, _react.useState)(isOkDisabledInitialValue),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      isOkDisabled = _useState6[0],
      updateOkBtnDisabled = _useState6[1];

  (0, _react.useEffect)(function () {
    setVisible(modalVisibleState);
    updateOkBtnDisabled(isOkDisabledInitialValue);
  }, [modalVisibleState, isOkDisabledInitialValue]);
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_modal.default, {
    title: modalTitle,
    visible: visible,
    onOk: handleOk,
    onCancel: handleCancel,
    width: width,
    okText: okText,
    okButtonProps: {
      disabled: isOkDisabled,
      style: {
        display: isOkButtonVisible ? 'visible' : 'none'
      }
    },
    cancelButtonProps: {
      style: {
        display: isCancelButtonVisible ? 'visible' : 'none'
      }
    }
  }, /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.cloneElement(modalContent, {
    handleModalChange: handleModalChange
  }))));

  function handleModalChange(updatedData) {
    var isOkBtnDisabled = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    updateModalData(updatedData);
    updateOkBtnDisabled(isOkBtnDisabled);
  }

  function handleOk() {
    setVisible(false);
    onOk(modaldata);
  }

  function handleCancel(data) {
    setVisible(false);
    onCancel(data);
  }
}

GenericModal.propTypes = {
  /** modalVisibleState - indicate if the modal is visible or not */
  modalVisibleState: _propTypes.default.bool,

  /** modalTitle - title of the modal */
  modalTitle: _propTypes.default.string,

  /** modalContent - the component that will be shown inside the modal */
  modalContent: _propTypes.default.element.isRequired,

  /** onCancel - function activated when the modal gets closed with cancel */
  onCancel: _propTypes.default.func.isRequired,

  /** onOk - function activated when the modal gets closed with ok */
  onOk: _propTypes.default.func.isRequired,

  /** okText - text that will be shown on the ok button */
  okText: _propTypes.default.string,

  /** isOkDisabledInitialValue - should the the ok button be disabled when the modal first renders */
  isOkDisabledInitialValue: _propTypes.default.bool,

  /** width - the width of the modal */
  width: _propTypes.default.number,

  /** isCancelButtonVisible - boolean value to show / hide Cancel Button */
  isCancelButtonVisible: _propTypes.default.bool,

  /** isOkButtonVisible - boolean value to show / hide Ok Button */
  isOkButtonVisible: _propTypes.default.bool
};
GenericModal.defaultProps = {
  modalVisibleState: false,
  modalTitle: '',
  width: 520,
  okText: 'OK',
  isOkDisabledInitialValue: false,
  isCancelButtonVisible: true,
  isOkButtonVisible: true
};