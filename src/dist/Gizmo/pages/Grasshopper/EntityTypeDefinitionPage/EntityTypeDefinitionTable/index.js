"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = EntityTypeDefinitionTable;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

require("antd/es/icon/style/css");

var _icon = _interopRequireDefault(require("antd/es/icon"));

require("antd/es/input/style/css");

var _input = _interopRequireDefault(require("antd/es/input"));

require("antd/es/button/style/css");

var _button = _interopRequireDefault(require("antd/es/button"));

require("antd/es/table/style/css");

var _table = _interopRequireDefault(require("antd/es/table"));

require("antd/es/tooltip/style/css");

var _tooltip = _interopRequireDefault(require("antd/es/tooltip"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

require("antd/es/modal/style/css");

var _modal = _interopRequireDefault(require("antd/es/modal"));

require("./style.less");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _cloneDeep = _interopRequireDefault(require("lodash/cloneDeep"));

var _get = _interopRequireDefault(require("lodash/get"));

var _isEqual = _interopRequireDefault(require("lodash/isEqual"));

var _AspectFilters = _interopRequireDefault(require("./AspectFilters"));

var _AspectProperties = _interopRequireDefault(require("./AspectProperties"));

var _context6 = require("../context");

var _workerProvider = _interopRequireDefault(require("../workerProvider"));

var _services = require("../services");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var confirm = _modal.default.confirm;

function EntityTypeDefinitionTable(_ref) {
  var aspects = _ref.aspects,
      candidateList = _ref.candidateList,
      onAddAspect = _ref.onAddAspect,
      onSaveAspects = _ref.onSaveAspects,
      onRemoveAspect = _ref.onRemoveAspect,
      stage = _ref.stage,
      onLockEtd = _ref.onLockEtd,
      rowId = _ref.rowId,
      assignedSites = _ref.assignedSites;
  var newAspect = {
    aspectId: '',
    aspectName: '',
    aspectPerLocal: {
      US: {
        translation: {
          value: '',
          source: null
        },
        candidateName: null
      }
    },
    properties: [],
    validValues: [],
    key: '',
    filtered: true,
    newAspect: true,
    automaticLocals: []
  };
  var TRANSLATION_SOURCE_MANUAL = 'MANUAL';
  var relevantSites = reorderSites(Object.keys(candidateList));
  var initialColumnConfig = [{
    title: 'ETA (US)',
    className: 'column-width',
    fixed: 'left',
    key: 'ETA (US)',
    filtered: true,
    render: function render(data) {
      return renderAspectColumn(data, 'US');
    }
  }];
  relevantSites.map(function (siteName) {
    if (siteName !== 'US') {
      initialColumnConfig.push({
        title: siteName,
        className: 'column-width',
        key: siteName,
        filtered: true,
        render: function render(data) {
          return renderAspectColumn(data, siteName);
        }
      });
    }
  });
  initialColumnConfig.push({
    title: '',
    render: renderActionsColumn,
    className: 'actions-column',
    filtered: true,
    fixed: 'right'
  });

  var _useContext = (0, _react.useContext)(_context6.ETPageContext),
      contextState = _useContext.contextState,
      updateContext = _useContext.updateContext;

  var _useState = (0, _react.useState)(initialColumnConfig),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      columns = _useState2[0],
      setColumns = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      expandedRowKeys = _useState4[0],
      setExpandedRowKeys = _useState4[1];

  var _useState5 = (0, _react.useState)(true),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      disableSaveAll = _useState6[0],
      setDisableSaveAll = _useState6[1];

  (0, _react.useEffect)(function () {
    var initialAspects = (0, _cloneDeep.default)(aspects.map(function (aspect) {
      return _objectSpread(_objectSpread({}, aspect), {}, {
        key: aspect.aspectId,
        filtered: true
      });
    }));
    initialAspects.unshift((0, _cloneDeep.default)(newAspect));
    var initialLastSavedAspects = (0, _cloneDeep.default)(initialAspects);
    initialAspects.forEach(function (aspect) {
      var initialValidValues = getInitialValidValues(aspect.aspectName);

      if (!aspect.validValues && initialValidValues.length !== 0) {
        aspect.validValues = initialValidValues;
        aspect.changed = true;
      } else {
        aspect.validValues = [];
      }
    });
    updateContext({
      type: 'update',
      payload: _objectSpread(_objectSpread({}, contextState), {
        aspectList: (0, _cloneDeep.default)(initialAspects),
        lastSavedAspects: (0, _cloneDeep.default)(initialLastSavedAspects),
        totalUsAspects: initialAspects.filter(function (aspect) {
          return (0, _get.default)(aspect, 'aspectPerLocal.US.translation.value', null) !== null;
        }).length,
        relevantSites: relevantSites,
        assignedSites: assignedSites
      })
    });
  }, []);
  (0, _react.useEffect)(function () {
    var columnConfig = [{
      title: 'ETA (US)',
      className: 'column-width',
      fixed: 'left',
      key: 'US',
      filtered: true,
      render: function render(data) {
        return renderAspectColumn(data, 'US');
      }
    }];
    relevantSites.map(function (siteName, index) {
      if (siteName !== 'US') {
        columnConfig.push({
          title: siteName,
          className: 'column-width',
          key: siteName,
          filtered: columns[index].filtered,
          render: function render(data) {
            return renderAspectColumn(data, siteName);
          }
        });
      }
    });
    columnConfig.push({
      title: '',
      render: renderActionsColumn,
      className: 'actions-column',
      filtered: true,
      fixed: 'right'
    });

    if (expandedRowKeys.length || !expandedRowKeys.length && columns.filter(function (c) {
      return c.filtered;
    }).length < 6) {
      delete columnConfig[0].fixed;
      delete columnConfig[columns.length - 1].fixed;
    }

    setColumns(columnConfig);
  }, [contextState]);
  var NUMBER_OF_PROPS = 11;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "et-definition-table-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "et-definition-table-header"
  }, /*#__PURE__*/_react.default.createElement("span", {
    id: "global-list-count-label"
  }, "ETA List"), /*#__PURE__*/_react.default.createElement(_tooltip.default, {
    placement: 'top',
    title: 'Aspects in global list'
  }, /*#__PURE__*/_react.default.createElement("span", {
    id: "aspects-from-total"
  }, "(", contextState.totalUsAspects, ")"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "et-definition-table-filters"
  }, /*#__PURE__*/_react.default.createElement(_AspectFilters.default, {
    onSearchChange: onSearchChange,
    onGlobalListFilterChange: onGlobalListFilterChange,
    onCollapseChange: onCollapseChange,
    onSaveAll: saveAllAspects,
    disableSaveAll: disableSaveAll,
    stage: stage,
    onLockEtd: onLockEtd
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "et-definition-table"
  }, contextState.aspectList && /*#__PURE__*/_react.default.createElement(_table.default, {
    columns: columns.filter(function (c) {
      return c.filtered;
    }),
    dataSource: contextState.aspectList.filter(function (a) {
      return a.filtered;
    }),
    bordered: true,
    scroll: {
      x: 'max-content'
    },
    pagination: false,
    rowKey: 'aspectId',
    expandedRowRender: expandedRowRender,
    expandIcon: expandIcon,
    expandedRowKeys: expandedRowKeys
  })));

  function expandedRowRender(data) {
    return /*#__PURE__*/_react.default.createElement(_AspectProperties.default, {
      aspectProperties: data.properties,
      recommendations: getRecommendationsByAspect(data, contextState.selectedLocal),
      onPropertyChange: function onPropertyChange(props) {
        return _onPropertyChange(data.aspectId, props);
      },
      onValidValuesChange: function onValidValuesChange(values) {
        return _onValidValuesChange(data.aspectId, values);
      },
      onSave: function onSave() {
        return saveAspect(data);
      },
      disableSave: !data.changed,
      stage: stage,
      validValues: data.validValues
    });
  }

  function _onPropertyChange(aspectId, properties) {
    var tempAspects = (0, _cloneDeep.default)(contextState.aspectList);
    var index = tempAspects.findIndex(function (a) {
      return a.aspectId === aspectId;
    });
    tempAspects[index].properties = properties;
    tempAspects[index].changed = true;
    setDisableSaveAll(false);
    updateContext({
      type: 'update',
      payload: _objectSpread(_objectSpread({}, contextState), {}, {
        aspectList: tempAspects
      })
    });
    startLockCountdown();
  }

  function _onValidValuesChange(aspectId, values) {
    var tempAspects = (0, _cloneDeep.default)(contextState.aspectList);
    var index = tempAspects.findIndex(function (a) {
      return a.aspectId === aspectId;
    });
    tempAspects[index].validValues = values;
    tempAspects[index].changed = true;
    setDisableSaveAll(false);
    updateContext({
      type: 'update',
      payload: _objectSpread(_objectSpread({}, contextState), {}, {
        aspectList: tempAspects
      })
    });
    startLockCountdown();
  }

  function expandIcon(data) {
    return !data.record.newAspect && /*#__PURE__*/_react.default.createElement(_button.default, {
      icon: getExpandIcon(data.record),
      onClick: function onClick() {
        return onCollapseSingleRow(data.record);
      }
    });
  }

  function getExpandIcon(data) {
    return expandedRowKeys.includes(data.key) ? 'minus' : 'plus';
  }

  function onSearchChange(filters) {
    updateFilteredRows(filters);
  }

  function onGlobalListFilterChange(filters) {
    updateFilteredRows(filters);
    updateFilteredColumns(filters);
  }

  function onCollapseChange(action) {
    if (action === 'expand-all') {
      onCollapseAllRows(true);
    }

    if (action === 'collapse-all') {
      onCollapseAllRows(false);
    }
  }

  function onCollapseSingleRow(data) {
    var tempExpandRowKeys = (0, _cloneDeep.default)(expandedRowKeys);
    var toExpand = !expandedRowKeys.includes(data.key);
    collapseRow(data, tempExpandRowKeys, toExpand);
    updateFixedColumns(columns, tempExpandRowKeys);
    setExpandedRowKeys(tempExpandRowKeys);
  }

  function onCollapseAllRows(toExpand) {
    var tempExpandRowKeys = (0, _cloneDeep.default)(expandedRowKeys);
    contextState.aspectList.forEach(function (aspect) {
      collapseRow(aspect, tempExpandRowKeys, toExpand);
    });
    updateFixedColumns(columns, tempExpandRowKeys);
    setExpandedRowKeys(tempExpandRowKeys);
  }

  function collapseRow(aspect, expandRowKeys, toExpand) {
    if (aspect.newAspect) return;
    var key = aspect.key;
    var index = expandRowKeys.indexOf(key);

    if (toExpand && index === -1) {
      expandRowKeys.push(key);
    }

    if (!toExpand && index !== -1) {
      expandRowKeys.splice(index, 1);
    }
  }

  function getRecommendationsByAspect(aspect, siteName) {
    var recommendations = {};
    if (!candidateList[siteName]) return recommendations;
    var index = candidateList[siteName].findIndex(function (c) {
      return c.name === aspect.aspectName;
    }); // create a map of recommendations

    if (index !== -1) {
      candidateList[siteName][index].propertiesRecommendations.forEach(function (prop) {
        recommendations[prop.name] = prop.recommendation;
      });
    }

    return recommendations;
  }

  function updateFixedColumns(columns, expandedRowKeys) {
    if (shouldRemoveFixedColumns(columns, expandedRowKeys)) {
      removeFixedColumns(columns);
    } else {
      columns[0].fixed = 'left';
      columns[columns.length - 1].fixed = 'right';
    }

    setColumns(columns);
  }

  function shouldRemoveFixedColumns(columns, expandedRowKeys) {
    // we cancel fixed columns when there are too few columns, or all the rows are collapsed
    return expandedRowKeys.length || !expandedRowKeys.length && columns.filter(function (c) {
      return c.filtered;
    }).length < 6;
  }

  function removeFixedColumns(columns) {
    delete columns[0].fixed;
    delete columns[columns.length - 1].fixed;
  }

  function renderAspectColumn(data, local) {
    var translation = (0, _get.default)(data, "aspectPerLocal[".concat(local, "].translation.value"), '');
    var hasAutomaticLocal = (0, _get.default)(data, 'automaticLocals', []).findIndex(function (l) {
      return l === local;
    }) !== -1;
    var hasNonManualSource = (0, _get.default)(data, "aspectPerLocal[".concat(local, "].translation.source"), null) !== null && (0, _get.default)(data, "aspectPerLocal[".concat(local, "].translation.source"), null) !== TRANSLATION_SOURCE_MANUAL; // a local will have a black frame in each one of the cases: 1 - automatic translatiom; 2 - source isnt manual

    var className = hasAutomaticLocal || hasNonManualSource ? 'translation-black-frame' : '';
    var enableColumn = newAspectCondition(data, local) || savedAspectCondition(data, local);
    return /*#__PURE__*/_react.default.createElement(_input.default, {
      className: className,
      disabled: enableColumn === false,
      type: "text",
      value: translation,
      onKeyPress: function onKeyPress(e) {
        return onAspectCellEnter(e.key, data, local);
      },
      onChange: function onChange(e) {
        return onAspectCellChange(e.target.value, (0, _cloneDeep.default)(data), local);
      }
    });
  }

  function renderActionsColumn(text, data, index) {
    return /*#__PURE__*/_react.default.createElement("div", {
      id: "actions-column-header"
    }, /*#__PURE__*/_react.default.createElement(_button.default, {
      loading: data.isSaved,
      onClick: function onClick() {
        return saveAspect(data);
      },
      icon: "save",
      disabled: !data.changed,
      key: "".concat(data.name, "-").concat(index, "-1")
    }), !data.newAspect && /*#__PURE__*/_react.default.createElement(_button.default, {
      loading: data.isDeleted,
      disabled: stage !== 'Aspect Design' && !contextState.isLocked,
      icon: "delete",
      onClick: function onClick() {
        return onRemoveAspectClick(data);
      },
      key: "".concat(data.name, "-").concat(index, "-2")
    }));
  }

  function onRemoveAspectClick(aspect) {
    confirm({
      title: "Are you sure you want to delete aspect: ".concat((0, _get.default)(aspect, 'aspectPerLocal.US.translation.value', ''), "?"),
      icon: /*#__PURE__*/_react.default.createElement(_icon.default, {
        type: "warning"
      }),
      content: '',
      onOk: function onOk() {
        removeAspect(aspect);
      },
      onCancel: function onCancel() {}
    });
  }

  function removeAspect(_x) {
    return _removeAspect.apply(this, arguments);
  }

  function _removeAspect() {
    _removeAspect = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(aspect) {
      var index, tempAspects, tempLastSaveAspects;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              index = contextState.aspectList.findIndex(function (a) {
                return a.aspectId === aspect.aspectId;
              });

              if (!(index !== -1)) {
                _context.next = 11;
                break;
              }

              aspect.isDeleted = true;
              _context.next = 5;
              return onRemoveAspect((0, _cloneDeep.default)(aspect.aspectId));

            case 5:
              tempAspects = (0, _cloneDeep.default)(contextState.aspectList);
              tempAspects.splice(index, 1);
              tempLastSaveAspects = (0, _cloneDeep.default)(contextState.lastSavedAspects);
              tempLastSaveAspects.splice(index, 1);
              updateContext({
                type: 'update',
                payload: _objectSpread(_objectSpread({}, contextState), {
                  lastSavedAspects: tempLastSaveAspects,
                  aspectList: tempAspects,
                  totalUsAspects: contextState.totalUsAspects - 1
                })
              });
              aspect.isDeleted = false;

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _removeAspect.apply(this, arguments);
  }

  function onAspectCellEnter(eventKey, aspect) {
    if (aspect.newAspect && eventKey === 'Enter' && (0, _get.default)(aspect, 'aspectPerLocal.US.translation.value', '').length) {
      saveNewAspect(aspect);
    }
  }

  function onAspectCellChange(newValue, data, local) {
    startLockCountdown();
    var tempAspects = (0, _cloneDeep.default)(contextState.aspectList);
    var index = tempAspects.findIndex(function (a) {
      return a.aspectId === data.aspectId;
    });

    if (index !== -1) {
      removeFromAutomaticLocals(data, local);
      data.aspectPerLocal[local] = {
        translation: {
          value: newValue,
          source: TRANSLATION_SOURCE_MANUAL
        }
      };
      if (local === 'US') data.aspectName = newValue;
      data.changed = true;
      tempAspects[index] = data;
      updateContext({
        type: 'update',
        payload: _objectSpread(_objectSpread({}, contextState), {}, {
          aspectList: tempAspects
        })
      });
      setDisableSaveAll(false);
    }
  }

  function removeFromAutomaticLocals(aspect, local) {
    // when the user edits automatic local we remove it from the automatic locals list
    var index = (0, _get.default)(aspect, 'automaticLocals', []).findIndex(function (automaticLocal) {
      return automaticLocal === local;
    });

    if (index !== -1) {
      aspect.automaticLocals.splice(index, 1);
    }
  }

  function updateFilteredRows(filters) {
    var tempAspects = (0, _cloneDeep.default)(contextState.aspectList);
    tempAspects.forEach(function (aspect) {
      return aspect.filtered = aspect.newAspect || filterBySearch(aspect, filters.search) && filterByGlobalListFilters(aspect, filters);
    });
    updateContext({
      type: 'update',
      payload: _objectSpread(_objectSpread({}, contextState), {}, {
        aspectList: tempAspects
      })
    });
  }

  function updateFilteredColumns(filters) {
    var tempColumns = (0, _cloneDeep.default)(columns);
    tempColumns.forEach(function (column) {
      return column.filtered = staticColumn(column) || filteredColumn(column, filters);
    });
    updateFixedColumns(tempColumns, expandedRowKeys);
  }

  function filterByGlobalListFilters(aspect, filters) {
    if (!filters.missingProps && !filters.missingLocals) return true;
    return filterByMissingProps(aspect, filters.missingProps) || filterByMissingLocals(aspect, filters.missingLocals, filters.sites);
  }

  function staticColumn(column) {
    return !column.title.length || column.title === 'ETA (US)';
  }

  function filteredColumn(column, filters) {
    return filters.sites.includes(column.title);
  }

  function filterBySearch(aspect, search) {
    return Object.values((0, _get.default)(aspect, 'aspectPerLocal', [])).findIndex(function (local) {
      return local.translation.value && local.translation.value.toLowerCase().includes(search.toLowerCase());
    }) !== -1;
  }

  function filterByMissingProps(aspect, missingProps) {
    // if the filter is false or null we dont need to make a check
    if (!missingProps) return false; // if props are disabled - they shouldn't be concidered as missing

    var numberOfDisabledProps = getNumberOfDisabledProps(aspect);
    return aspect.properties.filter(function (p) {
      return p.value !== null;
    }).length < NUMBER_OF_PROPS - numberOfDisabledProps;
  }

  function getNumberOfDisabledProps(aspect) {
    var index = aspect.properties.findIndex(function (p) {
      return p.name === 'Tag Type' && p.value && p.value !== 'Both';
    });
    return index !== -1 ? 1 : 0;
  }

  function filterByMissingLocals(aspect, missingLocals, filteredSites) {
    // if the filter is false or null we dont need to make a check
    if (!missingLocals) return false;
    var aspectIsMissingLocals = false;
    filteredSites.forEach(function (site) {
      if (!aspect.aspectPerLocal[site] || !aspect.aspectPerLocal[site].translation || !aspect.aspectPerLocal[site].translation.value || !aspect.aspectPerLocal[site].translation.value.length) {
        aspectIsMissingLocals = true;
      }
    });
    return aspectIsMissingLocals;
  }

  function saveAspect(_x2) {
    return _saveAspect.apply(this, arguments);
  }

  function _saveAspect() {
    _saveAspect = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(aspect) {
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!aspect.newAspect) {
                _context2.next = 5;
                break;
              }

              _context2.next = 3;
              return saveNewAspect(aspect);

            case 3:
              _context2.next = 7;
              break;

            case 5:
              _context2.next = 7;
              return saveExistingAspect(aspect);

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _saveAspect.apply(this, arguments);
  }

  function saveNewAspect(_x3) {
    return _saveNewAspect.apply(this, arguments);
  }

  function _saveNewAspect() {
    _saveNewAspect = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(aspect) {
      var candidateName, response, aspectId, tempCandidateList, tempLastSaved, tempAspects;
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!isAspectInGlobalList(aspect)) {
                _context3.next = 3;
                break;
              }

              _modal.default.warning({
                title: "\"".concat((0, _get.default)(aspect, 'aspectName', ''), "\" exists in global list"),
                content: 'Adding new aspects is only allowed for new values that do not exist in global list'
              });

              return _context3.abrupt("return");

            case 3:
              candidateName = searchNewAspectInCandidateList(aspect);
              aspect.isSaved = true;
              aspect.aspectName = aspect.aspectPerLocal['US'].translation.value;
              _context3.next = 8;
              return onAddAspect(aspect.aspectName, candidateName);

            case 8:
              response = _context3.sent;
              aspect.isSaved = false;
              aspectId = response.aspectId;

              if (response.aspectId) {
                tempCandidateList = addMappingToCandidate(candidateName, response); // update aspect fields

                aspect.aspectId = aspectId;
                aspect.key = aspectId;
                aspect.changed = false;
                delete aspect.newAspect; // update aspect in last saved aspects

                tempLastSaved = (0, _cloneDeep.default)(contextState.lastSavedAspects);
                tempLastSaved[0] = (0, _cloneDeep.default)(aspect);
                tempLastSaved.unshift((0, _cloneDeep.default)(newAspect)); // update aspects

                if (candidateName) {
                  //aspect exists in candidateList
                  aspect.validValues = getInitialValidValues(aspect.aspectName);
                }

                tempAspects = (0, _cloneDeep.default)(contextState.aspectList);
                tempAspects[0] = (0, _cloneDeep.default)(aspect);
                addAutomaticTranslations(tempAspects[0], response);
                tempAspects.unshift((0, _cloneDeep.default)(newAspect));
                updateContext({
                  type: 'update',
                  payload: _objectSpread(_objectSpread({}, contextState), {}, {
                    aspectList: (0, _toConsumableArray2.default)(tempAspects),
                    lastSavedAspects: (0, _toConsumableArray2.default)(tempLastSaved),
                    totalUsAspects: contextState.totalUsAspects + 1,
                    candidateList: tempCandidateList
                  })
                });
                startLockCountdown();
              }

            case 12:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _saveNewAspect.apply(this, arguments);
  }

  function getInitialValidValues(aspectName) {
    var aspect = candidateList['US'].find(function (aspect) {
      return aspect.name === aspectName;
    });
    return aspect ? aspect.validValues : [];
  }

  function searchNewAspectInCandidateList(aspect) {
    var candidateName = null;
    contextState.candidateList.US.forEach(function (item) {
      if (item.name === aspect.aspectName) {
        candidateName = item.name;
      }
    });
    return candidateName;
  }

  function addMappingToCandidate(candidateName, response) {
    // if the added aspect was already in the candidate list we update the mapping
    var tempCandidateList = (0, _cloneDeep.default)(contextState.candidateList);
    if (!candidateName) return tempCandidateList;
    tempCandidateList.US.forEach(function (item, index) {
      if (item.name === candidateName) {
        tempCandidateList.US[index].decision.mapTo = {
          aspectId: response.aspectId,
          aspectName: response.aspectName
        };
      }
    });
    return tempCandidateList;
  }

  function isAspectInGlobalList(aspect) {
    // since the aspect list also contain the new value
    // input we should check if length is bigger then 1
    var res = contextState.aspectList.filter(function (item) {
      return item.aspectName.toLowerCase() === aspect.aspectName.toLowerCase();
    });
    return res.length > 1 ? true : false;
  }

  function saveExistingAspect(_x4) {
    return _saveExistingAspect.apply(this, arguments);
  }

  function _saveExistingAspect() {
    _saveExistingAspect = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(aspect) {
      var index, lastSavedAspect, delta, etInformation, newCandidateList, tempLastSavedAspects;
      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              // calculate the delta of the aspect from the last saved aspect and save
              aspect.isSaved = true;
              index = contextState.lastSavedAspects.findIndex(function (a) {
                return a.aspectId === aspect.aspectId;
              });
              lastSavedAspect = contextState.lastSavedAspects[index];
              delta = getAspectDelta(aspect, lastSavedAspect);
              _context4.next = 6;
              return onSaveAspects([delta]);

            case 6:
              _context4.next = 8;
              return (0, _services.getEtInformation)(rowId);

            case 8:
              etInformation = _context4.sent;
              newCandidateList = (0, _get.default)(etInformation, 'candidateListPerLocale', {}); // update aspect in last saved aspects

              aspect.changed = false;
              aspect.isSaved = false;
              tempLastSavedAspects = (0, _cloneDeep.default)(contextState.lastSavedAspects);
              tempLastSavedAspects[index] = aspect;
              updateContext({
                type: 'update-existing-aspect',
                payload: _objectSpread(_objectSpread({}, contextState), {}, {
                  lastSavedAspects: tempLastSavedAspects,
                  candidateList: newCandidateList
                })
              });

            case 15:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));
    return _saveExistingAspect.apply(this, arguments);
  }

  function saveAllAspects() {
    return _saveAllAspects.apply(this, arguments);
  }

  function _saveAllAspects() {
    _saveAllAspects = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5() {
      var tempAspects, deltas, index, aspect, lastSavedAspect, delta;
      return _regenerator.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              tempAspects = (0, _cloneDeep.default)(contextState.aspectList);

              if (!(tempAspects.length <= 1)) {
                _context5.next = 3;
                break;
              }

              return _context5.abrupt("return");

            case 3:
              deltas = []; // iterate the aspects except the 1st one, which is the new aspect

              for (index = 1; index < tempAspects.length; index++) {
                aspect = tempAspects[index];
                aspect.changed = false;
                lastSavedAspect = contextState.lastSavedAspects[index];
                delta = getAspectDelta(aspect, lastSavedAspect);
                deltas.push(delta);
              }

              deltas = deltas.filter(validDelta);
              updateContext({
                type: 'update',
                payload: _objectSpread(_objectSpread({}, contextState), {}, {
                  lastSavedAspects: tempAspects,
                  aspectList: tempAspects
                })
              });
              _context5.next = 9;
              return onSaveAspects(deltas);

            case 9:
              setDisableSaveAll(true);

            case 10:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));
    return _saveAllAspects.apply(this, arguments);
  }

  function validDelta(delta) {
    return (0, _get.default)(delta, 'properties', []).length || Object.keys((0, _get.default)(delta, 'aspectPerLocal', [])).length;
  }

  function getAspectDelta(aspect, lastSavedAspect) {
    var delta = {
      aspectId: aspect.aspectId,
      aspectName: aspect.aspectName,
      aspectPerLocal: {},
      properties: [],
      validValues: []
    };
    Object.keys(aspect.aspectPerLocal).forEach(function (localName) {
      if ((0, _get.default)(aspect, "aspectPerLocal[".concat(localName, "].translation.value"), null) !== (0, _get.default)(lastSavedAspect, "aspectPerLocal[".concat(localName, "].translation.value"), null)) {
        delta.aspectPerLocal[localName] = aspect.aspectPerLocal[localName];
      }
    });
    aspect.properties.forEach(function (property) {
      if (lastSavedAspect.properties.findIndex(function (p) {
        return equalProps(p, property);
      }) === -1) {
        delta.properties.push(property);
      }
    });

    if (!(0, _isEqual.default)(aspect.validValues, lastSavedAspect.validValues)) {
      delta.validValues = aspect.validValues;
    }

    return delta;
  }

  function equalProps(p1, p2) {
    return p1.name === p2.name && p1.value === p2.value;
  }

  function startLockCountdown() {
    // on locked state the lock countdown should be initialized for every action
    if (contextState.isLocked) {
      _workerProvider.default.postMessage('start-countdown');
    }
  }

  function reorderSites(sitesArr) {
    var order = ['US', 'UK', 'AU', 'DE', 'FR', 'IT', 'ES'];
    sitesArr.sort(function (a, b) {
      return order.indexOf(a) - order.indexOf(b);
    });
    return sitesArr;
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

  function newAspectCondition(aspect, local) {
    return (// for new aspect column - only US columns is enabled
      aspect.newAspect && local === 'US' && (contextState.isLocked || stage === 'Aspect Design')
    );
  }

  function savedAspectCondition(aspect, local) {
    return (// for saved aspects - all local are open on Aspect Design stage and from next stage
      // it depends the assigned sites
      !aspect.newAspect && (stage === 'Aspect Design' || contextState.assignedSites.includes(local) && local !== 'US' || contextState.isLocked && local === 'US')
    );
  }
}

EntityTypeDefinitionTable.propTypes = {
  /** rowId - row id */
  rowId: _propTypes.default.string.isRequired,

  /** aspects - the aspects definition list */
  aspects: _propTypes.default.array.isRequired,

  /** candidateList - the candidat list with recommendations */
  candidateList: _propTypes.default.object.isRequired,

  /** onSaveAspects - save existing aspect callback */
  onSaveAspects: _propTypes.default.func.isRequired,

  /** onAddAspect - add aspect to etd callback */
  onAddAspect: _propTypes.default.func.isRequired,

  /** stage - the status of the ET */
  stage: _propTypes.default.string.isRequired,

  /** onLockEtd - lock the Et callbck */
  onLockEtd: _propTypes.default.func.isRequired,

  /** assignedSites - the site which the user assigned to */
  assignedSites: _propTypes.default.array.isRequired
};