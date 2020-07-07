"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Duplicates;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

require("antd/es/notification/style/css");

var _notification2 = _interopRequireDefault(require("antd/es/notification"));

require("antd/es/drawer/style/css");

var _drawer = _interopRequireDefault(require("antd/es/drawer"));

require("antd/es/switch/style/css");

var _switch = _interopRequireDefault(require("antd/es/switch"));

require("antd/es/divider/style/css");

var _divider = _interopRequireDefault(require("antd/es/divider"));

require("antd/es/tooltip/style/css");

var _tooltip = _interopRequireDefault(require("antd/es/tooltip"));

require("antd/es/icon/style/css");

var _icon = _interopRequireDefault(require("antd/es/icon"));

require("antd/es/button/style/css");

var _button = _interopRequireDefault(require("antd/es/button"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _get = _interopRequireDefault(require("lodash/get"));

var _union = _interopRequireDefault(require("lodash/union"));

var _cloneDeep = _interopRequireDefault(require("lodash/cloneDeep"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _GenericModal = _interopRequireDefault(require("../../../shared/GenericModal"));

var _utils = require("../../../utils");

var _EscalatedField = _interopRequireDefault(require("../../../shared/EscalatedField"));

var _shared = require("../../../shared");

var _DrawerContentDuplicate = _interopRequireDefault(require("./DrawerContentDuplicate"));

var _DrawerContentMatching = _interopRequireDefault(require("./DrawerContentMatching"));

require("./style.less");

require("../../../global-styles.less");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Duplicates(_ref) {
  var clusterData = _ref.clusterData,
      updateClusterData = _ref.updateClusterData,
      rowsDone = _ref.rowsDone,
      decisions = _ref.decisions,
      reasons = _ref.reasons,
      saveTask = _ref.saveTask,
      changeCategory = _ref.changeCategory,
      jobId = _ref.jobId,
      jobTypeConfiguration = _ref.jobTypeConfiguration,
      workMode = _ref.workMode,
      loggedInUser = _ref.loggedInUser,
      fetchNextCluster = _ref.fetchNextCluster,
      currentPage = _ref.currentPage;
  (0, _react.useEffect)(function () {
    var scrollCallBack = initializingFixedPositionsAndReturnCallback();

    var popEventFunc = function popEventFunc() {
      if (!window.location.hash.includes('vendor-management/compared-entity')) {
        updateShowDrawer(false);
        window.removeEventListener('popstate', popEventFunc);
      }
    };

    window.addEventListener('popstate', popEventFunc);
    return function () {
      window.removeEventListener('scroll', scrollCallBack);
    };
  }, []);
  var showSendToSupervisor = workMode !== 'edit' && !loggedInUser.isUserSupervisor;
  var isSurvivorProvided = (0, _get.default)(jobTypeConfiguration, "configurationResponse.survivorProvided", false);
  var productIndicationSelectValues = isSurvivorProvided ? ['Victim', 'Survivor', 'Both'] : ['Product 1', 'Product 2', 'Both'];
  var observationOptions = reasons;
  var leftEntityProp = (0, _get.default)(clusterData, 'nextRowContract.comparedEntityRowContracts[0].entities[0]', null);

  var _useState = (0, _react.useState)(true),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      showDrawer = _useState2[0],
      updateShowDrawer = _useState2[1];

  var _useState3 = (0, _react.useState)(currentPage),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      page = _useState4[0],
      setPage = _useState4[1];

  var _useState5 = (0, _react.useState)(clusterData.nextRowContract.comparedEntityRowContracts.map(function (pair) {
    return pair.entities[1];
  })),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      entitiesArray = _useState6[0],
      setEntitiesArray = _useState6[1];

  var _useState7 = (0, _react.useState)(leftEntityProp),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      leftEntityData = _useState8[0],
      setLeftEntityData = _useState8[1];

  var _useState9 = (0, _react.useState)(decisions),
      _useState10 = (0, _slicedToArray2.default)(_useState9, 2),
      decisionsData = _useState10[0],
      setDecisionsData = _useState10[1];

  var _useState11 = (0, _react.useState)(false),
      _useState12 = (0, _slicedToArray2.default)(_useState11, 2),
      isSupervisorNewAspectModalOpen = _useState12[0],
      setSupervisorNewAspectModalOpenVisibility = _useState12[1];

  var _useState13 = (0, _react.useState)(false),
      _useState14 = (0, _slicedToArray2.default)(_useState13, 2),
      isRightEntityNewAspectModalOpen = _useState14[0],
      setRightEntityNewAspectModalOpenVisibility = _useState14[1];

  var shouldMakeObservation = clusterData.nextRowContract.comparedEntityRowContracts[page].actionsContract.makeObservation;
  var shouldMakeDecision = clusterData.nextRowContract.comparedEntityRowContracts[page].actionsContract.makeDecision;
  var isEnabledForCuration = (0, _get.default)(jobTypeConfiguration, "configurationResponse.enableProductCuration", true) && shouldMakeDecision && !shouldMakeObservation || shouldMakeDecision && !!(0, _get.default)(decisionsData[page], 'decisionInfo.observation.value', false);
  var jobType = jobTypeConfiguration.taskConfiguration.type.toLowerCase();
  var isDuplicates = jobType === 'duplicates';
  var left_Entity_Def = leftEntityData.product.productDefinition;

  var _useState15 = (0, _react.useState)(false),
      _useState16 = (0, _slicedToArray2.default)(_useState15, 2),
      showSuggestions = _useState16[0],
      setShowSuggestions = _useState16[1];

  var _useState17 = (0, _react.useState)(false),
      _useState18 = (0, _slicedToArray2.default)(_useState17, 2),
      showOriginalValues = _useState18[0],
      setShowOriginalValues = _useState18[1];

  var _useState19 = (0, _react.useState)(false),
      _useState20 = (0, _slicedToArray2.default)(_useState19, 2),
      showEmptyAspects = _useState20[0],
      setShowEmptyAspects = _useState20[1];

  var _useState21 = (0, _react.useState)(false),
      _useState22 = (0, _slicedToArray2.default)(_useState21, 2),
      isRightDescriptionOpen = _useState22[0],
      setIsRightDescriptionOpen = _useState22[1];

  var _useState23 = (0, _react.useState)(false),
      _useState24 = (0, _slicedToArray2.default)(_useState23, 2),
      isLeftDescriptionOpen = _useState24[0],
      setIsLeftDescriptionOpen = _useState24[1];

  var le_newCategoyBreadcrumb = left_Entity_Def.categories.newValues[0];
  var le_leafCategory = (0, _get.default)(left_Entity_Def, 'categories.newValues[0].categoryBreadcrumb', '> ').substring(le_newCategoyBreadcrumb.categoryBreadcrumb.lastIndexOf('>') + 1);
  var le_aspects = leftEntityData.product.groupToAspectsMap;
  var le_newImages = left_Entity_Def.images.newImages;
  var le_entityId = left_Entity_Def.entityId;
  var le_entityUrl = left_Entity_Def.prpUrl ? left_Entity_Def.prpUrl : left_Entity_Def.itemData.itemUrl;
  var leftEntityHeader = (0, _get.default)(left_Entity_Def, 'itemData') ? 'Item and adoption method indication' : 'Product';
  var leftEntityUniqeIdLabel = (0, _get.default)(left_Entity_Def, 'itemData') ? 'Item' : 'EPID';
  var leftEntityVariationId = (0, _get.default)(left_Entity_Def, 'itemData.variationId', '');
  var leftEntityIsPremiumQuality = (0, _get.default)(left_Entity_Def, 'productMaturityLevelIndicator.premiumQualityIndicator', false) ? left_Entity_Def.productMaturityLevelIndicator.premiumQualityIndicator === 'MANUAL_HIGH_QUALITY' : false;
  var isLeftItem = (0, _get.default)(left_Entity_Def, 'itemData') ? true : false;
  var leftItemDescription = (0, _get.default)(left_Entity_Def, 'itemData.description');
  var le_aspectKeys = Object.keys(le_aspects);
  var le_aspects_names = le_aspectKeys.map(function (key) {
    return le_aspects[key].map(function (aspectData) {
      return (0, _get.default)(aspectData, 'aspectName');
    });
  });
  le_aspectKeys = [le_aspectKeys.pop()].concat((0, _toConsumableArray2.default)(le_aspectKeys)); // needed to make title aspect first

  var rowId = clusterData.nextRowContract.comparedEntityRowContracts[page].rowId; // hash map of aspect values

  var le_hash = createReadHash(le_aspects);
  var le_title = getAspectValue('Title', le_hash);
  var leftHeaderPostfix = isDuplicates ? createDuplicatesLeftHeaderPostfix() : '';
  /** right entity data */

  var right_Entity_Def = entitiesArray[page].product.productDefinition;
  var re_newImages = right_Entity_Def.images.newImages;
  var re_newCategoyBreadcrumb = right_Entity_Def.categories.newValues[0];
  var re_leafCategory = (0, _get.default)(right_Entity_Def, 'categories.newValues[0].categoryBreadcrumb', '> ').substring(re_newCategoyBreadcrumb.categoryBreadcrumb.lastIndexOf('>') + 1);
  var re_aspects = entitiesArray[page].product.groupToAspectsMap;
  var escelatedData = (0, _get.default)(clusterData, "nextRowContract.comparedEntityRowContracts[".concat(page, "].escalationInfo"), null); // hash map of aspect values

  var re_hash = createReadHash(re_aspects);
  var re_title = getAspectValue('Title', re_hash);
  var re_entityId = right_Entity_Def.entityId;
  var re_entityUrl = right_Entity_Def.prpUrl ? right_Entity_Def.prpUrl : right_Entity_Def.itemData.itemUrl;
  var rightEntityHeader = (0, _get.default)(right_Entity_Def, 'itemData') ? 'Item and adoption method indication' : 'Product';
  var rightHeaderPostfix = isDuplicates ? createDuplicatesRightHeaderPostfix() : '';
  var rightEntityUniqeIdLabel = (0, _get.default)(right_Entity_Def, 'itemData') ? 'Item' : 'EPID';
  var rightEntityVariationId = (0, _get.default)(right_Entity_Def, 'itemData.variationId', '');
  var rightEntityIsPremiumQuality = (0, _get.default)(right_Entity_Def, 'productMaturityLevelIndicator.premiumQualityIndicator', false) ? right_Entity_Def.productMaturityLevelIndicator.premiumQualityIndicator === 'MANUAL_HIGH_QUALITY' : false;
  var isRightItem = (0, _get.default)(right_Entity_Def, 'itemData') ? true : false;
  var rightItemDescription = (0, _get.default)(right_Entity_Def, 'itemData.description');
  var re_aspectKeys = Object.keys(re_aspects);
  var re_aspects_names = re_aspectKeys.map(function (key) {
    return re_aspects[key].map(function (aspectData) {
      return (0, _get.default)(aspectData, 'aspectName');
    });
  });
  re_aspectKeys = [re_aspectKeys.pop()].concat((0, _toConsumableArray2.default)(re_aspectKeys)); // needed to make title be first aspect

  var isTitleDifferent = checkIfTitleIsDifferent();
  var isCategoryPathDifferent = checkCategoryPath();

  var allAspectsName = _union.default.apply(void 0, (0, _toConsumableArray2.default)(le_aspects_names).concat((0, _toConsumableArray2.default)(re_aspects_names)));

  var _useState25 = (0, _react.useState)({}),
      _useState26 = (0, _slicedToArray2.default)(_useState25, 2),
      hightHash = _useState26[0],
      updateHightHash = _useState26[1]; // needed to communicate the required hight between correlated aspects


  var clusterRowIds = clusterData.nextRowContract.comparedEntityRowContracts.map(function (item) {
    return item.rowId;
  });
  var aspectsHightHash = Object.keys(hightHash).length > 0 ? hightHash : createHightHash(le_hash, re_hash); // needed to save hight of aspects between renders, use of useState will create a bug

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "duplicates-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_shared.CBreadcrumb, {
    path: jobType === 'duplicates' ? ['Duplications'] : ['Matching']
  }), /*#__PURE__*/_react.default.createElement("section", {
    className: "title-section"
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "edit-mode"
  }, workMode === 'edit' ? 'Work Edit Mode' : ''), escelatedData && /*#__PURE__*/_react.default.createElement(_EscalatedField.default, {
    escalator: escelatedData.escalatedByUserName
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "rows-done-metrics"
  }, rowsDone && /*#__PURE__*/_react.default.createElement(_shared.TotalRowsDone, {
    today: rowsDone.totalDoneToday,
    total: rowsDone.totalDone
  }), /*#__PURE__*/_react.default.createElement(_button.default, {
    id: "open-drawer-button",
    size: "large",
    icon: showDrawer ? 'down' : 'up',
    onClick: function onClick() {
      return updateShowDrawer(!showDrawer);
    }
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "side-by-side-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "product-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "item-surviving-title-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "item-surviving-title",
    id: "left-title"
  }, leftEntityIsPremiumQuality && /*#__PURE__*/_react.default.createElement("div", {
    className: "item-surviving-icon"
  }, /*#__PURE__*/_react.default.createElement(_tooltip.default, {
    placement: "top",
    title: 'Premium Quality Product'
  }, /*#__PURE__*/_react.default.createElement(_icon.default, {
    type: "sketch",
    style: {
      color: '#2D69C3'
    }
  }))), /*#__PURE__*/_react.default.createElement(_tooltip.default, {
    placement: "bottom",
    title: le_title
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "text-wrapper"
  }, /*#__PURE__*/_react.default.createElement("strong", null, leftEntityHeader), /*#__PURE__*/_react.default.createElement("span", null, " ", leftHeaderPostfix))))), !isDuplicates && /*#__PURE__*/_react.default.createElement(_shared.RegularField, {
    label: 'Title',
    value: le_title,
    isChanged: false,
    isDifferentValue: isTitleDifferent,
    updateValue: function updateValue() {}
  }), /*#__PURE__*/_react.default.createElement(_shared.ImageList, {
    imageList: le_newImages.filter(function (image) {
      return !deletedImage(image);
    }),
    isChanged: false,
    isDifferentValue: false,
    suggestedImagesData: le_newImages.filter(function (image) {
      return deletedImage(image);
    }),
    productData: {
      category: le_newCategoyBreadcrumb.categoryBreadcrumb,
      title: le_title,
      brand: getAspectValue('Brand', le_hash),
      color: getAspectValue('Color', le_hash)
    },
    handleSelectedImages: handleSurvivorSelectedImages,
    isEditable: isEnabledForCuration,
    updateShowDrawer: updateShowDrawer
  }), /*#__PURE__*/_react.default.createElement(_shared.LinkField, {
    label: leftEntityUniqeIdLabel,
    value: le_entityId,
    url: le_entityUrl,
    isDifferentValue: false
  }), jobType === 'matching' && /*#__PURE__*/_react.default.createElement(_shared.LinkField, {
    label: 'VariationId',
    value: leftEntityVariationId,
    url: le_entityUrl,
    isDifferentValue: false
  }), jobType === 'matching' && /*#__PURE__*/_react.default.createElement(_shared.LinkField, {
    label: 'Description',
    value: leftItemDescription ? 'Show Description' : null,
    onClickCallBack: function onClickCallBack() {
      updateShowDrawer(false);
      setIsLeftDescriptionOpen(true);
    },
    isDifferentValue: false
  }), /*#__PURE__*/_react.default.createElement(_GenericModal.default, {
    modalVisibleState: isLeftDescriptionOpen,
    modalTitle: 'Item Description',
    isOkDisabledInitialValue: true,
    modalContent: /*#__PURE__*/_react.default.createElement("div", null, leftItemDescription),
    width: 1000,
    onOk: function onOk() {},
    onCancel: onCancel,
    okText: '',
    isOkButtonVisible: false,
    isCancelButtonVisible: false
  }), /*#__PURE__*/_react.default.createElement(_shared.RegularField, {
    label: 'Site',
    value: (0, _utils.getSiteById)(right_Entity_Def.siteId).name,
    isChanged: false,
    isDifferentValue: left_Entity_Def.siteId !== right_Entity_Def.siteId,
    updateValue: function updateValue() {}
  }), /*#__PURE__*/_react.default.createElement(_shared.EditField, {
    label: "Category",
    value: le_leafCategory,
    tooltipValue: le_newCategoyBreadcrumb.categoryBreadcrumb,
    updateValue: updateSupervisorCategoryPath,
    isChanged: false,
    isDifferentValue: isCategoryPathDifferent,
    modalTitle: 'Edit category path',
    isEditable: isEnabledForCuration,
    updateShowDrawer: updateShowDrawer,
    modalContent: /*#__PURE__*/_react.default.createElement(_shared.EditCategoryPath, {
      currentCategory: le_newCategoyBreadcrumb.categoryBreadcrumb,
      siteId: left_Entity_Def.siteId
    })
  }), isEnabledForCuration && /*#__PURE__*/_react.default.createElement(_divider.default, null), isEnabledForCuration && /*#__PURE__*/_react.default.createElement("div", {
    className: "add-aspect-button-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_button.default, {
    shape: "circle",
    size: "large",
    icon: "plus",
    onClick: function onClick(e) {
      setSupervisorNewAspectModalOpenVisibility(true);
      updateShowDrawer(false);
    }
  })), isEnabledForCuration && /*#__PURE__*/_react.default.createElement("div", null, le_aspectKeys.map(function (key) {
    return le_aspects[key].map(function (aspectData, index) {
      if (!shouldRenderAspect(aspectData, re_hash)) {
        return false;
      } else {
        return /*#__PURE__*/_react.default.createElement(_shared.AspectWrapper, {
          hightHash: hightHash,
          aspect: aspectData,
          showSuggestions: showSuggestions,
          showOriginalValues: showOriginalValues,
          updateAspectHights: updateAspectHights
        }, /*#__PURE__*/_react.default.createElement(_shared.Aspect, {
          key: "survivor-aspect-".concat(index),
          aspect: aspectData,
          showSuggestions: showSuggestions,
          showOriginalValues: showOriginalValues,
          onAspectChange: onAspectChangeSurvivor,
          aspectIdentifier: key,
          differentValues: checkDiffValues(aspectData, key),
          clusterPage: page,
          handleCopy: handleCopySurvivor
        }));
      }
    });
  })), !isEnabledForCuration && /*#__PURE__*/_react.default.createElement("div", null, le_aspectKeys.map(function (key) {
    return le_aspects[key].map(function (aspectData) {
      if (!shouldRenderAspect(aspectData, re_hash)) {
        return false;
      } else {
        return /*#__PURE__*/_react.default.createElement("div", {
          className: "attributes-read-only-section"
        }, /*#__PURE__*/_react.default.createElement(_shared.AspectWrapper, {
          hightHash: hightHash,
          aspect: aspectData,
          showSuggestions: showSuggestions,
          showOriginalValues: showOriginalValues,
          updateAspectHights: updateAspectHights
        }, /*#__PURE__*/_react.default.createElement(_shared.FieldWithExtraInformation, {
          label: aspectData.aspectName,
          value: aspectData.currentValues.map(function (v) {
            return v.value;
          }).join(', '),
          isChanged: false,
          isDifferentValue: checkDiffValues(aspectData, key),
          updateValue: function updateValue() {},
          metadata: aspectData.aspectInformation
        })));
      }
    });
  })), /*#__PURE__*/_react.default.createElement("section", {
    className: "actions-section"
  }, isEnabledForCuration && /*#__PURE__*/_react.default.createElement("div", {
    className: "toggles-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "toggle-btn"
  }, /*#__PURE__*/_react.default.createElement(_switch.default, {
    checked: showSuggestions,
    onChange: handleShowSuggestions
  }), /*#__PURE__*/_react.default.createElement("label", null, "Show Suggestions")), /*#__PURE__*/_react.default.createElement("div", {
    className: "toggle-btn"
  }, /*#__PURE__*/_react.default.createElement(_switch.default, {
    checked: showOriginalValues,
    onChange: handleShowOriginals
  }), /*#__PURE__*/_react.default.createElement("label", null, "Show Original values")), /*#__PURE__*/_react.default.createElement("div", {
    className: "toggle-btn"
  }, /*#__PURE__*/_react.default.createElement(_switch.default, {
    checked: showEmptyAspects,
    onChange: handleShowEmptyAspects
  }), /*#__PURE__*/_react.default.createElement("label", null, "Show empty aspects"))), !isEnabledForCuration && /*#__PURE__*/_react.default.createElement("div", {
    className: "toggles-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "toggle-btn"
  }, /*#__PURE__*/_react.default.createElement(_switch.default, {
    checked: showEmptyAspects,
    onChange: handleShowEmptyAspects
  }), /*#__PURE__*/_react.default.createElement("label", null, "Show empty aspects"))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "product-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "item-surviving-title-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "item-surviving-title",
    id: "right-title"
  }, rightEntityIsPremiumQuality && /*#__PURE__*/_react.default.createElement("div", {
    className: "item-surviving-icon"
  }, /*#__PURE__*/_react.default.createElement(_tooltip.default, {
    placement: "top",
    title: 'Premium Quality Product'
  }, /*#__PURE__*/_react.default.createElement(_icon.default, {
    type: "sketch",
    style: {
      color: '#2D69C3'
    }
  }))), /*#__PURE__*/_react.default.createElement(_tooltip.default, {
    placement: "bottom",
    title: re_title
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "text-wrapper"
  }, /*#__PURE__*/_react.default.createElement("strong", null, rightEntityHeader), /*#__PURE__*/_react.default.createElement("span", null, " ", rightHeaderPostfix))))), /*#__PURE__*/_react.default.createElement(_shared.ImageList, {
    imageList: re_newImages.filter(function (image) {
      return !deletedImage(image);
    }),
    isChanged: false,
    isDifferentValue: false,
    suggestedImagesData: re_newImages.filter(function (image) {
      return deletedImage(image);
    }),
    productData: {
      category: re_newCategoyBreadcrumb.categoryBreadcrumb,
      title: le_title,
      brand: getAspectValue('Brand', re_hash),
      color: getAspectValue('Color', re_hash)
    },
    handleSelectedImages: handleVictimSelectedImages,
    isEditable: isEnabledForCuration,
    updateShowDrawer: updateShowDrawer
  }), /*#__PURE__*/_react.default.createElement(_shared.LinkField, {
    label: rightEntityUniqeIdLabel,
    value: re_entityId,
    url: re_entityUrl,
    isDifferentValue: false
  }), jobType === 'matching' && /*#__PURE__*/_react.default.createElement(_shared.LinkField, {
    label: 'VariationId',
    value: rightEntityVariationId,
    url: re_entityId,
    isDifferentValue: false
  }), jobType === 'matching' && /*#__PURE__*/_react.default.createElement(_shared.LinkField, {
    label: 'Description',
    value: rightItemDescription ? 'Show Description' : null,
    onClickCallBack: function onClickCallBack() {
      updateShowDrawer(false);
      setIsRightDescriptionOpen(true);
    },
    isDifferentValue: false
  }), /*#__PURE__*/_react.default.createElement(_GenericModal.default, {
    modalVisibleState: isRightDescriptionOpen,
    modalTitle: 'Item Description',
    isOkDisabledInitialValue: true,
    modalContent: /*#__PURE__*/_react.default.createElement("div", null, rightItemDescription),
    width: 1000,
    onOk: function onOk() {},
    onCancel: onCancel,
    okText: '',
    isOkButtonVisible: false,
    isCancelButtonVisible: false
  }), /*#__PURE__*/_react.default.createElement(_shared.RegularField, {
    label: 'Site',
    value: (0, _utils.getSiteById)(left_Entity_Def.siteId).name,
    isChanged: false,
    isDifferentValue: left_Entity_Def.siteId !== right_Entity_Def.siteId,
    updateValue: function updateValue() {}
  }), /*#__PURE__*/_react.default.createElement(_shared.EditField, {
    label: "Category",
    value: re_leafCategory,
    tooltipValue: re_newCategoyBreadcrumb.categoryBreadcrumb,
    updateValue: updateVictimCategoryPath,
    isChanged: false,
    isDifferentValue: isCategoryPathDifferent,
    modalTitle: 'Edit category path',
    isEditable: isEnabledForCuration,
    updateShowDrawer: updateShowDrawer,
    modalContent: /*#__PURE__*/_react.default.createElement(_shared.EditCategoryPath, {
      currentCategory: re_newCategoyBreadcrumb.categoryBreadcrumb,
      siteId: right_Entity_Def.siteId
    })
  }), isEnabledForCuration && /*#__PURE__*/_react.default.createElement(_divider.default, null), isEnabledForCuration && /*#__PURE__*/_react.default.createElement("div", {
    className: "add-aspect-button-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_button.default, {
    shape: "circle",
    size: "large",
    icon: "plus",
    onClick: function onClick(e) {
      setRightEntityNewAspectModalOpenVisibility(true);
      updateShowDrawer(false);
    }
  })), isEnabledForCuration && /*#__PURE__*/_react.default.createElement("div", null, re_aspectKeys.map(function (key) {
    return re_aspects[key].map(function (aspectData, index) {
      if (!shouldRenderAspect(aspectData, le_hash)) {
        return false;
      } else {
        return /*#__PURE__*/_react.default.createElement(_shared.AspectWrapper, {
          hightHash: hightHash,
          aspect: aspectData,
          showSuggestions: showSuggestions,
          showOriginalValues: showOriginalValues,
          updateAspectHights: updateAspectHights
        }, /*#__PURE__*/_react.default.createElement(_shared.Aspect, {
          key: "victim-aspect-".concat(index),
          aspect: aspectData,
          showSuggestions: showSuggestions,
          showOriginalValues: showOriginalValues,
          onAspectChange: onAspectChangeVictim,
          aspectIdentifier: key,
          differentValues: checkDiffValues(aspectData, key),
          clusterPage: page,
          handleCopy: handleCopyVictim
        }));
      }
    });
  })), !isEnabledForCuration && /*#__PURE__*/_react.default.createElement("div", null, re_aspectKeys.map(function (key) {
    return re_aspects[key].map(function (aspectData) {
      if (!shouldRenderAspect(aspectData, le_hash)) {
        return false;
      } else {
        return /*#__PURE__*/_react.default.createElement("div", {
          className: "attributes-read-only-section"
        }, /*#__PURE__*/_react.default.createElement(_shared.AspectWrapper, {
          hightHash: hightHash,
          aspect: aspectData,
          showSuggestions: showSuggestions,
          showOriginalValues: showOriginalValues,
          updateAspectHights: updateAspectHights
        }, /*#__PURE__*/_react.default.createElement(_shared.FieldWithExtraInformation, {
          label: aspectData.aspectName,
          value: aspectData.currentValues.map(function (v) {
            return v.value;
          }).join(', '),
          isChanged: false,
          isDifferentValue: checkDiffValues(aspectData, key),
          updateValue: function updateValue() {},
          metadata: aspectData.aspectInformation
        })));
      }
    });
  })))), /*#__PURE__*/_react.default.createElement(_GenericModal.default, {
    modalVisibleState: isSupervisorNewAspectModalOpen,
    modalTitle: 'Add New Aspect',
    modalContent: /*#__PURE__*/_react.default.createElement(_shared.AddNewAspect, {
      isNewAspectModalOpen: isSupervisorNewAspectModalOpen,
      checkAspectIsUnique: checkAspectIsUnique_re
    }),
    width: 500,
    onCancel: function onCancel(e) {
      return setSupervisorNewAspectModalOpenVisibility(false);
    },
    onOk: addNewAspectToSurvivor,
    okText: 'Add Aspect',
    isOkDisabledInitialValue: true
  }), /*#__PURE__*/_react.default.createElement(_GenericModal.default, {
    modalVisibleState: isRightEntityNewAspectModalOpen,
    modalTitle: 'Add New Aspect',
    modalContent: /*#__PURE__*/_react.default.createElement(_shared.AddNewAspect, {
      isNewAspectModalOpen: isRightEntityNewAspectModalOpen,
      checkAspectIsUnique: checkAspectIsUnique_v
    }),
    width: 500,
    onCancel: function onCancel(e) {
      return setRightEntityNewAspectModalOpenVisibility(false);
    },
    onOk: addNewAspectToVictim,
    okText: 'Add Aspect',
    isOkDisabledInitialValue: true
  }), /*#__PURE__*/_react.default.createElement(_drawer.default, {
    placement: "bottom",
    closable: true,
    mask: false,
    onClose: function onClose() {
      return updateShowDrawer(!showDrawer);
    },
    visible: showDrawer,
    height: 305
  }, jobType === 'duplicates' && /*#__PURE__*/_react.default.createElement(_DrawerContentDuplicate.default, {
    page: page,
    shouldMakeObservation: shouldMakeObservation,
    shouldMakeDecision: shouldMakeDecision,
    rowId: rowId,
    entitiesArray: entitiesArray,
    leData: leftEntityData,
    setPage: setPage,
    reasons: reasons,
    decisions: decisionsData,
    survivorEpid: le_entityId,
    updateDecisions: updateDecisions,
    fetchNextCluster: getNextCluster,
    showSendToSupervisor: showSendToSupervisor,
    saveTask: startSaving,
    jobTypeConfiguration: jobTypeConfiguration,
    aspectsNames: allAspectsName,
    applyAllCluster: applyAllCluster,
    observationOptions: observationOptions,
    removeSubmittedData: removeSubmittedData,
    productIndicationSelectValues: productIndicationSelectValues,
    showQaCheckbox: workMode === 'edit',
    clusterRowIds: clusterRowIds
  }), jobType === 'matching' && /*#__PURE__*/_react.default.createElement(_DrawerContentMatching.default, {
    page: page,
    rowId: rowId,
    entitiesArray: entitiesArray,
    leData: leftEntityData,
    setPage: setPage,
    reasons: reasons,
    decisions: decisionsData,
    survivorEpid: le_entityId,
    updateDecisions: updateDecisions,
    fetchNextCluster: getNextCluster,
    showSendToSupervisor: showSendToSupervisor,
    saveTask: startSaving,
    jobTypeConfiguration: jobTypeConfiguration,
    aspectsNames: allAspectsName,
    applyAllCluster: applyAllCluster,
    removeSubmittedData: removeSubmittedData,
    showQaCheckbox: workMode === 'edit',
    clusterRowIds: clusterRowIds
  })));

  function startSaving(shouldGetNextCluster, updatedTaskObject) {
    if (shouldGetNextCluster) {
      updateShowDrawer(false);
    }

    saveTask(shouldGetNextCluster, updatedTaskObject);
  }

  function initializingFixedPositionsAndReturnCallback() {
    var rightTitle = document.getElementById('right-title');
    var leftTitle = document.getElementById('left-title');
    var openDrawerButton = document.getElementById('open-drawer-button');
    var titleOffset = leftTitle.offsetHeight;
    var openDrawerButtonOffset = openDrawerButton.offsetHeight;
    var scrollCallBack = window.addEventListener('scroll', function () {
      if (window.pageYOffset > titleOffset + 85) {
        rightTitle.classList.add('sticky');
        leftTitle.classList.add('sticky');
      } else {
        rightTitle.classList.remove('sticky');
        leftTitle.classList.remove('sticky');
      }

      if (window.pageYOffset > openDrawerButtonOffset + 80) {
        openDrawerButton.classList.add('sticky');
      } else {
        openDrawerButton.classList.remove('sticky');
      }
    });
    return scrollCallBack;
  }

  function getNextCluster() {
    updateShowDrawer(false);
    fetchNextCluster();
  }

  function openNotificationWithIcon(type, title, message) {
    _notification2.default[type]({
      message: title,
      description: message
    });
  }

  function checkAspectIsUnique_re(newAspectName) {
    var aspectsArray = leftEntityData.product.groupToAspectsMap;
    var allAspectKeys = Object.keys(aspectsArray).map(function (aspectGroupKey) {
      return aspectsArray[aspectGroupKey].map(function (aspectInfo) {
        return aspectInfo.aspectName;
      });
    }).flat(1);
    return allAspectKeys.includes(newAspectName);
  }

  function checkAspectIsUnique_v(newAspectName) {
    var aspectsArray = entitiesArray[page].product.groupToAspectsMap;
    var allAspectKeys = Object.keys(aspectsArray).map(function (aspectGroupKey) {
      return aspectsArray[aspectGroupKey].map(function (aspectInfo) {
        return aspectInfo.aspectName;
      });
    }).flat(1);
    return allAspectKeys.includes(newAspectName);
  }

  function addNewAspectToSurvivor(newAspectData) {
    var tempSupervisorData = Object.assign({}, leftEntityData);
    var aspectsArray = tempSupervisorData.product.groupToAspectsMap;

    if (aspectsArray['Additional aspects'] === undefined) {
      aspectsArray['Additional aspects'] = [];
    }

    aspectsArray['Additional aspects'].push({
      aspectName: newAspectData.aspectName,
      alignedWithSurvivor: true,
      currentValues: [],
      propertyDecisionContract: {
        suggestedValues: newAspectData.aspectValues.map(function (aspectValue) {
          return {
            value: aspectValue,
            information: {
              umsAlignedValue: false,
              crawlingValue: false
            }
          };
        }),
        changed: true,
        status: 'ADDED',
        deleteReason: null
      },
      aspectInformation: {
        mandatoryOnProduct: false,
        multiValue: true,
        umsAlignedAspect: false,
        aspectTypes: [],
        umsValues: []
      },
      crawlingData: {
        values: [],
        urls: []
      }
    });
    setLeftEntityData(tempSupervisorData);
    setSupervisorNewAspectModalOpenVisibility(false);
  }

  function addNewAspectToVictim(newAspectData) {
    var tempVArray = Object.assign({}, entitiesArray);
    var aspectsArray = tempVArray[page].product.groupToAspectsMap;

    if (aspectsArray['Additional aspects'] === undefined) {
      aspectsArray['Additional aspects'] = [];
    }

    aspectsArray['Additional aspects'].push({
      aspectName: newAspectData.aspectName,
      alignedWithSurvivor: true,
      currentValues: [],
      propertyDecisionContract: {
        suggestedValues: newAspectData.aspectValues.map(function (aspectValue) {
          return {
            value: aspectValue,
            information: {
              umsAlignedValue: false,
              crawlingValue: false
            }
          };
        }),
        changed: true,
        status: 'ADDED',
        deleteReason: null
      },
      aspectInformation: {
        mandatoryOnProduct: false,
        multiValue: true,
        umsAlignedAspect: false,
        aspectTypes: [],
        umsValues: []
      },
      crawlingData: {
        values: [],
        urls: []
      }
    });
    setEntitiesArray(tempVArray);
    setRightEntityNewAspectModalOpenVisibility(false);
  }

  function checkIfTitleIsDifferent() {
    var v_title = entitiesArray[page].product.groupToAspectsMap.Title[0].currentValues.map(function (item) {
      return item.value;
    }).join(', ');
    var s_title = le_aspects.Title[0].currentValues.map(function (item) {
      return item.value;
    }).join(', ');
    return v_title !== s_title;
  }

  function checkCategoryPath() {
    var v_categoryBreadcrumb = entitiesArray[page].product.productDefinition.categories.currentValues[0].categoryBreadcrumb;
    var s_categoryBreadcrumb = leftEntityData.product.productDefinition.categories.newValues[0].categoryBreadcrumb;
    return v_categoryBreadcrumb !== s_categoryBreadcrumb;
  }

  function updateVictimCategoryPath(updatedPath) {
    var tempArray = (0, _cloneDeep.default)(entitiesArray);
    var data = JSON.parse(updatedPath.key);
    tempArray[page].product.productDefinition.categories.newValues[0].categoryId = data.categoryId.toString();
    tempArray[page].product.productDefinition.categories.newValues[0].categoryBreadcrumb = data.categoryBreadcrumb;
    tempArray[page].product.productDefinition.categories.newValues[0].categoryId = Number(data.categoryId);
    /**
     * Variables:
     * 1. updatedTaskObject
     * 2. currentPage
     * 3. decisionsData
     */

    changeCategory({
      comparedEntityRowContracts: clusterData.nextRowContract.comparedEntityRowContracts.map(function (contract, pageIndex) {
        return {
          rowId: contract.rowId,
          entities: [leftEntityData, tempArray[pageIndex]],
          sendToSupervisor: decisionsData[pageIndex].decisionInfo.sendToSupervisor,
          comparedEntityRowQaContract: {
            isQaed: decisionsData[pageIndex].decisionInfo.checkedAsQa
          },
          additionalInformationContract: {
            additionalInformationDataList: decisionsData[pageIndex].decisionInfo.additionalInfo
          }
        };
      }),
      changedEpid: tempArray[page].product.productDefinition.entityId,
      jobId: Number(jobId)
    }, page, decisionsData);
    window.scrollTo(0, 0);
  }

  function updateSupervisorCategoryPath(updatedPath) {
    var tempSupervisor = (0, _cloneDeep.default)(leftEntityData);
    var data = JSON.parse(updatedPath.key);
    tempSupervisor.product.productDefinition.categories.categoryId = data.categoryId.toString();
    tempSupervisor.product.productDefinition.categories.newValues[0].categoryBreadcrumb = data.categoryBreadcrumb;
    tempSupervisor.product.productDefinition.categories.newValues[0].categoryId = Number(data.categoryId);
    /**
     * Variables:
     * 1. updatedTaskObject
     * 2. currentPage
     * 3. decisionsData
     */

    changeCategory({
      comparedEntityRowContracts: clusterData.nextRowContract.comparedEntityRowContracts.map(function (contract, pageIndex) {
        return {
          rowId: contract.rowId,
          entities: [tempSupervisor, entitiesArray[pageIndex]],
          sendToSupervisor: decisionsData[pageIndex].decisionInfo.sendToSupervisor,
          comparedEntityRowQaContract: {
            isQaed: decisionsData[pageIndex].decisionInfo.checkedAsQa
          },
          additionalInformationContract: {
            additionalInformationDataList: decisionsData[pageIndex].decisionInfo.additionalInfo
          }
        };
      }),
      changedEpid: tempSupervisor.product.productDefinition.entityId,
      jobId: Number(jobId)
    }, page, decisionsData);
    window.scrollTo(0, 0);
  }

  function handleSurvivorSelectedImages(updatedImageList) {
    var tempSupervisor = Object.assign({}, leftEntityData);
    tempSupervisor.product.productDefinition.images.newImages = updatedImageList;
    tempSupervisor.product.productDefinition.images.changed = true;
    setLeftEntityData(tempSupervisor);
  }

  function handleVictimSelectedImages(updatedImageList) {
    var tempArray = Object.assign([], entitiesArray);
    tempArray[page].product.productDefinition.images.newImages = updatedImageList;
    tempArray[page].product.productDefinition.images.changed = true;
    setEntitiesArray(tempArray);
  }

  function checkDiffValues(aspectData, aspectIdentifier) {
    // victim original aspect
    var vAspect = entitiesArray[page].product.groupToAspectsMap[aspectIdentifier].find(function (item) {
      return item.aspectName === aspectData.aspectName;
    });
    if (!vAspect) return false; // victim original values

    var vAspectValues = vAspect.currentValues.map(function (item) {
      return item.value;
    }); // survivor original aspect

    var sAspect = leftEntityProp.product.groupToAspectsMap[aspectIdentifier].find(function (item) {
      return item.aspectName === aspectData.aspectName;
    });
    if (!sAspect) return false; // survivor original valus

    var sAspectValues = sAspect.currentValues.map(function (item) {
      return item.value;
    });
    return !compareArray(sAspectValues, vAspectValues);
  } // check if there is difference between two arrays
  // return true if they are similar or if one is empty and the orher is not


  function compareArray(arr1, arr2) {
    var flag = true;

    if (!arr1 || !arr2) {
      flag = false;
    }

    if (arr1.length !== arr2.length) {
      if (arr1.length === 0 && arr2.length > 0 || arr2.length === 0 && arr1.length > 0) {
        flag = true;
      } else {
        flag = false;
      }
    }

    if (arr1.length > 0 && arr2.length > 0) {
      arr1.forEach(function (item) {
        if (!arr2.includes(item)) {
          flag = false;
        }
      });
    }

    return flag;
  }

  function getAspectValue(aspectName, readHashMap) {
    var values = (0, _get.default)(readHashMap[aspectName], 'propertyDecisionContract.suggestedValues', []);

    if (values.length === 0) {
      return '';
    }

    return values.map(function (item) {
      return item.value;
    }).join(', ');
  }

  function createReadHash(data) {
    var readHash = {};
    var temp = Object.keys(data).map(function (item) {
      return data[item];
    });
    temp.flat(1).forEach(function (item) {
      readHash[item.aspectName] = item;
    });
    return readHash;
  }

  function createHightHash(s_hash, v_hash) {
    var hightHash = {};
    Object.keys(s_hash).forEach(function (key) {
      hightHash[key] = 59;
    });
    return hightHash;
  }

  function updateDecisions(updatedDecision) {
    function updateCluster(page, cluster, updatedDecision, isLeftItem) {
      var rightId = updatedDecision.rightEntityId;
      var leftId = updatedDecision.leftEntityId;

      switch (jobType) {
        case 'duplicates':
          cluster[page] = cluster[page].rightEntityId === rightId ? updatedDecision : cluster;
          break;

        case 'matching':
          if (isLeftItem) {
            cluster[page] = cluster[page].leftEntityId === leftId ? updatedDecision : cluster;
          } else {
            cluster[page] = cluster[page].rightEntityId === rightId ? updatedDecision : cluster;
          }

          break;

        default:
      }

      return cluster;
    }

    var updatedCluster = (0, _cloneDeep.default)(decisionsData);
    updatedCluster = updateCluster(page, updatedCluster, updatedDecision, isLeftItem);
    setDecisionsData(updatedCluster);

    if (jobType === 'matching') {
      var reasonHash = {
        option1: 'CORRECT',
        option2: 'SKIP',
        option3: 'WRONG'
      };

      if (isLeftItem) {
        leftEntityData.itemDecision = {
          itemAction: reasonHash[updatedCluster[page].selectedOption],
          reason: updatedCluster[page].decisionInfo.reason.value,
          reasonDetails: (0, _get.default)(updatedCluster[page], 'decisionInfo.reasonDetails.value', ''),
          comment: updatedCluster[page].decisionInfo.comment.value,
          urls: updatedCluster[page].decisionInfo.urls.map(function (item) {
            return {
              name: item.name,
              url: item.url
            };
          }),
          additionalInfo: updatedCluster[page].decisionInfo.additionalInfo.map(function (item) {
            return {
              name: item.label,
              value: item.value,
              mandatory: item.mandatory
            };
          })
        };
        setLeftEntityData(leftEntityData);
      }

      if (isRightItem) {
        var tempArray = Object.assign([], entitiesArray);
        tempArray[page].itemDecision = {
          itemAction: reasonHash[updatedCluster[page].selectedOption],
          reason: updatedCluster[page].decisionInfo.reason.value,
          reasonDetails: (0, _get.default)(updatedCluster[page], 'decisionInfo.reasonDetails.value', ''),
          comment: updatedCluster[page].decisionInfo.comment.value,
          urls: updatedCluster[page].decisionInfo.urls.map(function (item) {
            return {
              name: item.name,
              url: item.url
            };
          }),
          additionalInfo: updatedCluster[page].decisionInfo.additionalInfo.map(function (item) {
            return {
              name: item.label,
              value: item.value,
              mandatory: item.mandatory
            };
          })
        };
        setEntitiesArray(tempArray);
      }
    }

    if (jobType === 'duplicates') {
      var _tempArray = Object.assign([], entitiesArray);

      var _reasonHash = {
        option1: 'DUPLICATES',
        option2: 'SKIP',
        option3: 'NON_DUPLICATES'
      };
      _tempArray[page].prodDec = {
        productDuplicateAction: _reasonHash[updatedCluster[page].selectedOption],
        decisionContract: {
          reason: null,
          // used only in matching task
          observation: updatedCluster[page].decisionInfo.observation.value,
          reasonDetails: (0, _get.default)(updatedCluster[page], 'decisionInfo.reasonDetails.value', ''),
          comment: updatedCluster[page].decisionInfo.comment.value,
          urls: updatedCluster[page].decisionInfo.urls.map(function (item) {
            return {
              name: item.name,
              url: item.url,
              indication: item.indication
            };
          }),
          additionalInfo: updatedCluster[page].decisionInfo.additionalInfo.map(function (item) {
            return {
              name: item.label,
              value: item.value,
              mandatory: item.mandatory
            };
          })
        }
      };
      setEntitiesArray(_tempArray);
    }
  }

  function updateAspectHights(aspectName, newHight) {
    if (aspectsHightHash[aspectName] < newHight) {
      var temp = Object.assign({}, aspectsHightHash);
      temp[aspectName] = newHight;
      aspectsHightHash[aspectName] = newHight;
      updateHightHash(_objectSpread({}, temp));
    }
  }

  function onAspectChangeVictim(aspectData, aspectIdentifer) {
    var tempVictimArray = Object.assign([], entitiesArray);
    var arr = tempVictimArray[page].product.groupToAspectsMap[aspectIdentifer];

    for (var i = 0; i < arr.length; i++) {
      if (arr[i].aspectName === aspectData.aspectName) {
        arr[i] = aspectData;
      }
    }

    setEntitiesArray(tempVictimArray);
  }

  function onAspectChangeSurvivor(aspectData, aspectIdentifer) {
    var tempSurvivorData = Object.assign({}, leftEntityData);
    var arr = tempSurvivorData.product.groupToAspectsMap[aspectIdentifer];

    for (var i = 0; i < arr.length; i++) {
      if (arr[i].aspectName === aspectData.aspectName) {
        arr[i] = aspectData;
      }
    }

    setLeftEntityData(tempSurvivorData);
  }

  function handleShowSuggestions(checked, e) {
    setShowSuggestions(checked);
  }

  function handleShowOriginals(checked, e) {
    setShowOriginalValues(checked);
  }

  function handleShowEmptyAspects(checked, e) {
    setShowEmptyAspects(checked);
  }

  function handleCopySurvivor(aspectValue, aspectName, group) {
    var tempArray = Object.assign([], entitiesArray);
    var aspectGroup = (0, _get.default)(tempArray, "[".concat(page, "].product.groupToAspectsMap[").concat(group, "]"), '');
    var indentifierIndex = aspectGroup.map(function (item) {
      return item.aspectName;
    }).indexOf(aspectName);
    var suggestedValues = (0, _get.default)(aspectGroup, "[".concat(indentifierIndex, "].propertyDecisionContract.suggestedValues"), '');

    if (suggestedValues.map(function (i) {
      return i.value;
    }).indexOf(aspectValue) !== -1) {
      openNotificationWithIcon('info', 'Value unique restriction', "".concat(aspectValue, " already selected"));
      return;
    }

    suggestedValues.push({
      value: aspectValue,
      information: {
        umsAlignedValue: true,
        crawlingValue: false
      }
    });
    return setEntitiesArray(tempArray);
  }

  function handleCopyVictim(aspectValue, aspectName, group) {
    var tempArray = Object.assign({}, leftEntityData);
    var aspectGroup = (0, _get.default)(tempArray, "product.groupToAspectsMap[".concat(group, "]"), '');
    var indentifierIndex = aspectGroup.map(function (item) {
      return item.aspectName;
    }).indexOf(aspectName);
    var suggestedValues = (0, _get.default)(aspectGroup, "[".concat(indentifierIndex, "].propertyDecisionContract.suggestedValues"), '');

    if (suggestedValues.map(function (i) {
      return i.value;
    }).indexOf(aspectValue) !== -1) {
      openNotificationWithIcon('info', 'Value unique restriction', "".concat(aspectValue, " already selected"));
      return;
    }

    suggestedValues.push({
      value: aspectValue,
      information: {
        umsAlignedValue: true,
        crawlingValue: false
      }
    });
    return setLeftEntityData(tempArray);
  }

  function deletedImage(image) {
    return image.imageDecisionContract && (0, _get.default)(image, 'imageDecisionContract.action', null) === 'DELETED';
  }

  function applyAllCluster(currentDecision) {
    var updatedCluster = decisionsData.map(function (item) {
      var clonedItem = (0, _cloneDeep.default)(item);
      clonedItem.decisionInfo.reason = currentDecision.decisionInfo.reason;
      clonedItem.selectedOption = currentDecision.selectedOption;
      return clonedItem;
    });
    setDecisionsData(updatedCluster);

    _notification2.default.success({
      message: "Action Success",
      description: 'Skip was apply to all pairs in cluster ',
      placement: 'topRight'
    });
  }

  function onCancel() {
    setIsLeftDescriptionOpen(false);
    setIsRightDescriptionOpen(false);
  } // remove a single pair from the cluster when it is checked for supervisor.
  // update all relevant arrays to remove that pair representaiton from the cluster.


  function removeSubmittedData() {
    var tempClusterData = (0, _cloneDeep.default)(clusterData);
    var tempDecisions = (0, _cloneDeep.default)(decisionsData);
    var tempEntitiesArray = (0, _cloneDeep.default)(entitiesArray);
    tempDecisions.splice(page, 1);
    tempEntitiesArray.splice(page, 1);
    tempClusterData.nextRowContract.comparedEntityRowContracts.splice(page, 1);
    setPage(page !== 0 ? page - 1 : page);
    setDecisionsData(tempDecisions);
    setEntitiesArray(tempEntitiesArray);
    updateClusterData(tempClusterData);
  }

  function shouldRenderAspect(aspect, hash) {
    //aspect should be hidden if empty (on both products) and showEmptyAspects flag is false
    if (hash[aspect.aspectName] && isAspectEmptyOnBothProducts(aspect, hash) && !showEmptyAspects) {
      return false;
    } else if (!hash[aspect.aspectName] && !aspect.propertyDecisionContract.suggestedValues.length && !showEmptyAspects) {
      //aspect exists only on one of the products
      return false;
    }

    return true;
  }

  function isAspectEmptyOnBothProducts(aspect, hash) {
    return !hash[aspect.aspectName].propertyDecisionContract.suggestedValues.length && !aspect.propertyDecisionContract.suggestedValues.length;
  }

  function createDuplicatesRightHeaderPostfix() {
    return isSurvivorProvided ? "(Victim) : ".concat(re_title) : "2 : ".concat(re_title);
  }

  function createDuplicatesLeftHeaderPostfix() {
    return isSurvivorProvided ? "(Survivor) : ".concat(le_title) : "1 : ".concat(le_title);
  }
}

