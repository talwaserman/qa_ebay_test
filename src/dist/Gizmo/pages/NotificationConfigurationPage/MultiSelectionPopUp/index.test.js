"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _sortBy = _interopRequireDefault(require("lodash/sortBy"));

var _get = _interopRequireDefault(require("lodash/get"));

var _cloneDeep = _interopRequireDefault(require("lodash/cloneDeep"));

var _services = require("../services");

var _mock = require("../mock");

var _index = _interopRequireDefault(require("./index"));

require("regenerator-runtime/runtime");

// - TODO we might need setupTest.js file - or do we have one ?
var multiSelectionPopUpData = {
  placeHolder1: 'Type',
  placeHolder2: 'Activity',
  placeHolder3: 'Assignees',
  selectionData: _mock.getNotificationTypeResponse
};

function getSortedUsersData() {
  return _getSortedUsersData.apply(this, arguments);
}

function _getSortedUsersData() {
  _getSortedUsersData = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
    var usersDataResponse, sortedUsersDataResponse;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _services.getUsers)();

          case 2:
            usersDataResponse = _context.sent;
            sortedUsersDataResponse = (0, _cloneDeep.default)((0, _get.default)(usersDataResponse, 'users', null));
            sortedUsersDataResponse = (0, _sortBy.default)(sortedUsersDataResponse, function (value) {
              return value.display.toUpperCase();
            });
            return _context.abrupt("return", sortedUsersDataResponse);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getSortedUsersData.apply(this, arguments);
}

it('Gizmo shared - default template test for generating MultiSelectionPopUp for add new notification', function () {
  var tree = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_index.default, {
    multiSelectionPopUpData: multiSelectionPopUpData,
    dropDownKeyLabel1: 'ktype',
    dropDownKeyLabel2: 'kactivity',
    dropDownKeyLabel3: 'kassignees',
    componentTitle: 'Add New Notification',
    multiSelectionTitle: 'Assignees',
    multiSelectionData: getSortedUsersData
  })).toJSON();

  expect(tree).toMatchSnapshot();
});
it('Gizmo shared - default template test for generating MultiSelectionPopUp for editing existing notification', function () {
  var tree = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_index.default, {
    multiSelectionPopUpData: multiSelectionPopUpData,
    dropDownKeyLabel1: 'ktype',
    dropDownKeyLabel2: 'kactivity',
    dropDownKeyLabel3: 'kassignees',
    componentTitle: 'Edit Notification',
    multiSelectionTitle: 'Assignees',
    multiSelectionData: getSortedUsersData,
    existingData: _mock.notificationsListMock,
    isDisabledFirstSelection: true,
    isDisabledSecondSelection: true,
    editSelectedData: {
      type: _mock.notificationsListMock.notifications[0].type,
      activity: _mock.notificationsListMock.notifications[0].activity,
      users: _mock.notificationsListMock.notifications[0].users
    }
  })).toJSON();

  expect(tree).toMatchSnapshot();
});