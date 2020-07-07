"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./style.less");

function TotalRowsDone(_ref) {
  var today = _ref.today,
      total = _ref.total;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "total-rows-done-wrapper"
  }, "Total rows done: ".concat(total), /*#__PURE__*/_react.default.createElement("div", {
    className: "vertical-seperator"
  }), "Total done today: ".concat(today));
}

TotalRowsDone.propTypes = {
  /** Number of total rows done today for this task */
  today: _propTypes.default.number.isRequired,

  /** Number of total rows done for this task  */
  total: _propTypes.default.number.isRequired
};
var _default = TotalRowsDone;
exports.default = _default;