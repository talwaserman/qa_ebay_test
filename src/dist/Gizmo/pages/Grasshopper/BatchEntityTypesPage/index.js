"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = BatchEntityTypesPage;

require("antd/es/button/style/css");

var _button = _interopRequireDefault(require("antd/es/button"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

require("./style.less");

var _react = _interopRequireWildcard(require("react"));

var _cloneDeep = _interopRequireDefault(require("lodash/cloneDeep"));

var _get = _interopRequireDefault(require("lodash/get"));

var _sortBy = _interopRequireDefault(require("lodash/sortBy"));

var _shared = require("../../../shared");

var _utils = require("../../../utils");

var _services = require("./services");

var _StatusDropdown = _interopRequireDefault(require("./../BatchEntityTypeConfigurationPage/StatusDropdown"));

var _assigneesDropdown = _interopRequireDefault(require("./../BatchEntityTypesPage/assigneesDropdown"));

var _EntityTypeSiteData = _interopRequireDefault(require("./EntityTypeSiteData"));

function BatchEntityTypesPage() {
  var _useState = (0, _react.useState)({}),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      loggedUserData = _useState2[0],
      setLoggedUserData = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      usersData = _useState4[0],
      setUsersData = _useState4[1];

  var _useState5 = (0, _react.useState)(true),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      loadingData = _useState6[0],
      setLoadingData = _useState6[1];

  var _useState7 = (0, _react.useState)([]),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      expandedRowKeys = _useState8[0],
      setExpandedRowKeys = _useState8[1];

  var columnConfig = [{
    title: 'ET Name',
    dataIndex: 'name',
    filterType: 'text'
  }, {
    title: 'Number of Categories',
    dataIndex: 'numberOfCategories',
    filterType: ''
  }, {
    title: 'Assignee',
    dataIndex: '',
    render: renderAssigneeColumn,
    width: 150
  }, {
    title: 'Status',
    dataIndex: 'status',
    filterType: '',
    render: renderStatusColumn
  }];
  var batchId = (0, _utils.queryParam)('batchId');
  var batchName = (0, _utils.queryParam)('batchName');
  (0, _react.useEffect)(function () {
    setLoadingData(true);

    function fetchData() {
      return _fetchData.apply(this, arguments);
    }

    function _fetchData() {
      _fetchData = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var sortedUsers, loggedUser;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return getSortedUsersData();

              case 2:
                sortedUsers = _context.sent;
                _context.next = 5;
                return (0, _services.getLoggedInUser)();

              case 5:
                loggedUser = _context.sent;
                setUsersData(sortedUsers);
                setLoggedUserData(loggedUser);
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
  }, []);
  var batchIdFilter = {
    fieldName: 'batchId',
    fieldValue: [batchId],
    filterOperation: 'equals',
    filterType: 'text'
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "entity-types-page-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_shared.CBreadcrumb, {
    path: ['Metadata', 'Batch Entity Types']
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "entity-types-header-wrapper"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "main-header"
  }, batchName || 'Release'), /*#__PURE__*/_react.default.createElement("span", {
    className: "sub-header"
  }, "Batch Information & Assignee Management")), /*#__PURE__*/_react.default.createElement("div", {
    className: "table-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_shared.CTable, {
    doubleClickCB: onRowDoubleClick,
    columnConfig: columnConfig,
    fetchData: _services.getEntityTypes,
    filterData: filterData,
    extractData: extractData,
    loadingData: loadingData,
    initialOrderBy: 'name',
    expandedRowRender: function expandedRowRender(row) {
      return _expandedRowRender(row);
    },
    expandIcon: function expandIcon(row) {
      return _expandIcon(row);
    },
    expandedRowKeys: expandedRowKeys,
    rowKey: 'id'
  })));

  function _expandedRowRender(data) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "entity-type-sites-data-container"
    }, /*#__PURE__*/_react.default.createElement(_EntityTypeSiteData.default, {
      entityTypeRow: data,
      loggedUserData: loggedUserData,
      selectAssigneePlaceHolder: 'Select Assignee',
      assingeesList: usersData,
      onAssignedChanged: function onAssignedChanged(assigneeData, site) {
        return onSiteAssignedChanged(data, assigneeData, site);
      },
      rowId: data.id
    }));
  }

  function _expandIcon(data) {
    return /*#__PURE__*/_react.default.createElement(_button.default, {
      disabled: data.record.status === 'Aspect Design',
      icon: getExpandIcon(data.record),
      onClick: function onClick() {
        return onCollapseSingleRow(data.record);
      }
    });
  }

  function getExpandIcon(data) {
    return expandedRowKeys.includes(data.id) ? 'minus' : 'plus';
  }

  function onCollapseSingleRow(data) {
    var tempExpandRowKeys = (0, _cloneDeep.default)(expandedRowKeys);
    var toExpand = !expandedRowKeys.includes(data.id);
    collapseRow(data, tempExpandRowKeys, toExpand);
    setExpandedRowKeys(tempExpandRowKeys);
  }

  function collapseRow(data, expandRowKeys, toExpand) {
    var key = data.id;
    var index = expandRowKeys.indexOf(key);

    if (toExpand && index === -1) {
      expandRowKeys.push(key);
    }

    if (!toExpand && index !== -1) {
      expandRowKeys.splice(index, 1);
    }
  }

  function onRowDoubleClick(data) {
    var assignedSites = data.etSites.filter(function (site) {
      return site.assignee === loggedUserData.userId;
    }).map(function (site) {
      return site.site;
    });
    var viewMode = data.status === 'Aspect Design' && data.assigneeId !== loggedUserData.userId;
    window.open("#/grasshopper/entity-type-definition?batchId=".concat(batchId, "&batchName=").concat(batchName, "&rowId=").concat(data.id, "&entityTypeName=").concat(data.name, "&entityTypeStatus=").concat(data.status, "&assignedSites=").concat(assignedSites, "&viewMode=").concat(viewMode), '_self');
  }

  function filterData(filters, orderBy, orderType, currentPage) {
    var filterArray = Object.keys(filters).map(function (key) {
      return filters[key];
    });
    filterArray.unshift(batchIdFilter);
    var dataObj = {
      dataFilterContracts: filterArray,
      orderBy: orderBy || '',
      orderType: orderType || 'DESC',
      pageNumber: currentPage || 1
    };
    return dataObj;
  }

  function extractData(data) {
    return data.entityTypeRowContractList;
  }

  function renderStatusColumn(data) {
    return /*#__PURE__*/_react.default.createElement(_StatusDropdown.default, {
      selectedStatus: data,
      statusList: ['Aspect Translation', 'Aspect Design', 'Aspect Mapping'],
      disableDropdown: true,
      onStatusChanged: function onStatusChanged() {} // currently does nothing

    });
  }

  function renderAssigneeColumn(row) {
    if (!usersData.length) return /*#__PURE__*/_react.default.createElement("div", null);
    var currentAssigneeData = usersData.filter(function (user) {
      return user.userId === row.assigneeId;
    })[0];
    return /*#__PURE__*/_react.default.createElement(_assigneesDropdown.default, {
      loggedUserData: loggedUserData,
      currentAssigneeData: currentAssigneeData,
      selectAssigneePlaceHolder: 'Select Assignee',
      assingeesList: usersData,
      onAssignedChanged: function onAssignedChanged(assigneeRowData) {
        return _onAssignedChanged(assigneeRowData, row);
      },
      rowId: row.id
    });
  }

  function _onAssignedChanged(_x, _x2) {
    return _onAssignedChanged2.apply(this, arguments);
  }

  function _onAssignedChanged2() {
    _onAssignedChanged2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(assigneeRowData, row) {
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              row.assigneeId = assigneeRowData.currentUserId;
              _context2.prev = 1;
              _context2.next = 4;
              return (0, _services.assignRowToUser)({
                rowId: assigneeRowData.rowId,
                previousUserId: assigneeRowData.previousUserId,
                currentUserId: assigneeRowData.currentUserId
              });

            case 4:
              _context2.next = 9;
              break;

            case 6:
              _context2.prev = 6;
              _context2.t0 = _context2["catch"](1);
              row.assigneeId = assigneeRowData.previousUserId;

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 6]]);
    }));
    return _onAssignedChanged2.apply(this, arguments);
  }

  function onSiteAssignedChanged(_x3, _x4, _x5) {
    return _onSiteAssignedChanged.apply(this, arguments);
  }

  function _onSiteAssignedChanged() {
    _onSiteAssignedChanged = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(row, assigneeRowData, site) {
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              updateAssigneeInContract(row, assigneeRowData, site);
              _context3.next = 3;
              return (0, _services.assignRowToUser)({
                rowId: assigneeRowData.rowId,
                previousUserId: assigneeRowData.previousUserId,
                currentUserId: assigneeRowData.currentUserId,
                siteId: site.id
              });

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _onSiteAssignedChanged.apply(this, arguments);
  }

  function getSortedUsersData() {
    return _getSortedUsersData.apply(this, arguments);
  }

  function _getSortedUsersData() {
    _getSortedUsersData = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
      var usersDataResponse, sortedUsersDataResponse;
      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return (0, _services.getUsers)();

            case 2:
              usersDataResponse = _context4.sent;
              sortedUsersDataResponse = (0, _cloneDeep.default)((0, _get.default)(usersDataResponse, 'users', {}));
              sortedUsersDataResponse = (0, _sortBy.default)(sortedUsersDataResponse, function (value) {
                return value.display.toUpperCase();
              });
              sortedUsersDataResponse.unshift({
                userId: '',
                userName: '',
                display: '    '
              });
              return _context4.abrupt("return", sortedUsersDataResponse);

            case 7:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));
    return _getSortedUsersData.apply(this, arguments);
  }

  function updateAssigneeInContract(row, assigneeRowData, site) {
    var index = row.etSites.findIndex(function (s) {
      return s.site === site.name;
    });

    if (index !== -1) {
      row.etSites[index].assignee = assigneeRowData.currentUserId;
    }
  }
}