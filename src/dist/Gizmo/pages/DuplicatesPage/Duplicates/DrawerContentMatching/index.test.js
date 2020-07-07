"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _mock = require("./mock");

var _index = _interopRequireDefault(require("./index"));

it('Gizmo shared - DrawerContentMatching - job matching', function () {
  var tree = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_index.default, {
    page: 1,
    setPage: function setPage() {},
    reasons: _mock.reasonMatchingMock,
    decisions: _mock.mockMatchingDecisions,
    rowId: '1234',
    updateDecisions: function updateDecisions() {},
    fetchNextCluster: function fetchNextCluster() {},
    entitiesArray: [],
    leData: {},
    saveTask: function saveTask() {},
    showSendToSupervisor: true,
    le_isDeleted: false,
    re_isDeleted: false,
    jobTypeConfiguration: _mock.mockMatchingTaskConfiguration
  })).toJSON();

  expect(tree).toMatchSnapshot();
});