"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _index = _interopRequireDefault(require("./index"));

var imageDataMock = {
  imageUrl: 'https://www.denverpost.com/wp-content/uploads/2016/05/20120419__20120422_E1_AE22SCPIRATESp1.jpg?w=600',
  imageSizeContract: {
    heightSize: 221,
    widthSize: 150
  },
  imageDecisionContract: {
    rejectReasons: [],
    action: ''
  },
  copyright: '1',
  subcopyright: null
};
it('gizmo shared - ImageCard', function () {
  var tree = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_index.default, {
    imageData: imageDataMock,
    changePosition: function changePosition() {},
    index: 0,
    arraySize: 1,
    updateRejectReasons: function updateRejectReasons() {}
  })).toJSON();

  expect(tree).toMatchSnapshot();
});