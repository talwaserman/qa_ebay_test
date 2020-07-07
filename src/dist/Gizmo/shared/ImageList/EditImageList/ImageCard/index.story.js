"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonViewport = require("@storybook/addon-viewport");

var _addonInfo = require("@storybook/addon-info");

var _addonKnobs = require("@storybook/addon-knobs");

require("../../../../../../../.storybook/global-style.less");

var _index = _interopRequireDefault(require("./index"));

var imageDataMock = {
  imageUrl: 'https://www.denverpost.com/wp-content/uploads/2016/05/20120419__20120422_E1_AE22SCPIRATESp1.jpg?w=600',
  copyright: '1',
  subcopyright: null,
  imageSizeContract: {
    widthSize: 1000,
    heightSize: 1000
  },
  imageDecisionContract: {
    rejectReasons: ['Background', 'Box'],
    action: ''
  }
};
(0, _react2.storiesOf)('Gizmo/shared/ImageList/EditImageList/ImageCard', module).addParameters({
  viewport: {
    viewports: _addonViewport.INITIAL_VIEWPORTS
  }
}).addDecorator(_addonKnobs.withKnobs).addDecorator(_addonInfo.withInfo).add('default', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "story-wrapper",
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement(_index.default, {
    imageData: imageDataMock,
    changePosition: function changePosition() {},
    index: 0,
    arraySize: 1,
    updateRejectReasons: function updateRejectReasons(index, selectedReasons) {
      return updateSelectedReasons(index, selectedReasons);
    }
  }));
}, {
  notes: 'ImageCard - card image component'
});

function updateSelectedReasons(index, selectedReasons) {
  imageDataMock.imageDecisionContract.rejectReasons = selectedReasons;
}