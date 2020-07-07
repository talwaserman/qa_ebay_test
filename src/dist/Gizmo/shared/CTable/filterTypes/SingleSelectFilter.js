"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SingleSelectFilter;

require("antd/es/button/style/css");

var _button = _interopRequireDefault(require("antd/es/button"));

require("antd/es/select/style/css");

var _select = _interopRequireDefault(require("antd/es/select"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var Option = _select.default.Option;

function SingleSelectFilter(_ref) {
  var setSelectedKeys = _ref.setSelectedKeys,
      selectedKeys = _ref.selectedKeys,
      confirm = _ref.confirm,
      clearFilters = _ref.clearFilters,
      dataIndex = _ref.dataIndex,
      filterKey = _ref.filterKey,
      filterOperation = _ref.filterOperation,
      filterTable = _ref.filterTable,
      removeFilter = _ref.removeFilter,
      optionHash = _ref.optionHash,
      serverFilterType = _ref.serverFilterType;

  var onChange = function onChange(value) {
    setSelectedKeys(value ? [value] : []);
  };

  var handleSearch = function handleSearch(selectedKeys, confirm) {
    confirm();
    filterTable({
      fieldName: dataIndex,
      filterType: serverFilterType,
      fieldValue: selectedKeys,
      filterOperation: filterOperation
    });
  };

  var handleReset = function handleReset(clearFilters) {
    clearFilters();
    removeFilter(dataIndex);
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
      value: item.value
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

SingleSelectFilter.propTypes = {
  /* setSelectedKeys - funciton used to set the selectedKeys */
  setSelectedKeys: _propTypes.default.func.isRequired,

  /* selectedKeys - represent all of the selected keys, used internaly */
  selectedKeys: _propTypes.default.array.isRequired,

  /* confirm - function used to filter the table with selected filters */
  confirm: _propTypes.default.func.isRequired,

  /* clearFilters - function used to clear all selected filters */
  clearFilters: _propTypes.default.func.isRequired,

  /* dataIndex - index used for uniqe identification in the table */
  dataIndex: _propTypes.default.string.isRequired,

  /* filterKey - the key used in select options that contain all of the options for a select input*/
  filterKey: _propTypes.default.string,

  /* serverFilterType - inner filter type text value which send to the server.   */
  serverFilterType: _propTypes.default.string.isRequired,

  /* filterOperation - the operation is used by antd to indicate which component to use for the selected filter*/
  filterOperation: _propTypes.default.string,

  /* filterTable - function used to extend the object representing all of the filters to the table  */
  filterTable: _propTypes.default.func.isRequired,

  /* removeFilter - function used to remove a filter from the object of filters */
  removeFilter: _propTypes.default.func.isRequired,

  /* optionHash - object that contains the selected filter options */
  optionHash: _propTypes.default.object.isRequired
};
SingleSelectFilter.defaultProps = {
  isEqual: false,
  filterOperation: null
};