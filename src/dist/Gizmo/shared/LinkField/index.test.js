"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _index = _interopRequireDefault(require("./index"));

it('gizmo shared - LinkField', function () {
  var tree = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_index.default, {
    label: 'Title',
    value: '101738591',
    url: 'http://google.com',
    isDifferentValue: false
  })).toJSON();

  expect(tree).toMatchSnapshot();
});