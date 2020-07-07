"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonViewport = require("@storybook/addon-viewport");

var _addonInfo = require("@storybook/addon-info");

var _addonKnobs = require("@storybook/addon-knobs");

var _mock = require("../mock");

var _index = _interopRequireDefault(require("./index"));

require("../../../../../../../.storybook/global-style.less");

var entityTypeRow = _mock.batchEntityTypesResponseMock.entityTypeRowContractList[0];
var loggedUserData = _mock.getUsersResponseMock.users[0];
(0, _react2.storiesOf)('Gizmo/pages/Grasshopper/BatchEntityTypesPage/EntityTypeSiteData', module).addParameters({
  viewport: {
    viewports: _addonViewport.INITIAL_VIEWPORTS
  }
}).addDecorator(_addonKnobs.withKnobs).addDecorator(_addonInfo.withInfo).add('default', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement(_index.default, {
    entityTypeRow: entityTypeRow,
    rowId: 1234,
    loggedUserData: loggedUserData,
    assingeesList: _mock.getUsersResponseMock.users
  }));
}, {
  notes: 'EntityTypeSiteData - Asignee data for ET sites'
});