"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RejectBtn;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

require("antd/es/button/style/css");

var _button = _interopRequireDefault(require("antd/es/button"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _cloneDeep = _interopRequireDefault(require("lodash/cloneDeep"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _context2 = require("../../../context");

var _services = require("../../../services");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function RejectBtn(_ref) {
  var siteId = _ref.siteId,
      rowId = _ref.rowId,
      aspectName = _ref.aspectName,
      isInGlobalList = _ref.isInGlobalList,
      isRejected = _ref.isRejected;

  var _useContext = (0, _react.useContext)(_context2.ETPageContext),
      contextState = _useContext.contextState,
      updateContext = _useContext.updateContext;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1];

  var isRejectedValue = isRejected(aspectName);
  return /*#__PURE__*/_react.default.createElement(_button.default, {
    size: 'small',
    shape: "circle",
    loading: isLoading,
    style: {
      background: isRejectedValue ? '#E9C6C6' : ''
    },
    disabled: isInGlobalList(aspectName),
    icon: "close",
    onClick: function onClick(e) {
      e.stopPropagation();
      onRejectAspect();
    }
  });

  function onRejectAspect() {
    return _onRejectAspect.apply(this, arguments);
  }

  function _onRejectAspect() {
    _onRejectAspect = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var tempCandidateList;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setIsLoading(true);
              _context.next = 3;
              return (0, _services.rejectAspect)(rowId, siteId, aspectName, !isRejectedValue);

            case 3:
              tempCandidateList = (0, _cloneDeep.default)(contextState.candidateList);
              tempCandidateList[siteId].forEach(function (item, index) {
                if (item.name === aspectName) {
                  tempCandidateList[siteId][index].decision.rejected = !tempCandidateList[siteId][index].decision.rejected;
                }
              });
              updateContext({
                type: 'update',
                payload: _objectSpread(_objectSpread({}, contextState), {
                  candidateList: tempCandidateList
                })
              });
              setIsLoading(false);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _onRejectAspect.apply(this, arguments);
  }
}

RejectBtn.propTypes = {
  /** isInGlobalList - function used to color in green aspects that already exists in global list */
  isInGlobalList: _propTypes.default.func.isRequired,

  /** isRejected - function used to check if aspect name was rejected in the candidate list */
  isRejected: _propTypes.default.func.isRequired,

  /** siteId - the local of the site */
  siteId: _propTypes.default.string.isRequired,

  /** rowId - row id */
  rowId: _propTypes.default.string.isRequired,

  /** aspectName - the name of the aspect from the candidate list */
  aspectName: _propTypes.default.string.isRequired
};