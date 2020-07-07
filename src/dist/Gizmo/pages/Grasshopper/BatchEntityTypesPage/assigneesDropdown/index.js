"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AssigneesDropDown;

require("antd/es/button/style/css");

var _button = _interopRequireDefault(require("antd/es/button"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

require("antd/es/select/style/css");

var _select = _interopRequireDefault(require("antd/es/select"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _get = _interopRequireDefault(require("lodash/get"));

require("./style.less");

var Option = _select.default.Option;

function AssigneesDropDown(_ref) {
  var loggedUserData = _ref.loggedUserData,
      currentAssigneeData = _ref.currentAssigneeData,
      selectAssigneePlaceHolder = _ref.selectAssigneePlaceHolder,
      assingeesList = _ref.assingeesList,
      onAssignedChanged = _ref.onAssignedChanged,
      rowId = _ref.rowId;

  var _useState = (0, _react.useState)(currentAssigneeData),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      tempAssigneeData = _useState2[0],
      setTempAssigneeData = _useState2[1];

  var _useState3 = (0, _react.useState)(tempAssigneeData && tempAssigneeData.userId === loggedUserData.userId),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      visibleAssigned = _useState4[0],
      setVisibleAssigned = _useState4[1];

  var options = assingeesList.map(function (assignee) {
    return /*#__PURE__*/_react.default.createElement(Option, {
      key: assignee.userId,
      value: JSON.stringify(assignee)
    }, assignee.display);
  });
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "assignees-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "assignees-dropdown"
  }, /*#__PURE__*/_react.default.createElement(_select.default, {
    mode: 'single',
    showSearch: true,
    showArrow: true,
    placeholder: selectAssigneePlaceHolder,
    value: (0, _get.default)(tempAssigneeData, 'display', null),
    onChange: handleChange,
    dropdownMenuStyle: {
      whiteSpace: 'preWrap'
    }
  }, options)), /*#__PURE__*/_react.default.createElement("div", {
    className: "assignee-href"
  }, !visibleAssigned && /*#__PURE__*/_react.default.createElement(_button.default, {
    type: "link",
    className: "href-button",
    onClick: onClickAssign
  }, "Assign to me"), visibleAssigned && /*#__PURE__*/_react.default.createElement(_button.default, {
    type: "link",
    className: "href-button",
    onClick: onClickUnAssign
  }, "Unassign me")));

  function handleChange(value) {
    onAssignedChanged({
      rowId: rowId,
      previousUserId: (0, _get.default)(tempAssigneeData, 'userId', ''),
      currentUserId: JSON.parse(value).userId
    });
    setTempAssigneeData({
      userId: JSON.parse(value).userId,
      userName: JSON.parse(value).userName,
      display: JSON.parse(value).display
    });
    setVisibleAssigned(false);
  }

  function onClickAssign() {
    onAssignedChanged({
      rowId: rowId,
      previousUserId: (0, _get.default)(tempAssigneeData, 'userId', ''),
      currentUserId: loggedUserData.userId
    });
    setTempAssigneeData({
      userId: loggedUserData.userId,
      userName: loggedUserData.userName,
      display: loggedUserData.display
    });
    setVisibleAssigned(true);
  }

  function onClickUnAssign() {
    onAssignedChanged({
      rowId: rowId,
      previousUserId: loggedUserData.userId,
      currentUserId: ''
    });
    setTempAssigneeData({
      userId: '',
      userName: '',
      display: ''
    });
    setVisibleAssigned(false);
  }
}

AssigneesDropDown.propTypes = {
  /** loggedUserData - logged gizmo frontend app user data */
  loggedUserData: _propTypes.default.object.isRequired,

  /** currentAssigneeData - current row assignee data if exists */
  currentAssigneeData: _propTypes.default.object,

  /** selectAssigneePlaceHolder - select assignee place holder label */
  selectAssigneePlaceHolder: _propTypes.default.string,

  /** assingeesList - the list of system userIds to render */
  assingeesList: _propTypes.default.array.isRequired,

  /** onAssignedChanged - callback when assignee is selected */
  onAssignedChanged: _propTypes.default.func.isRequired,

  /** rowId - entity type id */
  rowId: _propTypes.default.number.isRequired
};
AssigneesDropDown.defaultProps = {
  currentAssigneeData: null
};