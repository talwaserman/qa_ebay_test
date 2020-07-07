"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = UploadImagePopover;

require("antd/es/divider/style/css");

var _divider = _interopRequireDefault(require("antd/es/divider"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./style.less");

function UploadImagePopover(_ref) {
  var fileFormatImage = _ref.fileFormatImage,
      popoverMessage = _ref.popoverMessage;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "upload-image-popover-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "upload-image-popover-title"
  }, /*#__PURE__*/_react.default.createElement("span", null, "File Format")), /*#__PURE__*/_react.default.createElement(_divider.default, {
    className: "upload-image-popover-divider"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "upload-popover-message"
  }, /*#__PURE__*/_react.default.createElement("span", null, popoverMessage)), /*#__PURE__*/_react.default.createElement("div", {
    className: "upload-popover-image"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: fileFormatImage,
    alt: ''
  })));
}

UploadImagePopover.propTypes = {
  /** fileFormatImage - the file format image */
  fileFormatImage: _propTypes.default.any.isRequired,

  /** popoverMessage - the image title */
  popoverMessage: _propTypes.default.string
};
UploadImagePopover.defaultProps = {
  fileFormatImage: '',
  popoverMessage: ''
};