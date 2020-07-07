"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _addonKnobs = require("@storybook/addon-knobs");

var _mock = require("../../shared/CPieChart/mock.js");

var _index = _interopRequireDefault(require("./index"));

it('gizmo shared - CPieChart', function () {
  var tree = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_index.default, {
    data: _mock.CpiechartDrawData,
    cx: (0, _addonKnobs.number)('cx', 300),
    cy: (0, _addonKnobs.number)('cy', 200),
    innerRadius: (0, _addonKnobs.number)('innerRadius', 60),
    outerRadius: (0, _addonKnobs.number)('outerRadius', 80),
    width: (0, _addonKnobs.number)('width', 800),
    height: (0, _addonKnobs.number)('height', 400)
  })).toJSON();

  expect(tree).toMatchSnapshot();
});