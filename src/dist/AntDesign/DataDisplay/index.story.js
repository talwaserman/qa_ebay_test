"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

require("../../../../.storybook/global-style.less");

var _index = require("./index");

/* eslint-disable */
function callback(key) {
  console.log(key);
}

var Panel = _index.Collapse.Panel;
var dataSource = [{
  key: '1',
  name: 'Mike',
  age: 32,
  address: '10 Downing Street'
}, {
  key: '2',
  name: 'John',
  age: 42,
  address: '10 Downing Street'
}];
var columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name'
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age'
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address'
}];
var TabPane = _index.Tabs.TabPane;
(0, _react2.storiesOf)('AntD/DataDisplay', module).add('Avatar', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "story-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_index.Avatar, {
    size: "large",
    icon: "user"
  }));
}).add('Badge', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "story-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_index.Badge, {
    count: 99
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "#",
    className: "head-example"
  })));
}).add('Card', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "story-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_index.Card, {
    title: "Default size card",
    extra: /*#__PURE__*/_react.default.createElement("a", {
      href: "#"
    }, "More"),
    style: {
      width: 300
    }
  }, /*#__PURE__*/_react.default.createElement("p", null, "Card content"), /*#__PURE__*/_react.default.createElement("p", null, "Card content"), /*#__PURE__*/_react.default.createElement("p", null, "Card content")));
}).add('Collapse', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "story-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_index.Collapse, {
    defaultActiveKey: ['1'],
    onChange: callback
  }, /*#__PURE__*/_react.default.createElement(Panel, {
    header: "This is panel header 1",
    key: "1"
  }, /*#__PURE__*/_react.default.createElement("p", null, "A dog is a type of domesticated animal.")), /*#__PURE__*/_react.default.createElement(Panel, {
    header: "This is panel header 2",
    key: "2"
  }, /*#__PURE__*/_react.default.createElement("p", null, "A dog is a type of domesticated animal.")), /*#__PURE__*/_react.default.createElement(Panel, {
    header: "This is panel header 3",
    key: "3",
    disabled: true
  }, /*#__PURE__*/_react.default.createElement("p", null, "A dog is a type of domesticated animal."))));
}).add('Table', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "story-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_index.Table, {
    dataSource: dataSource,
    columns: columns
  }));
}).add('Tabs', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "story-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_index.Tabs, {
    defaultActiveKey: "1",
    onChange: callback,
    animated: false
  }, /*#__PURE__*/_react.default.createElement(TabPane, {
    tab: "Tab 1",
    key: "1"
  }, "Content of Tab Pane 1"), /*#__PURE__*/_react.default.createElement(TabPane, {
    tab: "Tab 2",
    key: "2"
  }, "Content of Tab Pane 2"), /*#__PURE__*/_react.default.createElement(TabPane, {
    tab: "Tab 3",
    key: "3"
  }, "Content of Tab Pane 3")));
});