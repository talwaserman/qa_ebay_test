"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = EntityTypeCategoriesList;

require("antd/es/list/style/css");

var _list = _interopRequireDefault(require("antd/es/list"));

require("antd/es/input/style/css");

var _input = _interopRequireDefault(require("antd/es/input"));

require("antd/es/tooltip/style/css");

var _tooltip = _interopRequireDefault(require("antd/es/tooltip"));

require("antd/es/icon/style/css");

var _icon = _interopRequireDefault(require("antd/es/icon"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _get = _interopRequireDefault(require("lodash/get"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./style.less");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function EntityTypeCategoriesList(_ref) {
  var getEtCategories = _ref.getEtCategories,
      rowId = _ref.rowId,
      siteId = _ref.siteId;

  var _useState = (0, _react.useState)([]),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      filteredData = _useState4[0],
      setFilteredData = _useState4[1];

  (0, _react.useEffect)(function () {
    function fetchData() {
      return _fetchData.apply(this, arguments);
    }

    function _fetchData() {
      _fetchData = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var res, updatedList;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return getEtCategories(rowId);

              case 2:
                res = _context.sent;
                updatedList = (0, _get.default)(res, "siteToCategories[".concat(siteId, "]"), []).map(function (e) {
                  return _objectSpread(_objectSpread({}, e), {}, {
                    breadcrumbs: e.breadcrumbs.replace(/>/g, ' > ')
                  });
                });
                setData(updatedList);
                setFilteredData(updatedList);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _fetchData.apply(this, arguments);
    }

    fetchData();
  }, [siteId, rowId]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "et-definition-categorieslist-wrapper"
  }, /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("div", {
    className: "categories-type-header"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "categories-type-label"
  }, "".concat(siteId, " Category List")), /*#__PURE__*/_react.default.createElement("div", {
    className: "categories-count"
  }, "(", filteredData.length, ")"), /*#__PURE__*/_react.default.createElement("div", {
    className: "categories-type-hint"
  }, /*#__PURE__*/_react.default.createElement(_tooltip.default, {
    placement: "top",
    title: /*#__PURE__*/_react.default.createElement("span", null, "List of ".concat(siteId, " Categories related to ET"))
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "categories-type-icon"
  }, /*#__PURE__*/_react.default.createElement(_icon.default, {
    type: "question-circle"
  }))))), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("div", {
    className: "categories-type-input"
  }, /*#__PURE__*/_react.default.createElement(_input.default, {
    placeholder: 'Search Categories...',
    onChange: function onChange(e) {
      return updateValue(e.target.value);
    }
  })), filteredData && /*#__PURE__*/_react.default.createElement("div", {
    className: "categories-found-list"
  }, /*#__PURE__*/_react.default.createElement(_list.default, {
    itemLayout: "horizontal",
    size: "small",
    dataSource: filteredData,
    renderItem: function renderItem(item) {
      return /*#__PURE__*/_react.default.createElement(_list.default.Item, null, item.breadcrumbs, item.combined && /*#__PURE__*/_react.default.createElement(_tooltip.default, {
        placement: "right",
        title: "Combined category"
      }, /*#__PURE__*/_react.default.createElement("span", {
        className: "combined-icon"
      }, /*#__PURE__*/_react.default.createElement(_icon.default, {
        type: "apartment"
      }))));
    }
  })));

  function updateValue(value) {
    var matchValue = data.filter(function (element) {
      return element.breadcrumbs.toLowerCase().includes(value.toLowerCase());
    });
    setFilteredData(matchValue);
  }
}

EntityTypeCategoriesList.propTypes = {
  /** getEtCategories - function that is used to get all the list of categories */
  getEtCategories: _propTypes.default.func.isRequired,

  /** rowId - which is connected to this ET */
  rowId: _propTypes.default.string.isRequired,

  /** siteId - site id used to show relevant categories */
  siteId: _propTypes.default.string.isRequired
};