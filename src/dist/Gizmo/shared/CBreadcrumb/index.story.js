"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _index = _interopRequireDefault(require("./index"));

(0, _react2.storiesOf)('Gizmo/shared/CBreadcrumb', module).addDecorator(_addonKnobs.withKnobs).add('default', function () {
  return /*#__PURE__*/_react.default.createElement(_index.default, {
    path: (0, _addonKnobs.array)('path', ['test', 'test2', 'test3'])
  });
});