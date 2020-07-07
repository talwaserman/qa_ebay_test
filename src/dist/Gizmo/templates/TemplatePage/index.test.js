"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _context = require("./context");

var _index = _interopRequireDefault(require("./index"));

// test component rendering with different props
it('Gizmo shared - TemplatePage', function () {
  var tree = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_index.default, null)).toJSON();

  expect(tree).toMatchSnapshot();
}); // test reducer actions

it('Gizmo shared - TemplatePage - action add with valid value', function () {
  var todoList = ['buy dinner', 'run 5 km', 'finish work'];

  var updatedList = _context.actions.add(todoList, 'new value');

  var test = updatedList.length === 4 && updatedList.includes('new value');
  expect(test).toEqual(true);
});
it('Gizmo shared - TemplatePage - action add with invalid value', function () {
  var todoList = ['buy dinner', 'run 5 km', 'finish work'];

  var updatedList = _context.actions.add(todoList, '');

  var test = updatedList.length === 3 && !updatedList.includes('');
  expect(test).toEqual(true);
});