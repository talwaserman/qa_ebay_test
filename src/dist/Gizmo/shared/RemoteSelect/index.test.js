"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

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

it('gizmo shared - RemoteSelect', function () {
  var tree = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_index.default, {
    placeholder: 'enter search value',
    mode: 'default',
    parseDataFunction: parseDataFunction,
    baseUrl: 'http://gizmoio.vip.qa.ebay.com/category/search-paths?exactMatch=true&maxResult=20&siteId=0&term='
  })).toJSON();

  expect(tree).toMatchSnapshot();
});