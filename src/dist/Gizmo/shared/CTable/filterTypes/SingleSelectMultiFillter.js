"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SingleSelectMultiFilter;

require("antd/es/button/style/css");

var _button = _interopRequireDefault(require("antd/es/button"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

require("antd/es/select/style/css");

var _select = _interopRequireDefault(require("antd/es/select"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var Option = _select.default.Option;

function SingleSelectMultiFilter(_ref) {
  var setSelectedKeys = _ref.setSelectedKeys,
      selectedKeys = _ref.selectedKeys,
      confirm = _ref.confirm,
      clearFilters = _ref.clearFilters,
      filterKey = _ref.filterKey,
      filterOperation = _ref.filterOperation,
      multiFiltersTable = _ref.multiFiltersTable,
      removeFilters = _ref.removeFilters,
      optionHash = _ref.optionHash;

  var _useState = (0, _react.useState)([]),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      filterNames = _useState2[0],
      setFilterNames = _useState2[1];

  var onChange = function onChange(value) {
    setSelectedKeys(value ? [value] : []);
  };

  var handleSearch = function handleSearch(selectedKeys, confirm) {
    confirm();
    var parsedSelectKeys = JSON.parse(selectedKeys);
    var arraySelectedKeys = JSON.parse(parsedSelectKeys);
    var result = arraySelectedKeys.map(function (selectedKeyObject) {
      setFilterNames(function (filterNames) {
        return [].concat((0, _toConsumableArray2.default)(filterNames), [Object.keys(selectedKeyObject)[0]]);
      });
      return {
        fieldName: Object.keys(selectedKeyObject)[0],
        filterType: 'boolean',
        fieldValue: [Object.values(selectedKeyObject)[0].toString()],
        filterOperation: filterOperation
      };
    });
    multiFiltersTable(result);
  };

  var handleReset = function handleReset(clearFilters) {
    clearFilters();
    removeFilters(filterNames);
    setSelectedKeys([]);
  };

  var showOptions = optionHash && optionHash[filterKey] && Object.keys(optionHash).length > 0;
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      padding: 8
    }
  }, /*#__PURE__*/_react.default.createElement(_select.default, {
    showSearch: true,
    style: {
      width: 188,
      marginBottom: 8,
      display: 'block'
    },
    placeholder: "Select a value",
    optionFilterProp: "children",
    value: selectedKeys,
    onChange: onChange,
    filterOption: function filterOption(input, option) {
      return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    }
  }, showOptions && optionHash[filterKey].map(function (item) {
    return /*#__PURE__*/_react.default.createElement(Option, {
      key: item.value,
      value: JSON.stringify(item.value)
    }, item.name);
  })), /*#__PURE__*/_react.default.createElement(_button.default, {
    type: "primary",
    onClick: function onClick() {
      return handleSearch(selectedKeys, confirm);
    },
    disabled: selectedKeys === '' || selectedKeys.length === 0,
    icon: "search",
    size: "small",
    style: {
      width: 90,
      marginRight: 8
    }
  }, "Search"), /*#__PURE__*/_react.default.createElement(_button.default, {
    onClick: function onClick() {
      return handleReset(clearFilters);
    },
    size: "small",
    style: {
      width: 90
    }
  }, "Reset"));
}

SingleSelectMultiFilter.propTypes = {
  /* setSelectedKeys - funciton used to set the selectedKeys */
  setSelectedKeys: _propTypes.default.func.isRequired,

  /* selectedKeys - represent all of the selected keys, used internaly */
  selectedKeys: _propTypes.default.string.isRequired,

  /* confirm - function used to filter the table with selected filters */
  confirm: _propTypes.default.func.isRequired,

  /* clearFilters - function used to clear all selected filters */
  clearFilters: _propTypes.default.func.isRequired,

  /* filterKey - the key used in select options that contain all of the options for a select input*/
  filterKey: _propTypes.default.string,

  /* filterOperation - the operation is used by antd to indicate which component to use for the selected filter*/
  filterOperation: _propTypes.default.string,

  /* multiFiltersTable - function used to extend the object representing all of the filters to the table  */
  multiFiltersTable: _propTypes.default.func.isRequired,

  /* removeFilters - function used to remove a filter from the object of filters */
  removeFilters: _propTypes.default.func.isRequired,

  /* optionHash - object that contains the selected filter options */
  optionHash: _propTypes.default.object.isRequired
};
SingleSelectMultiFilter.defaultProps = {
  filterOperation: null
};