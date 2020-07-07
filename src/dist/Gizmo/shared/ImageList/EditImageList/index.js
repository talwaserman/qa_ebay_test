"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = EditImageList;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ImageCard = _interopRequireDefault(require("./ImageCard"));

var _SuggestedImageCard = _interopRequireDefault(require("./SuggestedImageCard"));

var _ProductInfoCard = _interopRequireDefault(require("./ProductInfoCard"));

require("./style.less");

/* eslint-disable */
function EditImageList(_ref) {
  var imagesData = _ref.imagesData,
      suggestedImagesData = _ref.suggestedImagesData,
      productData = _ref.productData,
      handleModalChange = _ref.handleModalChange;

  var _useState = (0, _react.useState)(imagesData),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      imagesArray = _useState2[0],
      updateImagesArray = _useState2[1];

  var _useState3 = (0, _react.useState)(suggestedImagesData),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      suggestedImagesArray = _useState4[0],
      updateSuggestedImagesArray = _useState4[1];

  var showCurrentImageList = imagesArray.length > 0;
  var showSuggestions = suggestedImagesArray.length > 0;
  (0, _react.useEffect)(function () {
    updateImagesArray(imagesData);
    updateSuggestedImagesArray(suggestedImagesData);
    handleModalChange(imagesArray.concat(suggestedImagesArray));
  }, [imagesData, suggestedImagesData]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "image-card-list-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "primary-section-header"
  }, "Primary"), showCurrentImageList && /*#__PURE__*/_react.default.createElement("div", {
    className: "image-list-container"
  }, imagesArray.map(function (image, index) {
    return /*#__PURE__*/_react.default.createElement(_ImageCard.default, {
      key: "selected-img-".concat(index),
      imageData: image,
      changePosition: changePosition,
      index: index,
      arraySize: imagesArray.length,
      updateRejectReasons: function updateRejectReasons(index, selectedReasonss) {
        return updateImageRejectReasons(index, selectedReasonss);
      }
    });
  })), !showCurrentImageList && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("img", {
    alt: "edit_image_list_item",
    className: "noPrimaryImage",
    src: 'https://ir.ebaystatic.com/cr/v/c1/no_image.png'
  })), showSuggestions && /*#__PURE__*/_react.default.createElement("div", {
    className: "suggested-section-header"
  }, "Suggested Images"), /*#__PURE__*/_react.default.createElement("div", {
    className: "image-list-container"
  }, suggestedImagesArray.map(function (image, index) {
    return /*#__PURE__*/_react.default.createElement(_SuggestedImageCard.default, {
      key: "suggested-img-".concat(index),
      imageData: image,
      index: index,
      moveImageToNonDeleted: moveImageToNonDeleted,
      updateRejectReasons: function updateRejectReasons(index, selectedReasonss) {
        return updateSuggestedImageRejectReasons(index, selectedReasonss);
      }
    });
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "product-info-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "product-info-card-header"
  }, "Product Info"), /*#__PURE__*/_react.default.createElement(_ProductInfoCard.default, {
    productData: productData,
    productImages: imagesArray
  })));

  function changePosition(index, operation) {
    var tempArray = imagesArray;
    var tempSuggested = suggestedImagesArray;
    var tempImage = tempArray.splice(index, 1)[0];

    if (!(operation === 'delete')) {
      tempArray.splice(operation === '+' ? index + 1 : index - 1, 0, tempImage);
    } else {
      tempSuggested.push(tempImage);
      updateSuggestedImagesArray(tempSuggested);
    }

    updateImagesArray(tempArray);
    handleModalChange(tempArray.concat(tempSuggested));
  }

  function moveImageToNonDeleted(index) {
    var tempArray = suggestedImagesArray;
    var tempImage = tempArray.splice(index, 1)[0]; // since image is moved back to non-deleted initialize the action and delete reasons

    tempImage.imageDecisionContract.action = '';
    tempImage.imageDecisionContract.rejectReasons = [];
    imagesArray.push(tempImage);
    updateImagesArray(imagesArray);
    updateSuggestedImagesArray(tempArray);
    handleModalChange(imagesArray.concat(tempArray));
  }

  function updateImageRejectReasons(index, selectedReasons) {
    var tempArray = imagesArray;
    var tempImage = tempArray[index];
    tempImage.imageDecisionContract.rejectReasons = selectedReasons;
    tempImage.imageDecisionContract.action = 'DELETED';
    updateImagesArray(tempArray);
    handleModalChange(tempArray.concat(suggestedImagesArray));
  }

  function updateSuggestedImageRejectReasons(index, selectedReasons) {
    var tempArray = suggestedImagesArray;
    var tempImage = tempArray[index];
    tempImage.imageDecisionContract.rejectReasons = selectedReasons;
    updateSuggestedImagesArray(tempArray);
    handleModalChange(imagesArray.concat(tempArray));
  }
}

EditImageList.propTypes = {
  /** imagesData for cards */
  imagesData: _propTypes.default.array.isRequired,

  /** suggestedImagesData - images data for cards*/
  suggestedImagesData: _propTypes.default.array,

  /** productData - the data of the product */
  productData: _propTypes.default.object.isRequired
};
EditImageList.defaultProps = {
  suggestedImagesData: [],
  handleModalChange: function handleModalChange() {}
};