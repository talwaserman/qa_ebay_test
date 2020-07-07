"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CTable;

require("antd/es/table/style/css");

var _table = _interopRequireDefault(require("antd/es/table"));

require("antd/es/button/style/css");

var _button = _interopRequireDefault(require("antd/es/button"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

require("antd/es/icon/style/css");

var _icon = _interopRequireDefault(require("antd/es/icon"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _get = _interopRequireDefault(require("lodash/get"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _filterTypes = require("./filterTypes");

var _OrderBy = _interopRequireDefault(require("./OrderBy"));

var _OrderType = _interopRequireDefault(require("./OrderType"));

var _moment = _interopRequireDefault(require("moment"));

require("./style.less");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function CTable(_ref) {
  var columnConfig = _ref.columnConfig,
      initialOrderBy = _ref.initialOrderBy,
      fetchData = _ref.fetchData,
      filterData = _ref.filterData,
      checkBoxData = _ref.checkBoxData,
      setCheckBoxData = _ref.setCheckBoxData,
      checkBoxIdentifier = _ref.checkBoxIdentifier,
      checkboxDisabledIdentifier = _ref.checkboxDisabledIdentifier,
      extractData = _ref.extractData,
      doubleClickCB = _ref.doubleClickCB,
      sessionStorageIdentifier = _ref.sessionStorageIdentifier,
      selectedRowsValidator = _ref.selectedRowsValidator,
      externalReloadFlag = _ref.externalReloadFlag,
      rowKey = _ref.rowKey,
      expandedRowRender = _ref.expandedRowRender,
      expandIcon = _ref.expandIcon,
      expandedRowKeys = _ref.expandedRowKeys;
  // Get saved data from sessionStorage
  var window = window || {};
  var storedFilters;

  if (window.sessionStorage) {
    storedFilters = sessionStorageIdentifier ? JSON.parse(sessionStorage.getItem(sessionStorageIdentifier) || '{}') : {};
  } else {
    storedFilters = {};
  }

  var _useState = (0, _react.useState)(storedFilters.orderBy || initialOrderBy),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      orderBy = _useState2[0],
      setOrderBy = _useState2[1];

  var _useState3 = (0, _react.useState)(storedFilters.orderType || 'DESC'),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      orderType = _useState4[0],
      setOrderType = _useState4[1];

  var _useState5 = (0, _react.useState)([]),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      data = _useState6[0],
      setData = _useState6[1];

  var _useState7 = (0, _react.useState)(1),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      numOfpages = _useState8[0],
      setNumOfPages = _useState8[1];

  var _useState9 = (0, _react.useState)(storedFilters.currentPage || 1),
      _useState10 = (0, _slicedToArray2.default)(_useState9, 2),
      currentPage = _useState10[0],
      setCurrentPage = _useState10[1];

  var _useState11 = (0, _react.useState)({}),
      _useState12 = (0, _slicedToArray2.default)(_useState11, 2),
      optionHash = _useState12[0],
      setOptionHash = _useState12[1];

  var _useState13 = (0, _react.useState)(storedFilters.filteredData || {}),
      _useState14 = (0, _slicedToArray2.default)(_useState13, 2),
      filteredData = _useState14[0],
      setFilterdData = _useState14[1];

  var _useState15 = (0, _react.useState)(false),
      _useState16 = (0, _slicedToArray2.default)(_useState15, 2),
      loading = _useState16[0],
      setLoading = _useState16[1];

  var _useState17 = (0, _react.useState)(0),
      _useState18 = (0, _slicedToArray2.default)(_useState17, 2),
      reloadFlag = _useState18[0],
      updateReloadFlage = _useState18[1];

  var tableLoading = {
    spinning: loading,
    size: 'large',
    indicator: /*#__PURE__*/_react.default.createElement(_icon.default, {
      type: "loading"
    })
  };
  (0, _react.useEffect)(function () {
    function getData() {
      return _getData.apply(this, arguments);
    }

    function _getData() {
      _getData = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var res;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                setLoading(true);

                if (sessionStorageIdentifier && window.sessionStorage) {
                  // Save data to sessionStorage
                  sessionStorage.setItem(sessionStorageIdentifier, JSON.stringify({
                    filteredData: filteredData,
                    orderBy: orderBy,
                    orderType: orderType,
                    currentPage: currentPage
                  }));
                }

                _context.next = 4;
                return fetchData(filterData(filteredData, orderBy, orderType, currentPage));

              case 4:
                res = _context.sent;

                if (res) {
                  setData(extractData(res));
                  setNumOfPages((0, _get.default)(res, 'totalCount.totalPages', 1));
                  setOptionHash((0, _get.default)(res, 'selectOptions', []));
                }

                setLoading(false);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _getData.apply(this, arguments);
    }

    getData();
  }, [orderBy, orderType, currentPage, JSON.stringify(filteredData), reloadFlag, externalReloadFlag]);
  var inputEl = (0, _react.useRef)(null);

  var getColumnSearchProps = function getColumnSearchProps(dataIndex, filterType) {
    var filterKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    var filterOperation = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
    var isEqual = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    return {
      filteredValue: (0, _get.default)(filteredData[dataIndex], 'fieldValue', ''),
      filterDropdown: function filterDropdown(_ref2) {
        var setSelectedKeys = _ref2.setSelectedKeys,
            selectedKeys = _ref2.selectedKeys,
            confirm = _ref2.confirm,
            clearFilters = _ref2.clearFilters;
        return /*#__PURE__*/_react.default.createElement("div", null, filterType === 'text' && /*#__PURE__*/_react.default.createElement(_filterTypes.TextFilter, {
          setSelectedKeys: setSelectedKeys,
          selectedKeys: selectedKeys,
          confirm: confirm,
          clearFilters: clearFilters,
          dataIndex: dataIndex,
          filterTable: filterTable,
          removeFilter: removeFilter,
          filterOperation: 'contains',
          serverFilterType: 'text'
        }), filterType === 'text-equal' && /*#__PURE__*/_react.default.createElement(_filterTypes.TextFilter, {
          setSelectedKeys: setSelectedKeys,
          selectedKeys: selectedKeys,
          confirm: confirm,
          clearFilters: clearFilters,
          dataIndex: dataIndex,
          filterTable: filterTable,
          removeFilter: removeFilter,
          filterOperation: 'equal',
          serverFilterType: 'text'
        }), filterType === 'int' && /*#__PURE__*/_react.default.createElement(_filterTypes.TextFilter, {
          setSelectedKeys: setSelectedKeys,
          selectedKeys: selectedKeys,
          confirm: confirm,
          clearFilters: clearFilters,
          dataIndex: dataIndex,
          filterTable: filterTable,
          removeFilter: removeFilter,
          filterOperation: 'equal',
          serverFilterType: 'int'
        }), filterType === 'long' && /*#__PURE__*/_react.default.createElement(_filterTypes.TextFilter, (0, _defineProperty2.default)({
          setSelectedKeys: setSelectedKeys,
          selectedKeys: selectedKeys,
          confirm: confirm,
          clearFilters: clearFilters,
          dataIndex: dataIndex,
          filterTable: filterTable,
          removeFilter: removeFilter,
          filterOperation: 'equal',
          serverFilterType: 'long'
        }, "removeFilter", removeFilter)), filterType === 'text-equal' && /*#__PURE__*/_react.default.createElement(_filterTypes.TextFilter, {
          setSelectedKeys: setSelectedKeys,
          selectedKeys: selectedKeys,
          confirm: confirm,
          clearFilters: clearFilters,
          dataIndex: dataIndex,
          filterTable: filterTable,
          removeFilter: removeFilter,
          filterOperation: 'equal'
        }), filterType === 'date' && /*#__PURE__*/_react.default.createElement(_filterTypes.DateFilter, {
          setSelectedKeys: setSelectedKeys,
          selectedKeys: selectedKeys,
          confirm: confirm,
          clearFilters: clearFilters,
          dataIndex: dataIndex,
          filterOperation: filterOperation,
          filterTable: filterTable,
          removeFilter: removeFilter
        }), filterType === 'single-select' && /*#__PURE__*/_react.default.createElement(_filterTypes.SingleSelectFilter, {
          setSelectedKeys: setSelectedKeys,
          selectedKeys: selectedKeys,
          confirm: confirm,
          clearFilters: clearFilters,
          dataIndex: dataIndex,
          filterKey: filterKey,
          filterOperation: filterOperation,
          filterTable: filterTable,
          removeFilter: removeFilter,
          optionHash: optionHash,
          serverFilterType: 'text'
        }), filterType === 'single-select-equal' && /*#__PURE__*/_react.default.createElement(_filterTypes.SingleSelectFilter, {
          setSelectedKeys: setSelectedKeys,
          selectedKeys: selectedKeys,
          confirm: confirm,
          clearFilters: clearFilters,
          dataIndex: dataIndex,
          filterKey: filterKey,
          filterOperation: filterOperation,
          filterTable: filterTable,
          removeFilter: removeFilter,
          optionHash: optionHash,
          serverFilterType: 'text-equal'
        }), filterType === 'single-select-equal-int' && /*#__PURE__*/_react.default.createElement(_filterTypes.SingleSelectFilter, {
          setSelectedKeys: setSelectedKeys,
          selectedKeys: selectedKeys,
          confirm: confirm,
          clearFilters: clearFilters,
          dataIndex: dataIndex,
          filterKey: filterKey,
          filterOperation: 'equal',
          filterTable: filterTable,
          removeFilter: removeFilter,
          optionHash: optionHash,
          serverFilterType: 'int'
        }), filterType === 'single-select-boolean-equal' && /*#__PURE__*/_react.default.createElement(_filterTypes.SingleSelectFilter, {
          setSelectedKeys: setSelectedKeys,
          selectedKeys: selectedKeys,
          confirm: confirm,
          clearFilters: clearFilters,
          dataIndex: dataIndex,
          filterKey: filterKey,
          filterOperation: 'equal',
          filterTable: filterTable,
          removeFilter: removeFilter,
          optionHash: optionHash,
          serverFilterType: 'boolean'
        }), filterType === 'single-select-multiJsonValue-equal' && /*#__PURE__*/_react.default.createElement(_filterTypes.SingleSelectMultiFilter, {
          setSelectedKeys: setSelectedKeys,
          selectedKeys: selectedKeys,
          confirm: confirm,
          clearFilters: clearFilters,
          dataIndex: dataIndex,
          filterKey: filterKey,
          filterOperation: 'equal',
          multiFiltersTable: multiFiltersTable,
          removeFilters: removeFilters,
          optionHash: optionHash,
          serverFilterType: 'text-equal'
        }));
      },
      filterIcon: function filterIcon(filtered) {
        return /*#__PURE__*/_react.default.createElement(_icon.default, {
          type: "search",
          style: {
            color: filtered ? '#1890ff' : undefined
          }
        });
      },
      onFilter: false,
      // This code is for client side filter and is turned off
      // onFilter: (value, record) =>
      //   record[dataIndex]
      //     .toString()
      //     .toLowerCase()
      //     .includes(value.toLowerCase()),
      onFilterDropdownVisibleChange: function onFilterDropdownVisibleChange(visible) {
        if (visible) {
          setTimeout(function () {
            return inputEl.current;
          });
        }
      },
      render: function render(text) {
        return renderValue(text, filterType);
      }
    };
  };

  var columns = columnConfig.map(function (item) {
    if (item.filterType) {
      return _objectSpread(_objectSpread(_objectSpread({}, item), getColumnSearchProps(item.dataIndex, item.filterType, item.filterKey, item.filterOperation)), {
        key: 'ctable_' + item.dataIndex.toLowerCase()
      });
    } else {
      return _objectSpread(_objectSpread({}, item), {
        key: 'ctable_' + item.dataIndex.toLowerCase()
      });
    }
  });
  var rowSelection = {
    columnTitle: ' ',
    onSelect: function onSelect(selectedRow, isSelected, allSelectedRows) {
      var allSelectedRowIds = Object.assign({}, checkBoxData);
      var selectedRowId = (0, _get.default)(selectedRow, checkBoxIdentifier, null);

      if (isSelected) {
        allSelectedRowIds[currentPage] = checkBoxData[currentPage] ? [].concat((0, _toConsumableArray2.default)(checkBoxData[currentPage]), [selectedRowId]) : [selectedRowId];
      } else {
        allSelectedRowIds[currentPage] = allSelectedRowIds[currentPage].filter(function (item) {
          return item !== selectedRowId;
        });
      }

      selectedRowsValidator && selectedRowsValidator(allSelectedRows); //allSelectedRowIds - object that the keys are the pages in the table, and the value for
      //each key is an array of ckecked rows, the values are based on the checkbox identifier
      //allSelectedRows - object of all checked rows that contain all the data for each row and not only ids.

      setCheckBoxData({
        allSelectedRowIds: allSelectedRowIds,
        allSelectedRows: allSelectedRows
      });
    },
    getCheckboxProps: function getCheckboxProps(record) {
      if (checkBoxData[currentPage]) {
        return {
          checked: checkBoxData[currentPage].indexOf((0, _get.default)(record, checkBoxIdentifier, null)) > -1,
          disabled: (0, _get.default)(record, checkboxDisabledIdentifier, null) !== null
        };
      } else {
        return {
          checked: false,
          disabled: (0, _get.default)(record, checkboxDisabledIdentifier, null) !== null
        };
      }
    }
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "ctable-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "filter-wrapper"
  }, /*#__PURE__*/_react.default.createElement("label", null, "Order By:"), /*#__PURE__*/_react.default.createElement(_OrderBy.default, {
    options: columnConfig,
    placeholder: 'Order By',
    orderByChange: onOrderByChange,
    defaultValue: orderBy
  }), /*#__PURE__*/_react.default.createElement("label", null, "Order Type:"), /*#__PURE__*/_react.default.createElement(_OrderType.default, {
    orderTypeChange: onOrderTypeChange,
    defaultValue: orderType,
    width: 100,
    ascendValue: 'ASC',
    descendValue: 'DESC'
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "reload-table-button"
  }, /*#__PURE__*/_react.default.createElement(_button.default, {
    icon: "reload",
    onClick: function onClick() {
      updateReloadFlage(reloadFlag + 1);
    }
  }))), /*#__PURE__*/_react.default.createElement(_table.default, {
    onRow: function onRow(record, rowIndex) {
      return {
        onDoubleClick: function onDoubleClick(event) {
          doubleClickCB(record);
        }
      };
    },
    rowSelection: setCheckBoxData ? rowSelection : null,
    columns: columns,
    dataSource: data,
    bordered: true,
    loading: tableLoading,
    size: "small",
    rowKey: rowKey,
    pagination: {
      defaultPageSize: 15,
      current: currentPage,
      total: numOfpages * 15,
      onChange: onPageChange
    },
    expandedRowRender: expandedRowRender,
    expandIcon: expandIcon,
    expandedRowKeys: expandedRowKeys
  }));

  function filterTable(newFilter) {
    var temp = _objectSpread({}, filteredData);

    temp[newFilter.fieldName] = newFilter;
    setFilterdData(temp);
  }

  function multiFiltersTable(newFilters) {
    var temp = _objectSpread({}, filteredData);

    newFilters.forEach(function (newFilter) {
      temp[newFilter.fieldName] = newFilter;
    });
    setFilterdData(temp);
  }

  function removeFilter(filterName) {
    var temp = _objectSpread({}, filteredData);

    delete temp[filterName];
    setFilterdData(temp);
  }

  function removeFilters(filtersName) {
    var temp = _objectSpread({}, filteredData);

    filtersName.forEach(function (filterName) {
      delete temp[filterName];
    });
    setFilterdData(temp);
  }

  function onPageChange(pageNumber) {
    setCurrentPage(pageNumber);
  }

  function onOrderByChange(orderBy) {
    setOrderBy(orderBy);
  }

  function onOrderTypeChange(orderType) {
    setOrderType(orderType);
  }

  function renderValue(text, filterType) {
    var dateFormat = 'YYYY-MM-DD';
    return filterType === 'date' && text && typeof text === 'number' ? /*#__PURE__*/_react.default.createElement("div", null, (0, _moment.default)(text).format(dateFormat).toString()) : /*#__PURE__*/_react.default.createElement("div", null, text);
  }
}

CTable.propTypes = {
  // columnConfig - column configuration for table
  columnConfig: _propTypes.default.array.isRequired,
  // initialOrderBy - needed for order by filter
  initialOrderBy: _propTypes.default.string.isRequired,
  // checkBoxData - hold the checkbox data from external module
  checkBoxData: _propTypes.default.object,
  // setCheckBoxData - callback function that is called on change in selected rows
  setCheckBoxData: _propTypes.default.func,

  /** rowSelectionId - row id name (key) represent for each row id*/
  checkBoxIdentifier: _propTypes.default.string,

  /** checkboxDisabledIdentifier- hold the row Identifer name for disabling */
  checkboxDisabledIdentifier: _propTypes.default.string,

  /** function used to create the data object required to send to BE */
  filterData: _propTypes.default.func.isRequired,

  /** extractData - function used to extract data from the BE response, in an array form */
  extractData: _propTypes.default.func.isRequired,

  /** doubleClickCB - call back function that will be used when the user double click on  row in the table */
  doubleClickCB: _propTypes.default.func,

  /** sessionStorageIdentifier - string indicator for session storage, this indicator is required for supporting save of table filters for the current open tab */
  sessionStorageIdentifier: _propTypes.default.string,

  /** externalReloadFlag - an external inidcator when to reload the table */
  externalReloadFlag: _propTypes.default.number,

  /** rowKey - an identifier for the key of each record */
  rowKey: _propTypes.default.string,

  /** expandedRowRender - the component of an expandable row */
  expandedRowRender: _propTypes.default.any,

  /** expandIcon - the icon for expanding a row */
  expandIcon: _propTypes.default.any,

  /** expandedRowKeys - an array of the expanded rows */
  expandedRowKeys: _propTypes.default.array
};
CTable.defaultProps = {
  checkBoxData: {},
  setCheckBoxData: null,
  checkboxDisabledIdentifier: null,
  doubleClickCB: function doubleClickCB() {},
  sessionStorageIdentifier: null,
  rowSelectionId: null,
  expandedRowRender: null,
  expandIcon: null,
  expandedRowKeys: []
};