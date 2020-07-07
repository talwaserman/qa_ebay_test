"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = BatchEntityTypeConfigurationPage;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

require("antd/es/tooltip/style/css");

var _tooltip = _interopRequireDefault(require("antd/es/tooltip"));

require("antd/es/icon/style/css");

var _icon = _interopRequireDefault(require("antd/es/icon"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

require("antd/es/button/style/css");

var _button = _interopRequireDefault(require("antd/es/button"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

require("antd/es/modal/style/css");

var _modal = _interopRequireDefault(require("antd/es/modal"));

require("./style.less");

var _react = _interopRequireWildcard(require("react"));

var _cloneDeep = _interopRequireDefault(require("lodash/cloneDeep"));

var _shared = require("../../../shared");

var _CUpload = _interopRequireDefault(require("./CUpload"));

var _EntityTypeBatchFileFormat = _interopRequireDefault(require("./images/EntityTypeBatchFileFormat.png"));

var _StatusDropdown = _interopRequireDefault(require("./StatusDropdown"));

var _UpdateEntityType = _interopRequireDefault(require("./UpdateEntityType"));

var _DisabledScreen = _interopRequireDefault(require("./DisabledScreen"));

var _services = require("./services");

var confirm = _modal.default.confirm;
var popoverMessage = 'The file format should be a Strawman .xlsx file with the following values';

function BatchEntityTypeConfigurationPage() {
  var defaultBatch = {
    id: '',
    name: '',
    numberOfET: 0,
    creationDate: null,
    dueDate: null,
    status: null
  };

  var _useState = (0, _react.useState)(1),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      tableReloadFlag = _useState2[0],
      setTableReloadFlag = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      isAddBatchModalOpen = _useState4[0],
      setAddBatchModalOpen = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      isUpdateBatchModalOpen = _useState6[0],
      setUpdateBatchModalOpen = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      isUploadBatchModalOpen = _useState8[0],
      setUploadBatchModalOpen = _useState8[1];

  var _useState9 = (0, _react.useState)(defaultBatch),
      _useState10 = (0, _slicedToArray2.default)(_useState9, 2),
      selectedBatch = _useState10[0],
      setSelectedBatch = _useState10[1];

  var _useState11 = (0, _react.useState)(false),
      _useState12 = (0, _slicedToArray2.default)(_useState11, 2),
      addingBatch = _useState12[0],
      setAddingBatch = _useState12[1];

  var _useState13 = (0, _react.useState)(''),
      _useState14 = (0, _slicedToArray2.default)(_useState13, 2),
      uploadModalMessage = _useState14[0],
      setUploadModalMessage = _useState14[1];

  var _useState15 = (0, _react.useState)(false),
      _useState16 = (0, _slicedToArray2.default)(_useState15, 2),
      isUploading = _useState16[0],
      setUploading = _useState16[1];

  var columnConfig = [{
    title: 'Batch Name',
    dataIndex: 'name',
    filterType: 'text'
  }, {
    title: 'Number of ET',
    dataIndex: 'numberOfET',
    filterType: ''
  }, {
    title: 'Creation Date',
    dataIndex: 'creationDate',
    filterType: 'date',
    filterOperation: 'equal-date'
  }, {
    title: 'Due Date',
    dataIndex: 'dueDate',
    filterType: 'date',
    filterOperation: 'equal-date'
  }, {
    title: 'Status',
    dataIndex: 'status',
    render: renderStatusDropdown
  }, {
    title: '',
    dataIndex: '',
    render: renderActionsColumn,
    width: 230
  }];
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "entity-type-configuration-page-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_shared.CBreadcrumb, {
    path: ['Metadata', 'Entity Type Configuration']
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "entity-type-header-wrapper"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "main-header"
  }, "Entity Type Configuration"), /*#__PURE__*/_react.default.createElement("span", {
    className: "sub-header"
  }, "Planned ET batch overview and configuration")), /*#__PURE__*/_react.default.createElement("div", {
    className: "entity-type-actions-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "entity-type-actions"
  }, /*#__PURE__*/_react.default.createElement(_button.default, {
    loading: addingBatch,
    type: "primary",
    icon: "plus",
    disabled: false,
    onClick: onAddBatchClick
  }, "Add New Batch"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "table-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_shared.CTable, {
    doubleClickCB: onRowDoubleClick,
    columnConfig: columnConfig,
    fetchData: _services.fetchData,
    initialOrderBy: 'creationDate',
    extractData: extractData,
    filterData: filterData,
    sessionStorageIdentifier: 'entity_type_configuration_table',
    externalReloadFlag: tableReloadFlag,
    rowKey: 'id'
  })), /*#__PURE__*/_react.default.createElement(_shared.GenericModal, {
    modalVisibleState: isAddBatchModalOpen,
    modalTitle: 'Add new ET Batch',
    isOkDisabledInitialValue: true,
    modalContent: /*#__PURE__*/_react.default.createElement(_UpdateEntityType.default, {
      mode: 'add',
      batchDetails: (0, _cloneDeep.default)(selectedBatch),
      handleModalChange: function handleModalChange() {}
    }),
    width: 400,
    onOk: onAddBatchModalOk,
    onCancel: onAddBatchModalCancel,
    okText: 'Save'
  }), /*#__PURE__*/_react.default.createElement(_shared.GenericModal, {
    modalVisibleState: isUpdateBatchModalOpen,
    modalTitle: 'Update Batch',
    modalContent: /*#__PURE__*/_react.default.createElement(_UpdateEntityType.default, {
      mode: 'update',
      batchDetails: (0, _cloneDeep.default)(selectedBatch),
      handleModalChange: function handleModalChange() {}
    }),
    width: 400,
    onOk: onUpdateBatchModalOk,
    onCancel: onUpdateBatchModalCancel,
    okText: 'Update'
  }), /*#__PURE__*/_react.default.createElement(_shared.GenericModal, {
    modalVisibleState: isUploadBatchModalOpen,
    modalContent: /*#__PURE__*/_react.default.createElement(_CUpload.default, {
      handleModalChange: function handleModalChange() {},
      fileTypes: '.xlsx,.xls',
      message: uploadModalMessage,
      multiple: false,
      popoverMessage: popoverMessage,
      fileFormatImage: _EntityTypeBatchFileFormat.default
    }),
    isOkDisabledInitialValue: true,
    modalTitle: 'Upload Entity Type Configuration File',
    onOk: onUploadBatchModalOk,
    onCancel: onUploadBatchModalCancel,
    okText: 'Save'
  }), isUploading && /*#__PURE__*/_react.default.createElement(_DisabledScreen.default, null));

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
    return res.batchContractList;
  }

  function onAddBatchClick() {
    setAddBatchModalOpen(true);
  }

  function onUpdateBatchClick(data) {
    setSelectedBatch(data);
    setUpdateBatchModalOpen(true);
  }

  function onExportBatchClick(_x) {
    return _onExportBatchClick.apply(this, arguments);
  }

  function _onExportBatchClick() {
    _onExportBatchClick = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(batchId) {
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0, _services.exportBatch)(batchId);

            case 2:
              setTableReloadFlag(tableReloadFlag + 1);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _onExportBatchClick.apply(this, arguments);
  }

  function onDeleteBatchClick(batchId) {
    confirm({
      title: 'Are you sure you want to delete this ET batch?',
      icon: /*#__PURE__*/_react.default.createElement(_icon.default, {
        type: "warning"
      }),
      content: '',
      onOk: function onOk() {
        performDelete(batchId);
      },
      onCancel: function onCancel() {}
    });
  }

  function onUploadBatchClick(batch) {
    setSelectedBatch(batch);
    setUploadModalMessage( /*#__PURE__*/_react.default.createElement("span", null, "Upload ET Configuration File For Batch: ", /*#__PURE__*/_react.default.createElement("b", null, batch.name)));
    setUploadBatchModalOpen(true);
  }

  function performDelete(_x2) {
    return _performDelete.apply(this, arguments);
  }

  function _performDelete() {
    _performDelete = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(batchId) {
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return (0, _services.deleteBatch)(batchId);

            case 2:
              setTableReloadFlag(tableReloadFlag + 1);

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _performDelete.apply(this, arguments);
  }

  function onAddBatchModalOk(_x3) {
    return _onAddBatchModalOk.apply(this, arguments);
  }

  function _onAddBatchModalOk() {
    _onAddBatchModalOk = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(data) {
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              setAddingBatch(true);
              setAddBatchModalOpen(false);
              _context3.next = 4;
              return (0, _services.addNewBatch)(data.name, data.dueDate);

            case 4:
              setAddingBatch(false);
              setTableReloadFlag(tableReloadFlag + 1);
              setSelectedBatch(defaultBatch);

            case 7:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _onAddBatchModalOk.apply(this, arguments);
  }

  function onUpdateBatchModalOk(_x4) {
    return _onUpdateBatchModalOk.apply(this, arguments);
  }

  function _onUpdateBatchModalOk() {
    _onUpdateBatchModalOk = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(data) {
      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              setUpdateBatchModalOpen(false);
              _context4.next = 3;
              return (0, _services.updateBatch)(data);

            case 3:
              setTableReloadFlag(tableReloadFlag + 1);
              setSelectedBatch(defaultBatch);

            case 5:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));
    return _onUpdateBatchModalOk.apply(this, arguments);
  }

  function onUploadBatchModalOk(_x5) {
    return _onUploadBatchModalOk.apply(this, arguments);
  }

  function _onUploadBatchModalOk() {
    _onUploadBatchModalOk = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(fileContracts) {
      var batchId, fileContract;
      return _regenerator.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              setUploadBatchModalOpen(false);
              setUploading(true);
              batchId = selectedBatch.id;
              fileContract = fileContracts[0];
              _context5.next = 6;
              return (0, _services.uploadBatch)(batchId, fileContract);

            case 6:
              setUploading(false);

            case 7:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));
    return _onUploadBatchModalOk.apply(this, arguments);
  }

  function onAddBatchModalCancel() {
    setAddBatchModalOpen(false);
    setSelectedBatch(defaultBatch);
  }

  function onUpdateBatchModalCancel() {
    setUpdateBatchModalOpen(false);
    setSelectedBatch(defaultBatch);
  }

  function onUploadBatchModalCancel() {
    setUploadBatchModalOpen(false);
    setSelectedBatch(defaultBatch);
  }

  function renderStatusDropdown(actionButtons, data) {
    return /*#__PURE__*/_react.default.createElement(_StatusDropdown.default, {
      selectedStatus: data.status,
      statusList: ['OPEN'],
      disableDropdown: true,
      onStatusChanged: function onStatusChanged() {} // currently does nothing

    });
  }

  function renderActionsColumn(actionButtons, data) {
    var disableDelete = data.numberOfET !== 0;
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "entity-type-actions-column-wrapper"
    }, /*#__PURE__*/_react.default.createElement(_tooltip.default, {
      placement: "left",
      title: 'Upload ET configuration file'
    }, /*#__PURE__*/_react.default.createElement(_button.default, {
      icon: "upload",
      onClick: function onClick() {
        return onUploadBatchClick(data);
      }
    })), /*#__PURE__*/_react.default.createElement(_tooltip.default, {
      placement: "left",
      title: 'Edit batch'
    }, /*#__PURE__*/_react.default.createElement(_button.default, {
      icon: "edit",
      onClick: function onClick() {
        return onUpdateBatchClick(data);
      }
    })), disableDelete && /*#__PURE__*/_react.default.createElement(_tooltip.default, {
      placement: "left",
      title: 'A batch with 1 entity type or more cannot be deleted'
    }, /*#__PURE__*/_react.default.createElement(_button.default, {
      icon: "delete",
      disabled: disableDelete,
      onClick: function onClick() {
        return onDeleteBatchClick(data.id);
      }
    })), !disableDelete && /*#__PURE__*/_react.default.createElement(_tooltip.default, {
      placement: "left",
      title: 'Delete batch'
    }, /*#__PURE__*/_react.default.createElement(_button.default, {
      icon: "delete",
      disabled: disableDelete,
      onClick: function onClick() {
        return onDeleteBatchClick(data.id);
      }
    })), /*#__PURE__*/_react.default.createElement(_tooltip.default, {
      placement: "left",
      title: 'Export batch'
    }, /*#__PURE__*/_react.default.createElement(_button.default, {
      icon: "export",
      onClick: function onClick() {
        return onExportBatchClick(data.id);
      }
    })));
  }

  function onRowDoubleClick(data) {
    window.open("#/grasshopper/batch-entity-types?batchId=".concat(data.id, "&batchName=").concat(data.name), '_self');
  }
}