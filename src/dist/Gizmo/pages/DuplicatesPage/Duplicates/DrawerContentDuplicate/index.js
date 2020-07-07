"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DrawerContentDuplicate;

require("antd/es/notification/style/css");

var _notification2 = _interopRequireDefault(require("antd/es/notification"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

require("antd/es/checkbox/style/css");

var _checkbox = _interopRequireDefault(require("antd/es/checkbox"));

require("antd/es/popover/style/css");

var _popover = _interopRequireDefault(require("antd/es/popover"));

require("antd/es/button/style/css");

var _button = _interopRequireDefault(require("antd/es/button"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

require("antd/es/input/style/css");

var _input = _interopRequireDefault(require("antd/es/input"));

var _react = _interopRequireWildcard(require("react"));

var _get = _interopRequireDefault(require("lodash/get"));

var _isEqual = _interopRequireDefault(require("lodash/isEqual"));

var _sortBy = _interopRequireDefault(require("lodash/sortBy"));

var _xor = _interopRequireDefault(require("lodash/xor"));

var _cloneDeep = _interopRequireDefault(require("lodash/cloneDeep"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _shared = require("../../../../shared");

var _ReasonSelect = _interopRequireDefault(require("./ReasonSelect"));

var _AspectsSelect = _interopRequireDefault(require("./AspectsSelect"));

var _AdditionalFieldSelect = _interopRequireDefault(require("./AdditionalFieldSelect"));

var _ProductIndiciationSelect = _interopRequireDefault(require("./ProductIndiciationSelect"));

require("./style.less");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var TextArea = _input.default.TextArea;

function DrawerContentDuplicate(_ref) {
  var decisions = _ref.decisions,
      page = _ref.page,
      rowId = _ref.rowId,
      entitiesArray = _ref.entitiesArray,
      leData = _ref.leData,
      setPage = _ref.setPage,
      updateDecisions = _ref.updateDecisions,
      fetchNextCluster = _ref.fetchNextCluster,
      saveTask = _ref.saveTask,
      showSendToSupervisor = _ref.showSendToSupervisor,
      observationOptions = _ref.observationOptions,
      shouldMakeObservation = _ref.shouldMakeObservation,
      shouldMakeDecision = _ref.shouldMakeDecision,
      jobTypeConfiguration = _ref.jobTypeConfiguration,
      aspectsNames = _ref.aspectsNames,
      removeSubmittedData = _ref.removeSubmittedData,
      showQaCheckbox = _ref.showQaCheckbox,
      productIndicationSelectValues = _ref.productIndicationSelectValues,
      clusterRowIds = _ref.clusterRowIds;

  var _useState = (0, _react.useState)(decisions[page].selectedOption),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      selectedOption = _useState2[0],
      setSelectedOption = _useState2[1];

  var _useState3 = (0, _react.useState)(),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      selectedObservation = _useState4[0],
      setSelectedObservation = _useState4[1];

  var jobType = jobTypeConfiguration.taskConfiguration.type.toLowerCase();

  var _useState5 = (0, _react.useState)(decisions[page]),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      currentDecision = _useState6[0],
      updateCurrentDecision = _useState6[1];

  var _useState7 = (0, _react.useState)((0, _get.default)(currentDecision, 'decisionInfo.observation.value.reason', '').toLowerCase() === 'different attribute'),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      isDifferentAttributeSelected = _useState8[0],
      setIsDifferentAttributeSelected = _useState8[1];

  var _useState9 = (0, _react.useState)(false),
      _useState10 = (0, _slicedToArray2.default)(_useState9, 2),
      isChosenAspectListChanged = _useState10[0],
      setIsChosenAspectListChanged = _useState10[1]; // use this array to track which rowIds where sent to server
  // this variable is used accoros all pairs in the cluster


  var _useState11 = (0, _react.useState)({
    counter: entitiesArray.length,
    rowIds: []
  }),
      _useState12 = (0, _slicedToArray2.default)(_useState11, 2),
      trackSubmit = _useState12[0],
      setTrackSubmit = _useState12[1]; // index number of the pair that was observed


  var _useState13 = (0, _react.useState)({}),
      _useState14 = (0, _slicedToArray2.default)(_useState13, 2),
      submitedObservations = _useState14[0],
      updatedSubmitedObservations = _useState14[1]; // use this array to track which victim epids where submited


  var _useState15 = (0, _react.useState)([]),
      _useState16 = (0, _slicedToArray2.default)(_useState15, 2),
      submitedEpid = _useState16[0],
      updatedSubmitedEpid = _useState16[1];

  (0, _react.useEffect)(function () {
    updateCurrentDecision(decisions[page]);
    setSelectedOption(decisions[page].selectedOption);
    setSelectedObservation(decisions[page].decisionInfo.observation);
  }, [page, decisions]);

  var _useState17 = (0, _react.useState)(true),
      _useState18 = (0, _slicedToArray2.default)(_useState17, 2),
      validUrl = _useState18[0],
      setValidUrl = _useState18[1];

  var shouldDisableSubmit = selectedOption === null || !validUrl;
  var shouldDisableObservationSubmit = !currentDecision.decisionInfo.observation.draft && !isChosenAspectListChanged || !validUrl;
  var currentSelectedObservation = getCurrentSelectedObservation();
  var disablebeforeObservation = !submitedObservations[page] && shouldMakeObservation && !(0, _get.default)(selectedObservation, 'value'); // cluster navigation data control the color and number on the popover used to navigate the cluster

  var navigationData = (decisions || []).map(function (decision, index) {
    return {
      label: index + 1,
      color: function (option) {
        if (option === null) return 'white';
        if (option === 'option1') return '#DBFF98';
        if (option === 'option2') return '#EDEDED';
        if (option === 'option3') return '#FFC7B3';
      }(decision.selectedOption),
      borderColor: submitedObservations[index] ? '#000' : '#d9d9d9'
    };
  }); // cluster navigation indexing

  var NavigationIndexing = [{
    value: '',
    toolTip: 'Not a Duplicate',
    color: '#ffc7b3',
    textEffect: ''
  }, {
    value: '',
    toolTip: 'Duplicate',
    color: '#dbff98',
    textEffect: ''
  }, {
    value: '',
    toolTip: 'Skip',
    color: '#ededed',
    textEffect: ''
  }];
  var optionToDescisionMap = {
    option1: 'Duplicates',
    option2: 'Skip',
    option3: 'Not Duplicates'
  };
  var isGetNextClusterDisabled = checkIfAllDecisionTaken();
  var showUrls = (0, _get.default)(currentDecision, 'decisionInfo.urls', []).length > 0;
  var showAdditionalInfo = (0, _get.default)(currentDecision, 'decisionInfo.additionalInfo', []).length > 0;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "drawer-content-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "left-section"
  }, shouldMakeObservation && /*#__PURE__*/_react.default.createElement("section", null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("b", null, "Observation:"), /*#__PURE__*/_react.default.createElement("span", null, isMandatory(true)), isDifferentAttributeSelected && /*#__PURE__*/_react.default.createElement(_popover.default, {
    placement: "rightTop",
    title: 'Aspects List',
    overlayStyle: {
      position: 'fixed'
    },
    content: /*#__PURE__*/_react.default.createElement(_AspectsSelect.default, {
      dropdownStyle: {
        position: 'fixed'
      },
      dropdownMenuStyle: {
        maxHeight: '80px'
      },
      aspectsNames: aspectsNames,
      updateReason: updateReason,
      resonType: "reason",
      placeHolder: 'Select aspects',
      defaultValue: (0, _get.default)(currentDecision, 'decisionInfo.reasonDetails.value') || []
    }),
    trigger: "click"
  }, /*#__PURE__*/_react.default.createElement(_button.default, {
    type: "link",
    size: 'small',
    style: {
      fontSize: '12px'
    }
  }, "Choose Aspects"))), !submitedObservations[page] && /*#__PURE__*/_react.default.createElement("div", {
    className: "observation"
  }, /*#__PURE__*/_react.default.createElement(_ReasonSelect.default, {
    dropdownStyle: {
      position: 'fixed'
    },
    dropdownMenuStyle: {
      maxHeight: '160px'
    },
    reasonArray: observationOptions,
    updateReason: updateObservation,
    reasonType: "observation",
    currentSelectedObservation: currentSelectedObservation,
    rowId: rowId,
    page: page
  }), /*#__PURE__*/_react.default.createElement(_button.default, {
    className: "submit-btn",
    onClick: onSubmitObservation,
    disabled: shouldDisableObservationSubmit
  }, shouldMakeDecision ? 'Save' : 'Submit')), submitedObservations[page] && /*#__PURE__*/_react.default.createElement("div", null, (0, _get.default)(selectedObservation, 'value.reason'), /*#__PURE__*/_react.default.createElement(_button.default, {
    icon: "edit",
    size: "small",
    shape: "circle",
    className: "observation-edit-btn",
    onClick: editObservation
  }))), shouldMakeDecision && /*#__PURE__*/_react.default.createElement("section", null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("b", null, "Decision:"), /*#__PURE__*/_react.default.createElement("span", null, isMandatory(true))), /*#__PURE__*/_react.default.createElement("div", {
    className: "decision-btns"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "left"
  }, /*#__PURE__*/_react.default.createElement(_button.default, {
    onClick: function onClick() {
      return changeDecision('option1');
    },
    disabled: disablebeforeObservation,
    className: selectedOption === 'option1' ? 'selected-btn op-1' : ''
  }, optionToDescisionMap['option1']), /*#__PURE__*/_react.default.createElement(_button.default, {
    onClick: function onClick() {
      return changeDecision('option2');
    },
    disabled: disablebeforeObservation,
    className: selectedOption === 'option2' ? 'selected-btn op-2' : ''
  }, optionToDescisionMap['option2']), /*#__PURE__*/_react.default.createElement(_button.default, {
    onClick: function onClick() {
      return changeDecision('option3');
    },
    disabled: disablebeforeObservation,
    className: selectedOption === 'option3' ? 'selected-btn op-3' : ''
  }, optionToDescisionMap['option3'])), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_button.default, {
    className: "submit-btn",
    onClick: onSubmit,
    disabled: shouldDisableSubmit
  }, "Submit")))), entitiesArray.length > 1 && /*#__PURE__*/_react.default.createElement("section", null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("b", null, "Next Cluster:")), /*#__PURE__*/_react.default.createElement("div", {
    className: "cluster-section-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_button.default, {
    className: "get-next-cluster",
    disabled: isGetNextClusterDisabled,
    onClick: onFetchNextCluster
  }, "Get Next Cluster"), /*#__PURE__*/_react.default.createElement(_shared.NavigationPopOver, {
    data: navigationData,
    indexing: NavigationIndexing,
    itemsInRow: navigationData.length > 6 ? 6 : navigationData.length,
    currentPage: page + 1,
    totalPages: navigationData.length,
    onPageChange: function onPageChange(newPage) {
      return setPage(newPage - 1);
    }
  }))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "right-section"
  }, /*#__PURE__*/_react.default.createElement("section", null, /*#__PURE__*/_react.default.createElement("b", null, "Comment:"), /*#__PURE__*/_react.default.createElement("span", null, isMandatory((0, _get.default)(currentDecision, 'decisionInfo.comment.mandatory', false))), /*#__PURE__*/_react.default.createElement(TextArea, {
    rows: 4,
    value: (0, _get.default)(currentDecision, 'decisionInfo.comment.value', ''),
    onChange: function onChange(e) {
      return updateReason(e.target.value, 'comment');
    },
    onMouseLeave: function onMouseLeave() {
      return updateDecisions(currentDecision);
    },
    style: {
      resize: 'none'
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "checkbox-wrapper"
  }, showSendToSupervisor && /*#__PURE__*/_react.default.createElement(_checkbox.default, {
    checked: currentDecision.decisionInfo.sendToSupervisor,
    onChange: onChangeSendToSupervisor
  }, "Send to supervisor")), /*#__PURE__*/_react.default.createElement("div", {
    className: "checkbox-wrapper"
  }, showQaCheckbox && /*#__PURE__*/_react.default.createElement(_checkbox.default, {
    checked: currentDecision.decisionInfo.checkedAsQa,
    onChange: onChangeQaCheckbox
  }, "QA"))), showUrls && /*#__PURE__*/_react.default.createElement("section", null, /*#__PURE__*/_react.default.createElement("b", null, "Urls:"), /*#__PURE__*/_react.default.createElement(_button.default, {
    icon: "plus",
    size: "small",
    shape: "circle",
    className: "add-urls",
    onClick: onAddUrl
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "url-list"
  }, (0, _get.default)(currentDecision, 'decisionInfo.urls', []).map(function (urlItem, urlIndex) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "item",
      key: urlIndex
    }, /*#__PURE__*/_react.default.createElement("label", null, urlItem.name, ":"), /*#__PURE__*/_react.default.createElement(_input.default, {
      type: "text",
      value: urlItem.url,
      onChange: function onChange(e) {
        return changedUrl(e.target.value, urlIndex);
      }
    }), /*#__PURE__*/_react.default.createElement(_ProductIndiciationSelect.default, {
      isDisabled: !currentDecision.decisionInfo.urls[urlIndex].url,
      urlIndex: urlIndex,
      dropDownStyle: {
        width: '120px'
      },
      dropDownValuesArray: productIndicationSelectValues,
      selectPlaceHolder: 'Indication',
      currentSelection: urlItem.indication,
      updateData: updateUrlIndiciation
    }));
  }))), showAdditionalInfo && /*#__PURE__*/_react.default.createElement("section", null, /*#__PURE__*/_react.default.createElement("b", null, "Additional Information:"), /*#__PURE__*/_react.default.createElement("div", {
    className: "additional-info-list"
  }, (0, _get.default)(currentDecision, 'decisionInfo.additionalInfo', []).map(function (infoItem, itemIndex) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "item",
      key: itemIndex
    }, /*#__PURE__*/_react.default.createElement(_AdditionalFieldSelect.default, {
      jobTypeConfiguration: jobTypeConfiguration,
      changedInfoItem: function changedInfoItem(value, itemIndex) {
        return _changedInfoItem(value, itemIndex);
      },
      itemIndex: itemIndex,
      isManadatory: isMandatory(infoItem.mandatory),
      infoItem: infoItem
    }));
  })))));

  function getCurrentSelectedObservation() {
    var value = (0, _get.default)(selectedObservation, 'value');
    return value ? JSON.stringify(value) : '';
  }

  function changeDecision(selectedOption) {
    setSelectedOption(selectedOption);
    var tempDecision = (0, _cloneDeep.default)(currentDecision);
    tempDecision.decisionInfo.reason.value = getSelectedReason();
    tempDecision.selectedOption = selectedOption;
    updateCurrentDecision(_objectSpread({}, tempDecision));
    updateDecisions(tempDecision);
  }

  function onChangeQaCheckbox(checked, e) {
    var tempDecision = (0, _cloneDeep.default)(currentDecision);
    tempDecision.decisionInfo.checkedAsQa = checked.target.checked;
    updateCurrentDecision(_objectSpread({}, tempDecision));
    updateDecisions(tempDecision);
  }

  function getSelectedReason() {
    return (0, _get.default)(currentDecision, 'decisionInfo.observation.value.reason');
  }

  function updateReason(value, fieldName) {
    var tempDecision = (0, _cloneDeep.default)(currentDecision);
    (0, _isEqual.default)((0, _sortBy.default)(value), (0, _sortBy.default)(tempDecision.decisionInfo[fieldName].value)) ? setIsChosenAspectListChanged(false) : setIsChosenAspectListChanged(true);
    tempDecision.decisionInfo[fieldName].value = value;
    updateCurrentDecision(_objectSpread({}, tempDecision));
    updateDecisions(tempDecision);
  }

  function updateObservation(value, fieldName) {
    var tempDecision = (0, _cloneDeep.default)(currentDecision);
    tempDecision.decisionInfo[fieldName].draft = observationOptions.find(function (item) {
      return item.reason === JSON.parse(value).reason;
    });
    updateCurrentDecision(_objectSpread({}, tempDecision));
    updateDecisions(tempDecision);
    tempDecision.decisionInfo[fieldName].draft.reason.toLowerCase() === 'different attribute' ? setIsDifferentAttributeSelected(true) : setIsDifferentAttributeSelected(false);
  }

  function updateUrlIndiciation(value, index) {
    var tempDecision = (0, _cloneDeep.default)(currentDecision);
    tempDecision.decisionInfo.urls[index].indication = value;
    setValidUrl(checkIfValidUrl(tempDecision, index));
    updateCurrentDecision(_objectSpread({}, tempDecision));
  }

  function onChangeSendToSupervisor(checked, e) {
    var tempDecision = (0, _cloneDeep.default)(currentDecision);
    tempDecision.decisionInfo.sendToSupervisor = checked.target.checked;
    updateCurrentDecision(_objectSpread({}, tempDecision));
    updateDecisions(tempDecision);
  }

  function onSubmit() {
    if (!trackSubmit.rowIds.includes(rowId)) {
      setTrackSubmit(_objectSpread(_objectSpread({}, trackSubmit), {}, {
        rowIds: [].concat((0, _toConsumableArray2.default)(trackSubmit.rowIds), [rowId])
      }));
    }

    moveToNextUnSubmitedPair();

    _notification2.default.success({
      message: "Action Success",
      description: jobType.charAt(0).toUpperCase() + jobType.slice(1) + ' Pair Submited',
      placement: 'topRight'
    }); // in cluster mode i don't want to get next cluster, until user press the get cluster button


    var shouldGetNextCluster = entitiesArray.length > 1 ? false : true;
    updatedSubmitedEpid([].concat((0, _toConsumableArray2.default)(submitedEpid), [entitiesArray[page].entityId]));
    saveTask(shouldGetNextCluster, {
      comparedEntityRowContract: {
        rowId: rowId,
        entities: [leData, entitiesArray[page]],
        sendToSupervisor: decisions[page].decisionInfo.sendToSupervisor,
        comparedEntityRowQaContract: {
          isQaed: decisions[page].decisionInfo.checkedAsQa ? true : false
        },
        additionalInformationContract: {
          additionalInformationDataList: decisions[page].decisionInfo.additionalInfo
        },
        type: jobTypeConfiguration.taskConfiguration.type
      }
    });

    if (entitiesArray.length === 1) {
      window.scrollTo(0, 0);
    }

    if (decisions[page].decisionInfo.sendToSupervisor === true && entitiesArray.length > 1) {
      removeSubmittedData();
    }
  }

  function moveToNextUnSubmitedPair() {
    var nextRowIds = (0, _xor.default)(clusterRowIds, [].concat((0, _toConsumableArray2.default)(trackSubmit.rowIds), [rowId]));

    if (nextRowIds[0]) {
      for (var i = 0; i < clusterRowIds.length; i++) {
        if (clusterRowIds[i] === nextRowIds[0]) {
          setPage(i);
          break;
        }
      }
    }
  }

  function onSubmitObservation() {
    setIsDifferentAttributeSelected(false);

    if (!trackSubmit.rowIds.includes(rowId) && !shouldMakeDecision) {
      setTrackSubmit(_objectSpread(_objectSpread({}, trackSubmit), {}, {
        rowIds: [].concat((0, _toConsumableArray2.default)(trackSubmit.rowIds), [rowId])
      }));
    }

    updatedSubmitedObservations(_objectSpread(_objectSpread({}, submitedObservations), (0, _defineProperty2.default)({}, page, currentDecision.decisionInfo.sendToSupervisor ? false : true)));
    var tempDecision = (0, _cloneDeep.default)(currentDecision); // in case draft is null do not reset the value //
    //this cover senrario when obersvation reason remain the same but aspects change //

    if (tempDecision.decisionInfo.observation.draft) {
      tempDecision.decisionInfo.observation.value = tempDecision.decisionInfo.observation.draft;
    }

    tempDecision.decisionInfo.observation.draft = null;
    updateCurrentDecision(_objectSpread({}, tempDecision));
    updateDecisions(_objectSpread({}, tempDecision));

    if (!shouldMakeDecision) {
      onSubmit();
    }
  }

  function onFetchNextCluster() {
    fetchNextCluster();
    window.scrollTo(0, 0);
  }

  function checkIfAllDecisionTaken() {
    return !(entitiesArray.length > 1 && trackSubmit.rowIds.length === trackSubmit.counter);
  }

  function onAddUrl() {
    var tempDecision = (0, _cloneDeep.default)(currentDecision);
    var index = tempDecision.decisionInfo.urls.length + 1;
    tempDecision.decisionInfo.urls.push({
      name: "URL ".concat(index),
      url: '',
      indiciation: ''
    });
    updateCurrentDecision(_objectSpread({}, tempDecision));
    updateDecisions(tempDecision);
  }

  function changedUrl(value, index) {
    var tempDecision = (0, _cloneDeep.default)(currentDecision);
    setValidUrl(checkIfValidUrl(tempDecision, index));

    if (!value) {
      tempDecision.decisionInfo.urls[index].indication = '';
    }

    tempDecision.decisionInfo.urls[index].url = value;
    updateCurrentDecision(_objectSpread({}, tempDecision));
  }

  function _changedInfoItem(value, index) {
    var tempDecision = (0, _cloneDeep.default)(currentDecision);
    tempDecision.decisionInfo.additionalInfo[index].value = value;
    updateCurrentDecision(_objectSpread({}, tempDecision));
  }

  function isMandatory(mandatory) {
    return mandatory ? /*#__PURE__*/_react.default.createElement("span", {
      className: "mandatory"
    }, "*") : ' ';
  }

  function editObservation() {
    updatedSubmitedObservations(_objectSpread(_objectSpread({}, submitedObservations), (0, _defineProperty2.default)({}, page, false)));

    if ((0, _get.default)(selectedObservation, 'value.reason').toLowerCase() === 'different attribute') {
      setIsDifferentAttributeSelected(true);
      setIsChosenAspectListChanged(false);
    }
  }

  function checkIfValidUrl(tempDecision, index) {
    var urlObject = tempDecision.decisionInfo.urls[index];
    return (0, _get.default)(urlObject, 'url', '').length && (0, _get.default)(urlObject, 'indication', '').length;
  }
}

