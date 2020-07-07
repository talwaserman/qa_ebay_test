"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CardInfoSection;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./style.less");

function CardInfoSection(_ref) {
  var infoData = _ref.infoData;

  if (!infoData) {
    return /*#__PURE__*/_react.default.createElement("div", null);
  }

  return /*#__PURE__*/_react.default.createElement("section", {
    className: "card-info-section-wrapper"
  }, infoData.map(function (item) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "info-item",
      key: item.label
    }, /*#__PURE__*/_react.default.createElement("label", null, item.label), /*#__PURE__*/_react.default.createElement("span", null, item.value));
  }));
}

CardInfoSection.propTypes = {
  /** infoData - array used to define label name and values in the info section */
  infoData: _propTypes.default.array.isRequired
};
CardInfoSection.defaultProps = {};