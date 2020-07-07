"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonViewport = require("@storybook/addon-viewport");

var _addonInfo = require("@storybook/addon-info");

var _addonKnobs = require("@storybook/addon-knobs");

var _mock = require("../../mock");

var _context = require("../../context");

var _index = _interopRequireDefault(require("./index"));

require("../../../../../../../../.storybook/global-style.less");

(0, _react2.storiesOf)('Gizmo/pages/Grasshopper/EntityTypeDefinitionPage/EntityTypeDefinitionTable/AspectProperties', module).addParameters({
  viewport: {
    viewports: _addonViewport.INITIAL_VIEWPORTS
  }
}).addDecorator(_addonKnobs.withKnobs).addDecorator(_addonInfo.withInfo).add('default', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "story-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_context.PageContextProvider, null, /*#__PURE__*/_react.default.createElement(_index.default, {
    onPropertyChange: function onPropertyChange() {},
    onSave: function onSave() {},
    aspectProperties: _mock.etDefinitionMock.aspectContractList[0].properties,
    recommendations: _mock.etInformationMock.candidateListPerLocale['US'],
    stage: 'Aspect Design',
    validValues: ['test']
  })));
}, {
  notes: 'AspectProperties - Editing aspect properties in aspect definition table'
});
(0, _react2.storiesOf)('Gizmo/pages/Grasshopper/EntityTypeDefinitionPage/EntityTypeDefinitionTable/AspectProperties', module).addParameters({
  viewport: {
    viewports: _addonViewport.INITIAL_VIEWPORTS
  }
}).addDecorator(_addonKnobs.withKnobs).addDecorator(_addonInfo.withInfo).add('with status Aspect Translation', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "story-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_context.PageContextProvider, null, /*#__PURE__*/_react.default.createElement(_index.default, {
    onPropertyChange: function onPropertyChange() {},
    onSave: function onSave() {},
    aspectProperties: _mock.etDefinitionMock.aspectContractList[0].properties,
    recommendations: _mock.etInformationMock.candidateListPerLocale['US'],
    stage: 'Aspect Translation',
    validValues: ['test']
  })));
}, {
  notes: 'AspectProperties - Editing aspect properties in aspect definition table'
});