"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = WorkHistoryPage;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _shared = require("../../shared");

var _utils = require("../../utils");

var _columnConfig = require("../WorkHistoryPage/columnConfig");

var _services = require("./services");

require("./style.less");

function WorkHistoryPage(_ref) {
  var historyView = _ref.historyView,
      jobType = _ref.jobType;
  var columnConfig = jobType === 'Duplicates' ? _columnConfig.duplicatesColumnConfig : _columnConfig.matchingColumnConfig;
  var initialOrderBy = jobType === 'Duplicates' ? 'survivorEpid' : 'epid';
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "work-history-page-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_shared.CBreadcrumb, {
    path: [jobType, 'Work History']
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "table-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_shared.CTable, {
    columnConfig: columnConfig,
    fetchData: _services.getRowsByJobId,
    initialOrderBy: initialOrderBy,
    filterData: filterData,
    extractData: extractData,
    doubleClickCB: doubleClickCB,
    sessionStorageIdentifier: 'work_history_table'
  })));

  function filterData(filters, orderBy, orderType, currentPage) {
    var filterArray = Object.keys(filters).map(function (key) {
      return filters[key];
    });
    var dataObj = {
      jobId: (0, _utils.queryParam)('jobId'),
      jobType: (0, _utils.queryParam)('jobType') || 'Duplicates',
      dataFilterContracts: filterArray,
      orderBy: orderBy || '',
      orderType: orderType || 'DESC',
      pageNumber: currentPage || 1
    };
    return dataObj;
  }

  function extractData(res) {
    return res.filteredRows;
  }

  function doubleClickCB(record) {
    historyView(record.rowId);
  }
}

WorkHistoryPage.propTypes = {
  /** historyView - call back function to show duplicates in history view  */
  historyView: _propTypes.default.func.isRequired,
  jobType: _propTypes.default.string.isRequired
};