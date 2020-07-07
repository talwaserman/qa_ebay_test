"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = OrderBy;

require("antd/es/select/style/css");

var _select = _interopRequireDefault(require("antd/es/select"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var Option = _select.default.Option;

function OrderBy(_ref) {
  var options = _ref.options,
      placeholder = _ref.placeholder,
      orderByChange = _ref.orderByChange,
      defaultValue = _ref.defaultValue;

  function onChange(value) {
    orderByChange(value);
  }

  return /*#__PURE__*/_react.default.createElement(_select.default, {
    showSearch: true,
    allowClear: false,
    style: {
      width: 200
    },
    defaultValue: defaultValue,
    placeholder: placeholder,
    optionFilterProp: "children",
    onChange: onChange,
    filterOption: function filterOption(input, option) {
      return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    }
  }, options.filter(function (item) {
    return !item.excludeOrderBy;
  }).map(function (item) {
    return /*#__PURE__*/_react.default.createElement(Option, {
      key: item.dataIndex,
      value: item.dataIndex
    }, item.title);
  }));
}

OrderBy.defaultProps = {
  options: [],
  orderTypeChange: function orderTypeChange() {},
  placeholder: ''
};
OrderBy.propTypes = {
  options: _propTypes.default.arrayOf(_propTypes.default.shape({
    title: _propTypes.default.string.isRequired,
    dataIndex: _propTypes.default.string.isRequired,
    filterType: _propTypes.default.string
  })),
  placeholder: _propTypes.default.string.isRequired,
  orderByChange: _propTypes.default.func,
  defaultValue: _propTypes.default.string.isRequired
};