"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ProductInfoCard;

require("antd/es/carousel/style/css");

var _carousel = _interopRequireDefault(require("antd/es/carousel"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./style.less");

function ProductInfoCard(_ref) {
  var productData = _ref.productData,
      productImages = _ref.productImages;
  var noImage = [{
    imageUrl: 'https://ir.ebaystatic.com/cr/v/c1/no_image.png'
  }];
  var imagesArray = productImages.length !== 0 ? productImages : noImage;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "product-info-card-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_carousel.default, {
    autoplay: true
  }, imagesArray.map(function (image, index) {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: "product-info-img-".concat(index)
    }, /*#__PURE__*/_react.default.createElement("img", {
      className: "product-info-card-img",
      src: image.imageUrl,
      alt: 'product_info'
    }));
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "product-info-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "product-info"
  }, /*#__PURE__*/_react.default.createElement("label", null, "Category:"), /*#__PURE__*/_react.default.createElement("div", {
    className: "attributeValue"
  }, productData.category), /*#__PURE__*/_react.default.createElement("label", null, "Title:"), /*#__PURE__*/_react.default.createElement("div", {
    className: "attributeValue"
  }, productData.title), /*#__PURE__*/_react.default.createElement("label", null, "Brand:"), /*#__PURE__*/_react.default.createElement("div", {
    className: "attributeValue"
  }, productData.brand), /*#__PURE__*/_react.default.createElement("label", null, "Color:"), /*#__PURE__*/_react.default.createElement("div", {
    className: "attributeValue"
  }, productData.color))));
}

ProductInfoCard.propTypes = {
  /** productData - card used to display product information. used while editing product images */
  productData: _propTypes.default.object.isRequired,

  /** images - carousel card used to display the images of the product  */
  productImages: _propTypes.default.array.isRequired
};
ProductInfoCard.defaultProps = {};