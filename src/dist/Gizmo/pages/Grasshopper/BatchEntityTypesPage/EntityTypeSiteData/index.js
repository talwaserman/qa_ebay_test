"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = EntityTypeSiteData;

require("antd/es/table/style/css");

var _table = _interopRequireDefault(require("antd/es/table"));

require("./style.less");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../../../../utils");

var _assigneesDropdown = _interopRequireDefault(require("../assigneesDropdown"));

function EntityTypeSiteData(_ref) {
  var entityTypeRow = _ref.entityTypeRow,
      loggedUserData = _ref.loggedUserData,
      assingeesList = _ref.assingeesList,
      onAssignedChanged = _ref.onAssignedChanged,
      rowId = _ref.rowId;
  var columnConfig = [{
    title: 'Site Name',
    key: 'Site Name',
    dataIndex: 'site'
  }, {
    title: '# Categories',
    key: '# Categories',
    dataIndex: 'numberOfCategories'
  }, {
    title: 'Progress',
    key: 'Progress',
    render: renderProgress
  }, {
    title: 'Assignee',
    key: 'Assignee',
    render: renderAssigneeDropdown,
    width: '300px'
  }];
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "entity-type-site-data-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_table.default, {
    dataSource: entityTypeRow.etSites,
    columns: columnConfig,
    pagination: false,
    rowKey: function rowKey(record) {
      return getRecordRowKey(record);
    },
    bordered: true
  }));

  function renderProgress(siteData) {
    return "".concat(siteData.numberOfTranslatedAspects, "/").concat(siteData.totalAspects);
  }

  function renderAssigneeDropdown(siteData) {
    var currentAssigneeData = assingeesList.filter(function (user) {
      return user.userId === siteData.assignee;
    })[0];
    return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_assigneesDropdown.default, {
      loggedUserData: loggedUserData,
      currentAssigneeData: currentAssigneeData,
      selectAssigneePlaceHolder: 'Select Assignee',
      assingeesList: assingeesList,
      onAssignedChanged: function onAssignedChanged(assigneeData) {
        return onSiteAssigneeChange(assigneeData, siteData);
      },
      rowId: rowId
    }));
  }

  function getRecordRowKey(record) {
    return entityTypeRow.etSites.findIndex(function (site) {
      return site === record;
    });
  }

  function onSiteAssigneeChange(assigneeData, siteData) {
    var site = (0, _utils.getSiteByName)(siteData.site);
    onAssignedChanged(assigneeData, site);
  }
}

EntityTypeSiteData.prototypes = {
  /** entityTypeRow - the ET row data */
  entityTypeRow: _propTypes.default.object.isRequired,

  /** loggedUserData - the logged in user */
  loggedUserData: _propTypes.default.object.isRequired,

  /** assingeesList - the users list */
  assingeesList: _propTypes.default.array.isRequired,

  /** callback to assign the site for a user */
  onAssignedChanged: _propTypes.default.func.isRequired,

  /** rowId - the ET id */
  rowId: _propTypes.default.number.isRequired
};