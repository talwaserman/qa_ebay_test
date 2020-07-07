"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MapBtn;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

require("antd/es/popover/style/css");

var _popover = _interopRequireDefault(require("antd/es/popover"));

require("antd/es/button/style/css");

var _button = _interopRequireDefault(require("antd/es/button"));

require("antd/es/checkbox/style/css");

var _checkbox = _interopRequireDefault(require("antd/es/checkbox"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Option = _select.default.Option;

function MapBtn(_ref) {
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

  var mapValue = getMapTo(siteId, aspectName);

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      showPopover = _useState4[0],
      updateShowPopover = _useState4[1];

  var _useState5 = (0, _react.useState)({
    prev: false,
    current: false
  }),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      mapCheckbox = _useState6[0],
      setMapCheckbox = _useState6[1];

  var _useState7 = (0, _react.useState)({
    prev: mapValue,
    current: mapValue
  }),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      selectValue = _useState8[0],
      updateSelect = _useState8[1];

  var content = /*#__PURE__*/_react.default.createElement("div", {
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    className: "content-wrapper"
  }, /*#__PURE__*/_react.default.createElement("label", null, "Please Select US aspect:"), /*#__PURE__*/_react.default.createElement(_select.default, {
    showSearch: true,
    value: selectValue.current,
    style: {
      width: 200
    },
    placeholder: "Select a US value",
    optionFilterProp: "children",
    onChange: function onChange(value) {
      return updateSelect(_objectSpread(_objectSpread({}, selectValue), {}, {
        current: value
      }));
    },
    onFocus: function onFocus() {},
    onBlur: function onBlur() {},
    onSearch: function onSearch() {},
    filterOption: function filterOption(input, option) {
      return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    }
  }, (0, _get.default)(contextState, 'aspectList', []).map(function (item) {
    return /*#__PURE__*/_react.default.createElement(Option, {
      value: item.aspectName,
      key: item.aspectName
    }, item.aspectName);
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "checkbox-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_checkbox.default, {
    checked: mapCheckbox.current,
    onChange: onCheckboxChange
  }, "Change existing aspect display")), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_button.default, {
    size: 'small',
    onClick: onClickSave,
    type: "primary"
  }, "Save"), /*#__PURE__*/_react.default.createElement(_button.default, {
    size: 'small',
    onClick: onClickCancel
  }, "Cancel")));

  return /*#__PURE__*/_react.default.createElement(_popover.default, {
    placement: "left",
    title: null,
    content: content,
    trigger: "click",
    visible: showPopover,
    onClick: function onClick(e) {
      e.stopPropagation();
    }
  }, /*#__PURE__*/_react.default.createElement(_button.default, {
    shape: "circle",
    icon: "swap",
    loading: isLoading,
    size: 'small',
    style: {
      background: mapValue ? '#E5FBD4' : ''
    },
    disabled: isInGlobalList(aspectName) || isRejected(aspectName),
    onClick: function onClick(e) {
      e.stopPropagation();
      updateShowPopover(true);
    }
  }));

  function onCheckboxChange(value) {
    setMapCheckbox(_objectSpread(_objectSpread({}, mapCheckbox), {}, {
      current: value.target.checked
    }));
  }

  function getMapTo(siteId, aspectName) {
    var candidateItem = contextState.candidateList[siteId].find(function (item) {
      return item.name === aspectName;
    });
    return (0, _get.default)(candidateItem, 'decision.mapTo.aspectName');
  }

  function getContracts(aspectId) {
    if (mapCheckbox.current) {
      return [{
        aspectId: aspectId,
        aspectPerLocal: (0, _defineProperty2.default)({}, siteId, {
          translation: aspectName,
          candidateName: aspectName
        }),
        properties: []
      }];
    } else {
      return [{
        aspectId: aspectId,
        aspectPerLocal: (0, _defineProperty2.default)({}, siteId, {
          candidateName: aspectName
        }),
        properties: []
      }];
    }
  }

  function onClickCancel(e) {
    e.stopPropagation();
    updateSelect(_objectSpread(_objectSpread({}, selectValue), {}, {
      current: selectValue.prev
    }));
    setMapCheckbox(_objectSpread(_objectSpread({}, mapCheckbox), {}, {
      current: mapCheckbox.prev
    }));
    updateShowPopover(false);
  }

  function onClickSave() {
    return _onClickSave.apply(this, arguments);
  }

  function _onClickSave() {
    _onClickSave = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var aspectId, saveContract, indexAspects, isCurrentValueEmpty, tempLastSavedAspects, tempAspectList, etInformation, newCandidateList, tempCandidateList;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setIsLoading(true);

              if (!contextState.aspectList.find(function (item) {
                return item.aspectName.toLowerCase() === selectValue.current.toLowerCase();
              })) {
                _context.next = 21;
                break;
              }

              // using the save API to add a new translation
              aspectId = contextState.aspectList.find(function (item) {
                return item.aspectName.toLowerCase() === selectValue.current.toLowerCase();
              }).aspectId;
              saveContract = getContracts(aspectId);
              _context.next = 6;
              return (0, _services.saveAspectsData)(rowId, saveContract);

            case 6:
              indexAspects = contextState.aspectList.findIndex(function (a) {
                return a.aspectName === selectValue.current;
              });
              isCurrentValueEmpty = checkIsCurrentValueEmpty(indexAspects); // add the new value to global list if checkbox is selected or current translation is empty

              if (!(mapCheckbox.current || isCurrentValueEmpty)) {
                _context.next = 18;
                break;
              }

              tempLastSavedAspects = generateUpdatedData((0, _cloneDeep.default)(contextState.lastSavedAspects));
              tempAspectList = generateUpdatedData((0, _cloneDeep.default)(contextState.aspectList)); // get updated candidate list

              _context.next = 13;
              return (0, _services.getEtInformation)(rowId);

            case 13:
              etInformation = _context.sent;
              newCandidateList = (0, _get.default)(etInformation, 'candidateListPerLocale', {});
              updateContext({
                type: 'update',
                payload: _objectSpread(_objectSpread({}, contextState), {}, {
                  lastSavedAspects: tempLastSavedAspects,
                  aspectList: tempAspectList,
                  candidateList: newCandidateList
                })
              });
              _context.next = 21;
              break;

            case 18:
              tempCandidateList = (0, _cloneDeep.default)(contextState.candidateList);
              tempCandidateList[siteId].forEach(function (item, index) {
                if (item.name === aspectName) {
                  tempCandidateList[siteId][index].decision.mapTo = {
                    aspectId: aspectId,
                    aspectName: selectValue.current
                  };
                }
              });
              updateContext({
                type: 'update',
                payload: _objectSpread(_objectSpread({}, contextState), {
                  candidateList: tempCandidateList
                })
              });

            case 21:
              updateShowPopover(false);
              updateSelect({
                current: selectValue.current,
                prev: selectValue.current
              });
              setIsLoading(false);

            case 24:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _onClickSave.apply(this, arguments);
  }

  function generateUpdatedData(dataList) {
    var i = dataList.findIndex(function (a) {
      return a.aspectName === selectValue.current;
    });
    var lastSavedLocal = dataList[i].aspectPerLocal[siteId];

    if (!lastSavedLocal) {
      dataList[i].aspectPerLocal[siteId] = {};
    }

    dataList[i].aspectPerLocal[siteId].translation = aspectName;

    if (siteId === 'US') {
      dataList[i].aspectName = aspectName;
    }

    return dataList;
  }

  function checkIsCurrentValueEmpty(index) {
    //TODO: using get returned true when it should have returned false, need to check
    return !(contextState.aspectList[index] && contextState.aspectList[index].aspectPerLocal[siteId] && contextState.aspectList[index].aspectPerLocal[siteId].translation);
  }
}

MapBtn.propTypes = {
  /** isRejected - function used to disable the map button if the aspect is rejected */
  isRejected: _propTypes.default.func.isRequired,

  /** isInGlobalList - function used to color in green aspects that already exists in global list */
  isInGlobalList: _propTypes.default.func.isRequired,

  /** siteId - the local of the site */
  siteId: _propTypes.default.string.isRequired,

  /** rowId - row id */
  rowId: _propTypes.default.string.isRequired,

  /** aspectName - the name of the aspect from the candidate list */
  aspectName: _propTypes.default.string.isRequired
};