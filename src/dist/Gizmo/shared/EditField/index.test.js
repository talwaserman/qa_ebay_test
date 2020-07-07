"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _index = _interopRequireDefault(require("./index"));

it('gizmo shared - EditField', function () {
  var tree = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_index.default, {
    label: 'Category',
    value: 'Mobile Phones & Communication(15032)>Mobile & Smart Phones(9355)',
    updateValue: function updateValue() {},
    isChanged: false,
    isDifferentValue: false,
    modalTitle: 'modal title", "the title of the modal',
    modalContent: /*#__PURE__*/_react.default.createElement("div", null, "this is the modal component")
  })).toJSON();

  expect(tree).toMatchSnapshot();
});