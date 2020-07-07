"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AspectCandidateList;

require("antd/es/drawer/style/css");

var _drawer = _interopRequireDefault(require("antd/es/drawer"));

require("antd/es/tooltip/style/css");

var _tooltip = _interopRequireDefault(require("antd/es/tooltip"));

require("antd/es/icon/style/css");

var _icon = _interopRequireDefault(require("antd/es/icon"));

require("antd/es/input/style/css");

var _input = _interopRequireDefault(require("antd/es/input"));

require("antd/es/dropdown/style/css");

var _dropdown = _interopRequireDefault(require("antd/es/dropdown"));

require("antd/es/button/style/css");

var _button = _interopRequireDefault(require("antd/es/button"));

require("antd/es/menu/style/css");

var _menu = _interopRequireDefault(require("antd/es/menu"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

require("antd/es/collapse/style/css");

var _collapse = _interopRequireDefault(require("antd/es/collapse"));

require("antd/es/select/style/css");

var _select = _interopRequireDefault(require("antd/es/select"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _get = _interopRequireDefault(require("lodash/get"));

var _orderBy = _interopRequireDefault(require("lodash/orderBy"));

var _context = require("../context");

var _EntityTypeCategoriesList = _interopRequireDefault(require("../EntityTypeCategoriesList"));

var _ActionSection = _interopRequireDefault(require("./ActionSection"));

var _Filters = _interopRequireDefault(require("./Filters"));

var _utils = require("../../../../utils");

require("./style.less");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Option = _select.default.Option;
var Panel = _collapse.default.Panel;

function AspectCandidateList(_ref) {
  var etInformation = _ref.etInformation,
      getEtCategories = _ref.getEtCategories,
      rowId = _ref.rowId,
      addAspectToEtd = _ref.addAspectToEtd,
      saveAspectsData = _ref.saveAspectsData,
      stage = _ref.stage;

  var _useState = (0, _react.useState)([]),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      activeKeys = _useState2[0],
      setActiveKeys = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      showCatList = _useState4[0],
      setShowCatList = _useState4[1];

  var _useState5 = (0, _react.useState)(''),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      searchVal = _useState6[0],
      setSearchVal = _useState6[1];

  var _useState7 = (0, _react.useState)(['added', 'mapped', 'rejected', 'notReviewed']),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      filters = _useState8[0],
      updateFilters = _useState8[1];

  var _useContext = (0, _react.useContext)(_context.ETPageContext),
      contextState = _useContext.contextState,
      updateContext = _useContext.updateContext;

  var aspectListNamesPerLocal = contextState.aspectList.filter(function (item) {
    return !item.newAspect && item.aspectPerLocal[contextState.selectedLocal];
  }).map(function (item) {
    return item.aspectPerLocal[contextState.selectedLocal].translation.value;
  });
  (0, _react.useEffect)(function () {
    updateContext({
      type: 'update-candidate-list',
      payload: _objectSpread(_objectSpread({}, contextState), {
        candidateList: etInformation.candidateListPerLocale
      })
    });
  }, []);

  var collapseMenu = /*#__PURE__*/_react.default.createElement(_menu.default, {
    onClick: function onClick() {}
  }, /*#__PURE__*/_react.default.createElement(_menu.default.Item, {
    onClick: function onClick() {
      return onCollapseChange('collapse-all');
    },
    key: 1
  }, "Collapse All"), /*#__PURE__*/_react.default.createElement(_menu.default.Item, {
    onClick: function onClick() {
      return onCollapseChange('expand-all');
    },
    key: 2
  }, "Expand All"));

  var totalCategories = (0, _get.default)(contextState, "candidateList[".concat(contextState.selectedLocal, "]"), []).length;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "aspect-candidate-list"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "top-aciton-buttons"
  }, /*#__PURE__*/_react.default.createElement("label", null, "Candidate List", /*#__PURE__*/_react.default.createElement("span", {
    className: "aspects-counter"
  }, "(".concat(totalCategories, ")"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "dropdown-section"
  }, /*#__PURE__*/_react.default.createElement(_Filters.default, {
    initialValues: filters,
    updateFilters: updateFilters
  }), /*#__PURE__*/_react.default.createElement(_dropdown.default, {
    overlay: collapseMenu
  }, /*#__PURE__*/_react.default.createElement(_button.default, {
    size: 'small'
  }, "Actions")), contextState.assignedSites && /*#__PURE__*/_react.default.createElement(_select.default, {
    value: contextState.selectedLocal,
    style: {
      width: 60
    },
    onChange: onChangeLocal,
    size: 'small'
  }, contextState.assignedSites.map(function (site) {
    return /*#__PURE__*/_react.default.createElement(Option, {
      value: site,
      key: site
    }, site);
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: "search-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_input.default, {
    placeholder: "Search Candidate List",
    onChange: onSearchAspect,
    value: searchVal
  }), /*#__PURE__*/_react.default.createElement(_button.default, {
    onClick: function onClick() {
      return setShowCatList(true);
    }
  }, "Categories", /*#__PURE__*/_react.default.createElement(_icon.default, {
    type: "right"
  }))), contextState.candidateList && /*#__PURE__*/_react.default.createElement("section", {
    className: "aspect-list"
  }, /*#__PURE__*/_react.default.createElement(_collapse.default, {
    onChange: onClickCollapse,
    accordion: false,
    activeKey: activeKeys
  }, filterList(contextState.candidateList[contextState.selectedLocal]).map(function (item) {
    return /*#__PURE__*/_react.default.createElement(Panel, {
      header: /*#__PURE__*/_react.default.createElement(_tooltip.default, {
        placement: 'top',
        title: item.name
      }, /*#__PURE__*/_react.default.createElement("span", null, (0, _utils.shortedText)(item.name, 20), " (", (0, _get.default)(item, 'signals.Total.counter', 0), ")")),
      key: item.name,
      extra: /*#__PURE__*/_react.default.createElement(_ActionSection.default, {
        addAspectToEtd: addAspectToEtd,
        saveAspectsData: saveAspectsData,
        rowId: rowId,
        aspectName: item.name,
        siteId: contextState.selectedLocal,
        stage: stage
      })
    }, (0, _get.default)(item, 'decision.mapTo.aspectName') && /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("strong", null, "Mapped to: "), (0, _get.default)(item, 'decision.mapTo.aspectName', '')), /*#__PURE__*/_react.default.createElement(_collapse.default, {
      onChange: function onChange() {}
    }, ['Required', 'Recommended', 'Optional'].map(function (signalKey) {
      return /*#__PURE__*/_react.default.createElement(Panel, {
        key: signalKey,
        header: "".concat(signalKey, " (").concat(item.signals[signalKey].counter, ")")
      }, item.signals[signalKey].categories.map(function (cat) {
        return /*#__PURE__*/_react.default.createElement("p", {
          key: cat.breadcrumbs
        }, cat.breadcrumbs.replace(/>/g, ' > '), cat.combined && /*#__PURE__*/_react.default.createElement(_tooltip.default, {
          placement: "right",
          title: "Combined category"
        }, /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(_icon.default, {
          className: "combined-icon",
          type: "apartment"
        }))));
      }));
    })));
  }))), /*#__PURE__*/_react.default.createElement(_drawer.default, {
    title: null,
    placement: "right",
    width: '500',
    closable: false,
    onClose: function onClose() {
      return setShowCatList(false);
    },
    visible: showCatList
  }, /*#__PURE__*/_react.default.createElement(_EntityTypeCategoriesList.default, {
    getEtCategories: getEtCategories,
    rowId: rowId,
    siteId: contextState.selectedLocal
  })));

  function filterList(candidateList) {
    return (0, _orderBy.default)(candidateList, ['name'], ['asc']).filter(function (item) {
      return !filters.includes('rejected') ? !item.decision.rejected : true;
    }).filter(function (item) {
      return !filters.includes('added') ? !aspectListNamesPerLocal.includes(item.name) : true;
    }).filter(function (item) {
      return !filters.includes('mapped') ? !(0, _get.default)(item, 'decision.mapTo.aspectName') || aspectListNamesPerLocal.includes(item.name) : true;
    }).filter(function (item) {
      return !filters.includes('notReviewed') ? (0, _get.default)(item, 'decision.mapTo.aspectName') || aspectListNamesPerLocal.includes(item.name) || item.decision.rejected : true;
    }).filter(function (item) {
      return item.name.toLowerCase().includes(searchVal.toLowerCase());
    });
  }

  function onChangeLocal(newLocal) {
    updateContext({
      type: 'update-local',
      payload: {
        currentLocal: newLocal
      }
    });
  }

  function onClickCollapse(activeKeys) {
    setActiveKeys(activeKeys);
  }

  function onSearchAspect(e) {
    setSearchVal(e.target.value);
  }

  function onCollapseChange(action) {
    if (action === 'expand-all') {
      setActiveKeys(contextState.candidateList[contextState.selectedLocal].map(function (item) {
        return item.name;
      }));
    }

    if (action === 'collapse-all') {
      setActiveKeys([]);
    }
  }
}

AspectCandidateList.propTypes = {
  /** etInformation - object containing the candidate list */
  etInformation: _propTypes.default.object.isRequired,

  /** getEtCategories - function used to get all categories when the side panel is open */
  getEtCategories: _propTypes.default.func.isRequired,

  /** addAspectToEtd - function used to add an aspect from candidate list to the global list */
  addAspectToEtd: _propTypes.default.func.isRequired,

  /** saveAspectsData - function used to save changes to aspect data */
  saveAspectsData: _propTypes.default.func.isRequired,

  /** rowId - row id */
  rowId: _propTypes.default.string.isRequired,

  /** stage - the Et status */
  stage: _propTypes.default.string.isRequired
};