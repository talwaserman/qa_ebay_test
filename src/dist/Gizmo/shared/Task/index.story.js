"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _index = _interopRequireDefault(require("./index"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var task = {
  id: '1',
  title: 'Test Task',
  state: 'TASK_INBOX',
  updatedAt: new Date(2018, 0, 1, 9, 0)
};
var actions = {
  onPinTask: (0, _addonActions.action)('onPinTask'),
  onArchiveTask: (0, _addonActions.action)('onArchiveTask')
};
(0, _react2.storiesOf)('Gizmo/shared/Task', module).add('default', function () {
  return /*#__PURE__*/_react.default.createElement(_index.default, (0, _extends2.default)({
    task: task
  }, actions));
}).add('pinned', function () {
  return /*#__PURE__*/_react.default.createElement(_index.default, (0, _extends2.default)({
    task: _objectSpread(_objectSpread({}, task), {}, {
      state: 'TASK_PINNED'
    })
  }, actions));
}).add('archived', function () {
  return /*#__PURE__*/_react.default.createElement(_index.default, (0, _extends2.default)({
    task: _objectSpread(_objectSpread({}, task), {}, {
      state: 'TASK_ARCHIVED'
    })
  }, actions));
});