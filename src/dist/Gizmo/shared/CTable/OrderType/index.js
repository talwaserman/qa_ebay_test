"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = OrderType;

require("antd/es/select/style/css");

var _select = _interopRequireDefault(require("antd/es/select"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var Option = _select.default.Option;

function OrderType(_ref) {
  var orderTypeChange = _ref.orderTypeChange,
      defaultValue = _ref.defaultValue,
      width = _ref.width,
      ascendValue = _ref.ascendValue,
      descendValue = _ref.descendValue;

  function onChange(value) {
    orderTypeChange(value);
  }

  return /*#__PURE__*/_react.default.createElement(_select.default, {
    style: {
      width: width
    },
    optionFilterProp: "children",
    defaultValue: defaultValue || 'DESC',
    onChange: onChange,
    filterOption: function filterOption(input, option) {
      return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    }
  }, /*#__PURE__*/_react.default.createElement(Option, {
    key: 'DESC',
    value: descendValue
  }, "DESC"), /*#__PURE__*/_react.default.createElement(Option, {
    key: 'ASC',
    value: ascendValue
  }, "ASC"));
}

OrderType.defaultProps = {
  width: 200,
  orderTypeChange: function orderTypeChange() {},
  defaultValue: 'DESC',
  descendValue: 'DESC',
  ascendValue: 'ASC'
};
OrderType.propTypes = {
  width: _propTypes.default.number,
  orderTypeChange: _propTypes.default.func,
  defaultValue: _propTypes.default.string,
  descendValue: _propTypes.default.string,
  ascendValue: _propTypes.default.string
};