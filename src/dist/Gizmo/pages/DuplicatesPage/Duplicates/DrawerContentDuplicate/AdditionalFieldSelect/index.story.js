"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonViewport = require("@storybook/addon-viewport");

var _addonInfo = require("@storybook/addon-info");

var _addonKnobs = require("@storybook/addon-knobs");

var _mock = require("../mock");

var _index = _interopRequireDefault(require("./index"));

(0, _react2.storiesOf)('Gizmo/pages/Duplicates/DrawerContent/AdditionalFieldSelect', module).addParameters({
  viewport: {
    viewports: _addonViewport.INITIAL_VIEWPORTS
  }
}).addDecorator(_addonKnobs.withKnobs).addDecorator(_addonInfo.withInfo).add('duplicates dropDown', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "story-wrapper",
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement(_index.default, {
    jobTypeConfiguration: _mock.mockDuplicateTaskConfiguration,
    changedInfoItem: function changedInfoItem() {},
    itemIndex: 1,
    isManadatory: '',
    style: {
      width: '200px'
    },
    infoItem: {
      name: 'Mandatory Field 1',
      value: null,
      mandatory: false
    },
    defaultValue: ''
  }));
}, {
  notes: 'AdditionalFieldSelect - duplicates infoItem whith DropDown field'
});
(0, _react2.storiesOf)('Gizmo/pages/Duplicates/DrawerContent/AdditionalFieldSelect', module).addParameters({
  viewport: {
    viewports: _addonViewport.INITIAL_VIEWPORTS
  }
}).addDecorator(_addonKnobs.withKnobs).addDecorator(_addonInfo.withInfo).add('duplicates freeText', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "story-wrapper",
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement(_index.default, {
    jobTypeConfiguration: _mock.mockDuplicateTaskConfiguration,
    changedInfoItem: function changedInfoItem() {},
    itemIndex: 1,
    isManadatory: '',
    style: {
      width: '200px'
    },
    infoItem: {
      name: 'Mandatory Field 2',
      value: null,
      mandatory: false
    }
  }));
}, {
  notes: 'AdditionalFieldSelect - duplicates infoItem whith TextFree field'
});
(0, _react2.storiesOf)('Gizmo/pages/Duplicates/DrawerContent/AdditionalFieldSelect', module).addParameters({
  viewport: {
    viewports: _addonViewport.INITIAL_VIEWPORTS
  }
}).addDecorator(_addonKnobs.withKnobs).addDecorator(_addonInfo.withInfo).add('matching freeText', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "story-wrapper",
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement(_index.default, {
    jobTypeConfiguration: _mock.mockMatchingTaskConfiguration,
    changedInfoItem: function changedInfoItem() {},
    itemIndex: 1,
    isManadatory: '',
    style: {
      width: '200px'
    },
    infoItem: {
      name: 'info1',
      value: null,
      mandatory: true
    }
  }));
}, {
  notes: 'AdditionalFieldSelect - matching infoItem whith freeText field'
});
(0, _react2.storiesOf)('Gizmo/pages/Duplicates/DrawerContent/AdditionalFieldSelect', module).addParameters({
  viewport: {
    viewports: _addonViewport.INITIAL_VIEWPORTS
  }
}).addDecorator(_addonKnobs.withKnobs).addDecorator(_addonInfo.withInfo).add('matching DropDown', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "story-wrapper",
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement(_index.default, {
    jobTypeConfiguration: _mock.mockMatchingTaskConfiguration,
    changedInfoItem: function changedInfoItem() {},
    itemIndex: 1,
    isManadatory: '',
    style: {
      width: '200px'
    },
    infoItem: {
      name: 'info2',
      value: null,
      mandatory: true
    }
  }));
}, {
  notes: 'AdditionalFieldSelect - matching infoItem whith DropDown field'
});