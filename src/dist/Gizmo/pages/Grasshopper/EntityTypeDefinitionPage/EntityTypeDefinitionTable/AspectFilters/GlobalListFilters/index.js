"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = GlobalListFilters;

require("antd/es/checkbox/style/css");

var _checkbox = _interopRequireDefault(require("antd/es/checkbox"));

require("antd/es/button/style/css");

var _button = _interopRequireDefault(require("antd/es/button"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _cloneDeep = _interopRequireDefault(require("lodash/cloneDeep"));

var _context = require("../../../context");

require("./style.less");

function GlobalListFilters(_ref) {
  var handleModalChange = _ref.handleModalChange;
  var big4 = ['US', 'UK', 'AU', 'DE'];
  var big7 = ['US', 'UK', 'AU', 'DE', 'FR', 'IT', 'ES'];
  var siteList = [];

  var _useContext = (0, _react.useContext)(_context.ETPageContext),
      contextState = _useContext.contextState;

  contextState.relevantSites.forEach(function (siteName) {
    siteList.push({
      name: siteName,
      isBig4: isBig4(siteName),
      isBig7: isBig7(siteName)
    });
  });
  var defaultFilters = {
    sites: contextState.relevantSites,
    missingProps: false,
    missingLocals: false
  };
  var isBig4Disabled = notAllBig4ExistInET();
  var isBig7Disabled = notAllBig7ExistInET();

  var _useState = (0, _react.useState)(defaultFilters),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      filters = _useState2[0],
      setFilters = _useState2[1];

  (0, _react.useEffect)(function () {
    handleModalChange(filters);
  }, [handleModalChange, filters]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "global-list-filters-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "column-wrapper"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "filter-header"
  }, "Sites"), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_button.default, {
    onClick: filterBig4,
    type: getBig4ButtonType(),
    disabled: isBig4Disabled
  }, "Big 4"), /*#__PURE__*/_react.default.createElement(_button.default, {
    onClick: filterBig7,
    type: getBig7ButtonType(),
    disabled: isBig7Disabled
  }, "Big 7")), siteList.map(function (site) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "filter-wrapper",
      key: site.name
    }, /*#__PURE__*/_react.default.createElement(_checkbox.default, {
      className: "select-site-checkbox",
      disabled: site.name === 'US',
      checked: filters.sites.includes(site.name),
      onChange: function onChange() {
        return filterSite(site.name);
      }
    }), /*#__PURE__*/_react.default.createElement("label", null, site.name));
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "column-wrapper"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "filter-header"
  }, "Advanced"), /*#__PURE__*/_react.default.createElement("div", {
    className: "filter-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_checkbox.default, {
    className: "select-site-checkbox",
    checked: filters.missingProps,
    onChange: onMissingPropsChecked
  }), /*#__PURE__*/_react.default.createElement("label", null, "Missing Properties")), /*#__PURE__*/_react.default.createElement("div", {
    className: "filter-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_checkbox.default, {
    className: "select-missing-checkbox",
    checked: filters.missingLocals,
    onChange: onMissingLocalsChecked
  }), /*#__PURE__*/_react.default.createElement("label", null, "Missing Locals"))));

  function filterSite(siteName) {
    var tempFilters = (0, _cloneDeep.default)(filters);

    if (tempFilters.sites.includes(siteName)) {
      var index = tempFilters.sites.findIndex(function (site) {
        return site === siteName;
      });
      tempFilters.sites.splice(index, 1);
    } else {
      tempFilters.sites.push(siteName);
    }

    setFilters(tempFilters);
    handleModalChange(tempFilters);
  }

  function filterBig4() {
    var tempFilters = (0, _cloneDeep.default)(filters);
    tempFilters.sites = siteList.filter(function (site) {
      return site.isBig4;
    }).map(function (site) {
      return site.name;
    });
    setFilters(tempFilters);
    handleModalChange(tempFilters);
  }

  function filterBig7() {
    var tempFilters = (0, _cloneDeep.default)(filters);
    tempFilters.sites = siteList.filter(function (site) {
      return site.isBig7;
    }).map(function (site) {
      return site.name;
    });
    setFilters(tempFilters);
    handleModalChange(tempFilters);
  }

  function onMissingPropsChecked() {
    var tempFilters = (0, _cloneDeep.default)(filters);
    tempFilters.missingProps = !tempFilters.missingProps;
    setFilters(tempFilters);
    handleModalChange(tempFilters);
  }

  function onMissingLocalsChecked() {
    var tempFilters = (0, _cloneDeep.default)(filters);
    tempFilters.missingLocals = !tempFilters.missingLocals;
    setFilters(tempFilters);
    handleModalChange(tempFilters);
  }

  function getBig4ButtonType() {
    var big4Sites = siteList.filter(function (s) {
      return s.isBig4;
    }).map(function (s) {
      return s.name;
    });
    return filters.sites.length === 4 && filters.sites.length === filters.sites.filter(function (s) {
      return big4Sites.includes(s);
    }).length ? 'primary' : '';
  }

  function getBig7ButtonType() {
    var big7Sites = siteList.filter(function (s) {
      return s.isBig7;
    }).map(function (s) {
      return s.name;
    });
    return filters.sites.length === 7 && filters.sites.length === filters.sites.filter(function (s) {
      return big7Sites.includes(s);
    }).length ? 'primary' : '';
  }

  function isBig4(siteName) {
    return big4.includes(siteName);
  }

  function isBig7(siteName) {
    return big7.includes(siteName);
  }

  function notAllBig4ExistInET() {
    var notAllBig4ExistInET = false;
    big4.forEach(function (site) {
      if (!contextState.relevantSites.includes(site)) {
        notAllBig4ExistInET = true;
      }
    });
    return notAllBig4ExistInET;
  }

  function notAllBig7ExistInET() {
    var notAllBig7ExistInET = false;
    big7.forEach(function (site) {
      if (!contextState.relevantSites.includes(site)) {
        notAllBig7ExistInET = true;
      }
    });
    return notAllBig7ExistInET;
  }
}