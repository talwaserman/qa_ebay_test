"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonViewport = require("@storybook/addon-viewport");

var _addonInfo = require("@storybook/addon-info");

var _addonKnobs = require("@storybook/addon-knobs");

require("../../../../../.storybook/global-style.less");

var _index = _interopRequireDefault(require("./index"));

function parseDataFunction(res) {
  var optionsArray = [];
  res.categoryPaths.forEach(function (item) {
    var tempItem = '';
    item.forEach(function (arrayItem) {
      tempItem += "".concat(arrayItem.categoryContract.name, "(").concat(arrayItem.categoryContract.id, ")>");
    });
    optionsArray.push({
      text: tempItem.slice(0, -1),
      value: tempItem.slice(0, -1)
    });
  });
  return optionsArray;
}

(0, _react2.storiesOf)('Gizmo/shared/RemoteSelect', module).addParameters({
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
    placeholder: 'enter search value',
    mode: 'default',
    parseDataFunction: parseDataFunction,
    baseUrl: 'http://gizmoio.vip.qa.ebay.com/category/search-paths?exactMatch=true&maxResult=20&siteId=0&term='
  }));
}, {
  notes: 'RemoteSelect - select that fetch data from an api based on user input'
});