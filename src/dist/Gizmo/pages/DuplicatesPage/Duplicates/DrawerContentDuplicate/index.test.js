"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _mock = require("./mock");

var _index = _interopRequireDefault(require("./index"));

it('Gizmo shared - DrawerContent - job duplicates', function () {
  var tree = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_index.default, {
    page: 1,
    setPage: function setPage() {},
    reasons: _mock.reasonDuplicateMock,
    decisions: _mock.mockDuplicateDecisions,
    rowId: '1234',
    updateDecisions: function updateDecisions() {},
    fetchNextCluster: function fetchNextCluster() {},
    entitiesArray: [],
    leData: {},
    saveTask: function saveTask() {},
    showSendToSupervisor: true,
    observationOptions: ['a', 'b', 'c'],
    jobTypeConfiguration: _mock.mockDuplicateTaskConfiguration,
    showQaCheckbox: true,
    productIndicationSelectValues: ['value 1', 'value 2']
  })).toJSON();

  expect(tree).toMatchSnapshot();
});