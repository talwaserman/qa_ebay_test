"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AddBtn;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

require("antd/es/popover/style/css");

var _popover = _interopRequireDefault(require("antd/es/popover"));

require("antd/es/button/style/css");

var _button = _interopRequireDefault(require("antd/es/button"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

require("antd/es/select/style/css");

var _select = _interopRequireDefault(require("antd/es/select"));

var _react = _interopRequireWildcard(require("react"));

var _get = _interopRequireDefault(require("lodash/get"));

var _cloneDeep = _interopRequireDefault(require("lodash/cloneDeep"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _services = require("../../../services");

var _context2 = require("../../../context");

require("./style.less");

var _workerProvider = _interopRequireDefault(require("../../../workerProvider"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Option = _select.default.Option;

function AddBtn(_ref) {
  var isRejected = _ref.isRejected,
      siteId = _ref.siteId,
      rowId = _ref.rowId,
      aspectName = _ref.aspectName,
      generateNewAspect = _ref.generateNewAspect,
      isInGlobalList = _ref.isInGlobalList,
      warning = _ref.warning,
      disabled = _ref.disabled;

  var _useContext = (0, _react.useContext)(_context2.ETPageContext),
      contextState = _useContext.contextState,
      updateContext = _useContext.updateContext;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      showPopover = _useState2[0],
      updateShowPopover = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      isLoading = _useState4[0],
      setIsLoading = _useState4[1];

  var _useState5 = (0, _react.useState)(''),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      searchVal = _useState6[0],
      updateSearchVal = _useState6[1];

  var _useState7 = (0, _react.useState)(usAspectSuggestion(siteId, aspectName)),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      prevSelectValue = _useState8[0],
      updatePrevSelectValue = _useState8[1];

  var _useState9 = (0, _react.useState)(usAspectSuggestion(siteId, aspectName)),
      _useState10 = (0, _slicedToArray2.default)(_useState9, 2),
      selectValue = _useState10[0],
      updateSelect = _useState10[1]; //TODO: BUG - if in global list us value exists and we are missing the DE value
  // the us value is still filtered from the options, we need to not filter it
  // const listOfAvailableValues = difference(
  //   get(contextState, 'candidateList.US', []).map(item => item.name),
  //   get(contextState, 'aspectList', []).map(
  //     item => item.aspectPerLocal.US.translation
  //   )
  // );


  var selectList = getSelectList();

  var content = /*#__PURE__*/_react.default.createElement("div", {
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    className: "content-wrapper"
  }, /*#__PURE__*/_react.default.createElement("label", null, "Please Select US aspect:"), /*#__PURE__*/_react.default.createElement(_select.default, {
    showSearch: true,
    value: selectValue,
    style: {
      width: 200
    },
    placeholder: "Select a US value",
    optionFilterProp: "children",
    onChange: onChange,
    onFocus: function onFocus() {},
    onBlur: function onBlur() {},
    onSearch: function onSearch(val) {
      return updateSearchVal(val);
    },
    filterOption: function filterOption(input, option) {
      return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    }
  }, selectList.map(function (name) {
    return /*#__PURE__*/_react.default.createElement(Option, {
      key: name,
      value: name
    }, name);
  })), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_button.default, {
    disabled: !selectValue,
    size: 'small',
    onClick: onClickSave,
    type: "primary"
  }, "Add"), /*#__PURE__*/_react.default.createElement(_button.default, {
    size: 'small',
    onClick: function onClick(e) {
      e.stopPropagation();
      updateShowPopover(false);
      updateSelect(prevSelectValue);
    }
  }, "Cancel")));

  return /*#__PURE__*/_react.default.createElement(_popover.default, {
    placement: "left",
    title: null,
    content: content,
    trigger: "click",
    visible: showPopover
  }, /*#__PURE__*/_react.default.createElement(_button.default, {
    shape: "circle",
    icon: "plus",
    loading: isLoading,
    disabled: isRejected(aspectName) || disabled,
    style: {
      background: isInGlobalList(aspectName) ? '#E5FBD4' : ''
    },
    size: 'small',
    onClick: onClickPlusBtn
  }));

  function onChange(value) {
    updateSelect(value);
  }

  function onClickPlusBtn(e) {
    e.stopPropagation();

    if (isInGlobalList(aspectName)) {
      warning();
      return;
    }

    updateShowPopover(true);
  }

  function usAspectSuggestion(siteId, aspectName) {
    return ['US', 'UK', 'AU'].includes(siteId) ? aspectName : '';
  }

  function getSelectList() {
    var aspectValues = (0, _get.default)(contextState, 'candidateList.US', []).map(function (item) {
      return item.name;
    });

    if (aspectValues.includes(searchVal)) {
      return [searchVal];
    }

    return searchVal !== '' && !aspectValues.filter(function (item) {
      return item.toLowerCase().indexOf(searchVal) !== -1;
    }).length ? [searchVal].concat((0, _toConsumableArray2.default)(aspectValues)) : aspectValues;
  }

  function getAddObjectPayload(rowId, selectValue, aspectName) {
    var isSelectValueInList = contextState.candidateList.US.filter(function (item) {
      return item.name === selectValue;
    }).length === 1;

    if (isSelectValueInList) {
      // selected value from dropdown list
      return {
        rowId: Number(rowId),
        aspectName: selectValue,
        candidateName: selectValue,
        candidateContract: {
          site: siteId,
          candidateName: aspectName
        }
      };
    } else {
      // selected value from free text
      return {
        rowId: rowId,
        aspectName: selectValue,
        candidateContract: {
          site: siteId,
          candidateName: aspectName
        }
      };
    }
  }

  function onClickSave() {
    return _onClickSave.apply(this, arguments);
  }

  function _onClickSave() {
    _onClickSave = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var aspectId, saveContracts, index, tempLastSavedAspects, lastSavedLocal, tempAspectList, aspectLocal, tempCandidateList, response, newAspect, firstRow, lastSavedFirstRow, tempAspects, _tempLastSavedAspects, _tempCandidateList;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setIsLoading(true);
              updatePrevSelectValue(selectValue);

              if (!contextState.aspectList.find(function (item) {
                return (item.aspectName || '').toLowerCase() === selectValue.toLowerCase();
              })) {
                _context.next = 21;
                break;
              }

              // using the save API to add a new translation
              aspectId = contextState.aspectList.find(function (item) {
                return (item.aspectName || '').toLowerCase() === selectValue.toLowerCase();
              }).aspectId;
              saveContracts = [{
                aspectId: aspectId,
                aspectPerLocal: (0, _defineProperty2.default)({}, siteId, {
                  translation: {
                    value: aspectName,
                    source: 'MANUAL'
                  },
                  candidateName: aspectName
                }),
                properties: []
              }];
              _context.next = 7;
              return (0, _services.saveAspectsData)(rowId, saveContracts);

            case 7:
              index = contextState.lastSavedAspects.findIndex(function (a) {
                return a.aspectName === selectValue;
              });
              tempLastSavedAspects = (0, _cloneDeep.default)(contextState.lastSavedAspects);
              lastSavedLocal = tempLastSavedAspects[index].aspectPerLocal[siteId];

              if (!lastSavedLocal) {
                tempLastSavedAspects[index].aspectPerLocal[siteId] = {};
              }

              tempLastSavedAspects[index].aspectPerLocal[siteId].translation = {
                value: aspectName,
                source: 'MANUAL'
              };
              tempAspectList = (0, _cloneDeep.default)(contextState.aspectList);
              aspectLocal = tempAspectList[index].aspectPerLocal[siteId];

              if (!aspectLocal) {
                tempAspectList[index].aspectPerLocal[siteId] = {};
              }

              tempAspectList[index].aspectPerLocal[siteId].translation = {
                value: aspectName,
                source: 'MANUAL'
              };
              tempCandidateList = (0, _cloneDeep.default)(contextState.candidateList);
              tempCandidateList[siteId].forEach(function (item) {
                if (item.name === aspectName) {
                  item.decision.mapTo = {
                    aspectId: aspectId,
                    aspectName: selectValue
                  };
                }
              });
              updateContext({
                type: 'update',
                payload: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, contextState), {
                  lastSavedAspects: tempLastSavedAspects
                }), {
                  aspectList: tempAspectList
                }), {
                  candidateList: tempCandidateList
                })
              });
              _context.next = 37;
              break;

            case 21:
              // using the add API
              setIsLoading(true);
              _context.next = 24;
              return (0, _services.addAspectToEtd)(getAddObjectPayload(rowId, selectValue, aspectName));

            case 24:
              response = _context.sent;
              setIsLoading(false);
              newAspect = generateNewAspect({
                aspectId: response.aspectId,
                aspectNameUS: selectValue,
                aspectNameLocal: aspectName
              });
              firstRow = contextState.aspectList.shift();
              lastSavedFirstRow = contextState.lastSavedAspects.shift();
              tempAspects = [firstRow, (0, _cloneDeep.default)(newAspect)].concat((0, _toConsumableArray2.default)(contextState.aspectList));
              _tempLastSavedAspects = [lastSavedFirstRow, (0, _cloneDeep.default)(newAspect)].concat((0, _toConsumableArray2.default)(contextState.lastSavedAspects));
              tempAspects[1].validValues = getInitialValidValues(tempAspects[1].aspectName);
              addAutomaticTranslations(tempAspects[1], response);
              _tempCandidateList = (0, _cloneDeep.default)(contextState.candidateList); // update mapped-to for the site local

              _tempCandidateList[siteId].forEach(function (item) {
                if (item.name === aspectName) {
                  item.decision.mapTo = {
                    aspectId: response.aspectId,
                    aspectName: selectValue
                  };
                }
              }); // update mapped-to for US local


              _tempCandidateList.US.forEach(function (item) {
                if (item.name === selectValue) {
                  item.decision.mapTo = {
                    aspectId: response.aspectId,
                    aspectName: selectValue
                  };
                }
              });

              updateContext({
                type: 'update',
                payload: _objectSpread(_objectSpread({}, contextState), {
                  aspectList: tempAspects,
                  lastSavedAspects: _tempLastSavedAspects,
                  candidateList: _tempCandidateList,
                  totalUsAspects: contextState.totalUsAspects + 1
                })
              });

            case 37:
              updateShowPopover(false);
              startLockCountdown();

            case 39:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _onClickSave.apply(this, arguments);
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

AddBtn.propTypes = {
  /** isRejected - function used to check if aspect name was rejected in the candidate list */
  isRejected: _propTypes.default.func.isRequired,

  /** isInGlobalList - function used to color in green aspects that already exists in global list */
  isInGlobalList: _propTypes.default.func.isRequired,

  /** siteId - the local of the site */
  siteId: _propTypes.default.string.isRequired,

  /** rowId - row id */
  rowId: _propTypes.default.string.isRequired,

  /** aspectName - the name of the aspect from the candidate list */
  aspectName: _propTypes.default.string.isRequired,

  /** disabled - whether to disable the button */
  disabled: _propTypes.default.bool
};
AddBtn.defaultProps = {
  disabled: false
};