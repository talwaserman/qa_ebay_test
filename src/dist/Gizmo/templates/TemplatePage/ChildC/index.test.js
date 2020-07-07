"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _context = require("../context");

var _index = _interopRequireDefault(require("./index"));

it('Gizmo shared - ChildC', function () {
  var tree = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_context.PageContextProvider, null, /*#__PURE__*/_react.default.createElement(_index.default, null))).toJSON();

  expect(tree).toMatchSnapshot();
});