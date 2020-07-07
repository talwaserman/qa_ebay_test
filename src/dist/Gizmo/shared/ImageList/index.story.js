"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonViewport = require("@storybook/addon-viewport");

var _addonInfo = require("@storybook/addon-info");

var _addonKnobs = require("@storybook/addon-knobs");

var _mock = require("./EditImageList/mock");

require("../../../../../.storybook/global-style.less");

var _index = _interopRequireDefault(require("./index"));

var images = _mock.imageListMock;
var suggestedImages = _mock.suggestedimageListMock;
(0, _react2.storiesOf)('Gizmo/shared/ImageList', module).addParameters({
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
    imageList: images,
    isChanged: (0, _addonKnobs.boolean)('isChanged', false),
    isDifferentValue: (0, _addonKnobs.boolean)('isDifferentValue', false),
    suggestedImagesData: suggestedImages,
    productData: _mock.productDataMock,
    isEditable: (0, _addonKnobs.boolean)('isEditable', true),
    handleSelectedImages: function handleSelectedImages() {}
  }));
}, {
  notes: 'ImageList - used to display the list of images for product or item'
});