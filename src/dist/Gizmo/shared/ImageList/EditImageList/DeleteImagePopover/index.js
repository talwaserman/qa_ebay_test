"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DeleteImagePopover;

require("antd/es/button/style/css");

var _button = _interopRequireDefault(require("antd/es/button"));

require("antd/es/divider/style/css");

var _divider = _interopRequireDefault(require("antd/es/divider"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

require("antd/es/select/style/css");

var _select = _interopRequireDefault(require("antd/es/select"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./style.less");

var Option = _select.default.Option;

function DeleteImagePopover(_ref) {
  var selectedReasons = _ref.selectedReasons,
      title = _ref.title,
      okText = _ref.okText,
      handleSave = _ref.handleSave,
      handleCancel = _ref.handleCancel;

  var _useState = (0, _react.useState)(selectedReasons),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      reasons = _useState2[0],
      setReasons = _useState2[1];

  (0, _react.useEffect)(function () {
    setReasons(selectedReasons);
  }, [selectedReasons]);
  var allReasons = ['Size', 'Background', 'Box', 'Body Parts', 'Angle View', 'Watermark', 'Graffiti', 'Placeholder', 'Broken Images', 'Quantity', 'Frame', 'Blur', 'Cropped', 'Additional Elements', 'Product Mismatch', 'Unusable -Other reason'];
  var allReasonsOprions = allReasons.map(function (reason) {
    return /*#__PURE__*/_react.default.createElement(Option, {
      key: reason
    }, reason);
  });
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "image-delete-reasons-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "image-delete-reasons-title"
  }, title), /*#__PURE__*/_react.default.createElement(_divider.default, {
    className: "image-delete-reasons-divider"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "image-delete-reasons-sub-title"
  }, "Select reasons for image delete"), /*#__PURE__*/_react.default.createElement("div", {
    className: "image-delete-reasons-select"
  }, /*#__PURE__*/_react.default.createElement(_select.default, {
    placeholder: "Select reject reasons for image",
    style: {
      width: '100%'
    },
    value: reasons,
    mode: "multiple",
    onChange: handleSelectedReason,
    onSelectChange: handleCancel
  }, allReasonsOprions)), /*#__PURE__*/_react.default.createElement("div", {
    className: "image-delete-reasons-actions"
  }, /*#__PURE__*/_react.default.createElement(_button.default, {
    disabled: !reasons || !reasons.length,
    type: "primary",
    onClick: function onClick() {
      return handleSave(reasons);
    }
  }, okText), /*#__PURE__*/_react.default.createElement(_button.default, {
    onClick: resetImagesAndHandleCancel
  }, "Cancel")));

  function resetImagesAndHandleCancel() {
    setReasons(selectedReasons);
    handleCancel();
  }

  function handleSelectedReason(data) {
    setReasons(data);
  }
}

DeleteImagePopover.propTypes = {
  /** selectedReasons - the selected delete reasons of the image */
  selectedReasons: _propTypes.default.array.isRequired,

  /** title - the header title */
  title: _propTypes.default.string.isRequired,

  /** okText - save button text */
  okText: _propTypes.default.string.isRequired,

  /** handleSave - save button handler function */
  handleSave: _propTypes.default.func.isRequired,

  /** handleCancel - save button handler function */
  handleCancel: _propTypes.default.func.isRequired
};
DeleteImagePopover.defaultProps = {};