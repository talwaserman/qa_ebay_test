"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _index = _interopRequireDefault(require("./index"));

it('SingleTextInput - SingleTextInput when currentData is empty', function () {
  var tree = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_index.default, {
    inputLabel: 'testLabel',
    currentInputData: {
      name: null,
      rowId: null
    }
  })).toJSON();

  expect(tree).toMatchSnapshot();
});
it('SingleTextInput - SingleTextInput when currentData is with Data', function () {
  var tree = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_index.default, {
    inputLabel: 'testLabel',
    currentInputData: {
      name: 'name1',
      rowId: 'rowId1'
    }
  })).toJSON();

  expect(tree).toMatchSnapshot();
});