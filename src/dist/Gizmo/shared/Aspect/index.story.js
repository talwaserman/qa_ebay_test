"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@storybook/react");

var _addonViewport = require("@storybook/addon-viewport");

var _addonInfo = require("@storybook/addon-info");

var _addonKnobs = require("@storybook/addon-knobs");

var _utils = require("../../utils");

var _mock = require("./mock");

require("../../../../../.storybook/global-style.less");

var _index = _interopRequireDefault(require("./index"));

// this is a wrapper function that is used only instorybook
function AspectWrapper(_ref) {
  var aspect = _ref.aspect,
      showSuggestions = _ref.showSuggestions,
      showOriginalValues = _ref.showOriginalValues,
      aspectIdentifier = _ref.aspectIdentifier;

  var _useState = (0, _react.useState)(aspect),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      aspectData = _useState2[0],
      setVAspectData = _useState2[1];

  return /*#__PURE__*/_react.default.createElement(_index.default, {
    aspect: aspectData,
    showSuggestions: (0, _addonKnobs.boolean)('showSuggestions', true),
    showOriginalValues: (0, _addonKnobs.boolean)('showOriginalValues', true),
    aspectIdentifier: "title",
    onAspectChange: onAspectChange,
    aspectHight: 59,
    updateAspectHights: function updateAspectHights() {}
  });

  function onAspectChange(newAspectData, aspectIdentifer) {
    var tempAspectData = (0, _utils.copyObject)(newAspectData);
    setVAspectData(tempAspectData);
  }
}

(0, _react2.storiesOf)('Gizmo/shared/Aspect', module).addParameters({
  viewport: {
    viewports: _addonViewport.INITIAL_VIEWPORTS
  }
}).addDecorator(_addonKnobs.withKnobs).addDecorator(_addonInfo.withInfo).add('with_ums', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "story-wrapper",
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement(AspectWrapper, {
    aspect: _mock.default_aspect,
    showSuggestions: (0, _addonKnobs.boolean)('showSuggestions', true),
    showOriginalValues: (0, _addonKnobs.boolean)('showOriginalValues', true),
    aspectIdentifier: "title"
  }));
}, {
  notes: 'Aspect - generic Aspect input field'
});
(0, _react2.storiesOf)('Gizmo/shared/Aspect', module).addParameters({
  viewport: {
    viewports: _addonViewport.INITIAL_VIEWPORTS
  }
}).addDecorator(_addonKnobs.withKnobs).addDecorator(_addonInfo.withInfo).add('no_ums', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "story-wrapper",
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement(_index.default, {
    aspect: _mock.no_ums_aspect,
    showSuggestions: (0, _addonKnobs.boolean)('showSuggestions', true),
    showOriginalValues: (0, _addonKnobs.boolean)('showOriginalValues', true),
    aspectIdentifier: "title",
    aspectHight: 59,
    updateAspectHights: function updateAspectHights() {}
  }));
}, {
  notes: 'Aspect - generic Aspect input field'
});
(0, _react2.storiesOf)('Gizmo/shared/Aspect', module).addParameters({
  viewport: {
    viewports: _addonViewport.INITIAL_VIEWPORTS
  }
}).addDecorator(_addonKnobs.withKnobs).addDecorator(_addonInfo.withInfo).add('single_value_aspect', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "story-wrapper",
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement(_index.default, {
    aspect: _mock.single_value_aspect,
    showSuggestions: (0, _addonKnobs.boolean)('showSuggestions', true),
    showOriginalValues: (0, _addonKnobs.boolean)('showOriginalValues', true),
    aspectIdentifier: "title",
    aspectHight: 59,
    updateAspectHights: function updateAspectHights() {}
  }));
}, {
  notes: 'Aspect - generic Aspect input field'
});
(0, _react2.storiesOf)('Gizmo/shared/Aspect', module).addParameters({
  viewport: {
    viewports: _addonViewport.INITIAL_VIEWPORTS
  }
}).addDecorator(_addonKnobs.withKnobs).addDecorator(_addonInfo.withInfo).add('required_value_aspect', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "story-wrapper",
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement(_index.default, {
    aspect: _mock.required_aspect,
    showSuggestions: (0, _addonKnobs.boolean)('showSuggestions', true),
    showOriginalValues: (0, _addonKnobs.boolean)('showOriginalValues', true),
    aspectIdentifier: "title",
    onAspectChange: function onAspectChange() {},
    aspectHight: 59,
    updateAspectHights: function updateAspectHights() {}
  }));
}, {
  notes: 'Aspect - generic Aspect input field'
});
(0, _react2.storiesOf)('Gizmo/shared/Aspect', module).addParameters({
  viewport: {
    viewports: _addonViewport.INITIAL_VIEWPORTS
  }
}).addDecorator(_addonKnobs.withKnobs).addDecorator(_addonInfo.withInfo).add('blank_aspect', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "story-wrapper",
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement(_index.default, {
    aspect: _mock.blank_aspect,
    showSuggestions: (0, _addonKnobs.boolean)('showSuggestions', true),
    showOriginalValues: (0, _addonKnobs.boolean)('showOriginalValues', true),
    aspectIdentifier: "title",
    onAspectChange: function onAspectChange() {},
    aspectHight: 59,
    updateAspectHights: function updateAspectHights() {}
  }));
}, {
  notes: 'Aspect - generic Aspect input field'
});
(0, _react2.storiesOf)('Gizmo/shared/Aspect', module).addParameters({
  viewport: {
    viewports: _addonViewport.INITIAL_VIEWPORTS
  }
}).addDecorator(_addonKnobs.withKnobs).addDecorator(_addonInfo.withInfo).add('deleted_aspect', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "story-wrapper",
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement(_index.default, {
    aspect: _mock.deleted_aspect,
    showSuggestions: (0, _addonKnobs.boolean)('showSuggestions', true),
    showOriginalValues: (0, _addonKnobs.boolean)('showOriginalValues', true),
    aspectIdentifier: "title",
    onAspectChange: function onAspectChange() {},
    aspectHight: 59,
    updateAspectHights: function updateAspectHights() {}
  }));
}, {
  notes: 'Aspect - generic Aspect input field'
});