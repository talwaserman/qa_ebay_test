"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NotificationConfigurationPage;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

require("antd/es/icon/style/css");

var _icon = _interopRequireDefault(require("antd/es/icon"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

require("antd/es/button/style/css");

var _button = _interopRequireDefault(require("antd/es/button"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

require("antd/es/modal/style/css");

var _modal = _interopRequireDefault(require("antd/es/modal"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _uniqBy = _interopRequireDefault(require("lodash/uniqBy"));

var _map = _interopRequireDefault(require("lodash/map"));

var _sortBy = _interopRequireDefault(require("lodash/sortBy"));

var _get = _interopRequireDefault(require("lodash/get"));

var _cloneDeep = _interopRequireDefault(require("lodash/cloneDeep"));

var _CGTable = _interopRequireDefault(require("../../shared/CGTable"));

var _GenericModal = _interopRequireDefault(require("../../shared/GenericModal"));

var _CBreadcrumb = _interopRequireDefault(require("../../shared/CBreadcrumb"));

var _MultiSelectionPopUp = _interopRequireDefault(require("./MultiSelectionPopUp"));

var _services = require("./services");

require("./style.less");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function NotificationConfigurationPage() {
  var _useState = (0, _react.useState)({}),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      sortedInfo = _useState2[0],
      setSortedInfo = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      tableData = _useState4[0],
      setTableData = _useState4[1];

  var _useState5 = (0, _react.useState)(true),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      loadingData = _useState6[0],
      setLoadingData = _useState6[1];

  var _useState7 = (0, _react.useState)([]),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      columnConfig = _useState8[0],
      setColumnConfig = _useState8[1];

  var _useState9 = (0, _react.useState)({
    placeHolder1: 'Notificaion Type',
    placeHolder2: 'Activity',
    placeHolder3: 'Assignees',
    selectionData: []
  }),
      _useState10 = (0, _slicedToArray2.default)(_useState9, 2),
      configurationPopUpData = _useState10[0],
      setConfigurationPopUpData = _useState10[1];

  var _useState11 = (0, _react.useState)(0),
      _useState12 = (0, _slicedToArray2.default)(_useState11, 2),
      reloadFlag = _useState12[0],
      updateReloadFlage = _useState12[1];

  var _useState13 = (0, _react.useState)(false),
      _useState14 = (0, _slicedToArray2.default)(_useState13, 2),
      shouldBeVisible = _useState14[0],
      setShouldBeVisible = _useState14[1];

  var _useState15 = (0, _react.useState)(false),
      _useState16 = (0, _slicedToArray2.default)(_useState15, 2),
      editShouldBeVisible = _useState16[0],
      setEditShouldBeVisible = _useState16[1];

  var _useState17 = (0, _react.useState)({
    type: null,
    activity: null,
    users: null
  }),
      _useState18 = (0, _slicedToArray2.default)(_useState17, 2),
      editRecord = _useState18[0],
      setEditRecord = _useState18[1];

  var _useState19 = (0, _react.useState)(),
      _useState20 = (0, _slicedToArray2.default)(_useState19, 2),
      filterInfo = _useState20[0],
      setFilterInfo = _useState20[1];

  var confirm = _modal.default.confirm;
  (0, _react.useEffect)(function () {
    setLoadingData(true);

    function fetchData() {
      return _fetchData.apply(this, arguments);
    }

    function _fetchData() {
      _fetchData = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var res, tempFilterInfo;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _services.getNotifications)();

              case 2:
                res = _context.sent;
                tempFilterInfo = extractFilterValues(res.notifications);
                setFilterInfo(tempFilterInfo);
                setTableData(res.notifications);
                setColumnConfig([{
                  title: 'Notification Type',
                  dataIndex: 'type',
                  key: 'type',
                  filters: (0, _uniqBy.default)(tempFilterInfo.type, function (obj) {
                    return obj.value;
                  }),
                  sorter: function sorter(a, b) {
                    return a.type.length - b.type.length;
                  },
                  sortOrder: sortedInfo.columnKey === 'type' && sortedInfo.order,
                  onFilter: function onFilter(value, record) {
                    return record.type.includes(value);
                  },
                  filterType: 'text'
                }, {
                  title: 'Activity',
                  dataIndex: 'activity',
                  key: 'activity',
                  filters: (0, _uniqBy.default)(tempFilterInfo.activity, function (obj) {
                    return obj.value;
                  }),
                  sorter: function sorter(a, b) {
                    return a.activity.length - b.activity.length;
                  },
                  sortOrder: sortedInfo.columnKey === 'activity' && sortedInfo.order,
                  onFilter: function onFilter(value, record) {
                    return record.activity.includes(value);
                  },
                  filterType: 'text'
                }, {
                  title: 'User Assigned',
                  dataIndex: 'users',
                  key: 'users',
                  filters: (0, _uniqBy.default)(tempFilterInfo.users, function (obj) {
                    return obj.value;
                  }),
                  sorter: function sorter(a, b) {
                    return JSON.stringify(a.users).length - JSON.stringify(b.users).length;
                  },
                  sortOrder: sortedInfo.columnKey === 'activity' && sortedInfo.order,
                  render: function render(assingedUsers) {
                    return assingedUsers.map(function (assignedUser, index) {
                      return (index ? ', ' : '') + assignedUser.display;
                    });
                  },
                  onFilter: function onFilter(value, record) {
                    return record.users.some(function (user) {
                      return user.display === value;
                    });
                  },
                  filterType: 'text'
                }, {
                  title: '',
                  dataIndex: '',
                  filterType: '',
                  render: function render(record) {
                    return /*#__PURE__*/_react.default.createElement("div", {
                      className: "notification-configuration-control"
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
                }]);
                setLoadingData(false);

              case 8:
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
  (0, _react.useEffect)(function () {
    if (!filterInfo) {
      return;
    }

    setColumnConfig([{
      title: 'Notification Type',
      dataIndex: 'type',
      key: 'type',
      filters: (0, _uniqBy.default)(filterInfo.type, function (obj) {
        return obj.value;
      }),
      sorter: function sorter(a, b) {
        return a.type.length - b.type.length;
      },
      sortOrder: sortedInfo.columnKey === 'type' && sortedInfo.order,
      onFilter: function onFilter(value, record) {
        return record.type.includes(value);
      }
    }, {
      title: 'Activity',
      dataIndex: 'activity',
      key: 'activity',
      filters: (0, _uniqBy.default)(filterInfo.activity, function (obj) {
        return obj.value;
      }),
      sorter: function sorter(a, b) {
        return a.activity.length - b.activity.length;
      },
      sortOrder: sortedInfo.columnKey === 'activity' && sortedInfo.order,
      onFilter: function onFilter(value, record) {
        return record.activity.includes(value);
      }
    }, {
      title: 'User Assigned',
      dataIndex: 'users',
      key: 'users',
      filters: (0, _uniqBy.default)(filterInfo.users, function (obj) {
        return obj.value;
      }),
      sorter: function sorter(a, b) {
        return JSON.stringify(a.users).length - JSON.stringify(b.users).length;
      },
      sortOrder: sortedInfo.columnKey === 'activity' && sortedInfo.order,
      render: function render(assingedUsers) {
        return /*#__PURE__*/_react.default.createElement("p", null, assingedUsers.map(function (assignedUser, index) {
          return (index ? ', ' : '') + assignedUser.display;
        }));
      },
      onFilter: function onFilter(value, record) {
        return record.users.some(function (user) {
          return user.display === value;
        });
      }
    }, {
      title: '',
      dataIndex: '',
      render: function render(record) {
        return /*#__PURE__*/_react.default.createElement("div", {
          className: "notification-configuration-control"
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
    }]);
  }, [sortedInfo]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "notification-configuration-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_CBreadcrumb.default, {
    path: ['Task Management', 'Notification', 'Configuration']
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "table-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "notification-configuration-actions-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "notification-configuration-actions"
  }, /*#__PURE__*/_react.default.createElement(_button.default, {
    type: "primary",
    icon: "plus",
    onClick: onNotificationHandler
  }, "Add Configuration"))), /*#__PURE__*/_react.default.createElement(_CGTable.default, {
    columnConfig: columnConfig,
    tableData: tableData,
    size: 'small',
    initialOrderBy: 'type',
    initialOrderType: 'descend',
    loadingData: loadingData,
    onSortInfoChange: function onSortInfoChange(sortInfoData) {
      return _onSortInfoChange(sortInfoData);
    },
    reloadTable: reloadTable
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "right-side-explainer"
  }, /*#__PURE__*/_react.default.createElement(_icon.default, {
    type: "notification",
    className: "notification-icon"
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("p", null, "Notify people when activities are done by assigning them to the required activity.", /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), "When adding new configuration you can select from the list activities and then add the required assignee")), shouldBeVisible && /*#__PURE__*/_react.default.createElement(_GenericModal.default, {
    isOkDisabledInitialValue: true,
    width: 605,
    modalTitle: 'Add New Notification',
    onCancel: onCancel,
    onOk: onOk,
    okText: 'Save',
    modalContent: /*#__PURE__*/_react.default.createElement(_MultiSelectionPopUp.default, {
      multiSelectionPopUpData: configurationPopUpData,
      dropDownKeyLabel1: 'ktype',
      dropDownKeyLabel2: 'kactivity',
      dropDownKeyLabel3: 'kassignees',
      componentTitle: 'Add New Notification',
      multiSelectionTitle: 'Assignees',
      multiSelectionData: getSortedUsersData,
      existingData: tableData
    }),
    modalVisibleState: shouldBeVisible
  }) || editShouldBeVisible && /*#__PURE__*/_react.default.createElement(_GenericModal.default, {
    isOkDisabledInitialValue: true,
    width: 605,
    modalTitle: 'Edit Notification',
    onCancel: onCancel,
    onOk: onOk,
    okText: 'Save',
    modalContent: /*#__PURE__*/_react.default.createElement(_MultiSelectionPopUp.default, {
      multiSelectionPopUpData: configurationPopUpData,
      dropDownKeyLabel1: 'ktype',
      dropDownKeyLabel2: 'kactivity',
      dropDownKeyLabel3: 'kassignees',
      componentTitle: 'Edit Notification',
      multiSelectionTitle: 'Assignees',
      multiSelectionData: getSortedUsersData,
      existingData: tableData,
      isDisabledFirstSelection: true,
      isDisabledSecondSelection: true,
      editSelectedData: editRecord
    }),
    modalVisibleState: editShouldBeVisible
  })));

  function _onSortInfoChange(sortInfoData) {
    setSortedInfo(sortInfoData);
  }

  function reloadTable() {
    updateReloadFlage(reloadFlag + 1);
  }

  function onNotificationHandler() {
    return _onNotificationHandler.apply(this, arguments);
  }

  function _onNotificationHandler() {
    _onNotificationHandler = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return getConfigurationPopupData();

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _onNotificationHandler.apply(this, arguments);
  }

  function getConfigurationPopupData() {
    return _getConfigurationPopupData.apply(this, arguments);
  }

  function _getConfigurationPopupData() {
    _getConfigurationPopupData = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
      var notificationDataResponse;
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return (0, _services.getNotificationTypeData)();

            case 2:
              notificationDataResponse = _context3.sent;
              setConfigurationPopUpData({
                placeHolder1: configurationPopUpData.placeHolder1,
                placeHolder2: configurationPopUpData.placeHolder2,
                placeHolder3: configurationPopUpData.placeHolder3,
                selectionData: notificationDataResponse
              });
              setShouldBeVisible(true);

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _getConfigurationPopupData.apply(this, arguments);
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
              return _context4.abrupt("return", sortedUsersDataResponse);

            case 6:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));
    return _getSortedUsersData.apply(this, arguments);
  }

  function onCancel() {
    setShouldBeVisible(false);
    setEditShouldBeVisible(false);
  }

  function onOk(_x) {
    return _onOk.apply(this, arguments);
  }

  function _onOk() {
    _onOk = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(data) {
      return _regenerator.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return saveConfigurationData(_objectSpread(_objectSpread({}, data), {}, {
                users: data.users.map(function (item) {
                  return {
                    id: item.id
                  };
                })
              }));

            case 2:
              setShouldBeVisible(false);
              setEditShouldBeVisible(false);
              reloadTable();

            case 5:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));
    return _onOk.apply(this, arguments);
  }

  function onDeleteConfirm(_x2) {
    return _onDeleteConfirm.apply(this, arguments);
  }

  function _onDeleteConfirm() {
    _onDeleteConfirm = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7(record) {
      return _regenerator.default.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              confirm({
                title: 'Are you sure, you want to delete this notification?',
                onOk: function onOk() {
                  return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6() {
                    return _regenerator.default.wrap(function _callee6$(_context6) {
                      while (1) {
                        switch (_context6.prev = _context6.next) {
                          case 0:
                            _context6.next = 2;
                            return callDeleteNotification(record);

                          case 2:
                            reloadTable();

                          case 3:
                          case "end":
                            return _context6.stop();
                        }
                      }
                    }, _callee6);
                  }))();
                },
                onCancel: function onCancel() {}
              });

            case 1:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));
    return _onDeleteConfirm.apply(this, arguments);
  }

  function onClickEditIcon(record) {
    setEditShouldBeVisible(true);
    setEditRecord({
      type: record.type,
      activity: record.activity,
      users: record.users
    });
  }

  function callDeleteNotification(_x3) {
    return _callDeleteNotification.apply(this, arguments);
  }

  function _callDeleteNotification() {
    _callDeleteNotification = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee8(record) {
      return _regenerator.default.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return (0, _services.deleteNotification)({
                type: record.type,
                activity: record.activity
              });

            case 2:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    }));
    return _callDeleteNotification.apply(this, arguments);
  }

  function saveConfigurationData(_x4) {
    return _saveConfigurationData.apply(this, arguments);
  }

  function _saveConfigurationData() {
    _saveConfigurationData = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee9(selectedData) {
      return _regenerator.default.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              _context9.next = 2;
              return (0, _services.addNotification)({
                notification: {
                  type: selectedData.type,
                  activity: selectedData.activity,
                  users: selectedData.users
                }
              });

            case 2:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9);
    }));
    return _saveConfigurationData.apply(this, arguments);
  }

  function extractFilterValues(notifications) {
    var filterValues = {};
    var tempNotifications = Object.assign([], notifications);
    var filterDataIndex = Object.keys(tempNotifications[0]);
    filterDataIndex.forEach(function (filterIndex) {
      var indexes = (0, _map.default)(tempNotifications, filterIndex);
      indexes.forEach(function (index) {
        if (Array.isArray(index)) {
          index.forEach(function (user) {
            addFilteredValue(filterIndex, user.display);
          });
        } else {
          addFilteredValue(filterIndex, index);
        }
      });
    });
    return filterValues;

    function addFilteredValue(filterIndex, value) {
      if (filterValues[filterIndex]) {
        filterValues[filterIndex].push({
          text: value,
          value: value
        });
      } else {
        filterValues[filterIndex] = [{
          text: value,
          value: value
        }];
      }
    }
  }
}