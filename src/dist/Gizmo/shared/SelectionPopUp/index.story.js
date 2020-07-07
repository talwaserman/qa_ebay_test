"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonViewport = require("@storybook/addon-viewport");

var _addonInfo = require("@storybook/addon-info");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

require("../../../../../.storybook/global-style.less");

var _index = _interopRequireDefault(require("./index"));

var dropDownValuesArray = [{
  taskId: '5e4e494c0fc8aff358ab6fd9',
  name: 'racheli test'
}, {
  taskId: '5e4e517e9d0d0f42544102d7',
  name: 'racheli test 2'
}];
(0, _react2.storiesOf)('Gizmo/shared/modal/SelectionPopUp', module).addParameters({
  viewport: {
    viewports: _addonViewport.INITIAL_VIEWPORTS
  }
}).addDecorator(_addonKnobs.withKnobs).addDecorator(_addonInfo.withInfo).add('default', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "story-wrapper",
    style: {
      width: '100%',
      textAlign: 'left'
    }
  }, /*#__PURE__*/_react.default.createElement(_index.default, {
    dropDownValuesArray: dropDownValuesArray,
    selectPlaceHolder: (0, _addonKnobs.text)('selectPlaceHolder', 'Configuration'),
    inputLabel: (0, _addonKnobs.text)('inputLabel', 'Task Name'),
    dropDownKeyLabel: 'taskId',
    setSelectionPopData: function setSelectionPopData() {},
    onClickHandler: (0, _addonActions.action)('clicked example button')
  }));
}, {
  notes: 'SelectionPopUp - popup selection with input field and drop down list'
});