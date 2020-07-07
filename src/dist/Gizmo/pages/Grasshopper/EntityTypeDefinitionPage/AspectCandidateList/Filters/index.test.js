"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _index = _interopRequireDefault(require("./index"));

var initialValues = ['added'];
it('Gizmo grasshopper - Filters in candidate list', function () {
  var tree = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_index.default, {
    initialValues: initialValues
  })).toJSON();

  expect(tree).toMatchSnapshot();
});