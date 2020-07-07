"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NavigationPopOver;

require("antd/es/popover/style/css");

var _popover = _interopRequireDefault(require("antd/es/popover"));

require("antd/es/button/style/css");

var _button = _interopRequireDefault(require("antd/es/button"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

require("antd/es/tooltip/style/css");

var _tooltip = _interopRequireDefault(require("antd/es/tooltip"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./style.less");

function popOverContent(indexing, data, itemsInRow, navClickHandler) {
  var items = data.map(function (item) {
    return /*#__PURE__*/_react.default.createElement("span", {
      key: item.label,
      onClick: function onClick(e) {
        return navClickHandler(Number(e.target.innerText));
      },
      className: "single-item",
      style: {
        background: item.color,
        height: '26px',
        width: '26px',
        display: 'inline-block',
        margin: '2px',
        textAlign: 'center',
        borderRadius: '2px',
        border: "1px solid ".concat(item.borderColor),
        lineHeight: '26px'
      }
    }, item.label);
  });
  var menu = indexing.map(function (menuItem) {
    return /*#__PURE__*/_react.default.createElement(_tooltip.default, {
      placement: "bottom",
      title: menuItem.toolTip,
      key: 'tooltip_' + menuItem.toolTip
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "menu-item",
      style: {
        background: menuItem.color,
        height: '16px',
        width: '16px',
        display: 'inline-block',
        margin: '5px',
        textAlign: 'center',
        border: '1px solid #d9d9d9',
        fontSize: '10px',
        verticalAlign: 'top',
        textDecoration: menuItem.textEffect
      }
    }, menuItem.value));
  });
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "navigation-pop-over-content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: (itemsInRow + 1) * 26 + 'px'
    }
  }, items), /*#__PURE__*/_react.default.createElement("br", null), menu);
}

function NavigationPopOver(_ref) {
  var indexing = _ref.indexing,
      data = _ref.data,
      itemsInRow = _ref.itemsInRow,
      currentPage = _ref.currentPage,
      totalPages = _ref.totalPages,
      onPageChange = _ref.onPageChange;

  var _useState = (0, _react.useState)(currentPage),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      cPage = _useState2[0],
      setCpage = _useState2[1];

  (0, _react.useEffect)(function () {
    setCpage(currentPage);
  }, [currentPage]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "navigation-pop-over-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_button.default, {
    disabled: cPage === 1,
    onClick: function onClick(e) {
      return navClickHandler(cPage - 1);
    },
    className: "left-arrow"
  }, "<"), /*#__PURE__*/_react.default.createElement(_popover.default, {
    placement: "top",
    content: popOverContent(indexing, data, itemsInRow, navClickHandler),
    trigger: "click"
  }, /*#__PURE__*/_react.default.createElement(_button.default, {
    className: "pop-over-open-button"
  }, cPage, "/", totalPages)), /*#__PURE__*/_react.default.createElement(_button.default, {
    disabled: cPage === totalPages,
    onClick: function onClick(e) {
      return navClickHandler(cPage + 1);
    },
    className: "right-arrow"
  }, ">"));

  function navClickHandler(updatedPage) {
    setCpage(updatedPage);
    onPageChange(updatedPage);
  }
}

NavigationPopOver.propTypes = {
  /** the available pages within the popover  */
  data: _propTypes.default.array.isRequired,

  /** the index to appear below the pages within the popover */
  indexing: _propTypes.default.array.isRequired,

  /** a number of pages within a row */
  itemsInRow: _propTypes.default.number,

  /** the page that is being currently displayed */
  currentPage: _propTypes.default.number.isRequired,

  /** onPageChange - consuming component function that will update the page state */
  onPageChange: _propTypes.default.func
};
NavigationPopOver.defaultProps = {
  itemsInRow: 5,
  onPageChange: function onPageChange() {}
};