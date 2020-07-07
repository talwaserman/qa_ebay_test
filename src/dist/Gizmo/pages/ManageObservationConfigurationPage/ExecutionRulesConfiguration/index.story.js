"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonViewport = require("@storybook/addon-viewport");

var _addonInfo = require("@storybook/addon-info");

var _addonKnobs = require("@storybook/addon-knobs");

require("../../../../../../.storybook/global-style.less");

var _index = _interopRequireDefault(require("./index"));

var configurationOptions = {
  executionRulesConfigurationContracts: [{
    rowId: '5ea19d4a115793460471380a',
    name: 'ExecutionRuleUpdate'
  }, {
    rowId: '5ea19d4a115793460471380b',
    name: 'executionRuleUpdate2'
  }, {
    rowId: '5ea163191157934244367df9',
    name: 'example'
  }, {
    rowId: '5ea163191157934244367dc9',
    name: 'example4'
  }]
};
(0, _react2.storiesOf)('Gizmo/pages/ManageObservationConfigurationPage/ExecutionRulesConfiguration', module).addParameters({
  viewport: {
    viewports: _addonViewport.INITIAL_VIEWPORTS
  }
}).addDecorator(_addonKnobs.withKnobs).addDecorator(_addonInfo.withInfo).add('default', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement(_index.default, {
    tableData: configurationOptions.executionRulesConfigurationContracts,
    loadingData: false,
    onClickTableRow: function onClickTableRow() {},
    reloadTableData: function reloadTableData() {}
  }));
}, {
  notes: 'ExecutionRulesConfiguration - table define the configuration options'
});