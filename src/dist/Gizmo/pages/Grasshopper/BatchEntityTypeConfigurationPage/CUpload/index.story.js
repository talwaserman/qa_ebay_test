"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonViewport = require("@storybook/addon-viewport");

var _addonInfo = require("@storybook/addon-info");

var _addonKnobs = require("@storybook/addon-knobs");

require("../../../../../../../.storybook/global-style.less");

var _EntityTypeBatchFileFormat = _interopRequireDefault(require("../images/EntityTypeBatchFileFormat.png"));

var _index = _interopRequireDefault(require("./index"));

var popoverMessage = 'The file format should be a .tsv file with the following values ';

var uploadMoldaMessage = /*#__PURE__*/_react.default.createElement("span", null, "Upload ET Configuration file for batch: ", /*#__PURE__*/_react.default.createElement("b", null, "Storybook Batch"));

(0, _react2.storiesOf)('Gizmo/pages/Grasshopper/BatchEntityTypeConfigurationPage/CUpload', module).addParameters({
  viewport: {
    viewports: _addonViewport.INITIAL_VIEWPORTS
  }
}).addDecorator(_addonKnobs.withKnobs).addDecorator(_addonInfo.withInfo).add('default', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      marginTop: '200px',
      width: '500px',
      display: 'inline-block',
      padding: '25px'
    }
  }, /*#__PURE__*/_react.default.createElement(_index.default, {
    handleModalChange: function handleModalChange() {},
    fileTypes: '.tsv',
    message: uploadMoldaMessage,
    multiple: false,
    popoverMessage: popoverMessage,
    fileFormatImage: _EntityTypeBatchFileFormat.default
  }));
}, {
  notes: 'CUpload - regular upload'
});