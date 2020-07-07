"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ImageCard;

require("antd/es/popover/style/css");

var _popover = _interopRequireDefault(require("antd/es/popover"));

require("antd/es/icon/style/css");

var _icon = _interopRequireDefault(require("antd/es/icon"));

require("antd/es/button/style/css");

var _button = _interopRequireDefault(require("antd/es/button"));

require("antd/es/avatar/style/css");

var _avatar = _interopRequireDefault(require("antd/es/avatar"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _get = _interopRequireDefault(require("lodash/get"));

var _cloneDeep = _interopRequireDefault(require("lodash/cloneDeep"));

require("./style.less");

var _DeleteImagePopover = _interopRequireDefault(require("../DeleteImagePopover"));

function ImageCard(_ref) {
  var imageData = _ref.imageData,
      changePosition = _ref.changePosition,
      index = _ref.index,
      arraySize = _ref.arraySize,
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
  }), /*#__PURE__*/_react.default.createElement(_button.default, {
    shape: "circle",
    className: "image-number"
  }, index + 1), index !== 0 ? /*#__PURE__*/_react.default.createElement(_button.default, {
    onClick: function onClick(e) {
      return changePosition(index, '-');
    },
    className: "image-navigation-arrow-left",
    shape: "circle",
    icon: "left"
  }) : '', index !== arraySize - 1 ? /*#__PURE__*/_react.default.createElement(_button.default, {
    onClick: function onClick(e) {
      return changePosition(index, '+');
    },
    className: "image-navigation-arrow-right",
    shape: "circle",
    icon: "right"
  }) : '', /*#__PURE__*/_react.default.createElement("div", {
    className: "image-footer-section"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "image-size-details"
  }, imageSize), /*#__PURE__*/_react.default.createElement(_popover.default, {
    trigger: "click",
    content: /*#__PURE__*/_react.default.createElement("img", {
      src: imageData.imageUrl,
      alt: 'image_card'
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
      title: "Delete Image",
      okText: "Save",
      selectedReasons: (0, _cloneDeep.default)(imageData.imageDecisionContract.rejectReasons),
      handleSave: saveBtn,
      handleCancel: cancelBtn
    })
  }, /*#__PURE__*/_react.default.createElement(_icon.default, {
    className: "image-delete-icon",
    type: "delete"
  }))));

  function deletePopoverVisibleChange(visible) {
    setDeletePopoverVisible(visible);
  }

  function cancelBtn() {
    setDeletePopoverVisible(false);
  }

  function saveBtn(selectedReasons) {
    updateRejectReasons(index, selectedReasons);
    changePosition(index, 'delete');
    setDeletePopoverVisible(false);
  }
}

ImageCard.propTypes = {
  /** imageData - single image data  */
  imageData: _propTypes.default.object.isRequired,

  /** changePosition - the handler which changes the position of the image object within the array  */
  changePosition: _propTypes.default.func,

  /** index - current position of a single image */
  index: _propTypes.default.number,

  /** arraySize - the amount of image objects*/
  arraySize: _propTypes.default.number,

  /** updateRejectReasons - set the reject reasons of the image */
  updateRejectReasons: _propTypes.default.func.isRequired
};
ImageCard.defaultProps = {
  index: 0,
  arraySize: 1
};