"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _mock = require("../mock");

var _index = _interopRequireDefault(require("./index"));

it('test for generating AssigneesDropDown for update assignees when no assingee assigned to ET ', function () {
  var tree = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_index.default, {
    loggedUserData: _mock.mockAgent,
    currentAssigneeData: _mock.assignRowResponseMock,
    selectAssigneePlaceHolder: 'Select Assignee',
    assingeesList: _mock.getUsersResponseMock.users,
    onAssignedChanged: function onAssignedChanged() {},
    rowId: '5e94b3e79c95bfcfc44971cf'
  })).toJSON();

  expect(tree).toMatchSnapshot();
});
it('test for generating AssigneesDropDown for update assignees when assingee already assigned to ET ', function () {
  var tree = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_index.default, {
    loggedUserData: _mock.mockAgent,
    currentAssigneeData: _mock.assignRowResponseMock,
    selectAssigneePlaceHolder: 'Select Assignee',
    assingeesList: _mock.getUsersResponseMock.users,
    onAssignedChanged: function onAssignedChanged() {},
    rowId: '5e94b3e79c95bfcfc44971cf'
  })).toJSON();

  expect(tree).toMatchSnapshot();
});