Duplicates.propTypes = {
  /** rowsDone - object representing total rows done and total done today */
  rowsDone: _propTypes.default.object.isRequired,

  /** decisions - array of decisions taken for each duplication in the cluster, currently there is only on dicision in a cluster */
  decisions: _propTypes.default.array.isRequired,

  /** reasons - set of reasons for duplicate page, currently supporting duplicate, skip and not duplicate */
  reasons: _propTypes.default.object.isRequired,

  /** saveTask - callback function used to save the updated/curated product pair */
  saveTask: _propTypes.default.func.isRequired,

  /** changeCategory - callback function used to change the product category */
  changeCategory: _propTypes.default.func.isRequired,

  /** jobId - the job id of the task */
  jobId: _propTypes.default.string.isRequired,

  /** jobTypeConfiguration - the configuration that was used when the task was created */
  jobTypeConfiguration: _propTypes.default.object.isRequired,

  /** workMode - string variable that indicate page mode */
  workMode: _propTypes.default.string,

  /** loggedInUser - logged in user data */
  loggedInUser: _propTypes.default.object.isRequired,

  /** currentPage - used in cluster mode to indeicate on which page we are, important when we change category from some page in the cluster and want to return to this page */
  currentPage: _propTypes.default.number
};
Duplicates.defaultProps = {
  workMode: 'regular',
  loggedInUser: {
    isUserSupervisor: false
  },
  currentPage: 0
};