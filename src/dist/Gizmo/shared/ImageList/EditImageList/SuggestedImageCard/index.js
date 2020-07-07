"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SuggestedImageCard;

require("antd/es/popover/style/css");

var _popover = _interopRequireDefault(require("antd/es/popover"));

require("antd/es/icon/style/css");

var _icon = _interopRequireDefault(require("antd/es/icon"));

require("antd/es/avatar/style/css");

var _avatar = _interopRequireDefault(require("antd/es/avatar"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _get = _interopRequireDefault(require("lodash/get"));

var _cloneDeep = _interopRequireDefault(require("lodash/cloneDeep"));

require("./style.less");

var _DeleteImagePopover = _interopRequireDefault(require("../DeleteImagePopover"));

function SuggestedImageCard(_ref) {
  var imageData = _ref.imageData,
      index = _ref.index,
      moveImageToNonDeleted = _ref.moveImageToNonDeleted,
      updateRejectReasons = _ref.updateRejectReasons;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isDeletePopoverVisible = _useState2[0],
      setDeletePopoverVisible = _useState2[1];

  var imageSize = (0, _get.default)(imageData, 'imageSizeContract', null) ? "".concat(imageData.imageSizeContract.heightSize, "x").concat(imageData.imageSizeContract.widthSize) : '';
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "image-card-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_avatar.default, {
    className: "image-avatar",
    shape: "square",
    size: 141,
    src: imageData.imageUrl,
    alt: imageData.copyright
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "image-footer-section"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "image-size-details"
  }, imageSize), /*#__PURE__*/_react.default.createElement(_popover.default, {
    trigger: "click",
    content: /*#__PURE__*/_react.default.createElement("img", {
      src: imageData.imageUrl,
      alt: 'suggested_image_card'
    })
  }, /*#__PURE__*/_react.default.createElement(_icon.default, {
    className: "image-search-icon",
    type: "search"
  })), /*#__PURE__*/_react.default.createElement(_popover.default, {
    trigger: "click",
    placement: "top",
    visible: isDeletePopoverVisible,
    onVisibleChange: deletePopoverVisibleChange,
    content: /*#__PURE__*/_react.default.createElement(_DeleteImagePopover.default, {
      title: "Update Image Reject Reasons",
      okText: "Update",
      selectedReasons: (0, _cloneDeep.default)(imageData.imageDecisionContract.rejectReasons),
      handleSave: saveBtn,
      handleCancel: cancelBtn
    })
  }, /*#__PURE__*/_react.default.createElement(_icon.default, {
    className: "image-edit-icon",
    type: "edit",
    onClick: editBtn
  })), /*#__PURE__*/_react.default.createElement(_icon.default, {
    className: "image-plus-icon",
    type: "plus",
    onClick: deleteBtn
  })));

  function deletePopoverVisibleChange(visible) {
    setDeletePopoverVisible(visible);
  }

  function cancelBtn() {
    setDeletePopoverVisible(false);
  }

  function saveBtn(selectedReasons) {
    updateRejectReasons(index, selectedReasons);
    setDeletePopoverVisible(false);
  }

  function editBtn() {
    setDeletePopoverVisible(true);
  }

  function deleteBtn() {
    moveImageToNonDeleted(index);
  }
}

SuggestedImageCard.propTypes = {
  /** imageData - single image data  */
  imageData: _propTypes.default.object.isRequired,

  /** index - current position of a single image */
  index: _propTypes.default.number,

  /** moveImageToNonDeleted - the handler which moves the object to the main list  */
  moveImageToNonDeleted: _propTypes.default.func,

  /** updateRejectReasons - update the reject reasons of the image */
  updateRejectReasons: _propTypes.default.func.isRequired
};
SuggestedImageCard.defaultProps = {
  index: 0
};