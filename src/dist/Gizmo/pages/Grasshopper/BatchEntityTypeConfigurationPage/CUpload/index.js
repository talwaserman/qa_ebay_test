"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CUpload;

require("antd/es/popover/style/css");

var _popover = _interopRequireDefault(require("antd/es/popover"));

require("antd/es/upload/style/css");

var _upload = _interopRequireDefault(require("antd/es/upload"));

require("antd/es/button/style/css");

var _button = _interopRequireDefault(require("antd/es/button"));

require("antd/es/icon/style/css");

var _icon = _interopRequireDefault(require("antd/es/icon"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _UploadImagePopover = _interopRequireDefault(require("./UploadImagePopover"));

require("./style.less");

function CUpload(_ref) {
  var message = _ref.message,
      fileTypes = _ref.fileTypes,
      multiple = _ref.multiple,
      popoverMessage = _ref.popoverMessage,
      fileFormatImage = _ref.fileFormatImage,
      disabled = _ref.disabled,
      handleModalChange = _ref.handleModalChange;

  var _useState = (0, _react.useState)([]),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      fileList = _useState2[0],
      setFileList = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      isFileFormatPopoverVisible = _useState4[0],
      setFileFormatPopoverVisible = _useState4[1];

  (0, _react.useEffect)(function () {
    setFileList([]);
  }, [message, fileTypes, fileFormatImage]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "upload-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "instructions-header"
  }, /*#__PURE__*/_react.default.createElement("label", null, message)), /*#__PURE__*/_react.default.createElement("div", {
    className: "upload-and-info-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "upload-container"
  }, /*#__PURE__*/_react.default.createElement(_upload.default, {
    fileList: fileList,
    accept: fileTypes,
    multiple: false,
    disabled: disabled,
    onChange: onUploadChange,
    beforeUpload: beforeUpload
  }, /*#__PURE__*/_react.default.createElement(_button.default, null, /*#__PURE__*/_react.default.createElement(_icon.default, {
    type: "upload"
  }), "Upload File"))), /*#__PURE__*/_react.default.createElement(_popover.default, {
    placement: 'bottom',
    content: /*#__PURE__*/_react.default.createElement(_UploadImagePopover.default, {
      fileFormatImage: fileFormatImage,
      popoverMessage: popoverMessage
    }),
    trigger: "click",
    visible: isFileFormatPopoverVisible,
    onVisibleChange: updateFileFormatPopoverVisible
  }, /*#__PURE__*/_react.default.createElement(_button.default, {
    className: "file-info-btn",
    icon: "info-circle",
    onClick: onFileInfoClick
  }))));

  function onUploadChange(data) {
    setFileList(data.fileList); // the origFileObj is what BackendApi supports

    var modalOkDisabled = data.fileList.length === 0;

    if (!multiple && data.fileList.length > 1) {
      data.fileList.splice(0, 1);
    }

    handleModalChange(data.fileList.map(function (file) {
      return file.originFileObj;
    }), modalOkDisabled);
  }

  function onFileInfoClick() {
    setFileFormatPopoverVisible(true);
  }

  function updateFileFormatPopoverVisible(visible) {
    setFileFormatPopoverVisible(visible);
  }

  function beforeUpload() {
    // must be implemented in order to prevent upload to make async call
    return false;
  }
}

CUpload.propTypes = {
  /** message - instruction header. could be both string or custume jsx */
  message: _propTypes.default.any.isRequired,

  /** fileTypes - supported types */
  fileTypes: _propTypes.default.string.isRequired,

  /** multiple - 1 file or more */
  multiple: _propTypes.default.bool,

  /** popoverMessage - the file format popover message */
  popoverMessage: _propTypes.default.string.isRequired,

  /** disabled - condifiton for disabling */
  disabled: _propTypes.default.bool,

  /** fileFormatImage - path to image location */
  fileFormatImage: _propTypes.default.string.isRequired
};
CUpload.defaultProps = {
  multiple: false,
  disabled: false,
  fileFormatImage: ''
};