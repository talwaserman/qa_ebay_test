"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TextFilter;

require("antd/es/button/style/css");

var _button = _interopRequireDefault(require("antd/es/button"));

require("antd/es/input/style/css");

var _input = _interopRequireDefault(require("antd/es/input"));

var _react = _interopRequireWildcard(require("react"));

function TextFilter(_ref) {
  var setSelectedKeys = _ref.setSelectedKeys,
      selectedKeys = _ref.selectedKeys,
      confirm = _ref.confirm,
      clearFilters = _ref.clearFilters,
      dataIndex = _ref.dataIndex,
      filterTable = _ref.filterTable,
      removeFilter = _ref.removeFilter,
      filterOperation = _ref.filterOperation,
      serverFilterType = _ref.serverFilterType;
  var inputEl = (0, _react.useRef)(null);

  var handleSearch = function handleSearch(selectedKeys, confirm) {
    confirm();
    filterTable({
      fieldName: dataIndex,
      filterType: serverFilterType,
      fieldValue: selectedKeys,
      filterOperation: filterOperation ? filterOperation : 'contains'
    });
  };

  var handleReset = function handleReset(clearFilters) {
    clearFilters();
    removeFilter(dataIndex);
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      padding: 8
    }
  }, /*#__PURE__*/_react.default.createElement(_input.default, {
    ref: inputEl,
    placeholder: "Search ".concat(dataIndex),
    value: selectedKeys[0],
    onChange: function onChange(e) {
      return setSelectedKeys(e.target.value ? [e.target.value] : []);
    },
    onPressEnter: function onPressEnter() {
      return handleSearch(selectedKeys, confirm);
    },
    style: {
      width: 188,
      marginBottom: 8,
      display: 'block'
    }
  }), /*#__PURE__*/_react.default.createElement(_button.default, {
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