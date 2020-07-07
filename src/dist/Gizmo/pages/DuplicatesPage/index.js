"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DuplicatesPage;

require("antd/es/spin/style/css");

var _spin = _interopRequireDefault(require("antd/es/spin"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

require("antd/es/icon/style/css");

var _icon = _interopRequireDefault(require("antd/es/icon"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _get = _interopRequireDefault(require("lodash/get"));

var _has = _interopRequireDefault(require("lodash/has"));

var _shared = require("../../shared");

var _Duplicates = _interopRequireDefault(require("./Duplicates"));

var _services = require("./services");

var _configuration = require("./configuration");

require("./style.less");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function DuplicatesPage(_ref) {
  var workMode = _ref.workMode,
      jobId = _ref.jobId,
      rowId = _ref.rowId;

  var _useState = (0, _react.useState)({
    clusterData: null,
    decisions: null,
    isLoading: true,
    rowsDone: null,
    rowId: null,
    jobId: null,
    jobTypeConfiguration: null,
    loggedInUser: null
  }),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = (0, _react.useState)(0),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      FetchNextCounter = _useState4[0],
      setFetchNextClusterCounter = _useState4[1];

  var antIcon = /*#__PURE__*/_react.default.createElement(_icon.default, {
    type: "loading",
    style: {
      fontSize: 46
    },
    spin: true
  });

  (0, _react.useEffect)(function () {
    function fetchData() {
      return _fetchData.apply(this, arguments);
    }

    function _fetchData() {
      _fetchData = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var jobHeader, jobConfiguration, loggedInUser, clusterData, sendToSupervisor, rowsDone;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                setData(_objectSpread(_objectSpread({}, data), {
                  isLoading: true
                }));

                if (jobId) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return");

              case 3:
                _context.next = 5;
                return (0, _services.getJobHeader)(jobId);

              case 5:
                jobHeader = _context.sent;
                jobConfiguration = null;

                if (!(0, _has.default)(jobHeader, 'typeConfiguration.selectedDuplicateConfigurationId')) {
                  _context.next = 13;
                  break;
                }

                _context.next = 10;
                return (0, _services.getJobConfiguration)(jobHeader.typeConfiguration.selectedDuplicateConfigurationId);

              case 10:
                jobConfiguration = _context.sent;
                _context.next = 16;
                break;

              case 13:
                _context.next = 15;
                return (0, _services.getJobConfiguration)(jobHeader.typeConfiguration.taskId);

              case 15:
                jobConfiguration = _context.sent;

              case 16:
                _context.next = 18;
                return (0, _services.getLoggedInUser)();

              case 18:
                loggedInUser = _context.sent;
                clusterData = null;

                if (!(workMode === 'edit')) {
                  _context.next = 26;
                  break;
                }

                _context.next = 23;
                return (0, _services.getRowById)({
                  rowId: rowId,
                  type: (0, _get.default)(jobConfiguration, 'taskConfiguration.type')
                });

              case 23:
                clusterData = _context.sent;
                _context.next = 29;
                break;

              case 26:
                _context.next = 28;
                return (0, _services.getNextRow)(jobId, (0, _get.default)(jobConfiguration, 'taskConfiguration.type'));

              case 28:
                clusterData = _context.sent;

              case 29:
                sendToSupervisor = null;
                rowsDone = (0, _get.default)(clusterData, 'doneRowsContract', null);
                setData({
                  clusterData: clusterData,
                  rowsDone: rowsDone,
                  isLoading: false,
                  rowId: (0, _get.default)(clusterData, 'nextRowContract.comparedEntityRowContracts.rowId', null),
                  decisions: getInitialArray(clusterData, sendToSupervisor, jobConfiguration),
                  jobId: jobId || null,
                  jobTypeConfiguration: jobConfiguration,
                  loggedInUser: loggedInUser
                });

              case 32:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _fetchData.apply(this, arguments);
    }

    fetchData();
  }, [FetchNextCounter]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "duplication-page-wrapper"
  }, data.isLoading && /*#__PURE__*/_react.default.createElement("div", {
    className: "loading-spinner"
  }, /*#__PURE__*/_react.default.createElement(_spin.default, {
    indicator: antIcon
  })), !data.isLoading && (0, _get.default)(data, 'clusterData.nextRowContract.comparedEntityRowContracts[0]', null) && /*#__PURE__*/_react.default.createElement(_Duplicates.default, {
    clusterData: data.clusterData,
    updateClusterData: updateClusterData,
    rowsDone: data.rowsDone,
    decisions: data.decisions,
    reasons: getReasonsFromConfiguration(data.jobTypeConfiguration),
    saveTask: handleSaveTask,
    changeCategory: handleChangeCategory,
    jobId: jobId,
    jobTypeConfiguration: data.jobTypeConfiguration,
    workMode: workMode,
    loggedInUser: data.loggedInUser,
    fetchNextCluster: fetchNextCluster,
    currentPage: data.currentPage ? data.currentPage : 0
  }), !data.isLoading && !(0, _get.default)(data, 'clusterData.nextRowContract.comparedEntityRowContracts[0]', null) && /*#__PURE__*/_react.default.createElement("div", {
    className: "finished-queue-message"
  }, /*#__PURE__*/_react.default.createElement(_shared.CBreadcrumb, {
    path: ['Duplications']
  }), /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-check-circle end-of-queue-circle"
  }), /*#__PURE__*/_react.default.createElement("label", {
    className: "endOfQueueHeader"
  }, "You are done!"), /*#__PURE__*/_react.default.createElement("label", {
    className: "endOfQueueBody"
  }, "No more items to consume from the queue")));

  function getReasonsFromConfiguration(jobTypeConfiguration) {
    var reasons;
    var jobType = (0, _get.default)(jobTypeConfiguration, 'taskConfiguration.type', '').toLowerCase() || 'duplicates';

    if (jobType === 'duplicates') {
      reasons = (0, _get.default)(jobTypeConfiguration, 'configurationResponse.executionRulesConfigurationContract.reasonCodeContracts', []);
    } else {
      reasons = _configuration.configuration[jobType].reasons;
    }

    return reasons;
  }

  function fetchNextCluster() {
    setFetchNextClusterCounter(FetchNextCounter + 1);
  }

  function updateClusterData(updatedClusterData) {
    setData(_objectSpread(_objectSpread({}, data), {}, {
      clusterData: updatedClusterData
    }));
  }

  function handleSaveTask(_x, _x2) {
    return _handleSaveTask.apply(this, arguments);
  }

  function _handleSaveTask() {
    _handleSaveTask = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(shouldGetNextCluster, updatedTaskObject) {
      var clusterData, rowsDone;
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              setData(_objectSpread(_objectSpread({}, data), {
                isLoading: true
              }));

              if (!(workMode === 'edit' || !shouldGetNextCluster)) {
                _context2.next = 6;
                break;
              }

              updatedTaskObject.nextRow = false;
              (0, _services.saveTask)(updatedTaskObject);

              if (workMode === 'edit') {
                window.history.back();
              } else {
                setData(_objectSpread(_objectSpread({}, data), {
                  isLoading: false
                }));
              }

              return _context2.abrupt("return");

            case 6:
              _context2.next = 8;
              return (0, _services.saveTask)(updatedTaskObject);

            case 8:
              clusterData = _context2.sent;
              rowsDone = (0, _get.default)(clusterData, 'doneRowsContract', null);
              setData({
                clusterData: clusterData,
                rowsDone: rowsDone,
                isLoading: false,
                rowId: (0, _get.default)(clusterData, 'nextRowContract.comparedEntityRowContracts.rowId', null),
                decisions: getInitialArray(clusterData, false, data.jobTypeConfiguration),
                jobId: jobId || null,
                jobTypeConfiguration: data.jobTypeConfiguration
              });

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _handleSaveTask.apply(this, arguments);
  }

  function handleChangeCategory(_x3, _x4, _x5) {
    return _handleChangeCategory.apply(this, arguments);
  }

  function _handleChangeCategory() {
    _handleChangeCategory = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(updatedTaskObject, currentPage, decisionsData) {
      var updatedCluster;
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              setData(_objectSpread(_objectSpread({}, data), {
                isLoading: true,
                currentPage: currentPage
              }));
              _context3.next = 3;
              return (0, _services.changeCategory)(updatedTaskObject);

            case 3:
              updatedCluster = _context3.sent;
              setData({
                clusterData: updatedCluster,
                currentPage: currentPage,
                rowsDone: data.rowsDone,
                isLoading: false,
                rowId: (0, _get.default)(updatedCluster, 'nextRowContract.comparedEntityRowContracts.rowId', null),
                decisions: decisionsData,
                jobId: data.jobId,
                jobTypeConfiguration: data.jobTypeConfiguration
              });

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _handleChangeCategory.apply(this, arguments);
  }

  function getInitialArray(clusterData, sendToSupervisor, jobConfiguration) {
    switch ((0, _get.default)(jobConfiguration, 'taskConfiguration.type')) {
      case 'Duplicates':
        return getInitialDuplicationDecisionsArray(clusterData, sendToSupervisor, jobConfiguration);

      case 'Matching':
        return getInitialMatchingDecisionsArray(clusterData, sendToSupervisor, jobConfiguration);

      default:
        return null;
    }
  }

  function getInitialDuplicationDecisionsArray(clusterData, sendToSupervisor, jobConfiguration) {
    var decisionsOptionsMap = getDecisionsOptionsMap(jobConfiguration);
    return clusterData.nextRowContract.comparedEntityRowContracts.map(function (item) {
      return {
        leftEntityId: (0, _get.default)(item, 'entities[0].entityId', ''),
        rightEntityId: (0, _get.default)(item, 'entities[1].entityId', ''),
        selectedOption: decisionsOptionsMap[(0, _get.default)(item, 'entities[1].prodDec.productDuplicateAction', 'NOT_FOUND')],
        decisionInfo: {
          reason: {
            value: (0, _get.default)(item, 'entities[1].prodDec.decisionContract.reason', ''),
            mandatory: false
          },
          reasonDetails: {
            value: (0, _get.default)(item, 'entities[1].prodDec.decisionContract.reasonDetails', []),
            mandatory: false
          },
          observation: {
            value: (0, _get.default)(item, 'entities[1].prodDec.decisionContract.observation', ''),
            mandatory: true
          },
          comment: {
            value: (0, _get.default)(item, 'entities[1].prodDec.decisionContract.comment', ''),
            mandatory: false
          },
          urls: generateDuplicateUrls((0, _get.default)(item, 'entities[1].prodDec.decisionContract.urls')),
          additionalInfo: (0, _get.default)(item, 'additionalInformationContract.additionalInformationDataList', []),
          sendToSupervisor: sendToSupervisor,
          checkedAsQa: evaluateCheckedAsQa(item)
        }
      };
    });
  }

  function generateMatchingUrls(urls) {
    if (urls) {
      return urls.map(function (urlData) {
        return {
          name: urlData.name || '',
          url: urlData.url || ''
        };
      });
    } else {
      return [{
        name: 'URL 1',
        url: ''
      }, {
        name: 'URL 2',
        url: ''
      }];
    }
  }

  function generateDuplicateUrls(urls) {
    if (urls) {
      return urls.map(function (urlData) {
        return {
          name: urlData.name || '',
          url: urlData.url || '',
          indication: urlData.indication || ''
        };
      });
    } else {
      return [{
        name: 'URL 1',
        url: '',
        indication: 'undifined'
      }, {
        name: 'URL 2',
        url: '',
        indication: 'undifined'
      }];
    }
  }

  function getInitialMatchingDecisionsArray(clusterData, sendToSupervisor, jobConfiguration) {
    var decisionsOptionsMap = getDecisionsOptionsMap(jobConfiguration);
    return clusterData.nextRowContract.comparedEntityRowContracts.map(function (item) {
      var itemPoisiton = getItemIndex(jobConfiguration.configurationResponse.groupByType);
      return {
        leftEntityId: (0, _get.default)(item, 'entities[0].entityId', ''),
        rightEntityId: (0, _get.default)(item, 'entities[1].entityId', ''),
        selectedOption: decisionsOptionsMap[(0, _get.default)(item.entities[itemPoisiton], 'itemDecision.itemAction', 'NOT_FOUND')],
        decisionInfo: {
          reason: {
            value: (0, _get.default)(item.entities[itemPoisiton], 'itemDecision.reason', ''),
            mandatory: false
          },
          reasonDetails: {
            value: (0, _get.default)(item.entities[itemPoisiton], 'itemDecision.reasonDetails', ''),
            mandatory: false
          },
          comment: {
            value: (0, _get.default)(item.entities[itemPoisiton], 'itemDecision.comment', ''),
            mandatory: false
          },
          urls: generateMatchingUrls((0, _get.default)(item.entities[itemPoisiton], 'itemDecision.urls', '')),
          additionalInfo: (0, _get.default)(item, 'additionalInformationContract.additionalInformationDataList', []),
          sendToSupervisor: sendToSupervisor,
          checkedAsQa: evaluateCheckedAsQa(item)
        }
      };
    });
  }

  function getItemIndex(groupByType) {
    switch (groupByType) {
      case 'Item':
        return 0;

      case 'Product':
        return 1;

      case 'None':
        return 1;

      default:
        return null;
    }
  }

  function getDecisionsOptionsMap(jobConfiguration) {
    switch ((0, _get.default)(jobConfiguration, 'taskConfiguration.type')) {
      case 'Duplicates':
        return {
          DUPLICATES: 'option1',
          SKIP: 'option2',
          NON_DUPLICATES: 'option3',
          NOT_FOUND: null
        };

      case 'Matching':
        return {
          CORRECT: 'option1',
          SKIP: 'option2',
          WRONG: 'option3',
          NOT_FOUND: null
        };

      default:
        return null;
    }
  }

  function evaluateCheckedAsQa(item) {
    return item.comparedEntityRowQaContract ? item.comparedEntityRowQaContract.qaed ? true : false : false;
  }
}

DuplicatesPage.propTypes = {
  /** workMode - string variable that indicate the mode of the page */
  workMode: _propTypes.default.string,

  /** jobId - a string identifier of the task displayed in this screen */
  jobId: _propTypes.default.string.isRequired
};
DuplicatesPage.defaultProps = {
  workMode: 'regular'
};