DrawerContentDuplicate.propTypes = {
  /** decisions - list of decisions used in decision section */
  decisions: _propTypes.default.array.isRequired,

  /** page - the number of page that indicate the pair of products that we are looking at */
  page: _propTypes.default.number.isRequired,

  /** rowId - the row id of the pairs that we compair  */
  rowId: _propTypes.default.string.isRequired,
  entitiesArray: _propTypes.default.array.isRequired,
  leData: _propTypes.default.object.isRequired,
  setPage: _propTypes.default.func.isRequired,

  /** updateDecisions - function for updating decisions */
  updateDecisions: _propTypes.default.func.isRequired,

  /** fetchNextCluster - function to get the next cluster */
  fetchNextCluster: _propTypes.default.func.isRequired,

  /** saveTask - function to save the task */
  saveTask: _propTypes.default.func.isRequired,

  /** showSendToSupervisor - flag that indicate if we should show supervisor check button */
  showSendToSupervisor: _propTypes.default.bool.isRequired,
  jobTypeConfiguration: _propTypes.default.object.isRequired,

  /** shouldMakeObservation - indication if we should make an observation */
  shouldMakeObservation: _propTypes.default.bool.isRequired,

  /** shouldMakeDecision - indication if we should make a desicion */
  shouldMakeDecision: _propTypes.default.bool.isRequired,

  /** removeSubmittedData - remove the pair of entities from the cluster if user checked send to supervisor and clicked submit */
  removeSubmittedData: _propTypes.default.func.isRequired,

  /** showQaCheckbox: boolean value used to show hide the checkbox used to indicate if this pair was QAed*/
  showQaCheckbox: _propTypes.default.bool.isRequired,

  /** productIndiciationSelectValues - product Indicication select dropDown values  */
  productIndiciationSelectValues: _propTypes.default.array.isRequired
};