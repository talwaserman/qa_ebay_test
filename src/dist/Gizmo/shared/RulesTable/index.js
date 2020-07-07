"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RulesTable;

require("antd/es/modal/style/css");

var _modal = _interopRequireDefault(require("antd/es/modal"));

require("antd/es/button/style/css");

var _button = _interopRequireDefault(require("antd/es/button"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _get = _interopRequireDefault(require("lodash/get"));

var _cloneDeep = _interopRequireDefault(require("lodash/cloneDeep"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _shared = require("../../shared");

var _services = require("./services");

require("./style.less");

function RulesTable(_ref) {
  var epid = _ref.epid;

  var _useState = (0, _react.useState)([]),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      tableData = _useState2[0],
      setTableData = _useState2[1];

  var _useState3 = (0, _react.useState)({}),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      sortedInfo = _useState4[0],
      setSortedInfo = _useState4[1];

  var _useState5 = (0, _react.useState)([]),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      columnConfig = _useState6[0],
      setColumnConfig = _useState6[1];

  var _useState7 = (0, _react.useState)(true),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      isLoading = _useState8[0],
      setloading = _useState8[1];

  var _useState9 = (0, _react.useState)([]),
      _useState10 = (0, _slicedToArray2.default)(_useState9, 2),
      selectedRows = _useState10[0],
      setSelectedRows = _useState10[1];

  (0, _react.useEffect)(function () {
    function fetchData() {
      return _fetchData.apply(this, arguments);
    }

    function _fetchData() {
      _fetchData = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var res;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _services.getRules)(epid);

              case 2:
                res = _context.sent;
                setTableData(res);
                setloading(false);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _fetchData.apply(this, arguments);
    }

    fetchData();
  }, [epid]);
  (0, _react.useEffect)(function () {
    setColumnConfig([{
      title: 'Rule ID',
      dataIndex: 'ruleId',
      sortOrder: sortedInfo.columnKey === 'ruleId' && sortedInfo.order,
      ellipsis: true
    }, {
      title: 'Rule Type',
      dataIndex: 'ruleType',
      sorter: function sorter(a, b) {
        return a.ruleType.length - b.ruleType.length;
      },
      sortOrder: sortedInfo.columnKey === 'ruleType' && sortedInfo.order,
      onFilter: function onFilter(value, record) {
        return record.type.includes(value);
      },
      ellipsis: true
    }, {
      title: 'Logic Type',
      dataIndex: 'logicType',
      sorter: function sorter(a, b) {
        return a.logicType.length - b.logicType.length;
      },
      sortOrder: sortedInfo.columnKey === 'logicType' && sortedInfo.order,
      onFilter: function onFilter(value, record) {
        return record.type.includes(value);
      },
      ellipsis: true
    }, {
      title: 'Attribute Name',
      dataIndex: 'ruleParams',
      onFilter: function onFilter(value, record) {
        return record.type.includes(value);
      },
      render: function render(param) {
        return /*#__PURE__*/_react.default.createElement("div", null, param.attributeName);
      },
      ellipsis: true
    }, {
      title: 'Attribute Value',
      dataIndex: 'ruleParams',
      onFilter: function onFilter(value, record) {
        return record.type.includes(value);
      },
      render: function render(param) {
        return /*#__PURE__*/_react.default.createElement("div", null, param.attributeValues.map(function (attribute) {
          return /*#__PURE__*/_react.default.createElement("div", null, attribute);
        }));
      },
      ellipsis: true
    }, // {
    //   title: 'Description',
    //   dataIndex: 'description',
    //   sortOrder: sortedInfo.columnKey === 'description' && sortedInfo.order,
    //   onFilter: (value, record) => record.type.includes(value),
    //   render: (text, record) => (
    //     <div style={{ width: '400', 'white-space': 'pre-line' }}>{text}</div>
    //   ),
    //   ellipsis: true
    // },
    // {
    //   title: 'Identifier',
    //   dataIndex: 'identifier',
    //   sorter: (a, b) => a.identifier.length - b.identifier.length,
    //   sortOrder: sortedInfo.columnKey === 'identifier' && sortedInfo.order,
    //   onFilter: (value, record) => record.type.includes(value),
    //   ellipsis: true
    // },
    {
      title: 'Source',
      dataIndex: 'source',
      sorter: function sorter(a, b) {
        return a.source.length - b.source.length;
      },
      sortOrder: sortedInfo.columnKey === 'source' && sortedInfo.order,
      onFilter: function onFilter(value, record) {
        return record.type.includes(value);
      },
      ellipsis: true
    }, // {
    //   title: 'Locale',
    //   dataIndex: 'locale',
    //   sorter: (a, b) => a.locale.length - b.locale.length,
    //   sortOrder: sortedInfo.columnKey === 'locale' && sortedInfo.order,
    //   onFilter: (value, record) => record.type.includes(value),
    //   ellipsis: true
    // },
    {
      title: 'Tenant',
      dataIndex: 'tenant',
      sorter: function sorter(a, b) {
        return a.tenant.length - b.tenant.length;
      },
      sortOrder: sortedInfo.columnKey === 'tenant' && sortedInfo.order,
      onFilter: function onFilter(value, record) {
        return record.type.includes(value);
      },
      ellipsis: true
    } // {
    //   title: 'Language',
    //   dataIndex: 'language',
    //   sorter: (a, b) => a.language.length - b.language.length,
    //   sortOrder: sortedInfo.columnKey === 'language' && sortedInfo.order,
    //   onFilter: (value, record) => record.type.includes(value),
    //   ellipsis: true
    // }
    // {
    //   title: 'Class',
    //   dataIndex: 'ruleParams',
    //   sorter: (a, b) => a.class.length - b.class.length,
    //   onFilter: (value, record) => record.type.includes(value),
    //   render: param => {
    //     return <div>{param.class}</div>;
    //   },
    //   ellipsis: true
    // }
    ]);
  }, [sortedInfo]);
  var rowsInPage = 3;
  var checkedRows = {
    selectedRowKeys: selectedRows,
    onChange: onSelectChange
  };
  var disableDeleteBtn = selectedRows.length === 0;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "rules-table-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "action-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_button.default, {
    type: "primary",
    icon: "delete",
    onClick: deleteSelectedRows,
    disabled: disableDeleteBtn
  }, "Delete Rules")), /*#__PURE__*/_react.default.createElement(_shared.CGTable, {
    columnConfig: columnConfig,
    expandedRowRender: function expandedRowRender(record) {
      return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("strong", null, "Description: "), record.description), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("strong", null, "Class: "), record.ruleParams.class), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("strong", null, "Identifier: "), record.identifier), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("strong", null, "Local: "), record.local), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("strong", null, "Language: "), record.language));
    },
    tableData: (0, _get.default)(tableData, 'productRulesResponseContract.rules', []),
    size: 'small',
    loadingData: isLoading,
    onSortInfoChange: function onSortInfoChange(sortInfoData) {
      return _onSortInfoChange(sortInfoData);
    },
    initialOrderBy: 'type',
    initialOrderType: 'descend',
    reloadTable: reloadTable,
    defaultPageSize: rowsInPage,
    deleteRulesCallBack: _services.deleteRules,
    rowSelection: checkedRows
  }));
  /** --- Helper functions --- */

  function _onSortInfoChange(sortInfoData) {
    setSortedInfo(sortInfoData);
  }

  function reloadTable() {
    return _reloadTable.apply(this, arguments);
  }
  /**
   * callback function used for selecting rows in the table
   * @param {array} selectedRowKeys - numbers of the selected rows
   * @param {array} selectedRows - object that contain the selected rows data
   */


  function _reloadTable() {
    _reloadTable = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      var res;
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              setloading(true);
              _context2.next = 3;
              return (0, _services.getRules)('1703474934');

            case 3:
              res = _context2.sent;
              setTableData(res);
              setloading(false);

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _reloadTable.apply(this, arguments);
  }

  function onSelectChange(selectedRowKeys, selectedRows) {
    setSelectedRows(selectedRowKeys);
  }

  function deleteSelectedRows() {
    return _deleteSelectedRows.apply(this, arguments);
  }

  function _deleteSelectedRows() {
    _deleteSelectedRows = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
      var ruleIds, res, errorCount, tempTableData, _res;

      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              setloading(true);
              ruleIds = (0, _get.default)(tableData, 'productRulesResponseContract.rules', []).filter(function (item, index) {
                return selectedRows.includes(index);
              }).map(function (item) {
                return item.ruleId;
              });
              _context3.next = 4;
              return (0, _services.deleteRules)(epid, ruleIds);

            case 4:
              res = _context3.sent;
              errorCount = res.responses.filter(function (item) {
                return !(item.status === 'SUCCESS');
              }).length;

              if (!(errorCount === 0)) {
                _context3.next = 13;
                break;
              }

              tempTableData = (0, _cloneDeep.default)(tableData);
              tempTableData.productRulesResponseContract.rules = tempTableData.productRulesResponseContract.rules.filter(function (item, index) {
                return !selectedRows.includes(index);
              });
              setTableData(tempTableData);
              setSelectedRows([]);
              _context3.next = 18;
              break;

            case 13:
              _modal.default.error({
                title: 'Action Failed',
                content: "".concat(errorCount, " of the changes failed, please contact support")
              });

              _context3.next = 16;
              return (0, _services.getRules)(epid);

            case 16:
              _res = _context3.sent;
              setTableData(_res);

            case 18:
              setloading(false);

            case 19:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _deleteSelectedRows.apply(this, arguments);
  }
}

RulesTable.propTypes = {
  /** epid - string identifier used to identify the product */
  epid: _propTypes.default.string.isRequired
};