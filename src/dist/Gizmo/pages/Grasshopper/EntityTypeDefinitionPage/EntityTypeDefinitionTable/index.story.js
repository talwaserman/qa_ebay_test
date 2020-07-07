"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonViewport = require("@storybook/addon-viewport");

var _addonInfo = require("@storybook/addon-info");

var _addonKnobs = require("@storybook/addon-knobs");

var _mock = require("../mock");

var _context = require("../context");

var _utils = require("./../../../../utils");

var _index = _interopRequireDefault(require("./index"));

require("../../../../../../../.storybook/global-style.less");

(0, _react2.storiesOf)('Gizmo/pages/Grasshopper/EntityTypeDefinitionPage/EntityTypeDefinitionTable', module).addParameters({
  viewport: {
    viewports: _addonViewport.INITIAL_VIEWPORTS
  }
}).addDecorator(_addonKnobs.withKnobs).addDecorator(_addonInfo.withInfo).add('default', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement(_context.PageContextProvider, null, /*#__PURE__*/_react.default.createElement(_index.default, {
    aspects: _mock.etDefinitionMock.aspectContractList,
    candidateList: _mock.etInformationMock.candidateListPerLocale,
    onAddAspect: function onAddAspect() {
      return {
        aspectId: (0, _utils.uuid)()
      };
    },
    onSaveAspects: function onSaveAspects() {},
    onRemoveAspect: function onRemoveAspect() {},
    stage: 'Aspect Design',
    onLockEtd: function onLockEtd() {},
    rowId: '1234',
    assignedSites: ['US', 'AU', 'DE']
  })));
}, {
  notes: 'EntityTypeDefinitionTable - Aspects table - each column represents the aspect of a site'
});
(0, _react2.storiesOf)('Gizmo/pages/Grasshopper/EntityTypeDefinitionPage/EntityTypeDefinitionTable', module).addParameters({
  viewport: {
    viewports: _addonViewport.INITIAL_VIEWPORTS
  }
}).addDecorator(_addonKnobs.withKnobs).addDecorator(_addonInfo.withInfo).add('with status Aspect Translation', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement(_context.PageContextProvider, null, /*#__PURE__*/_react.default.createElement(_index.default, {
    aspects: _mock.etDefinitionMock.aspectContractList,
    candidateList: _mock.etInformationMock.candidateListPerLocale,
    onAddAspect: function onAddAspect() {
      return {
        aspectId: (0, _utils.uuid)()
      };
    },
    onSaveAspects: function onSaveAspects() {},
    onRemoveAspect: function onRemoveAspect() {},
    stage: 'Aspect Translation',
    onLockEtd: function onLockEtd() {},
    rowId: '1234',
    assignedSites: ['US', 'AU', 'DE']
  })));
}, {
  notes: 'EntityTypeDefinitionTable - Aspects table - each column represents the aspect of a site'
});