"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonViewport = require("@storybook/addon-viewport");

var _addonInfo = require("@storybook/addon-info");

var _addonKnobs = require("@storybook/addon-knobs");

var _context = require("../context");

require("../../../../../../.storybook/global-style.less");

var _index = _interopRequireDefault(require("./index"));

(0, _react2.storiesOf)('Gizmo/templates/TemplatePage/ChildC', module).addParameters({
  viewport: {
    viewports: _addonViewport.INITIAL_VIEWPORTS
  }
}).addDecorator(_addonKnobs.withKnobs).addDecorator(_addonInfo.withInfo).add('default', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "story-wrapper",
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement(_context.PageContextProvider, null, /*#__PURE__*/_react.default.createElement(_index.default, null)));
}, {
  notes: 'ChildC - a component inside page component, not using a context state'
});