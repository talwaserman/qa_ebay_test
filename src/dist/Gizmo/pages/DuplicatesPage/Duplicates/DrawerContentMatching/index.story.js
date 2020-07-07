"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonViewport = require("@storybook/addon-viewport");

var _addonInfo = require("@storybook/addon-info");

var _addonKnobs = require("@storybook/addon-knobs");

var _mock = require("./mock");

var _index = _interopRequireDefault(require("./index"));

(0, _react2.storiesOf)('Gizmo/pages/Duplicates/DrawerContentMatching', module).addParameters({
  viewport: {
    viewports: _addonViewport.INITIAL_VIEWPORTS
  }
}).addDecorator(_addonKnobs.withKnobs).addDecorator(_addonInfo.withInfo).add('drawer content with mataching data', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement(_index.default, {
    page: 1,
    setPage: function setPage() {},
    reasons: _mock.reasonMatchingMock,
    decisions: _mock.mockMatchingDecisions,
    rowId: '1234',
    updateDecisions: function updateDecisions() {},
    fetchNextCluster: function fetchNextCluster() {},
    vArray: [],
    sData: {},
    saveTask: function saveTask() {},
    showSendToSupervisor: true,
    s_isDeleted: false,
    v_isDeleted: false,
    jobType: 'matching',
    jobTypeConfiguration: _mock.mockMatchingTaskConfiguration,
    entitiesArray: []
  }));
}, {
  notes: 'DrawerContentMatching - drawer content for Matching page Decision section'
});