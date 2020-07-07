"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _mock = require("../mock");

var _index = _interopRequireDefault(require("./index"));

it('Gizmo shared - Additionl Aspect Select when jobType Duplicates and item is FreeText', function () {
  var tree = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_index.default, {
    jobTypeConfiguration: _mock.mockDuplicateTaskConfiguration,
    changedInfoItem: function changedInfoItem() {},
    itemIndex: 1,
    isManadatory: '',
    style: {
      width: '200px'
    },
    infoItem: {
      name: 'Mandatory Field 2',
      value: null,
      mandatory: false
    },
    defaultValue: ''
  })).toJSON();

  expect(tree).toMatchSnapshot();
});
it('Gizmo shared - Additionl Aspect Select when jobType Duplicates and item is DropDown', function () {
  var tree = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_index.default, {
    jobTypeConfiguration: _mock.mockDuplicateTaskConfiguration,
    changedInfoItem: function changedInfoItem() {},
    itemIndex: 1,
    isManadatory: '',
    style: {
      width: '200px'
    },
    infoItem: {
      name: 'Mandatory Field 1',
      value: null,
      mandatory: false
    }
  })).toJSON();

  expect(tree).toMatchSnapshot();
});
it('Gizmo shared - Additionl Aspect Select when jobType Matching and item is DropDown', function () {
  var tree = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_index.default, {
    jobTypeConfiguration: _mock.mockMatchingTaskConfiguration,
    changedInfoItem: function changedInfoItem() {},
    itemIndex: 1,
    isManadatory: '',
    style: {
      width: '200px'
    },
    infoItem: {
      name: 'info2',
      value: null,
      mandatory: true
    }
  })).toJSON();

  expect(tree).toMatchSnapshot();
});
it('Gizmo shared - Additionl Aspect Select when jobType Matching and item is freeText', function () {
  var tree = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_index.default, {
    jobTypeConfiguration: _mock.mockMatchingTaskConfiguration,
    changedInfoItem: function changedInfoItem() {},
    itemIndex: 1,
    isManadatory: '',
    style: {
      width: '200px'
    },
    infoItem: {
      name: 'info1',
      value: null,
      mandatory: true
    }
  })).toJSON();

  expect(tree).toMatchSnapshot();
});