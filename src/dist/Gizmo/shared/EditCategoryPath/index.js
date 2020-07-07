"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = EditCategoryPath;

require("antd/es/radio/style/css");

var _radio = _interopRequireDefault(require("antd/es/radio"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _RemoteSelect = _interopRequireDefault(require("../RemoteSelect"));

require("./style.less");

function EditCategoryPath(_ref) {
  var currentCategory = _ref.currentCategory,
      onChangePath = _ref.onChangePath,
      handleModalChange = _ref.handleModalChange,
      siteId = _ref.siteId;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      exactMatch = _useState2[0],
      updateMatch = _useState2[1];

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "edit-category-path-wrapper"
  }, /*#__PURE__*/_react.default.createElement("label", null, /*#__PURE__*/_react.default.createElement("strong", null, "Current Category: "), " ", currentCategory), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("section", null, /*#__PURE__*/_react.default.createElement("label", null, "Match"), /*#__PURE__*/_react.default.createElement(_radio.default.Group, {
    name: "match_radiogroup",
    defaultValue: exactMatch,
    onChange: handelRadioChange
  }, /*#__PURE__*/_react.default.createElement(_radio.default, {
    value: true
  }, "Exact"), /*#__PURE__*/_react.default.createElement(_radio.default, {
    value: false
  }, "Contains"))), /*#__PURE__*/_react.default.createElement("section", null, /*#__PURE__*/_react.default.createElement("label", null, "Category"), /*#__PURE__*/_react.default.createElement("div", {
    className: "remote-select-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_RemoteSelect.default, {
    placeholder: 'Select category path',
    mode: 'default',
    parseDataFunction: parseDataFunction,
    baseUrl: "/category/search-paths?exactMatch=".concat(exactMatch, "&maxResult=20&siteId=").concat(siteId, "&term="),
    onSelectChange: handleOnSelectChange
  }))));

  function handleOnSelectChange(data) {
    handleModalChange(data);
    onChangePath(data);
  }

  function handelRadioChange(radioSelection) {
    updateMatch(radioSelection.target.value);
  }

  function parseDataFunction(res) {
    var optionsArray = [];
    res.categoryPaths.forEach(function (item) {
      var tempItem = '';
      item.forEach(function (arrayItem) {
        tempItem += "".concat(arrayItem.categoryContract.name, "(").concat(arrayItem.categoryContract.id, ")>");
      });
      optionsArray.push({
        text: tempItem.slice(0, -1),
        value: JSON.stringify({
          categoryId: item.slice(-1).pop().categoryContract.id,
          categoryBreadcrumb: tempItem.slice(0, -1)
        })
      });
    });
    return optionsArray;
  }
}

EditCategoryPath.propTypes = {
  /** currentCategory - the current category of the product */
  currentCategory: _propTypes.default.string.isRequired,

  /** onChangePath - function that is not required and can be used each time the path get changed */
  onChangePath: _propTypes.default.func,

  /** handleModalChange - function that is called to updated the modal state, so when the user click the ok button the updated data is transmited*/
  handleModalChange: _propTypes.default.func.isRequired,

  /** siteId - the site number for the product you would like to change the category for */
  siteId: _propTypes.default.string.isRequired
};
EditCategoryPath.defaultProps = {
  onChangePath: function onChangePath() {},
  handleModalChange: function handleModalChange() {}
};