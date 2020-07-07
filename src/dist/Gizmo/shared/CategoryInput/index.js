"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CategoryInput;

require("antd/es/button/style/css");

var _button = _interopRequireDefault(require("antd/es/button"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./style.less");

function CategoryInput(_ref) {
  var categoryPath = _ref.categoryPath;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "category-input-wrapper"
  }, /*#__PURE__*/_react.default.createElement("label", null, "Category"), /*#__PURE__*/_react.default.createElement("div", {
    className: "category-path"
  }, categoryPath.map(function (item) {
    return /*#__PURE__*/_react.default.createElement("span", {
      key: item
    }, item, " ");
  })), /*#__PURE__*/_react.default.createElement(_button.default, {
    shape: "circle",
    icon: "edit"
  }));
}

CategoryInput.propTypes = {
  /** categoryPath - path of the category */
  categoryPath: _propTypes.default.array.isRequired
};