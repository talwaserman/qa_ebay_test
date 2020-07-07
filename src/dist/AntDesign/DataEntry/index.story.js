"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonInfo = require("@storybook/addon-info");

var _addonKnobs = require("@storybook/addon-knobs");

var _addonActions = require("@storybook/addon-actions");

require("../../../../.storybook/global-style.less");

var _Icon = _interopRequireDefault(require("../General/Icon"));

var _index = require("./index");

/* eslint-disable */

/* eslint-disable */
function callback(key) {
  console.log(key);
}

var TreeNode = _index.Tree.TreeNode;
(0, _react2.storiesOf)('AntD/DataEntry', module).add('Tree', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "story-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_index.Tree, {
    showIcon: true,
    defaultExpandAll: true,
    defaultSelectedKeys: ['0-0-0'],
    switcherIcon: /*#__PURE__*/_react.default.createElement(_Icon.default, {
      type: "down"
    })
  }, /*#__PURE__*/_react.default.createElement(TreeNode, {
    icon: /*#__PURE__*/_react.default.createElement(_Icon.default, {
      type: "smile-o"
    }),
    title: "parent 1",
    key: "0-0"
  }, /*#__PURE__*/_react.default.createElement(TreeNode, {
    icon: /*#__PURE__*/_react.default.createElement(_Icon.default, {
      type: "meh-o"
    }),
    title: "leaf",
    key: "0-0-0"
  }), /*#__PURE__*/_react.default.createElement(TreeNode, {
    icon: function icon(_ref) {
      var selected = _ref.selected;
      return /*#__PURE__*/_react.default.createElement(_Icon.default, {
        type: selected ? 'frown' : 'frown-o'
      });
    },
    title: "leaf",
    key: "0-0-1"
  }))));
});