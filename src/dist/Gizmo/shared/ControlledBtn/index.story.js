"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonViewport = require("@storybook/addon-viewport");

var _addonInfo = require("@storybook/addon-info");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

require("../../../../../.storybook/global-style.less");

var _index = _interopRequireDefault(require("./index"));

(0, _react2.storiesOf)('Gizmo/shared/ControlledBtn', module).addParameters({
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
    loading: (0, _addonKnobs.boolean)('loading', false),
    iconImage: (0, _addonKnobs.text)('iconImage', ''),
    btnText: (0, _addonKnobs.text)('btnText', 'click me'),
    loadingDelay: (0, _addonKnobs.number)('loadingDelay', 1000),
    onClickHandler: (0, _addonActions.action)('clicked example button'),
    isDisabled: (0, _addonKnobs.boolean)('isDisabled', false)
  }));
}, {
  notes: 'controlled button - customized button that can show loading indication on click events'
});