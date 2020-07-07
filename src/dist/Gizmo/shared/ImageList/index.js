"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ImageList;

require("antd/es/button/style/css");

var _button = _interopRequireDefault(require("antd/es/button"));

require("antd/es/popover/style/css");

var _popover = _interopRequireDefault(require("antd/es/popover"));

require("antd/es/avatar/style/css");

var _avatar = _interopRequireDefault(require("antd/es/avatar"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _cloneDeep = _interopRequireDefault(require("lodash/cloneDeep"));

var _GenericModal = _interopRequireDefault(require("../GenericModal"));

var _EditImageList = _interopRequireDefault(require("./EditImageList"));

require("./style.less");

function ImageList(_ref) {
  var imageList = _ref.imageList,
      isChanged = _ref.isChanged,
      isDifferentValue = _ref.isDifferentValue,
      suggestedImagesData = _ref.suggestedImagesData,
      productData = _ref.productData,
      handleSelectedImages = _ref.handleSelectedImages,
      isEditable = _ref.isEditable,
      updateShowDrawer = _ref.updateShowDrawer;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isModalOpen = _useState2[0],
      setModalVisibility = _useState2[1];

  var styleClasses = "image-list-wrapper ".concat(isChanged && 'changed-value', " ").concat(isDifferentValue && 'different-value');
  return /*#__PURE__*/_react.default.createElement("div", {
    className: styleClasses
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "img-list-container"
  }, imageList.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "img-item",
      key: "img-item-".concat(index)
    }, /*#__PURE__*/_react.default.createElement(_popover.default, {
      placement: "bottomRight",
      content: /*#__PURE__*/_react.default.createElement("img", {
        alt: 'image_list',
        src: item.imageUrl,
        style: {
          maxWidth: '500px',
          maxHeight: '500px'
        }
      })
    }, /*#__PURE__*/_react.default.createElement(_avatar.default, {
      shape: "square",
      size: 105,
      src: item.imageUrl
    })));
  }), !imageList || imageList.length === 0 && /*#__PURE__*/_react.default.createElement("div", {
    className: "noImageContainer"
  }, /*#__PURE__*/_react.default.createElement("img", {
    alt: 'no_image',
    className: "noPrimaryImage",
    src: 'https://ir.ebaystatic.com/cr/v/c1/no_image.png'
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "button-wrapper"
  }, isEditable && /*#__PURE__*/_react.default.createElement(_button.default, {
    shape: "circle",
    icon: "edit",
    onClick: onClickBtn
  })), /*#__PURE__*/_react.default.createElement(_GenericModal.default, {
    modalVisibleState: isModalOpen,
    modalTitle: 'Edit Images',
    modalContent: /*#__PURE__*/_react.default.createElement(_EditImageList.default, {
      imagesData: (0, _cloneDeep.default)(imageList),
      imageDataSize: imageList.length,
      suggestedImagesData: (0, _cloneDeep.default)(suggestedImagesData),
      productData: productData,
      handleModalChange: function handleModalChange() {}
    }),
    width: 1056,
    onCancel: onCancel,
    onOk: handleOnOk,
    okText: 'Save'
  }));

  function onClickBtn() {
    updateShowDrawer(false);
    setModalVisibility(true);
  }

  function onCancel() {
    setModalVisibility(false);
  }

  function handleOnOk(data) {
    setModalVisibility(false);
    handleSelectedImages(data);
  }
}

ImageList.propTypes = {
  /** updateShowDrawer - funciton used to update the drawer visibility, needed to prevent scrolling stuck */
  updateShowDrawer: _propTypes.default.func.isRequired,

  /** imageList - list of images*/
  imageList: _propTypes.default.array,

  /** isChanged - indicate if the field value was changed */
  isChanged: _propTypes.default.bool.isRequired,

  /**  isDifferentValue - indicate if the images in the list are the same as the images on the compared image list*/
  isDifferentValue: _propTypes.default.bool,

  /** suggestedImagesData - list of images to be used in the suggested section */
  suggestedImagesData: _propTypes.default.array,

  /** productData - short set attributes and values that belong to the product */
  productData: _propTypes.default.object,

  /**  isEditable - boolean flag that indicate if the user can edit the product images */
  isEditable: _propTypes.default.bool
};
ImageList.defaultProps = {
  imageList: [],
  suggestedImagesData: [],
  productData: {},
  isDifferentValue: false,
  handleSelectedImages: function handleSelectedImages() {},
  isEditable: true
};