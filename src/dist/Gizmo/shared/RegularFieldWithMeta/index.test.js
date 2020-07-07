"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _index = _interopRequireDefault(require("./index"));

it('gizmo shared - RegularField with Metadata', function () {
  var tree = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_index.default, {
    label: 'Title',
    value: '101738591',
    isDifferentValue: false,
    metadata: {
      mandatoryOnProduct: true,
      multiValue: true,
      umsAlignedAspect: true,
      aspectTypes: ['REQUIREDHARD', 'REQUIRED'],
      umsValues: []
    }
  })).toJSON();

  expect(tree).toMatchSnapshot();
});