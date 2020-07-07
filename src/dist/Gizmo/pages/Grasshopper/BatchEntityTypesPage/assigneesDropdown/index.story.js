"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonViewport = require("@storybook/addon-viewport");

var _addonInfo = require("@storybook/addon-info");

var _addonKnobs = require("@storybook/addon-knobs");

var _mock = require("../mock");

var _index = _interopRequireDefault(require("./index"));

require("../../../../../../../.storybook/global-style.less");

(0, _react2.storiesOf)('Gizmo/Pages/Grasshopper/BatchEntityTypesPage/AssigneesDropDown', module).addParameters({
  viewport: {
    viewports: _addonViewport.INITIAL_VIEWPORTS
  }
}).addDecorator(_addonKnobs.withKnobs).addDecorator(_addonInfo.withInfo).add('default', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '400px',
      margin: '0 auto',
      marginTop: '200px'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement(_index.default, {
    loggedUserData: _mock.mockAgent,
    currentAssigneeData: _mock.assignRowResponseMock,
    selectAssigneePlaceHolder: 'Select Assignee',
    assingeesList: _mock.getUsersResponseMock.users,
    onAssignedChanged: function onAssignedChanged() {},
    rowId: '5e94b3e79c95bfcfc44971cf'
  })));
}, {
  notes: 'AssigneesDropDown - assignees dropdown list column part of Batch Entity Types Page'
});