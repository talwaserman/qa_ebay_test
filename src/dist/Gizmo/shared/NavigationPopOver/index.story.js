"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonViewport = require("@storybook/addon-viewport");

var _addonInfo = require("@storybook/addon-info");

var _addonKnobs = require("@storybook/addon-knobs");

require("../../../../../.storybook/global-style.less");

var _index = _interopRequireDefault(require("./index"));

var mockData = [{
  label: 1,
  color: '#ffc7b3'
}, {
  label: 2,
  color: '#dbff98'
}, {
  label: 3,
  color: '#dbff98'
}, {
  label: 4,
  color: 'white'
}, {
  label: 5,
  color: '#dbff98'
}, {
  label: 6,
  color: 'white'
}, {
  label: 7,
  color: '#ffc7b3'
}, {
  label: 8,
  color: '#ededed'
}, {
  label: 9,
  color: '#ededed'
}];
var indexing = [{
  value: '',
  toolTip: 'Duplicate',
  color: '#ffc7b3',
  textEffect: ''
}, {
  value: '',
  toolTip: 'Not a Duplicate',
  color: '#dbff98',
  textEffect: ''
}, {
  value: '',
  toolTip: 'Skip',
  color: '#ededed',
  textEffect: ''
}, {
  value: '10',
  toolTip: 'Deleted',
  color: 'white',
  textEffect: 'line-through'
}, {
  value: '10',
  toolTip: 'Curated',
  color: 'white',
  textEffect: ''
}];
(0, _react2.storiesOf)('Gizmo/shared/NavigationPopOver', module).addParameters({
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
    data: mockData,
    indexing: indexing,
    itemsInRow: 6,
    currentPage: 1,
    totalPages: mockData.length
  }));
}, {
  notes: 'NavigationPopOver - for paging, navigation and index within a popup'
});