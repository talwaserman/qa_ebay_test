"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AddUSBtn;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

require("antd/es/button/style/css");

var _button = _interopRequireDefault(require("antd/es/button"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _cloneDeep = _interopRequireDefault(require("lodash/cloneDeep"));

var _get = _interopRequireDefault(require("lodash/get"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _services = require("../../../services");

var _context2 = require("../../../context");

var _workerProvider = _interopRequireDefault(require("../../../workerProvider"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function AddUSBtn(_ref) {
  var isRejected = _ref.isRejected,
      isInGlobalList = _ref.isInGlobalList,
      rowId = _ref.rowId,
      aspectName = _ref.aspectName,
      generateNewAspect = _ref.generateNewAspect,
      warning = _ref.warning,
      disabled = _ref.disabled;

  var _useContext = (0, _react.useContext)(_context2.ETPageContext),
      contextState = _useContext.contextState,
      updateContext = _useContext.updateContext;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1];

  return /*#__PURE__*/_react.default.createElement(_button.default, {
    style: {
      background: isInGlobalList(aspectName) ? '#E5FBD4' : ''
    },
    loading: isLoading,
    disabled: isRejected(aspectName) || disabled,
    shape: "circle",
    icon: "plus",
    size: 'small',
    onClick: onClickBtn
  });

  function onClickBtn(_x) {
    return _onClickBtn.apply(this, arguments);
  }

  function _onClickBtn() {
    _onClickBtn = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(event) {
      var response, newAspect, tempCandidateList, firstRow, lastSavedFirstRow, tempAspectList, tempLastSavedAspects;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setIsLoading(true);
              event.stopPropagation();

              if (!isInGlobalList(aspectName)) {
                _context.next = 5;
                break;
              }

              warning();
              return _context.abrupt("return");

            case 5:
              _context.next = 7;
              return (0, _services.addAspectToEtd)({
                rowId: rowId,
                aspectName: aspectName,
                candidateName: aspectName
              });

            case 7:
              response = _context.sent;

              if (response.aspectId) {
                _context.next = 10;
                break;
              }

              return _context.abrupt("return");

            case 10:
              newAspect = generateNewAspect({
                aspectId: response.aspectId,
                aspectNameUS: response.aspectName,
                aspectNameLocal: response.aspectName
              });
              tempCandidateList = (0, _cloneDeep.default)(contextState.candidateList);
              tempCandidateList.US.forEach(function (item, indexAspects) {
                if (item.name === aspectName) {
                  tempCandidateList.US[indexAspects].decision.mapTo = {
                    aspectId: response.aspectId,
                    aspectName: response.aspectName
                  };
                }
              });
              firstRow = contextState.aspectList.shift();
              lastSavedFirstRow = contextState.lastSavedAspects.shift();
              tempAspectList = [firstRow, (0, _cloneDeep.default)(newAspect)].concat((0, _toConsumableArray2.default)(contextState.aspectList));
              tempLastSavedAspects = [lastSavedFirstRow, (0, _cloneDeep.default)(newAspect)].concat((0, _toConsumableArray2.default)(contextState.lastSavedAspects));
              tempAspectList[1].validValues = getInitialValidValues(tempAspectList[1].aspectName);
              addAutomaticTranslations(tempAspectList[1], response);
              updateContext({
                type: 'update',
                payload: _objectSpread(_objectSpread({}, contextState), {
                  aspectList: tempAspectList,
                  lastSavedAspects: tempLastSavedAspects,
                  candidateList: tempCandidateList,
                  totalUsAspects: contextState.totalUsAspects + 1
                })
              });
              startLockCountdown();

            case 21:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _onClickBtn.apply(this, arguments);
  }

  function getInitialValidValues(aspectName) {
    var aspect = contextState.candidateList['US'].find(function (aspect) {
      return aspect.name === aspectName;
    });
    return aspect ? aspect.validValues : [];
  }

  function startLockCountdown() {
    // on locked state the lock countdown should be initialized for every action
    if (contextState.isLocked) {
      _workerProvider.default.postMessage('start-countdown');
    }

    setIsLoading(false);
  }

  function addAutomaticTranslations(newAspect, response) {
    // update automatic translations
    var sites = Object.keys((0, _get.default)(response, 'localToTranslation', []));
    if (sites.length) newAspect.changed = true;
    sites.forEach(function (local) {
      var translation = (0, _get.default)(response, "localToTranslation[".concat(local, "]"), null);
      newAspect.aspectPerLocal[local] = {
        translation: translation
      };
      newAspect.automaticLocals.push(local);
    });
  }
}

AddUSBtn.propTypes = {
  /** isRejected - function used to check if aspect name was rejected in the candidate list */
  isRejected: _propTypes.default.func.isRequired,

  /** isInGlobalList - function used to color in green aspects that already exists in global list */
  isInGlobalList: _propTypes.default.func.isRequired,

  /** rowId - row id */
  rowId: _propTypes.default.string.isRequired,

  /** aspectName - the name of the aspect from the candidate list */
  aspectName: _propTypes.default.string.isRequired,

  /** disabled - whether to disable the button */
  disabled: _propTypes.default.bool
};
AddUSBtn.defaultProps = {
  disabled: false
};