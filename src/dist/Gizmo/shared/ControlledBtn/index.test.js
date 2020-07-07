"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _index = _interopRequireDefault(require("./index"));

it('gizmo shared - ControlledBtn - not loading', function () {
  var tree = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_index.default, {
    loading: false,
    iconImage: '',
    btnText: 'click me',
    loadingDelay: 1000,
    onClickHandler: function onClickHandler() {},
    isDisabled: false
  })).toJSON();

  expect(tree).toMatchSnapshot();
});
it('gizmo shared - ControlledBtn - loading', function () {
  var tree = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_index.default, {
    loading: true,
    iconImage: '',
    btnText: 'click me',
    loadingDelay: 1000,
    onClickHandler: function onClickHandler() {},
    isDisabled: false
  })).toJSON();

  expect(tree).toMatchSnapshot();
});
it('gizmo shared - ControlledBtn - disabled', function () {
  var tree = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_index.default, {
    loading: false,
    iconImage: '',
    btnText: 'click me',
    loadingDelay: 1000,
    onClickHandler: function onClickHandler() {},
    isDisabled: true
  })).toJSON();

  expect(tree).toMatchSnapshot();
});
it('gizmo shared - ControlledBtn - with no loading delay', function () {
  var tree = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_index.default, {
    loading: false,
    iconImage: '',
    btnText: 'click me',
    onClickHandler: function onClickHandler() {},
    isDisabled: false
  })).toJSON();

  expect(tree).toMatchSnapshot();
});