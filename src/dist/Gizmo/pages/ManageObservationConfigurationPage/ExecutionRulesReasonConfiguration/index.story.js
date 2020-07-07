"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonViewport = require("@storybook/addon-viewport");

var _addonInfo = require("@storybook/addon-info");

var _addonKnobs = require("@storybook/addon-knobs");

require("../../../../../../.storybook/global-style.less");

var _ = _interopRequireDefault(require("."));

var tableData = {
  reasonCodeContracts: [{
    decision: 'DUPLICATES',
    reason: 'reason1'
  }, {
    decision: 'DUPLICATES',
    reason: 'reason',
    explanation: 'explanation'
  }, {
    decision: 'NON_DUPLICATES',
    reason: 'reason3'
  }, {
    decision: 'SKIP',
    reason: 'reason4'
  }]
};
var rowChosenData = {
  rowId: '5ea19d4a115793460471380a',
  name: 'ExecutionRuleUpdate'
};
(0, _react2.storiesOf)('Gizmo/pages/ManageObservationConfigurationPage/ExecutionRulesReasonConfiguration', module).addParameters({
  viewport: {
    viewports: _addonViewport.INITIAL_VIEWPORTS
  }
}).addDecorator(_addonKnobs.withKnobs).addDecorator(_addonInfo.withInfo).add('default', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    tableData: tableData.reasonCodeContracts,
    loadingData: false,
    rowChosenData: rowChosenData,
    reloadTableData: function reloadTableData() {}
  }));
}, {
  notes: 'ExecutionRulesReasonConfiguration - table define the rules reasons for each choosen configuration'
});