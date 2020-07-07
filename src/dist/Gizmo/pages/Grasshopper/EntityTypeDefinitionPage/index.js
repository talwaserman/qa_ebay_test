"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = EntityTypeDefinitionPage;

require("antd/es/icon/style/css");

var _icon = _interopRequireDefault(require("antd/es/icon"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

require("./style.less");

var _react = _interopRequireWildcard(require("react"));

var _get = _interopRequireDefault(require("lodash/get"));

var _utils = require("../../../utils");

var _shared = require("../../../shared");

var _context6 = require("./context");

var _services = require("./services");

var _EntityTypeDefinitionHeader = _interopRequireDefault(require("./EntityTypeDefinitionHeader"));

var _EntityTypeDefinitionTable = _interopRequireDefault(require("./EntityTypeDefinitionTable"));

var _AspectCandidateList = _interopRequireDefault(require("./AspectCandidateList"));

function EntityTypeDefinitionPage() {
  var big7Sites = ['US', 'UK', 'AU', 'DE', 'ES', 'IT', 'FR'];
  var batchId = (0, _utils.queryParam)('batchId') || '';
  var rowId = (0, _utils.queryParam)('rowId') || '';
  var entityTypeName = (0, _utils.queryParam)('entityTypeName') || 'Mock Entity Type';
  var entityTypeStatus = (0, _utils.queryParam)('entityTypeStatus') || 'Aspect Design';
  var assignedSites = getAssignedSites();
  var isViewMode = (0, _utils.queryParam)('viewMode') === 'true' ? true : false;

  var _useState = (0, _react.useState)(true),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isLoading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      siteList = _useState4[0],
      setSiteList = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      etInformation = _useState6[0],
      setEtInformation = _useState6[1];

  var _useState7 = (0, _react.useState)(null),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      etDefinition = _useState8[0],
      setEtDefinition = _useState8[1];

  var fetchData = (0, _react.useCallback)( /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            setLoading(true);
            Promise.all([(0, _utils.promisify)(_services.getEtInformation, rowId), (0, _utils.promisify)(_services.getEtDefinition, rowId)]).then(function (data) {
              var _data = (0, _slicedToArray2.default)(data, 2),
                  etInformation = _data[0],
                  etDefinition = _data[1];

              setEtInformation(etInformation);
              setEtDefinition(etDefinition);
              setSiteList(Object.keys((0, _get.default)(etInformation, 'candidateListPerLocale', [])));
              setLoading(false);
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), [rowId]);
  (0, _react.useEffect)(function () {
    fetchData();
  }, [fetchData]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "et-definition-page-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_context6.PageContextProvider, null, /*#__PURE__*/_react.default.createElement(_shared.CBreadcrumb, {
    path: ['Metadata', 'Entity Type Definition']
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "et-definition-header"
  }, /*#__PURE__*/_react.default.createElement(_EntityTypeDefinitionHeader.default, {
    entityTypeName: entityTypeName,
    siteList: siteList,
    onSaveEtNameTitle: onSaveEtNameTitle,
    hintText: 'list of sites that are assigned to you for translation',
    stage: entityTypeStatus,
    finishEtd: _services.finishEtd,
    batchId: batchId,
    rowId: rowId,
    isViewMode: isViewMode
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "spinner"
  }, isLoading && /*#__PURE__*/_react.default.createElement(_icon.default, {
    type: "loading"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "et-definition-body"
  }, !isLoading && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "aspects-table"
  }, /*#__PURE__*/_react.default.createElement(_EntityTypeDefinitionTable.default, {
    aspects: (0, _get.default)(etDefinition, 'aspectContractList', []),
    onSaveAspects: onSaveAspects,
    onRemoveAspect: onRemoveAspect,
    onAddAspect: onAddAspect,
    rowId: rowId,
    candidateList: (0, _get.default)(etInformation, 'candidateListPerLocale', {}),
    stage: entityTypeStatus,
    onLockEtd: onLockEtd,
    assignedSites: assignedSites
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "aspect-candidate-list-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_AspectCandidateList.default, {
    etInformation: etInformation,
    getEtCategories: _services.getEtCategories,
    rowId: rowId,
    addAspectToEtd: _services.addAspectToEtd,
    stage: entityTypeStatus,
    saveAspectsData: _services.saveAspectsData
  }))))));

  function onSaveEtNameTitle(_x) {
    return _onSaveEtNameTitle.apply(this, arguments);
  }

  function _onSaveEtNameTitle() {
    _onSaveEtNameTitle = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(etTitle) {
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return (0, _services.updateEtTitle)({
                rowId: rowId,
                etName: etTitle
              });

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _onSaveEtNameTitle.apply(this, arguments);
  }

  function onAddAspect(_x2, _x3) {
    return _onAddAspect.apply(this, arguments);
  }

  function _onAddAspect() {
    _onAddAspect = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(aspectName, candidateName) {
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return (0, _services.addAspectToEtd)({
                rowId: rowId,
                aspectName: aspectName,
                candidateName: candidateName
              });

            case 2:
              return _context3.abrupt("return", _context3.sent);

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _onAddAspect.apply(this, arguments);
  }

  function onSaveAspects(_x4) {
    return _onSaveAspects.apply(this, arguments);
  }

  function _onSaveAspects() {
    _onSaveAspects = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(deltas) {
      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return (0, _services.saveAspectsData)(rowId, deltas);

            case 2:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));
    return _onSaveAspects.apply(this, arguments);
  }

  function onRemoveAspect(aspectId) {
    (0, _services.removeAspect)(rowId, aspectId);
  }

  function onLockEtd(_x5) {
    return _onLockEtd.apply(this, arguments);
  }

  function _onLockEtd() {
    _onLockEtd = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(isLocked) {
      return _regenerator.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return (0, _services.lockEtd)(rowId, isLocked);

            case 2:
              return _context5.abrupt("return", _context5.sent);

            case 3:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));
    return _onLockEtd.apply(this, arguments);
  }

  function getAssignedSites() {
    // at the 1st stage we enable all the locals
    if (entityTypeStatus === 'Aspect Design') {
      return big7Sites;
    }

    return !(0, _utils.queryParam)('assignedSites') ? [] : (0, _utils.queryParam)('assignedSites').split(',');
  }
}