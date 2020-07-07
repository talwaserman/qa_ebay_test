"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DateFilter;

require("antd/es/button/style/css");

var _button = _interopRequireDefault(require("antd/es/button"));

require("antd/es/date-picker/style/css");

var _datePicker = _interopRequireDefault(require("antd/es/date-picker"));

var _react = _interopRequireDefault(require("react"));

var _moment = _interopRequireDefault(require("moment"));

function DateFilter(_ref) {
  var setSelectedKeys = _ref.setSelectedKeys,
      selectedKeys = _ref.selectedKeys,
      confirm = _ref.confirm,
      clearFilters = _ref.clearFilters,
      dataIndex = _ref.dataIndex,
      filterOperation = _ref.filterOperation,
      filterTable = _ref.filterTable,
      removeFilter = _ref.removeFilter;

  var onChange = function onChange(date, dateString) {
    setSelectedKeys(date ? [date.startOf('day')] : []);
  };

  var handleSearch = function handleSearch(selectedKeys, confirm) {
    confirm();
    filterTable({
      fieldName: dataIndex,
      filterType: 'date',
      fieldValue: selectedKeys,
      filterOperation: filterOperation
    });
  };

  var handleReset = function handleReset(clearFilters) {
    clearFilters();
    removeFilter(dataIndex);
    setSelectedKeys('');
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      padding: 8
    }
  }, /*#__PURE__*/_react.default.createElement(_datePicker.default, {
    onChange: onChange,
    value: selectedKeys === '' ? null : (0, _moment.default)(selectedKeys[0]),
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
    disabled: selectedKeys === '',
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