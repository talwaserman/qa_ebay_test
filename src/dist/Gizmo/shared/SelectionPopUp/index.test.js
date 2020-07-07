"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _index = _interopRequireDefault(require("./index"));

var dropDownValuesArray = [{
  taskId: '5e4e494c0fc8aff358ab6fd9',
  name: 'racheli test'
}, {
  taskId: '5e4e517e9d0d0f42544102d7',
  name: 'racheli test 2'
}];
it('Gizmo shared - SelectionPopUp', function () {
  var tree = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_index.default, {
    dropDownValuesArray: dropDownValuesArray,
    selectPlaceHolder: 'Configuration',
    inputLabel: 'Task Name',
    dropDownKeyLabel: 'taskId',
    setSelectionPopData: function setSelectionPopData() {},
    onClickHandler: function onClickHandler() {},
    handleClose: function handleClose() {}
  })).toJSON();

  expect(tree).toMatchSnapshot();
});