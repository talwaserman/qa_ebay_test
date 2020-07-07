"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DrawerContentMatching;

require("antd/es/notification/style/css");

var _notification2 = _interopRequireDefault(require("antd/es/notification"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

require("antd/es/checkbox/style/css");

var _checkbox = _interopRequireDefault(require("antd/es/checkbox"));

require("antd/es/tooltip/style/css");

var _tooltip = _interopRequireDefault(require("antd/es/tooltip"));

require("antd/es/popover/style/css");

var _popover = _interopRequireDefault(require("antd/es/popover"));

require("antd/es/button/style/css");

var _button = _interopRequireDefault(require("antd/es/button"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

require("antd/es/input/style/css");

var _input = _interopRequireDefault(require("antd/es/input"));

var _react = _interopRequireWildcard(require("react"));

var _get = _interopRequireDefault(require("lodash/get"));

var _xor = _interopRequireDefault(require("lodash/xor"));

var _cloneDeep = _interopRequireDefault(require("lodash/cloneDeep"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _shared = require("../../../../shared");

var _ReasonSelect = _interopRequireDefault(require("./ReasonSelect"));

var _AspectsSelect = _interopRequireDefault(require("./AspectsSelect"));

var _AdditionalFieldSelect = _interopRequireDefault(require("./AdditionalFieldSelect"));

require("./style.less");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var TextArea = _input.default.TextArea;

function DrawerContentMatching(_ref) {
  var decisions = _ref.decisions,
      reasons = _ref.reasons,
      page = _ref.page,
      rowId = _ref.rowId,
      entitiesArray = _ref.entitiesArray,
      leData = _ref.leData,
      setPage = _ref.setPage,
      updateDecisions = _ref.updateDecisions,
      fetchNextCluster = _ref.fetchNextCluster,
      saveTask = _ref.saveTask,
      showSendToSupervisor = _ref.showSendToSupervisor,
      jobTypeConfiguration = _ref.jobTypeConfiguration,
      aspectsNames = _ref.aspectsNames,
      applyAllCluster = _ref.applyAllCluster,
      showQaCheckbox = _ref.showQaCheckbox,
      removeSubmittedData = _ref.removeSubmittedData,
      clusterRowIds = _ref.clusterRowIds;

  var _useState = (0, _react.useState)(decisions[page].selectedOption || 'option1'),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      selectedOption = _useState2[0],
      setSelectedOption = _useState2[1];

  var jobType = jobTypeConfiguration.taskConfiguration.type.toLowerCase();

  var _useState3 = (0, _react.useState)(decisions[page]),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      currentDecision = _useState4[0],
      updateCurrentDecision = _useState4[1];

  var _useState5 = (0, _react.useState)((0, _get.default)(currentDecision, 'decisionInfo.reason.value', '') === 'Aspects'),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      isAspectSelected = _useState6[0],
      setIsAspectSelected = _useState6[1]; // use this array to track which rowIds where sent to server


  var _useState7 = (0, _react.useState)([]),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      trackSubmit = _useState8[0],
      setTrackSubmit = _useState8[1]; // use this array to track which victim epids where submited


  var _useState9 = (0, _react.useState)([]),
      _useState10 = (0, _slicedToArray2.default)(_useState9, 2),
      submitedEpid = _useState10[0],
      updatedSubmitedEpid = _useState10[1];

  (0, _react.useEffect)(function () {
    updateCurrentDecision(decisions[page]);
    setSelectedOption(decisions[page].selectedOption);
  }, [page, decisions]);
  (0, _react.useEffect)(function () {
    setIsAspectSelected((0, _get.default)(currentDecision, 'decisionInfo.reason.value', '') === 'Aspects');
  }, [currentDecision]);
  var shouldDisableSubmit = !selectedOption || !(0, _get.default)(currentDecision, 'decisionInfo.reason.value'); // cluster navigation data control the color and number on the popover used to navigate the cluster

  var navigationData = (decisions || []).map(function (decision, index) {
    return {
      label: index + 1,
      color: function (option) {
        if (option === null) return 'white';
        if (option === 'option1') return '#DBFF98';
        if (option === 'option2') return '#EDEDED';
        if (option === 'option3') return '#FFC7B3';
      }(decision.selectedOption),
      borderColor: submitedEpid.includes(decisions[index].rightEntity) ? '#000' : '#d9d9d9'
    };
  }); // cluster navigation indexing

  var NavigationIndexing = [{
    value: '',
    toolTip: 'Wrong',
    color: '#ffc7b3',
    textEffect: ''
  }, {
    value: '',
    toolTip: 'Correct',
    color: '#dbff98',
    textEffect: ''
  }, {
    value: '',
    toolTip: 'Skip',
    color: '#ededed',
    textEffect: ''
  }];
  var optionToDescisionMap = {
    option1: 'Correct',
    option2: 'Skip',
    option3: 'Wrong'
  };
  var isGetNextClusterDisabled = checkIfAllDecisionTaken();
  var showUrls = (0, _get.default)(currentDecision, 'decisionInfo.urls', []).length > 0;
  var showAdditionalInfo = (0, _get.default)(currentDecision, 'decisionInfo.additionalInfo', []).length > 0;
  var showApplayAllCluster = jobType === 'matching' && entitiesArray.length > 1;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "drawer-content-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "left-section"
  }, /*#__PURE__*/_react.default.createElement("section", null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("b", null, "Decision:"), /*#__PURE__*/_react.default.createElement("span", null, isMandatory(true)), isAspectSelected && /*#__PURE__*/_react.default.createElement(_popover.default, {
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
  }, "Choose Aspects")), (0, _get.default)(currentDecision, 'selectedOption') === 'option2' && showApplayAllCluster && /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(_tooltip.default, {
    title: "will apply Desicion Skip for all cluster"
  }, /*#__PURE__*/_react.default.createElement(_button.default, {
    type: "link",
    size: 'small',
    onClick: function onClick() {
      return applyAllCluster(currentDecision);
    },
    style: {
      fontSize: '12px'
    }
  }, "Apply all cluster")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "decision-btns"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "left"
  }, /*#__PURE__*/_react.default.createElement(_button.default, {
    onClick: function onClick() {
      return changeDecision('option1');
    },
    className: selectedOption === 'option1' ? 'selected-btn op-1' : ''
  }, optionToDescisionMap['option1']), /*#__PURE__*/_react.default.createElement(_button.default, {
    onClick: function onClick() {
      return changeDecision('option2');
    },
    className: selectedOption === 'option2' ? 'selected-btn op-2' : ''
  }, optionToDescisionMap['option2']), /*#__PURE__*/_react.default.createElement(_button.default, {
    onClick: function onClick() {
      return changeDecision('option3');
    },
    className: selectedOption === 'option3' ? 'selected-btn op-3' : ''
  }, optionToDescisionMap['option3'])))), /*#__PURE__*/_react.default.createElement("section", null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("b", null, "Reason:"), /*#__PURE__*/_react.default.createElement("span", null, isMandatory(true))), /*#__PURE__*/_react.default.createElement("div", {
    className: "observation"
  }, /*#__PURE__*/_react.default.createElement(_ReasonSelect.default, {
    dropdownStyle: {
      position: 'fixed'
    },
    dropdownMenuStyle: {
      maxHeight: '160px'
    },
    reasonArray: reasons,
    selectedReason: currentDecision,
    updateReason: updateReason,
    resonType: "reason",
    selectedDecision: decisions[page].selectedOption,
    jobType: jobType
  }), /*#__PURE__*/_react.default.createElement(_button.default, {
    className: "submit-btn",
    onClick: onSubmit,
    disabled: shouldDisableSubmit
  }, "Submit"))), entitiesArray.length > 1 && /*#__PURE__*/_react.default.createElement("section", null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("b", null, "Next Cluster:")), /*#__PURE__*/_react.default.createElement("div", {
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
  }, (0, _get.default)(currentDecision, 'decisionInfo.urls', []).map(function (urlItem, index) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "item",
      key: index
    }, /*#__PURE__*/_react.default.createElement("span", null, urlItem.name, ":"), /*#__PURE__*/_react.default.createElement(_input.default, {
      type: "text",
      value: urlItem.url,
      onChange: function onChange(e) {
        return changedUrl(e.target.value, index);
      }
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

  function changeDecision(selectedOption) {
    setSelectedOption(selectedOption);
    var tempDecision = (0, _cloneDeep.default)(currentDecision);
    tempDecision.decisionInfo.reason.value = null; //Make sure the reason dropdown is cleared on each time button is clicked

    tempDecision.selectedOption = selectedOption;
    updateCurrentDecision(_objectSpread({}, tempDecision));
    updateDecisions(tempDecision);
  }

  function updateReason(value, fieldName) {
    var tempDecision = (0, _cloneDeep.default)(currentDecision);
    tempDecision.decisionInfo[fieldName].value = value;
    updateCurrentDecision(_objectSpread({}, tempDecision));
    updateDecisions(tempDecision);

    if (fieldName === 'reason') {
      tempDecision.decisionInfo[fieldName].value === 'Aspects' ? setIsAspectSelected(true) : setIsAspectSelected(false);
    }
  }

  function onChangeSendToSupervisor(checked, e) {
    var tempDecision = (0, _cloneDeep.default)(currentDecision);
    tempDecision.decisionInfo.sendToSupervisor = checked.target.checked;
    updateCurrentDecision(_objectSpread({}, tempDecision));
    updateDecisions(tempDecision);
  }

  function onChangeQaCheckbox(checked, e) {
    var tempDecision = (0, _cloneDeep.default)(currentDecision);
    tempDecision.decisionInfo.checkedAsQa = checked.target.checked;
    updateCurrentDecision(_objectSpread({}, tempDecision));
    updateDecisions(tempDecision);
  }

  function onSubmit() {
    if (!trackSubmit.includes(rowId)) {
      setTrackSubmit([].concat((0, _toConsumableArray2.default)(trackSubmit), [rowId]));
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
      //remove a single pair from the cluster when the send to supervisor checkbox is selected
      removeSubmittedData();
    }
  }

  function moveToNextUnSubmitedPair() {
    var nextRowIds = (0, _xor.default)(clusterRowIds, [].concat((0, _toConsumableArray2.default)(trackSubmit), [rowId]));

    if (nextRowIds[0]) {
      for (var i = 0; i < clusterRowIds.length; i++) {
        if (clusterRowIds[i] === nextRowIds[0]) {
          setPage(i);
          break;
        }
      }
    }
  }

  function onFetchNextCluster() {
    fetchNextCluster();
    window.scrollTo(0, 0);
  }

  function checkIfAllDecisionTaken() {
    return !(entitiesArray.length > 1 && trackSubmit.length === entitiesArray.length);
  }

  function onAddUrl() {
    var tempDecision = (0, _cloneDeep.default)(currentDecision);
    var index = tempDecision.decisionInfo.urls.length + 1;
    tempDecision.decisionInfo.urls.push({
      name: "URL ".concat(index),
      url: ''
    });
    updateCurrentDecision(_objectSpread({}, tempDecision));
    updateDecisions(tempDecision);
  }

  function changedUrl(value, index) {
    var tempDecision = Object.assign({}, currentDecision);
    tempDecision.decisionInfo.urls[index].url = value;
    updateCurrentDecision(_objectSpread({}, tempDecision));
  }

  function _changedInfoItem(value, index) {
    var tempDecision = Object.assign({}, currentDecision);
    tempDecision.decisionInfo.additionalInfo[index].value = value;
    updateCurrentDecision(_objectSpread({}, tempDecision));
  }

  function isMandatory(mandatory) {
    return mandatory ? /*#__PURE__*/_react.default.createElement("span", {
      className: "mandatory"
    }, "*") : ' ';
  }
}

DrawerContentMatching.propTypes = {
  /** decisions - list of decisions used in decision section */
  decisions: _propTypes.default.array.isRequired,

  /** reasons - list of reasons used in decision section */
  reasons: _propTypes.default.object.isRequired,

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

  /** removeSubmittedData - remove the pair of entities from the cluster if user checked send to supervisor and clicked submit */
  removeSubmittedData: _propTypes.default.func.isRequired
};