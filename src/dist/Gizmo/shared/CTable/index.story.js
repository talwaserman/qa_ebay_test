"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonViewport = require("@storybook/addon-viewport");

var _addonInfo = require("@storybook/addon-info");

var _addonKnobs = require("@storybook/addon-knobs");

require("../../../../../.storybook/global-style.less");

var _index = _interopRequireDefault(require("./index"));

var columnConfig = [{
  title: 'Name',
  dataIndex: 'name',
  filterType: 'single-select'
}, {
  title: 'Age',
  dataIndex: 'age',
  filterType: 'text'
}, {
  title: 'Address',
  dataIndex: 'address',
  filterType: 'text'
}];

function filterData(filters, orderBy, orderType, currentPage) {
  var filterArray = Object.keys(filters).map(function (key) {
    return filters[key];
  });
  var dataObj = {
    dataFilterContracts: filterArray,
    orderBy: orderBy || '',
    orderType: orderType || 'DESC',
    pageNumber: currentPage || 1
  };
  return dataObj;
}

function extractData(res) {
  return res.redirectHeaderContracts;
}

(0, _react2.storiesOf)('Gizmo/shared/CTable', module).addParameters({
  viewport: {
    viewports: _addonViewport.INITIAL_VIEWPORTS
  }
}).addDecorator(_addonKnobs.withKnobs).addDecorator(_addonInfo.withInfo).add('default with checkbox', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "story-wrapper",
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement(_index.default, {
    columnConfig: columnConfig,
    fetchData: function fetchData() {},
    initialOrderBy: 'scope' //TODO remove this..,
    ,
    tableSize: 'small',
    checkboxData: {},
    setCheckBoxData: function setCheckBoxData() {},
    filterData: filterData,
    extractData: extractData,
    doubleClickCB: function doubleClickCB() {},
    sessionStorageIdentifier: 'ctable'
  }));
}, {
  notes: 'CTable - Custom table with server side fetching, that support several types of filters that can be extended'
});
(0, _react2.storiesOf)('Gizmo/shared/CTable', module).addParameters({
  viewport: {
    viewports: _addonViewport.INITIAL_VIEWPORTS
  }
}).addDecorator(_addonKnobs.withKnobs).addDecorator(_addonInfo.withInfo).add('default without checkbox', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "story-wrapper",
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement(_index.default, {
    columnConfig: columnConfig,
    fetchData: function fetchData() {},
    initialOrderBy: 'scope' //TODO remove this..,
    ,
    tableSize: 'small',
    filterData: filterData,
    extractData: extractData,
    sessionStorageIdentifier: 'ctable'
  }));
}, {
  notes: 'CTable - Custom table with server side fetching, that support several types of filters that can be extended'
});