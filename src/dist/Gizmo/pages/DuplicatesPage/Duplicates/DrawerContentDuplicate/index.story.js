"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonViewport = require("@storybook/addon-viewport");

var _addonInfo = require("@storybook/addon-info");

var _addonKnobs = require("@storybook/addon-knobs");

var _mockDuplicates = require("../mockDuplicates.mock");

var _mock = require("./mock");

var _index = _interopRequireDefault(require("./index"));

(0, _react2.storiesOf)('Gizmo/pages/Duplicates/DrawerContentDuplicate', module).addParameters({
  viewport: {
    viewports: _addonViewport.INITIAL_VIEWPORTS
  }
}).addDecorator(_addonKnobs.withKnobs).addDecorator(_addonInfo.withInfo).add('default', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement(_index.default, {
    page: 1,
    setPage: function setPage() {},
    reasons: _mock.reasonDuplicateMock,
    decisions: _mock.mockDuplicateDecisions,
    shouldMakeObservation: false,
    rowId: '1234',
    updateDecisions: function updateDecisions() {},
    fetchNextCluster: function fetchNextCluster() {},
    entitiesArray: [],
    leData: {},
    saveTask: function saveTask() {},
    showSendToSupervisor: true,
    observationOptions: ['a', 'b', 'c'],
    jobTypeConfiguration: _mockDuplicates.mockConfigurationAllEnabled,
    productIndicationSelectValues: ['Victim', 'Survivor', 'Both']
  }));
}, {
  notes: 'DrawerContentDuplicate - drawer content for duplicate page Decision section'
}).add('with observations', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement(_index.default, {
    page: 1,
    setPage: function setPage() {},
    reasons: _mock.reasonDuplicateMock,
    shouldMakeObservation: true,
    decisions: _mock.mockDuplicateDecisions,
    rowId: '1234',
    updateDecisions: function updateDecisions() {},
    fetchNextCluster: function fetchNextCluster() {},
    entitiesArray: [],
    leData: {},
    saveTask: function saveTask() {},
    showSendToSupervisor: true,
    observationOptions: ['a', 'b', 'c'],
    jobTypeConfiguration: _mockDuplicates.mockConfigurationAllEnabled
  }));
}, {
  notes: 'DrawerContentDuplicate - drawer content for Duplicate page Decision section'
});