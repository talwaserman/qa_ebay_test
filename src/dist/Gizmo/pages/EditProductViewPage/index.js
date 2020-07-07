"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = EditProductViewPage;

require("antd/es/spin/style/css");

var _spin = _interopRequireDefault(require("antd/es/spin"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

require("antd/es/icon/style/css");

var _icon = _interopRequireDefault(require("antd/es/icon"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _get = _interopRequireDefault(require("lodash/get"));

var _SelectionPopUp = _interopRequireDefault(require("../../shared/SelectionPopUp"));

var _GenericModal = _interopRequireDefault(require("../../shared/GenericModal"));

var _services = require("./services");

require("./style.less");

function EditProductViewPage(_ref) {
  var taskType = _ref.taskType,
      epid = _ref.epid,
      assignee = _ref.assignee,
      isModalVisible = _ref.isModalVisible,
      onModalOk = _ref.onModalOk,
      onModalCancel = _ref.onModalCancel;

  var _useState = (0, _react.useState)({
    configurationNames: [],
    isFetchingConfigurations: true,
    jobId: null,
    isFetchingJobId: false
  }),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      statData = _useState2[0],
      setStatData = _useState2[1];

  var _useState3 = (0, _react.useState)(isModalVisible),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      shouldBeVisible = _useState4[0],
      setShouldBeVisible = _useState4[1];

  var antIcon = /*#__PURE__*/_react.default.createElement(_icon.default, {
    type: "loading",
    style: {
      fontSize: 24
    },
    spin: true
  });

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
                return (0, _services.getTaskConfiguration)(taskType);

              case 2:
                res = _context.sent;
                setStatData({
                  configurationNames: extractConfigurationNames(res.configurationResponse),
                  isFetchingConfigurations: false
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _fetchData.apply(this, arguments);
    }

    fetchData();
  }, [taskType]);
  (0, _react.useEffect)(function () {
    setShouldBeVisible(isModalVisible);
  }, [isModalVisible]);
  var configurationNames = statData.configurationNames,
      isFetchingConfigurations = statData.isFetchingConfigurations,
      isFetchingJobId = statData.isFetchingJobId;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "edit-product-view-page-wrapper"
  }, isFetchingJobId ? /*#__PURE__*/_react.default.createElement(_spin.default, {
    indicator: antIcon
  }) : /*#__PURE__*/_react.default.createElement(_GenericModal.default, {
    isOkDisabledInitialValue: true,
    width: 605,
    modalTitle: 'update EPID',
    onCancel: onCancel,
    onOk: onOk,
    okText: 'Ok',
    modalContent: /*#__PURE__*/_react.default.createElement(_SelectionPopUp.default, {
      selectPlaceHolder: 'Configuration',
      dropDownValuesArray: configurationNames,
      inputLabel: 'Task Name',
      dropDownKeyLabel: 'taskId',
      loading: isFetchingConfigurations
    }),
    modalVisibleState: shouldBeVisible
  }));

  function extractConfigurationNames(res) {
    var configurationNames = [];
    res.forEach(function (element) {
      configurationNames.push({
        name: element.name,
        id: element.taskId
      });
    });
    return configurationNames;
  }

  function onCancel() {
    setShouldBeVisible(false);
    onModalCancel();
  }

  function onOk(_x) {
    return _onOk.apply(this, arguments);
  }

  function _onOk() {
    _onOk = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(data) {
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return onClickHandler(data);

            case 2:
              onModalOk();

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _onOk.apply(this, arguments);
  }

  function onClickHandler(_x2) {
    return _onClickHandler.apply(this, arguments);
  }

  function _onClickHandler() {
    _onClickHandler = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(selectionPopData) {
      var formRequest;
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              setStatData({
                configurationNames: statData.configurationNames,
                jobId: null,
                isFetchingConfigurations: statData.isLoading,
                isFetchingJobId: true
              });
              formRequest = createFormRequest(selectionPopData);
              _context3.next = 4;
              return callProductCuration(formRequest);

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _onClickHandler.apply(this, arguments);
  }

  function callProductCuration(_x3) {
    return _callProductCuration.apply(this, arguments);
  }

  function _callProductCuration() {
    _callProductCuration = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(formRequest) {
      var response;
      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return (0, _services.initProductCuration)(formRequest);

            case 3:
              response = _context4.sent;
              setStatData({
                configurationNames: statData.configurationNames,
                jobId: response.jobId,
                isFetchingConfigurations: statData.isLoading,
                isFetchingJobId: false
              });
              setShouldBeVisible(false);
              openProductCurationPage(response, formRequest);
              _context4.next = 12;
              break;

            case 9:
              _context4.prev = 9;
              _context4.t0 = _context4["catch"](0);
              setStatData({
                configurationNames: statData.configurationNames,
                jobId: null,
                isFetchingConfigurations: statData.isLoading,
                isFetchingJobId: false
              });

            case 12:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 9]]);
    }));
    return _callProductCuration.apply(this, arguments);
  }

  function createFormRequest(selectionPopData) {
    var request = {
      uploadBy: null,
      scope: null,
      updatePlatform: true,
      addCrawling: false,
      liveOnly: false,
      selectedTaskId: (0, _get.default)(selectionPopData, 'selectionData.id', null),
      epid: epid,
      jobHeaderContract: {
        name: (0, _get.default)(selectionPopData, 'inputData', null),
        type: 'Product Curation',
        state: 'IN_PROGRESS',
        owners: [assignee],
        'assignees[0]': [{
          id: 0,
          displayName: assignee,
          'vendorTeamLeaders[0]': [assignee],
          organization: '1'
        }]
      }
    };
    return request;
  }

  function openProductCurationPage(response, formRequest) {
    window.open("#/vendor-management/productCurationJob?jobId=".concat(response.jobId, "&state=In Progress&jobName=").concat(formRequest.jobHeaderContract.name, "&type=Product Curation&workMode=productView&backPath=/vendor-management/jobList"), '_blank');
  }
}

EditProductViewPage.propTypes = {
  /** taskType - query field to get configuration data */
  taskType: _propTypes.default.string.isRequired,

  /**  epid - product identifer query field for creating jobId- */
  epid: _propTypes.default.string.isRequired,

  /**  assignee- assignee id query field for creating jobId*/
  assignee: _propTypes.default.string.isRequired,

  /**  isModalVisible- state if modal is visible or not*/
  isModalVisible: _propTypes.default.bool.isRequired
};