"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ActionSection;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

require("antd/es/modal/style/css");

var _modal = _interopRequireDefault(require("antd/es/modal"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _get = _interopRequireDefault(require("lodash/get"));

var _context = require("../../context");

var _AddUSBtn = _interopRequireDefault(require("./AddUSBtn"));

var _AddBth = _interopRequireDefault(require("./AddBth"));

var _MapBtn = _interopRequireDefault(require("./MapBtn"));

var _RejectBtn = _interopRequireDefault(require("./RejectBtn"));

require("./style.less");

/* eslint-disable */
function ActionSection(props) {
  var _useContext = (0, _react.useContext)(_context.ETPageContext),
      contextState = _useContext.contextState;

  var siteId = props.siteId,
      stage = props.stage;
  var isUSLocal = siteId === 'US';
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "actions-section"
  }, /*#__PURE__*/_react.default.createElement(_MapBtn.default, (0, _extends2.default)({}, props, {
    isInGlobalList: isInGlobalList,
    isRejected: isRejected
  })), /*#__PURE__*/_react.default.createElement(_RejectBtn.default, (0, _extends2.default)({}, props, {
    isInGlobalList: isInGlobalList,
    isRejected: isRejected
  })), isUSLocal && /*#__PURE__*/_react.default.createElement(_AddUSBtn.default, (0, _extends2.default)({}, props, {
    generateNewAspect: generateNewAspect,
    isInGlobalList: isInGlobalList,
    isRejected: isRejected,
    warning: warning,
    disabled: stage !== 'Aspect Design' && !contextState.isLocked
  })), !isUSLocal && /*#__PURE__*/_react.default.createElement(_AddBth.default, (0, _extends2.default)({}, props, {
    generateNewAspect: generateNewAspect,
    isInGlobalList: isInGlobalList,
    isRejected: isRejected,
    warning: warning,
    disabled: stage !== 'Aspect Design' && !contextState.isLocked
  })));

  function isInGlobalList(aspectName) {
    return !!contextState.aspectList.find(function (item) {
      return (0, _get.default)(item, "aspectPerLocal[".concat(siteId, "].translation.value"), null) === aspectName;
    });
  }

  function isRejected(aspectName) {
    var candidateItem = contextState.candidateList[siteId].find(function (item) {
      return item.name === aspectName;
    });
    return (0, _get.default)(candidateItem, 'decision.rejected');
  }

  function warning() {
    _modal.default.warning({
      title: 'Invalid Action',
      content: 'Aspect already exist in gloabl list'
    });
  }

  function generateNewAspect(_ref) {
    var aspectId = _ref.aspectId,
        aspectNameUS = _ref.aspectNameUS,
        aspectNameLocal = _ref.aspectNameLocal;
    return {
      aspectId: aspectId,
      aspectName: aspectNameUS,
      aspectPerLocal: generateAspectPerLocal(siteId, aspectNameUS, aspectNameLocal),
      properties: [],
      validValues: [],
      decision: {
        mapTo: aspectNameUS,
        rejected: false
      },
      filtered: true,
      changed: false,
      key: aspectId,
      automaticLocals: []
    };
  }

  function generateAspectPerLocal(siteId, aspectNameUS, aspectNameLocal) {
    if (siteId === 'US') {
      return {
        US: {
          candidateName: aspectNameUS,
          translation: {
            value: aspectNameUS
          }
        }
      };
    } else {
      var _ref2;

      return _ref2 = {}, (0, _defineProperty2.default)(_ref2, siteId, {
        candidateName: aspectNameLocal,
        translation: {
          value: aspectNameLocal
        }
      }), (0, _defineProperty2.default)(_ref2, "US", {
        candidateName: aspectNameUS,
        translation: {
          value: aspectNameUS
        }
      }), _ref2;
    }
  }
}

ActionSection.propTypes = {
  /** siteId - the local of the site */
  siteId: _propTypes.default.string.isRequired,

  /** rowId - row id */
  rowId: _propTypes.default.string.isRequired,

  /** aspectName - the name of the aspect from the candidate list */
  aspectName: _propTypes.default.string.isRequired,

  /** stage - the Et status */
  stage: _propTypes.default.string.isRequired
};