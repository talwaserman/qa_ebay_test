"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _addonActions = require("@storybook/addon-actions");

require("../../../../../.storybook/global-style.less");

var _index = _interopRequireDefault(require("./index"));

var typeOptions = ['primary', 'dashed', 'danger'];
var sizeOptions = ['small', 'large'];
(0, _react2.storiesOf)('AntD/General', module).addParameters({
  info: {
    text: 'AntD Button'
  }
}).add('Button', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "story-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_index.default, {
    onClick: (0, _addonActions.action)('clicked example button'),
    type: (0, _addonKnobs.select)('type', typeOptions, 'primary'),
    size: (0, _addonKnobs.select)('size', sizeOptions, 'small'),
    loading: (0, _addonKnobs.boolean)('Loading', false)
  }, (0, _addonKnobs.text)('content', 'AntD button')));
}, {
  notes: 'Here we can add notes for the use of this component'
});