"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ExecutionRulesReasonConfiguration;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

require("antd/es/button/style/css");

var _button = _interopRequireDefault(require("antd/es/button"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

require("antd/es/modal/style/css");

var _modal = _interopRequireDefault(require("antd/es/modal"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clone = _interopRequireDefault(require("lodash/clone"));

var _get = _interopRequireDefault(require("lodash/get"));

require("./style.less");

var _services = require("../services");

var _shared = require("../../../shared/");

var _ReasonSelection = _interopRequireDefault(require("./ReasonSelection"));

var confirm = _modal.default.confirm;

function ExecutionRulesReasonConfiguration(_ref) {
  var tableData = _ref.tableData,
      loadingData = _ref.loadingData,
      rowChosenData = _ref.rowChosenData,
      reloadTableData = _ref.reloadTableData;
  var selectCloseListValues = [{
    name: 'Duplicate',
    value: 'DUPLICATES'
  }, {
    name: 'Not Duplicate',
    value: 'NON_DUPLICATES'
  }, {
    name: 'Skip',
    value: 'SKIP'
  }];

  var _useState = (0, _react.useState)([]),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      executionRulesReasonTableData = _useState2[0],
      setExecutionRulesReasonTableData = _useState2[1];

  var _useState3 = (0, _react.useState)({}),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      sortedInfo = _useState4[0],
      setSortedInfo = _useState4[1];

  var _useState5 = (0, _react.useState)({
    index: null,
    decision: '',
    reason: '',
    explanation: ''
  }),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      currentInputData = _useState6[0],
      setCurrentInputData = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      shouldBeVisible = _useState8[0],
      setShouldBeVisible = _useState8[1];

  var _useState9 = (0, _react.useState)(false),
      _useState10 = (0, _slicedToArray2.default)(_useState9, 2),
      editShouldBeVisible = _useState10[0],
      setEditShouldBeVisible = _useState10[1];

  var columnConfig = [{
    title: 'Decision',
    dataIndex: 'decision',
    key: 'decision',
    sorter: function sorter(a, b) {
      return (0, _get.default)(a, 'decision', []).length - (0, _get.default)(b, 'decision', []).length;
    },
    sortOrder: sortedInfo.columnKey === 'decision' && sortedInfo.order
  }, {
    title: 'Reason',
    dataIndex: 'reason',
    key: 'reason',
    sorter: function sorter(a, b) {
      return (0, _get.default)(a, 'reason', []).length - (0, _get.default)(b, 'reason', []).length;
    },
    sortOrder: sortedInfo.columnKey === 'reason' && sortedInfo.order
  }, {
    title: 'Explanation',
    dataIndex: 'explanation',
    key: 'explanation',
    sorter: function sorter(a, b) {
      return (0, _get.default)(a, 'explanation', []).length - (0, _get.default)(b, 'explanation', []).length;
    },
    sortOrder: sortedInfo.columnKey === 'explanation' && sortedInfo.order
  }, {
    title: '',
    dataIndex: '',
    filterType: '',
    width: 100,
    render: renderTableActions
  }];
  (0, _react.useEffect)(function () {
    setExecutionRulesReasonTableData(tableData);
  }, [loadingData, tableData]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "execution-rules-reason-configuration-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "execution-rules-reason-configuration-actions-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "execution-rules-reason-header-wrapper"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "main-header"
  }, rowChosenData.name)), /*#__PURE__*/_react.default.createElement("div", {
    className: "execution-rules-reason-configuration-actions"
  }, /*#__PURE__*/_react.default.createElement(_button.default, {
    type: "default",
    icon: "plus",
    onClick: onReasonHandler
  }, "Add Reason"))), /*#__PURE__*/_react.default.createElement(_shared.CGTable, {
    columnConfig: columnConfig,
    tableData: executionRulesReasonTableData,
    size: 'small',
    initialOrderBy: 'Decision',
    initialOrderType: 'descend',
    loadingData: loadingData,
    onSortInfoChange: function onSortInfoChange(sortInfoData) {
      return _onSortInfoChange(sortInfoData);
    },
    reloadTable: reloadTable
  }), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_shared.GenericModal, {
    isOkDisabledInitialValue: true,
    width: 605,
    modalTitle: 'Add New Reason',
    onCancel: onCancel,
    onOk: onOkAddReason,
    okText: 'Save',
    modalContent: /*#__PURE__*/_react.default.createElement(_ReasonSelection.default, {
      select1Label: 'Decision',
      input2Label: 'Reason',
      input3Label: 'Explanation',
      currentInputData: currentInputData,
      selectCloseListValues: selectCloseListValues
    }),
    modalVisibleState: shouldBeVisible
  }), /*#__PURE__*/_react.default.createElement(_shared.GenericModal, {
    isOkDisabledInitialValue: true,
    width: 605,
    modalTitle: 'Edit Reason',
    onCancel: onCancel,
    onOk: onOkEditReason,
    okText: 'Save',
    modalContent: /*#__PURE__*/_react.default.createElement(_ReasonSelection.default, {
      select1Label: 'Decision',
      input2Label: 'Reason',
      input3Label: 'Explanation',
      currentInputData: currentInputData,
      selectCloseListValues: selectCloseListValues
    }),
    modalVisibleState: editShouldBeVisible
  })));

  function _onSortInfoChange(sortInfoData) {
    setSortedInfo(sortInfoData);
  }

  function reloadTable() {
    reloadTableData();
  }

  function onReasonHandler() {
    setShouldBeVisible(true);
  }

  function renderTableActions(record) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "execution-rules-reason-configuration-control"
    }, /*#__PURE__*/_react.default.createElement(_button.default, {
      icon: "edit",
      onClick: function onClick() {
        return onClickEditIcon(record);
      }
    }), /*#__PURE__*/_react.default.createElement(_button.default, {
      icon: "delete",
      onClick: function onClick() {
        return onDeleteConfirm(record);
      }
    }));
  }

  function onClickEditIcon(record) {
    setCurrentInputData({
      index: record.id,
      decision: record.decision,
      reason: record.reason,
      explanation: record.explanation
    });
    setEditShouldBeVisible(true);
  }

  function onDeleteConfirm(_x) {
    return _onDeleteConfirm.apply(this, arguments);
  }

  function _onDeleteConfirm() {
    _onDeleteConfirm = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(record) {
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              confirm({
                title: 'Are you sure, you want to delete this reason?',
                onOk: function onOk() {
                  return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
                    var tempExecutionRulesReasonTableData;
                    return _regenerator.default.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            tempExecutionRulesReasonTableData = (0, _clone.default)(executionRulesReasonTableData);
                            tempExecutionRulesReasonTableData.splice(record.id, 1);
                            _context.next = 4;
                            return (0, _services.createUpdateExecutionRulesConfiguration)({
                              executionRulesConfigurationContract: {
                                rowId: rowChosenData.rowId,
                                name: rowChosenData.name,
                                reasonCodeContracts: tempExecutionRulesReasonTableData
                              }
                            });

                          case 4:
                            setExecutionRulesReasonTableData(tempExecutionRulesReasonTableData);

                          case 5:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }))();
                },
                onCancel: function onCancel() {}
              });

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _onDeleteConfirm.apply(this, arguments);
  }

  function onOkAddReason(_x2) {
    return _onOkAddReason.apply(this, arguments);
  }

  function _onOkAddReason() {
    _onOkAddReason = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(data) {
      var tempExecutionRulesReasonTableData;
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              tempExecutionRulesReasonTableData = (0, _clone.default)(executionRulesReasonTableData);
              tempExecutionRulesReasonTableData.push(data);
              _context3.next = 4;
              return (0, _services.createUpdateExecutionRulesConfiguration)({
                executionRulesConfigurationContract: {
                  rowId: rowChosenData.rowId,
                  name: rowChosenData.name,
                  reasonCodeContracts: tempExecutionRulesReasonTableData
                }
              });

            case 4:
              setExecutionRulesReasonTableData(tempExecutionRulesReasonTableData);
              setShouldBeVisible(false);
              setCurrentInputData({
                index: null,
                decision: '',
                reason: '',
                explanation: ''
              });

            case 7:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _onOkAddReason.apply(this, arguments);
  }

  function onOkEditReason(_x3) {
    return _onOkEditReason.apply(this, arguments);
  }

  function _onOkEditReason() {
    _onOkEditReason = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(data) {
      var tempExecutionRulesReasonTableData;
      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              tempExecutionRulesReasonTableData = (0, _clone.default)(executionRulesReasonTableData);
              tempExecutionRulesReasonTableData[data.index].decision = data.decision;
              tempExecutionRulesReasonTableData[data.index].reason = data.reason;
              tempExecutionRulesReasonTableData[data.index].explanation = data.explanation;
              _context4.next = 6;
              return (0, _services.createUpdateExecutionRulesConfiguration)({
                executionRulesConfigurationContract: {
                  rowId: rowChosenData.rowId,
                  name: rowChosenData.name,
                  reasonCodeContracts: tempExecutionRulesReasonTableData
                }
              });

            case 6:
              setExecutionRulesReasonTableData(tempExecutionRulesReasonTableData);
              setEditShouldBeVisible(false);

            case 8:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));
    return _onOkEditReason.apply(this, arguments);
  }

  function onCancel() {
    setShouldBeVisible(false);
    setEditShouldBeVisible(false);
    setCurrentInputData({
      index: null,
      decision: '',
      reason: '',
      explanation: ''
    });
  }
}

ExecutionRulesReasonConfiguration.propTypes = {
  /** tableData - represent  table data which aligned to column configuration  */
  tableData: _propTypes.default.array.isRequired,

  /** loadingData - boolean field which state when loading data is started and finished */
  loadingData: _propTypes.default.bool,

  /** rowChosenData - row data of the choosed (clicked) row */
  rowChosenData: _propTypes.default.object
};