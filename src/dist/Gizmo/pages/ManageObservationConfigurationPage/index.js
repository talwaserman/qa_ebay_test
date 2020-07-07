"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ManageObservationConfigurationPage;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _get = _interopRequireDefault(require("lodash/get"));

var _isEmpty = _interopRequireDefault(require("lodash/isEmpty"));

var _shared = require("../../shared/");

var _ExecutionRulesConfiguration = _interopRequireDefault(require("./ExecutionRulesConfiguration"));

var _ExecutionRulesReasonConfiguration = _interopRequireDefault(require("./ExecutionRulesReasonConfiguration"));

var _services = require("./services");

require("./style.less");

function ManageObservationConfigurationPage() {
  var _useState = (0, _react.useState)(0),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      reloadFlag = _useState2[0],
      updateReloadFlage = _useState2[1];

  var _useState3 = (0, _react.useState)(),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      allRulesTableData = _useState4[0],
      setAllRulesTableData = _useState4[1];

  var _useState5 = (0, _react.useState)({
    rowId: null,
    name: null
  }),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      rowChosenData = _useState6[0],
      setRowChosenData = _useState6[1];

  var _useState7 = (0, _react.useState)([]),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      rulesConfigurationData = _useState8[0],
      setRulesConfigurationData = _useState8[1];

  var _useState9 = (0, _react.useState)([]),
      _useState10 = (0, _slicedToArray2.default)(_useState9, 2),
      reasonConfigurationData = _useState10[0],
      setReasonConfigurationData = _useState10[1];

  var _useState11 = (0, _react.useState)(true),
      _useState12 = (0, _slicedToArray2.default)(_useState11, 2),
      loadingData = _useState12[0],
      setLoadingData = _useState12[1];

  (0, _react.useEffect)(function () {
    setLoadingData(true);

    function fetchData() {
      return _fetchData.apply(this, arguments);
    }

    function _fetchData() {
      _fetchData = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var res, rulesTableData;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _services.getAllRulesConfiguration)();

              case 2:
                res = _context.sent;
                setAllRulesTableData(res.executionRulesConfigurationContracts);
                rulesTableData = extractReasonTableData(res.executionRulesConfigurationContracts);
                setReasonConfigurationData(rulesTableData);
                setRulesConfigurationData((0, _get.default)(res, 'executionRulesConfigurationContracts[0].reasonCodeContracts', []));
                setRowChosenData({
                  rowId: (0, _get.default)(res, 'executionRulesConfigurationContracts[0].rowId', []),
                  name: (0, _get.default)(res, 'executionRulesConfigurationContracts[0].name', [])
                });
                setLoadingData(false);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _fetchData.apply(this, arguments);
    }

    fetchData();
  }, [reloadFlag]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "reason-code-configurtion-page-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_shared.CBreadcrumb, {
    path: ['Vendor Management', 'Manage Observation Configuration']
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "reason-code-page-title"
  }, /*#__PURE__*/_react.default.createElement(_shared.PageTitle, {
    title: "Manage Observation Configuration"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "reasons-code-table-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_ExecutionRulesConfiguration.default, {
    tableData: reasonConfigurationData,
    loadingData: loadingData,
    onClickTableRow: onClickTableRow,
    reloadTableData: reloadTable,
    handleRowClassName: handleRowClassName
  })), rowChosenData.rowId && /*#__PURE__*/_react.default.createElement("div", {
    className: "reasons-code-configuration-table-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_ExecutionRulesReasonConfiguration.default, {
    tableData: rulesConfigurationData,
    loadingData: loadingData,
    rowChosenData: rowChosenData,
    reloadTableData: reloadTable
  }))));

  function reloadTable() {
    updateReloadFlage(reloadFlag + 1);
  }

  function getOr(obj, path, def) {
    var val = (0, _get.default)(obj, path);
    return (0, _isEmpty.default)(val) ? def : val;
  }

  function extractReasonTableData(res) {
    return res.map(function (element) {
      return {
        rowId: element.rowId,
        name: element.name
      };
    });
  }

  function onClickTableRow(data) {
    setRowChosenData({
      rowId: data.rowId,
      name: data.name
    });
    var resonConfigurationRow = allRulesTableData.filter(function (element) {
      return element.rowId === data.rowId;
    });
    setRulesConfigurationData(getOr(resonConfigurationRow[0], 'reasonCodeContracts', []));
  }

  function handleRowClassName(record) {
    return record.rowId === rowChosenData.rowId ? 'chosen-row' : '';
  }
}