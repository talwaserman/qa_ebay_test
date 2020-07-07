"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _index = _interopRequireDefault(require("./index"));

var options = [{
  title: 'Not Found',
  value: 'NF'
}, {
  title: 'Not Applicable',
  value: 'NA'
}];
var title = 'Delete reason';
it('Gizmo shared - ReasonSelect', function () {
  var tree = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_index.default, {
    options: options,
    selectReason: function selectReason(value) {
      alert(value);
    },
    title: title
  })).toJSON();

  expect(tree).toMatchSnapshot();
});