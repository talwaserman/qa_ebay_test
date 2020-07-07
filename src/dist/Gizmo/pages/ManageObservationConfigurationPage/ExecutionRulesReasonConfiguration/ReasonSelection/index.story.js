"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonViewport = require("@storybook/addon-viewport");

var _addonInfo = require("@storybook/addon-info");

var _addonKnobs = require("@storybook/addon-knobs");

require("../../../../../../../.storybook/global-style.less");

var _ = _interopRequireDefault(require("."));

(0, _react2.storiesOf)('Gizmo/shared/ReasonSelection', module).addParameters({
  viewport: {
    viewports: _addonViewport.INITIAL_VIEWPORTS
  }
}).addDecorator(_addonKnobs.withKnobs).addDecorator(_addonInfo.withInfo).add('default', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    select1Label: 'Label 1',
    input2Label: 'Label 2',
    input3Label: 'Label 3',
    handleModalChange: function handleModalChange() {},
    currentInputData: '',
    selectCloseListValues: [{
      name: 'name 1',
      value: 'value 1'
    }, {
      name: 'name 2',
      value: 'value 2'
    }]
  }));
}, {
  notes: 'ReasonSelection - component for selecting Rule Reason'
});