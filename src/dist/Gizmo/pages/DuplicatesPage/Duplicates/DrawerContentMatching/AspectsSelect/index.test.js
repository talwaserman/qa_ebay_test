"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _index = _interopRequireDefault(require("./index"));

it('Gizmo shared - AspectsSelect', function () {
  var tree = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_index.default, {
    aspectsNames: ['Brand', 'Mpn', 'Gtin', 'Color'],
    defaultValue: ['Brand', 'Mpn'],
    updateAspectsNames: function updateAspectsNames() {},
    placeHolder: 'select aspect name'
  })).toJSON();

  expect(tree).toMatchSnapshot();
});