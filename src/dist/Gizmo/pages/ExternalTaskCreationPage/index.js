"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ExternalTaskCreationPage;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

require("antd/es/icon/style/css");

var _icon = _interopRequireDefault(require("antd/es/icon"));

require("antd/es/button/style/css");

var _button = _interopRequireDefault(require("antd/es/button"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

require("antd/es/modal/style/css");

var _modal = _interopRequireDefault(require("antd/es/modal"));

require("./style.less");

var _react = _interopRequireWildcard(require("react"));

var _uniq = _interopRequireDefault(require("lodash/uniq"));

var _shared = require("../../shared");

var _services = require("./services");

var confirm = _modal.default.confirm;

function ExternalTaskCreationPage(_ref) {
  var downloadUrlPrefix = _ref.downloadUrlPrefix;

  var _useState = (0, _react.useState)({
    allSelectedRowIds: {},
    allSelectedRows: {}
  }),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      checkBoxData = _useState2[0],
      setCheckBoxData = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      validationError = _useState4[0],
      setValidationError = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      deletingTask = _useState6[0],
      setDeletingTask = _useState6[1];

  var _useState7 = (0, _react.useState)(0),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      externalReloadFlag = _useState8[0],
      setExternalReloadFlag = _useState8[1];

  var columnConfig = [{
    title: 'Task Type',
    dataIndex: 'taskType',
    filterType: 'text'
  }, {
    title: 'Sample Name',
    dataIndex: 'sampleName',
    filterType: 'text'
  }, {
    title: 'Audit Sub ID',
    dataIndex: 'subTaskId',
    filterType: 'text'
  }, {
    title: 'Site ID',
    dataIndex: 'site',
    filterKey: 'sites',
    filterType: 'single-select',
    filterOperation: 'text-dropdown'
  }, {
    title: 'Creation Date',
    dataIndex: 'creationDate',
    filterType: 'text'
  }, {
    title: 'Upload files',
    dataIndex: 'inputFiles',
    filterKey: 'text',
    excludeOrderBy: true,
    filterType: '',
    render: renderDownloadInputLink
  }, {
    title: 'Result files',
    dataIndex: 'outputFiles',
    filterKey: 'text',
    excludeOrderBy: true,
    filterType: '',
    render: renderDownloadOutputLink
  }, {
    title: 'Candidates',
    filterType: '',
    dataIndex: 'candidates',
    filterKey: 'text',
    excludeOrderBy: true
  }, {
    title: 'Task ID',
    dataIndex: 'gizmoTaskId',
    filterType: '',
    filterKey: 'text'
  }, {
    title: 'Task Status',
    dataIndex: 'gimzoTaskStatus',
    filterKey: 'jobStates',
    filterType: 'single-select',
    filterOperation: 'text-dropdown'
  }];
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "external-task-creation-page-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_shared.CBreadcrumb, {
    path: ['Task Management', 'Settings', 'External Task Creation']
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "external-task-actions-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "external-task-actions"
  }, /*#__PURE__*/_react.default.createElement(_button.default, {
    type: "primary",
    icon: "plus",
    disabled: checkBoxDataValues().length === 0 || validationError,
    onClick: createTaskHandler
  }, "Create Task"), /*#__PURE__*/_react.default.createElement(_button.default, {
    loading: deletingTask,
    type: "danger",
    icon: "delete",
    disabled: checkBoxDataValues().length === 0 || validationError,
    onClick: deleteTaskHandler
  }, "Delete Task"), validationError === true && /*#__PURE__*/_react.default.createElement("div", {
    className: "duplicate-message"
  }, 'Selection of different Task Types are not allowed'))), /*#__PURE__*/_react.default.createElement("div", {
    className: "table-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_shared.CTable, {
    columnConfig: columnConfig,
    fetchData: _services.fetchData,
    initialOrderBy: 'creationDate',
    checkBoxData: checkBoxData.allSelectedRowIds,
    setCheckBoxData: setCheckBoxData,
    checkBoxIdentifier: 'rowId',
    checkboxDisabledIdentifier: 'gizmoTaskId',
    extractData: extractData,
    filterData: filterData,
    sessionStorageIdentifier: 'external_task_creation_table',
    selectedRowsValidator: selectedRowsValidator,
    externalReloadFlag: externalReloadFlag,
    rowKey: 'rowId'
  })));

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

  function extractData(res) {
    return res.filteredAmlTaskContract;
  }

  function checkBoxDataValues() {
    return Object.values(checkBoxData.allSelectedRowIds).flat(1);
  }

  function createTaskHandler() {
    var taskType = checkBoxData.allSelectedRows[0].taskType; // taking from position 0, since only same tasktype is allowed to be selected

    window.location.href = "/#/vendor-management/new-job?taskType=".concat(taskType, "&externalTaskIds=").concat(checkBoxData.allSelectedRowIds[1].join());
  }

  function deleteTaskHandler() {
    confirm({
      title: 'Are you sure you want to delete the selected tasks?',
      icon: /*#__PURE__*/_react.default.createElement(_icon.default, {
        type: "warning"
      }),
      content: '',
      onOk: function onOk() {
        confirmDeleteHandler();
      },
      onCancel: function onCancel() {}
    });
  }

  function confirmDeleteHandler() {
    return _confirmDeleteHandler.apply(this, arguments);
  }

  function _confirmDeleteHandler() {
    _confirmDeleteHandler = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var request;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setDeletingTask(true);
              request = {
                rowIds: checkBoxDataValues()
              };
              _context.next = 4;
              return (0, _services.deleteExternalTask)(request);

            case 4:
              setDeletingTask(false);
              setCheckBoxData({
                allSelectedRowIds: {},
                allSelectedRows: {}
              });
              setExternalReloadFlag(externalReloadFlag + 1);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _confirmDeleteHandler.apply(this, arguments);
  }

  function selectedRowsValidator(selectedData) {
    var taskTypeValues = selectedData.map(function (item) {
      return item.taskType;
    });

    if (taskTypeValues.length === 0) {
      setValidationError(false);
    } else if (!isUniq(taskTypeValues)) {
      setValidationError(true);
      setCheckBoxData({
        allSelectedRowIds: {},
        allSelectedRows: {}
      });
    } else {
      setValidationError(false);
    }
  }

  function isUniq(taskTypeValues) {
    return (0, _uniq.default)(taskTypeValues).length === 1;
  }

  function renderDownloadInputLink(actionButtons, data) {
    return data ? /*#__PURE__*/_react.default.createElement("div", {
      className: 'external-task-download-wrapper'
    }, /*#__PURE__*/_react.default.createElement("a", {
      rel: "noopener noreferrer",
      target: "_blank",
      href: "".concat(downloadUrlPrefix, "/external-task/download-file/").concat(data.rowId, "/", 'input')
    }, "Download")) : /*#__PURE__*/_react.default.createElement("div", null);
  }

  function renderDownloadOutputLink(actionButtons, data) {
    return data && data.gimzoTaskStatus === 'DONE' ? /*#__PURE__*/_react.default.createElement("div", {
      className: 'external-task-download-wrapper'
    }, /*#__PURE__*/_react.default.createElement("a", {
      rel: "noopener noreferrer",
      target: "_blank",
      href: "".concat(downloadUrlPrefix, "/external-task/download-file/").concat(data.rowId, "/", 'output')
    }, "Download")) : /*#__PURE__*/_react.default.createElement("div", null);
  }
}