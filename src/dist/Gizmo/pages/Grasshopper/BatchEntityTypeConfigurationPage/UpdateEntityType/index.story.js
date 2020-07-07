"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonViewport = require("@storybook/addon-viewport");

var _addonInfo = require("@storybook/addon-info");

var _addonKnobs = require("@storybook/addon-knobs");

require("../../../../../../../.storybook/global-style.less");

var _index = _interopRequireDefault(require("./index"));

var batchDetails = {
  id: '5e81cfc89c95bf2cd44f3c41',
  name: 'ET Batch 1',
  numberOfET: 0,
  creationDate: 1582500200000,
  dueDate: 1182500200000,
  status: 'OPEN'
};
(0, _react2.storiesOf)('Gizmo/pages/Grasshopper/BatchEntityTypeConfigurationPage/UpdateEntityType', module).addParameters({
  viewport: {
    viewports: _addonViewport.INITIAL_VIEWPORTS
  }
}).addDecorator(_addonKnobs.withKnobs).addDecorator(_addonInfo.withInfo).add('default', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "story-wrapper",
    style: {
      width: '450px',
      textAlign: 'left'
    }
  }, /*#__PURE__*/_react.default.createElement(_index.default, {
    mode: 'save',
    batchDetails: batchDetails,
    handleModalChange: function handleModalChange() {}
  }));
}, {
  notes: 'UpdateEntityType - Add / update ET batch'
});