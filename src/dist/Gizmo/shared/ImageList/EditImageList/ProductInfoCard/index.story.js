"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonViewport = require("@storybook/addon-viewport");

var _addonInfo = require("@storybook/addon-info");

var _addonKnobs = require("@storybook/addon-knobs");

require("../../../../../../../.storybook/global-style.less");

var _index = _interopRequireDefault(require("./index"));

var productDataMock = {
  category: 'cats & cartoons (15032)>Smart',
  title: 'Cat for sale',
  brand: 'Grafild',
  color: 'Orange'
};
var imagesMock = [{
  imageUrl: 'https://www.denverpost.com/wp-content/uploads/2016/05/20120419__20120422_E1_AE22SCPIRATESp1.jpg?w=600'
}, {
  imageUrl: 'https://images-eu.ssl-images-amazon.com/images/I/811KEbZlORL.png'
}, {
  imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0d/Simpsons_FamilyPicture.png/220px-Simpsons_FamilyPicture.png'
}];
(0, _react2.storiesOf)('Gizmo/shared/ImageList/EditImageList/ProductInfoCard', module).addParameters({
  viewport: {
    viewports: _addonViewport.INITIAL_VIEWPORTS
  }
}).addDecorator(_addonKnobs.withKnobs).addDecorator(_addonInfo.withInfo).add('default', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "story-wrapper",
    style: {
      margin: '0 auto',
      width: '16%',
      height: '418px'
    }
  }, /*#__PURE__*/_react.default.createElement(_index.default, {
    productData: productDataMock,
    productImages: imagesMock
  }));
}, {
  notes: 'ProductInfoCard - prdouct info component'
});