"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonViewport = require("@storybook/addon-viewport");

var _addonInfo = require("@storybook/addon-info");

var _addonKnobs = require("@storybook/addon-knobs");

var _context = require("../context");

var _index = _interopRequireDefault(require("./index"));

require("../../../../../../../.storybook/global-style.less");

(0, _react2.storiesOf)('Gizmo/pages/Grasshopper/EntityTypeDefinitionPage/EntityTypeDefinitionHeader', module).addParameters({
  viewport: {
    viewports: _addonViewport.INITIAL_VIEWPORTS
  }
}).addDecorator(_addonKnobs.withKnobs).addDecorator(_addonInfo.withInfo).add('default', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '100%',
      padding: '10px'
    }
  }, /*#__PURE__*/_react.default.createElement(_context.PageContextProvider, null, /*#__PURE__*/_react.default.createElement(_index.default, {
    entityTypeName: 'Mock Entity Type',
    hintText: 'Hint text',
    stage: 'Aspect Design',
    rowId: '1234',
    finishEtd: function finishEtd() {},
    batchId: '1234',
    phaseLabel: 'Phase label',
    isViewMode: false
  })));
}, {
  notes: 'EntityTypeDefinitionHeader - Entity Type Definition header'
});
(0, _react2.storiesOf)('Gizmo/pages/Grasshopper/EntityTypeDefinitionPage/EntityTypeDefinitionHeader', module).addParameters({
  viewport: {
    viewports: _addonViewport.INITIAL_VIEWPORTS
  }
}).addDecorator(_addonKnobs.withKnobs).addDecorator(_addonInfo.withInfo).add('view mode', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '100%',
      padding: '10px'
    }
  }, /*#__PURE__*/_react.default.createElement(_context.PageContextProvider, null, /*#__PURE__*/_react.default.createElement(_index.default, {
    entityTypeName: 'Mock Entity Type',
    hintText: 'Hint text',
    stage: 'Aspect Design',
    rowId: '1234',
    finishEtd: function finishEtd() {},
    batchId: '1234',
    phaseLabel: 'Phase label',
    isViewMode: true,
    onSaveEtNameTitle: function onSaveEtNameTitle() {}
  })));
}, {
  notes: 'EntityTypeDefinitionHeader - Entity Type Definition header'
});