"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = StatusDropdown;

require("antd/es/select/style/css");

var _select = _interopRequireDefault(require("antd/es/select"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var Option = _select.default.Option;

function StatusDropdown(_ref) {
  var selectedStatus = _ref.selectedStatus,
      statusList = _ref.statusList,
      disableDropdown = _ref.disableDropdown,
      onStatusChanged = _ref.onStatusChanged;
  var options = statusList.map(function (status) {
    return /*#__PURE__*/_react.default.createElement(Option, {
      key: status
    }, status);
  });
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "status-dropdown-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_select.default, {
    mode: 'single',
    disabled: disableDropdown,
    showSearch: true,
    showArrow: true,
    value: selectedStatus,
    onChange: function onChange(data) {
      return onStatusChanged(data);
    },
    style: {
      width: '100%'
    },
    dropdownMenuStyle: {
      whiteSpace: 'preWrap'
    }
  }, options));
}

StatusDropdown.propTypes = {
  /** statusList - the list of the status to render */
  statusList: _propTypes.default.array.isRequired,

  /** selectedStatus - the selected status */
  selectedStatus: _propTypes.default.string.isRequired,

  /** disableDropdown - a flag whther to disable the dropdown */
  disableDropdown: _propTypes.default.bool.isRequired,

  /** onStatusChanged - callback when status is selected */
  onStatusChanged: _propTypes.default.func.isRequired
};
StatusDropdown.defaultProps = {
  statusList: [],
  disableDropdown: false
};