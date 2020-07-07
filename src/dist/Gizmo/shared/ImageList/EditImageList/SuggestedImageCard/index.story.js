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
  imageUrl: 'https://tvseriesfinale.com/wp-content/uploads/2018/09/FamilyGuy_FamilyJump_2019_R6Flat_hires2-588x400.jpg',
  copyright: '1',
  subcopyright: null,
  imageSizeContract: {
    widthSize: 150,
    heightSize: 221
  },
  imageDecisionContract: {
    rejectReasons: ['Background', 'Box'],
    action: 'DELETED'
  }
};
(0, _react2.storiesOf)('Gizmo/shared/ImageList/EditImageList/SuggestedImageCard', module).addParameters({
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
    index: 0,
    moveImageToNonDeleted: function moveImageToNonDeleted() {},
    updateRejectReasons: function updateRejectReasons(index, selectedReasons) {
      return updateSelectedReasons(index, selectedReasons);
    }
  }));
}, {
  notes: 'SuggestedImageCard - card image component for suggested images'
});

function updateSelectedReasons(index, selectedReasons) {
  imageDataMock.imageDecisionContract.rejectReasons = selectedReasons;
}