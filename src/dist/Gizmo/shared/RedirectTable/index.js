"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RedirectTable;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _get = _interopRequireDefault(require("lodash/get"));

var _shared = require("../../shared");

var _services = require("./services");

require("./style.less");

function RedirectTable() {
  var _useState = (0, _react.useState)({
    allSelectedRowIds: {},
    allSelectedRows: {}
  }),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      checkBoxData = _useState2[0],
      setCheckBoxData = _useState2[1];

  var columnConfig = [{
    title: 'Creation Date',
    dataIndex: 'creationDate',
    filterType: 'date',
    filterOperation: 'equal-date'
  }, {
    title: 'User',
    dataIndex: 'userName',
    filterKey: 'users',
    filterType: 'single-select',
    filterOperation: 'text-dropdown'
  }, {
    title: 'Scope',
    dataIndex: 'scope',
    filterType: 'text'
  }, {
    title: 'Status',
    dataIndex: 'status',
    filterKey: 'status',
    filterType: 'single-select',
    filterOperation: 'users-dropdown'
  }, {
    title: 'Success',
    dataIndex: 'success',
    filterType: null
  }, {
    title: 'Failed',
    dataIndex: 'failed',
    filterType: null
  }, {
    title: 'Total',
    dataIndex: 'total',
    filterType: null
  }];
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "redirect-table"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "export-btn"
  }, /*#__PURE__*/_react.default.createElement(_shared.ControlledBtn, {
    isDisabled: checkBoxDataValues().length === 0,
    loading: false,
    iconImage: 'file-excel',
    btnText: 'Export',
    onClickHandler: function onClickHandler() {
      return clickHandlerFunctions();
    },
    loadingDelay: 5000
  })), /*#__PURE__*/_react.default.createElement(_shared.CTable, {
    columnConfig: columnConfig,
    fetchData: _services.fetchData,
    initialOrderBy: 'creationDate' //TODO remove this..
    ,
    checkBoxData: checkBoxData.allSelectedRowIds,
    setCheckBoxData: setCheckBoxData,
    checkBoxIdentifier: 'redirectHeaderId',
    extractData: extractData,
    filterData: filterData,
    sessionStorageIdentifier: 'redirect_table',
    rowKey: 'redirectHeaderId'
  }));

  function extractData(res) {
    return res.redirectHeaderContracts;
  }

  function filterData(filters, orderBy, orderType, currentPage) {
    var filterArray = Object.keys(filters).map(function (key) {
      return filters[key];
    });
    var dataObj = {
      dataFilterContracts: filterArray,
      orderBy: orderBy || '',
      orderType: orderType || 'DESC',
      pageNumber: currentPage || 1
    };
    return dataObj;
  }

  function clickHandlerFunctions() {
    (0, _services.exportExcelfile)(checkBoxDataValues());
    setCheckBoxData({
      allSelectedRowIds: {},
      allSelectedRows: {}
    });
  }

  function checkBoxDataValues() {
    return Object.values((0, _get.default)(checkBoxData, 'allSelectedRowIds', {})).flat(1);
  }
}