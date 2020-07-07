"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ExecutionRulesConfiguration;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

require("antd/es/button/style/css");

var _button = _interopRequireDefault(require("antd/es/button"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

require("antd/es/modal/style/css");

var _modal = _interopRequireDefault(require("antd/es/modal"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _cloneDeep = _interopRequireDefault(require("lodash/cloneDeep"));

var _GenericModal = _interopRequireDefault(require("../../../shared/GenericModal"));

var _CGTable = _interopRequireDefault(require("../../../shared/CGTable"));

var _services = require("../services");

var _SingleTextInput = _interopRequireDefault(require("./SingleTextInput"));

require("./style.less");

var confirm = _modal.default.confirm;

function ExecutionRulesConfiguration(_ref) {
  var tableData = _ref.tableData,
      loadingData = _ref.loadingData,
      onClickTableRow = _ref.onClickTableRow,
      reloadTableData = _ref.reloadTableData,
      handleRowClassName = _ref.handleRowClassName;

  var _useState = (0, _react.useState)([]),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      executionRulesTableData = _useState2[0],
      setExecutionRulesTableData = _useState2[1];

  var _useState3 = (0, _react.useState)({}),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      sortedInfo = _useState4[0],
      setSortedInfo = _useState4[1];

  var _useState5 = (0, _react.useState)({
    name: null,
    rowId: null
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
    title: 'Configuration Name',
    dataIndex: 'name',
    key: 'name',
    sorter: function sorter(a, b) {
      return a.name.length - b.name.length;
    },
    sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order
  }, {
    title: '',
    dataIndex: '',
    filterType: '',
    width: 100,
    render: renderTableActions
  }];
  (0, _react.useEffect)(function () {
    setExecutionRulesTableData(tableData);
  }, [loadingData, tableData]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "execution-rules-configuration-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "execution-rules-configuration-actions-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "execution-rules-configuration-actions"
  }, /*#__PURE__*/_react.default.createElement(_button.default, {
    type: "primary",
    icon: "plus",
    onClick: onConfigurationHandler
  }, "Add Configuration"))), /*#__PURE__*/_react.default.createElement(_CGTable.default, {
    columnConfig: columnConfig,
    tableData: executionRulesTableData,
    size: 'small',
    initialOrderBy: 'Configuration Options',
    initialOrderType: 'descend',
    loadingData: loadingData,
    onSortInfoChange: function onSortInfoChange(sortInfoData) {
      return _onSortInfoChange(sortInfoData);
    },
    reloadTable: reloadTable,
    doubleClickCB: doubleClickCB,
    handleRowClassName: handleRowClassName
  }), /*#__PURE__*/_react.default.createElement("div", null, shouldBeVisible && /*#__PURE__*/_react.default.createElement(_GenericModal.default, {
    isOkDisabledInitialValue: true,
    width: 605,
    modalTitle: 'Add New Configuration',
    onCancel: onCancel,
    onOk: onOkAddConfiguration,
    okText: 'Save',
    modalContent: /*#__PURE__*/_react.default.createElement(_SingleTextInput.default, {
      inputLabel: 'Configuration Name',
      currentInputData: currentInputData
    }),
    modalVisibleState: shouldBeVisible
  }) || editShouldBeVisible && /*#__PURE__*/_react.default.createElement(_GenericModal.default, {
    isOkDisabledInitialValue: true,
    width: 605,
    modalTitle: 'Edit Configuration',
    onCancel: onCancel,
    onOk: onOkEditConfiguration,
    okText: 'Save',
    modalContent: /*#__PURE__*/_react.default.createElement(_SingleTextInput.default, {
      inputLabel: 'Configuration Name',
      currentInputData: currentInputData
    }),
    modalVisibleState: editShouldBeVisible
  })));

  function _onSortInfoChange(sortInfoData) {
    setSortedInfo(sortInfoData);
  }

  function reloadTable() {
    reloadTableData();
  }

  function onConfigurationHandler() {
    setShouldBeVisible(true);
  }

  function renderTableActions(record) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "execution-rules-configuration-control"
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
    setEditShouldBeVisible(true);
    setCurrentInputData({
      name: record.name,
      rowId: record.rowId
    });
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
                title: 'Are you sure, you want to delete this configuration?',
                onOk: function onOk() {
                  return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
                    var tempTableData, objIndex;
                    return _regenerator.default.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return (0, _services.deleteExcutionRulesConfigurationByRowId)(record.rowId);

                          case 2:
                            tempTableData = (0, _cloneDeep.default)(executionRulesTableData);
                            objIndex = tempTableData.findIndex(function (obj) {
                              return obj.rowId === record.rowId;
                            });
                            tempTableData.splice(objIndex, 1);
                            setExecutionRulesTableData(tempTableData);

                          case 6:
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

  function doubleClickCB(record) {
    onClickTableRow(record);
  }

  function onOkAddConfiguration(_x2) {
    return _onOkAddConfiguration.apply(this, arguments);
  }

  function _onOkAddConfiguration() {
    _onOkAddConfiguration = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(data) {
      var response, tempTableData;
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return (0, _services.createUpdateExecutionRulesConfigurationName)(data);

            case 2:
              response = _context3.sent;
              tempTableData = (0, _cloneDeep.default)(executionRulesTableData);
              tempTableData.push({
                rowId: response.executionRulesConfigurationId,
                name: data.name
              });
              setExecutionRulesTableData(tempTableData);
              setShouldBeVisible(false);

            case 7:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _onOkAddConfiguration.apply(this, arguments);
  }

  function onOkEditConfiguration(_x3) {
    return _onOkEditConfiguration.apply(this, arguments);
  }

  function _onOkEditConfiguration() {
    _onOkEditConfiguration = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(data) {
      var tempTableData, objIndex;
      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return (0, _services.createUpdateExecutionRulesConfigurationName)(data);

            case 2:
              tempTableData = (0, _cloneDeep.default)(executionRulesTableData);
              objIndex = tempTableData.findIndex(function (obj) {
                return obj.rowId === data.rowId;
              });
              tempTableData[objIndex].name = data.name;
              setExecutionRulesTableData(tempTableData);
              setCurrentInputData({
                name: null,
                rowId: null
              });
              setEditShouldBeVisible(false);

            case 8:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));
    return _onOkEditConfiguration.apply(this, arguments);
  }

  function onCancel() {
    setCurrentInputData({
      name: null,
      rowId: null
    });
    setEditShouldBeVisible(false);
    setShouldBeVisible(false);
  }
}

ExecutionRulesConfiguration.propTypes = {
  /** tableData - represent  table data which aligned to column configuration  */
  tableData: _propTypes.default.array.isRequired,

  /** loadingData - boolean field which state when loading data is started and finished */
  loadingData: _propTypes.default.bool,

  /** onClickTableRow - call back function which represnets when the user double click on row in the table */
  onClickTableRow: _propTypes.default.func
};