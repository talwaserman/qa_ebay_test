"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonViewport = require("@storybook/addon-viewport");

var _addonInfo = require("@storybook/addon-info");

var _addonKnobs = require("@storybook/addon-knobs");

require("../../../../../.storybook/global-style.less");

var _mock = require("../../shared/CPieChart/mock.js");

var _index = _interopRequireDefault(require("./index"));

(0, _react2.storiesOf)('Gizmo/shared/CPieChart', module).addParameters({
  viewport: {
    viewports: _addonViewport.INITIAL_VIEWPORTS
  }
}).addDecorator(_addonKnobs.withKnobs).addDecorator(_addonInfo.withInfo).add('default', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "story-wrapper",
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement(_index.default, {
    data: _mock.CpiechartDrawData,
    cx: (0, _addonKnobs.number)('cx', 300),
    cy: (0, _addonKnobs.number)('cy', 200),
    innerRadius: (0, _addonKnobs.number)('innerRadius', 60),
    outerRadius: (0, _addonKnobs.number)('outerRadius', 80),
    width: (0, _addonKnobs.number)('width', 800),
    height: (0, _addonKnobs.number)('height', 400)
  }));
}, {
  notes: 'CPieChart - Generic pie chart'
});