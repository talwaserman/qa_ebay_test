"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonViewport = require("@storybook/addon-viewport");

var _addonInfo = require("@storybook/addon-info");

var _addonKnobs = require("@storybook/addon-knobs");

var _context = require("../../context");

var _index = _interopRequireDefault(require("./index"));

require("../../../../../../../../.storybook/global-style.less");

(0, _react2.storiesOf)('Gizmo/pages/Grasshopper/EntityTypeDefinitionPage/EntityTypeDefinitionTable/AspectFilters', module).addParameters({
  viewport: {
    viewports: _addonViewport.INITIAL_VIEWPORTS
  }
}).addDecorator(_addonKnobs.withKnobs).addDecorator(_addonInfo.withInfo).add('default', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '66%',
      margin: '0 auto',
      marginTop: '300px'
    }
  }, /*#__PURE__*/_react.default.createElement(_context.PageContextProvider, null, /*#__PURE__*/_react.default.createElement(_index.default, {
    onSearchChange: function onSearchChange() {},
    onCollapseChange: function onCollapseChange() {},
    onGlobalListFilterChange: function onGlobalListFilterChange() {},
    stage: 'Aspect Design',
    onSaveAll: function onSaveAll() {}
  })));
}, {
  notes: 'AspectFilters - Filtering aspects definition table'
});