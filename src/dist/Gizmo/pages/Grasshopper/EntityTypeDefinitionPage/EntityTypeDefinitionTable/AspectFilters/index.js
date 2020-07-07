"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AspectFilters;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

require("antd/es/dropdown/style/css");

var _dropdown = _interopRequireDefault(require("antd/es/dropdown"));

require("antd/es/button/style/css");

var _button = _interopRequireDefault(require("antd/es/button"));

require("antd/es/icon/style/css");

var _icon = _interopRequireDefault(require("antd/es/icon"));

require("antd/es/input/style/css");

var _input = _interopRequireDefault(require("antd/es/input"));

require("antd/es/menu/style/css");

var _menu = _interopRequireDefault(require("antd/es/menu"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

require("./style.less");

var _react = _interopRequireWildcard(require("react"));

var _cloneDeep = _interopRequireDefault(require("lodash/cloneDeep"));

var _get = _interopRequireDefault(require("lodash/get"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _context5 = require("../../context");

var _shared = require("../../../../../shared");

var _LockActions = _interopRequireDefault(require("./LockActions"));

var _GlobalListFilters = _interopRequireDefault(require("./GlobalListFilters"));

var _workerProvider = _interopRequireDefault(require("./../../workerProvider"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function AspectFilters(_ref) {
  var onSearchChange = _ref.onSearchChange,
      onCollapseChange = _ref.onCollapseChange,
      onGlobalListFilterChange = _ref.onGlobalListFilterChange,
      onSaveAll = _ref.onSaveAll,
      disableSaveAll = _ref.disableSaveAll,
      stage = _ref.stage,
      onLockEtd = _ref.onLockEtd;

  var _useState = (0, _react.useState)({
    search: '',
    sites: [],
    missingProps: false,
    missingLocals: false
  }),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      filters = _useState2[0],
      setFilters = _useState2[1];

  var _useContext = (0, _react.useContext)(_context5.ETPageContext),
      contextState = _useContext.contextState,
      updateContext = _useContext.updateContext;

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      isFilterModalVisible = _useState4[0],
      setFiltersModalVisible = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      unlockModalVisible = _useState6[0],
      setUnlockModalVisible = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      endOfTimeModalVisible = _useState8[0],
      setEndOfTimeModalVisible = _useState8[1];

  var _useState9 = (0, _react.useState)(false),
      _useState10 = (0, _slicedToArray2.default)(_useState9, 2),
      isSavingAll = _useState10[0],
      setSavingAll = _useState10[1];

  var _useState11 = (0, _react.useState)(false),
      _useState12 = (0, _slicedToArray2.default)(_useState11, 2),
      isLocking = _useState12[0],
      setLocking = _useState12[1];

  var endOfTimeButtons = [{
    text: 'Save',
    action: 'save',
    key: 'save'
  }, {
    text: 'Discard',
    action: 'discard',
    key: 'discard'
  }, {
    text: 'Continue',
    action: 'continue',
    key: 'continue'
  }];
  var unlockButtons = [{
    text: 'Save',
    action: 'save',
    key: 'save'
  }, {
    text: 'Discard',
    action: 'discard',
    key: 'discard'
  }];

  var collapseMenu = /*#__PURE__*/_react.default.createElement(_menu.default, {
    onClick: function onClick() {}
  }, /*#__PURE__*/_react.default.createElement(_menu.default.Item, {
    onClick: function onClick() {
      return onCollapseChange('collapse-all');
    },
    key: 1
  }, "Collapse all"), /*#__PURE__*/_react.default.createElement(_menu.default.Item, {
    onClick: function onClick() {
      return onCollapseChange('expand-all');
    },
    key: 2
  }, "Expand all"));

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "aspects-filters-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "filters-input"
  }, /*#__PURE__*/_react.default.createElement(_input.default, {
    value: filters.search,
    placeholder: "Search...",
    onChange: onInputSearchChange
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "filters-buttons"
  }, /*#__PURE__*/_react.default.createElement(_dropdown.default, {
    overlay: collapseMenu
  }, /*#__PURE__*/_react.default.createElement(_button.default, null, "Actions ", /*#__PURE__*/_react.default.createElement(_icon.default, {
    type: "down"
  }))), /*#__PURE__*/_react.default.createElement(_button.default, {
    onClick: onFiltersClick
  }, "Filters"), stage !== 'Aspect Design' && !contextState.isLocked && /*#__PURE__*/_react.default.createElement(_button.default, {
    onClick: onLockEtClick,
    loading: isLocking
  }, "Lock"), stage !== 'Aspect Design' && contextState.isLocked && /*#__PURE__*/_react.default.createElement(_button.default, {
    onClick: onLockEtClick,
    loading: isLocking
  }, "Unlock"), /*#__PURE__*/_react.default.createElement(_button.default, {
    onClick: saveAllClick,
    loading: isSavingAll,
    disabled: disableSaveAll
  }, "Save All")), /*#__PURE__*/_react.default.createElement(_shared.GenericModal, {
    modalVisibleState: isFilterModalVisible,
    modalTitle: "Filter Global List",
    modalContent: /*#__PURE__*/_react.default.createElement(_GlobalListFilters.default, {
      handleModalChange: function handleModalChange() {}
    }),
    onOk: onGlobalListModalOk,
    onCancel: onGlobalListModalCancel
  }), /*#__PURE__*/_react.default.createElement(_LockActions.default, {
    modalTitle: 'Lock Time Ended',
    message: 'ETD lock time has ended. What would you like to do?',
    onActionSelect: onLockModalActionSelect,
    isModalVisible: endOfTimeModalVisible,
    buttonsConfig: endOfTimeButtons
  }), /*#__PURE__*/_react.default.createElement(_LockActions.default, {
    modalTitle: 'Unlock ETD',
    message: 'You have some unsaved changes. What would you like to do?',
    onActionSelect: onLockModalActionSelect,
    isModalVisible: unlockModalVisible,
    buttonsConfig: unlockButtons
  }));

  function saveAllClick() {
    return _saveAllClick.apply(this, arguments);
  }

  function _saveAllClick() {
    _saveAllClick = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setSavingAll(true);
              _context.next = 3;
              return onSaveAll();

            case 3:
              setSavingAll(false);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _saveAllClick.apply(this, arguments);
  }

  function onInputSearchChange(e) {
    var search = (0, _get.default)(e, 'target.value', '');
    var tempFilters = (0, _cloneDeep.default)(filters);
    tempFilters.search = search;
    setFilters(tempFilters);
    onSearchChange(tempFilters);
  }

  function onFiltersClick() {
    setFiltersModalVisible(true);
  }

  function onGlobalListModalOk(modalData) {
    setFiltersModalVisible(false);

    var tempFilters = _objectSpread(_objectSpread({}, (0, _cloneDeep.default)(modalData)), {}, {
      search: filters.search
    });

    setFilters(tempFilters);
    onGlobalListFilterChange(tempFilters);
  }

  function onGlobalListModalCancel() {
    setFiltersModalVisible(false);
  }

  function onLockEtClick() {
    if (!contextState.isLocked) {
      handleLockEtd();
    } else {
      handleUnlockEtd();
    }
  }

  function handleLockEtd() {
    return _handleLockEtd.apply(this, arguments);
  }

  function _handleLockEtd() {
    _handleLockEtd = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              invertIsLockedState();
              startLockCountdown();

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _handleLockEtd.apply(this, arguments);
  }

  function handleCountdown(e) {
    switch (e.data) {
      case 'end-of-countdown':
        setEndOfTimeModalVisible(true);
        startNoUserActionCountdown();
        return;

      case 'end-of-action-modal-countdown':
        setEndOfTimeModalVisible(false);
        setUnlockModalVisible(false);
        discardAfterLock();
        return;

      default:
        return;
    }
  }

  function handleUnlockEtd() {
    if (unsavedChangesExist()) {
      setUnlockModalVisible(true);
      startNoUserActionCountdown();
      return;
    } else {
      stopLockCountdown();
      invertIsLockedState();
    }
  }

  function invertIsLockedState() {
    return _invertIsLockedState.apply(this, arguments);
  }

  function _invertIsLockedState() {
    _invertIsLockedState = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
      var isLocked;
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              isLocked = !contextState.isLocked;
              setLocking(true);
              _context3.prev = 2;
              _context3.next = 5;
              return onLockEtd(isLocked);

            case 5:
              _context3.next = 11;
              break;

            case 7:
              _context3.prev = 7;
              _context3.t0 = _context3["catch"](2);
              setLocking(false);
              return _context3.abrupt("return");

            case 11:
              setLocking(false);
              updateContext({
                type: 'update',
                payload: _objectSpread(_objectSpread({}, contextState), {}, {
                  isLocked: !contextState.isLocked
                })
              });

            case 13:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[2, 7]]);
    }));
    return _invertIsLockedState.apply(this, arguments);
  }

  function onLockModalActionSelect(action) {
    setEndOfTimeModalVisible(false);
    setUnlockModalVisible(false);

    switch (action) {
      case 'save':
        saveAfterLock();
        return;

      case 'discard':
        discardAfterLock();
        return;

      case 'continue':
        startLockCountdown();
        return;

      default:
        return;
    }
  }

  function saveAfterLock() {
    saveAllClick();
    stopLockCountdown();
    invertIsLockedState();
  }

  function discardAfterLock() {
    return _discardAfterLock.apply(this, arguments);
  }

  function _discardAfterLock() {
    _discardAfterLock = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              stopLockCountdown();
              setLocking(true);
              _context4.prev = 2;
              _context4.next = 5;
              return onLockEtd(false);

            case 5:
              _context4.next = 11;
              break;

            case 7:
              _context4.prev = 7;
              _context4.t0 = _context4["catch"](2);
              setLocking(false);
              return _context4.abrupt("return");

            case 11:
              setLocking(false);
              discardChangesAndUnlock();

            case 13:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[2, 7]]);
    }));
    return _discardAfterLock.apply(this, arguments);
  }

  function unsavedChangesExist() {
    var aspects = (0, _cloneDeep.default)(contextState.aspectList);
    var lastSavedAspects = (0, _cloneDeep.default)(contextState.lastSavedAspects);

    for (var index = 0; index < aspects.length; index++) {
      if (aspectsNotEqual(aspects[index], lastSavedAspects[index])) {
        return true;
      }
    }

    return false;
  }

  function aspectsNotEqual(aspect, lastSavedAspect) {
    return differentLocals(aspect, lastSavedAspect) || differentProps(aspect, lastSavedAspect);
  }

  function differentLocals(aspect, lastSavedAspect) {
    var locals = Object.values(aspect.aspectPerLocal).flat();
    var lastSavedLocals = Object.values(lastSavedAspect.aspectPerLocal).flat();
    if (locals.length !== lastSavedLocals.length) return true;

    for (var index = 0; index < locals.length; index++) {
      if (locals[index].translation.value !== lastSavedLocals[index].translation.value) {
        return true;
      }
    }

    return false;
  }

  function differentProps(aspect, lastSavedAspect) {
    if (aspect.properties.length !== lastSavedAspect.properties.length) return true;

    for (var index = 0; index < aspect.properties.length; index++) {
      if (aspect.properties[index].name !== lastSavedAspect.properties[index].name || aspect.properties[index].value !== lastSavedAspect.properties[index].value) {
        return true;
      }
    }

    return false;
  }

  function startLockCountdown() {
    _workerProvider.default.addEventListener('message', handleCountdown, false);

    _workerProvider.default.postMessage('start-countdown');
  }

  function stopLockCountdown() {
    _workerProvider.default.postMessage('stop-countdown');
  }

  function startNoUserActionCountdown() {
    _workerProvider.default.addEventListener('message', handleCountdown, false);

    _workerProvider.default.postMessage('start-no-user-action-countdown');
  }

  function discardChangesAndUnlock() {
    updateContext({
      type: 'update',
      payload: _objectSpread(_objectSpread({}, contextState), {}, {
        aspectList: contextState.lastSavedAspects,
        isLocked: false
      })
    });
  }
}

AspectFilters.propTypes = {
  /** onFilterChange - callback to filter the aspects */
  onSearchChange: _propTypes.default.func.isRequired,

  /** onCollapseChange - callback to expand / collapse the aspects */
  onCollapseChange: _propTypes.default.func.isRequired,

  /** onGlobalListFilterChange - callback to filter columns */
  onGlobalListFilterChange: _propTypes.default.func.isRequired,

  /** onSaveAll - save all aspects callback function */
  onSaveAll: _propTypes.default.func.isRequired,

  /** disableSaveAll - disable falg driven by the aspects state */
  disableSaveAll: _propTypes.default.bool.isRequired,

  /** stage - the ET status */
  stage: _propTypes.default.string.isRequired,

  /** onLockEtd - lock the Et callback */
  onLockEtd: _propTypes.default.func.isRequired
};