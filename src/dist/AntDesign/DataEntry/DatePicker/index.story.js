"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonInfo = require("@storybook/addon-info");

var _addonKnobs = require("@storybook/addon-knobs");

var _addonActions = require("@storybook/addon-actions");

require("../../../../../.storybook/global-style.less");

var _index = _interopRequireDefault(require("./index"));

/* eslint-disable */
var MonthPicker = _index.default.MonthPicker,
    RangePicker = _index.default.RangePicker,
    WeekPicker = _index.default.WeekPicker;

function onChange(date, dateString) {
  console.log(date, dateString);
}

(0, _react2.storiesOf)('AntD/DataEntry', module).addParameters({
  info: {
    text: 'AntD date picker'
  }
}).add('DatePicker', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "story-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_index.default, {
    onChange: onChange
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(MonthPicker, {
    onChange: onChange,
    placeholder: "Select month"
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(RangePicker, {
    onChange: onChange
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(WeekPicker, {
    onChange: onChange,
    placeholder: "Select week"
  })));
}, {
  notes: 'Here we can add notes for the use of this component'
});