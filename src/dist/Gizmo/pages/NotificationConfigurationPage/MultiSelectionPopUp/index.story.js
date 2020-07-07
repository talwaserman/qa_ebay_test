"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _sortBy = _interopRequireDefault(require("lodash/sortBy"));

var _get = _interopRequireDefault(require("lodash/get"));

var _cloneDeep = _interopRequireDefault(require("lodash/cloneDeep"));

var _addonViewport = require("@storybook/addon-viewport");

var _addonInfo = require("@storybook/addon-info");

var _addonKnobs = require("@storybook/addon-knobs");

require("../../../../../../.storybook/global-style.less");

var _services = require("../services");

var _index = _interopRequireDefault(require("../index"));

var mockTableData = [{
  type: 'externalTask',
  activity: 'activity ended',
  users: [{
    id: 'userId',
    display: 'BigBoss'
  }, {
    id: 'userId3',
    display: 'Mister Corona'
  }]
}, {
  type: 'curation',
  activity: 'activity1 ended',
  users: [{
    id: 'userId',
    display: 'BigBoss'
  }, {
    id: 'userId3',
    display: 'Mister Corona'
  }]
}, {
  type: 'valueApproval',
  activity: 'activity2 ended',
  users: [{
    id: 'userId',
    display: 'Admin2'
  }, {
    id: '5745aa02437fd1caebf2309b',
    display: 'Admin1'
  }]
}];
var multiSelectionPopUpData = {
  placeHolder1: 'Type',
  placeHolder2: 'Activity',
  placeHolder3: 'Assignees',
  selectionData: {
    typeToActivities: {
      'PRP Feedback': ['new feedback'],
      Duplicate: ['new external task', 'new external task2']
    }
  }
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

(0, _react2.storiesOf)('Gizmo/pages/NotificationConfigurationPage/MultiSelectionPopUp', module).addParameters({
  viewport: {
    viewports: _addonViewport.INITIAL_VIEWPORTS
  }
}).addDecorator(_addonKnobs.withKnobs).addDecorator(_addonInfo.withInfo).add('add configuration', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement(_index.default, {
    multiSelectionPopUpData: multiSelectionPopUpData,
    dropDownKeyLabel1: 'ktype',
    dropDownKeyLabel2: 'kactivity',
    dropDownKeyLabel3: 'kassignees',
    multiSelectionTitle: 'Assignees',
    multiSelectionData: getSortedUsersData,
    existingData: [],
    editSelectedData: {
      type: null,
      activity: null,
      users: []
    }
  }));
}, {
  notes: 'MultiSelectionPopUp - for creating new two dropdowns with multi selection'
});
(0, _react2.storiesOf)('Gizmo/pages/NotificationConfigurationPage/MultiSelectionPopUp', module).addParameters({
  viewport: {
    viewports: _addonViewport.INITIAL_VIEWPORTS
  }
}).addDecorator(_addonKnobs.withKnobs).addDecorator(_addonInfo.withInfo).add('edit configuration', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement(_index.default, {
    multiSelectionPopUpData: multiSelectionPopUpData,
    dropDownKeyLabel1: 'ktype',
    dropDownKeyLabel2: 'kactivity',
    dropDownKeyLabel3: 'kassignees',
    componentTitle: 'Edit Notification',
    multiSelectionTitle: 'Assignees',
    multiSelectionData: getSortedUsersData,
    existingData: mockTableData,
    isDisabledFirstSelection: true,
    isDisabledSecondSelection: true,
    editSelectedData: {
      type: mockTableData[0].type,
      activity: mockTableData[0].activity,
      users: mockTableData[0].users
    }
  }));
}, {
  notes: 'MultiSelectionPopUp - for editing multi selection only while keeping selections dropdown with choosed value'
});