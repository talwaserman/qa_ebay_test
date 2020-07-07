"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MultiSelectionPopUp;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

require("antd/es/select/style/css");

var _select = _interopRequireDefault(require("antd/es/select"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _get = _interopRequireDefault(require("lodash/get"));

var _has = _interopRequireDefault(require("lodash/has"));

var _FastMultiSelect = _interopRequireDefault(require("./FastMultiSelect"));

require("./style.less");

var Option = _select.default.Option;

function MultiSelectionPopUp(_ref) {
  var multiSelectionPopUpData = _ref.multiSelectionPopUpData,
      dropDownKeyLabel1 = _ref.dropDownKeyLabel1,
      dropDownKeyLabel2 = _ref.dropDownKeyLabel2,
      multiSelectionTitle = _ref.multiSelectionTitle,
      handleModalChange = _ref.handleModalChange,
      multiSelectionData = _ref.multiSelectionData,
      existingData = _ref.existingData,
      isDisabledFirstSelection = _ref.isDisabledFirstSelection,
      isDisabledSecondSelection = _ref.isDisabledSecondSelection,
      editSelectedData = _ref.editSelectedData;

  var _useState = (0, _react.useState)([]),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      activityData = _useState2[0],
      setActivityData = _useState2[1];

  var _useState3 = (0, _react.useState)((0, _get.default)(editSelectedData, 'activity', undefined)),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      activityInitValue = _useState4[0],
      setActivityInitValue = _useState4[1];

  var _useState5 = (0, _react.useState)(editSelectedData),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      selectedData = _useState6[0],
      setSelectedData = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      loadingAssignees = _useState8[0],
      setLoadingAssignees = _useState8[1];

  var _useState9 = (0, _react.useState)([]),
      _useState10 = (0, _slicedToArray2.default)(_useState9, 2),
      usersData = _useState10[0],
      setUsersData = _useState10[1];

  (0, _react.useEffect)(function () {
    setActivityData(activityData);
    setActivityInitValue(activityInitValue);
  }, [activityData, activityInitValue]);
  (0, _react.useEffect)(function () {
    function fetchUsers() {
      return _fetchUsers.apply(this, arguments);
    }

    function _fetchUsers() {
      _fetchUsers = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var assignees;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                setLoadingAssignees(true);
                _context.next = 3;
                return multiSelectionData();

              case 3:
                assignees = _context.sent;
                setUsersData(assignees);
                setLoadingAssignees(false);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _fetchUsers.apply(this, arguments);
    }

    fetchUsers();
  }, [multiSelectionData]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "multi-selection-popup-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "add-activity-label"
  }, multiSelectionPopUpData.placeHolder1), /*#__PURE__*/_react.default.createElement("div", {
    className: "notification-type-select"
  }, /*#__PURE__*/_react.default.createElement(_select.default, {
    placeholder: multiSelectionPopUpData.placeHolder1,
    onChange: onChangeNotficationType,
    disabled: isDisabledFirstSelection,
    defaultValue: editSelectedData.type === null ? undefined : (0, _get.default)(editSelectedData, 'type', undefined)
  }, Object.keys((0, _get.default)(multiSelectionPopUpData, 'selectionData.typeToActivities', [])).map(function (item) {
    return /*#__PURE__*/_react.default.createElement(Option, {
      key: (0, _get.default)(item, dropDownKeyLabel1, null),
      value: item
    }, item);
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "add-activity-label"
  }, multiSelectionPopUpData.placeHolder2), /*#__PURE__*/_react.default.createElement("div", {
    className: "activity-type-select"
  }, /*#__PURE__*/_react.default.createElement(_select.default, {
    placeholder: multiSelectionPopUpData.placeHolder2,
    onChange: onChangeActivityType,
    value: activityInitValue,
    disabled: isDisabledSecondSelection
  }, activityData.map(function (activity) {
    if (alreadyExists(activity)) {
      return /*#__PURE__*/_react.default.createElement(Option, {
        value: activity,
        disabled: true
      }, activity);
    } else {
      return /*#__PURE__*/_react.default.createElement(Option, {
        key: (0, _get.default)(activity, dropDownKeyLabel2, null),
        value: activity
      }, activity);
    }
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: 'add-assigners-label'
  }, multiSelectionTitle), /*#__PURE__*/_react.default.createElement("div", {
    className: "users-multi-select"
  }, /*#__PURE__*/_react.default.createElement(_FastMultiSelect.default, {
    placeholder: multiSelectionPopUpData.placeHolder3,
    optionValues: usersData,
    selectedValues: (0, _get.default)(selectedData, 'users', []),
    onSelectChange: onChangeUsers,
    width: '400',
    isLoading: loadingAssignees
  })));

  function alreadyExists(activity) {
    var isExists = false;
    var matchingNotifications = existingData.filter(function (notification) {
      return notification.activity === activity;
    });
    matchingNotifications.forEach(function (notification) {
      if (notification.type === selectedData.type) {
        isExists = true;
      }
    });
    return isExists;
  }

  function onChangeNotficationType(value) {
    var activitiesOptions = (0, _get.default)(multiSelectionPopUpData.selectionData.typeToActivities, value, '');
    setActivityInitValue(null);
    setActivityData(activitiesOptions);
    setSelectedData({
      type: value,
      activity: null,
      users: selectedData.users
    });
    handleModalChange({
      type: value,
      activity: null,
      users: selectedData.users
    }, true);
  }

  function onChangeActivityType(value) {
    setSelectedData({
      type: selectedData.type,
      activity: value,
      users: selectedData.users
    });
    setActivityInitValue(value);
    handleModalChange({
      type: selectedData.type,
      activity: value,
      users: selectedData.users
    }, value && selectedData.type && selectedData.users.length > 0 ? false : true);
  }

  function onChangeUsers(selectedusers) {
    var usersIds = [];
    selectedusers.forEach(function (userDetails) {
      if ((0, _has.default)(userDetails, 'id')) {
        usersIds.push({
          id: userDetails.id,
          display: userDetails.display
        });
      }

      if ((0, _has.default)(userDetails, 'userId')) {
        usersIds.push({
          id: userDetails.userId,
          display: userDetails.display
        });
      }
    });
    setSelectedData({
      type: selectedData.type,
      activity: selectedData.activity,
      users: usersIds
    });
    handleModalChange({
      type: selectedData.type,
      activity: selectedData.activity,
      users: usersIds
    }, usersIds.length > 0 && selectedData.activity && selectedData.type ? false : true);
  }
}

MultiSelectionPopUp.propTypes = {
  /** dropDownKeyLabel1 - represent for each key name in the first dropdown array */
  dropDownKeyLabel1: _propTypes.default.string,

  /** dropDownKeyLabel2 - represent for each key name in the second dropdown array */
  dropDownKeyLabel2: _propTypes.default.string,

  /** multiSelectionTitle - represent multiSelection antd component title */
  multiSelectionTitle: _propTypes.default.string,

  /** multiSelectionPopUpData - holds the data of place holders and selection and multi election */
  multiSelectionPopUpData: _propTypes.default.shape({
    /** placeHolder1 - Placeholder of select one */
    placeHolder1: _propTypes.default.string.isRequired,

    /** placeHolder2 - Placeholder of select two */
    placeHolder2: _propTypes.default.string.isRequired,

    /** placeHolder3 - Placeholder of multi select */
    placeHolder3: _propTypes.default.string.isRequired,

    /** selectionData - hold the data for both selection as first selection coupled with the second  */
    selectionData: _propTypes.default.object.isRequired
  }),

  /** multiSelectionData - hold the data for the multi selection dropdown */
  multiSelectionData: _propTypes.default.func.isRequired,

  /** isDisabledFirstSelection - is first selection dropdown disabled or not */
  isDisabledFirstSelection: _propTypes.default.bool,

  /** isDisabledSecondSelection - is first selection dropdown disabled or not */
  isDisabledSecondSelection: _propTypes.default.bool,

  /** editSelectedData - hold the row selected data which was chosen for editing */
  editSelectedData: _propTypes.default.object
};
MultiSelectionPopUp.defaultProps = {
  isDisabledFirstSelection: false,
  isDisabledSecondSelection: false,
  editSelectedData: {
    type: undefined,
    activity: undefined,
    users: undefined
  }
};