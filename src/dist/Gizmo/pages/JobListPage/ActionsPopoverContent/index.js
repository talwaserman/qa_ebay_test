"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ActionsPopoverContent;

require("antd/es/button/style/css");

var _button = _interopRequireDefault(require("antd/es/button"));

require("antd/es/select/style/css");

var _select = _interopRequireDefault(require("antd/es/select"));

var _react = _interopRequireDefault(require("react"));

require("./style.less");

// import PropTypes from "prop-types";
var Option = _select.default.Option;

function ActionsPopoverContent() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "actions-popover-content-wrapper"
  }, /*#__PURE__*/_react.default.createElement("section", null, /*#__PURE__*/_react.default.createElement(_button.default, {
    icon: "edit"
  }), /*#__PURE__*/_react.default.createElement(_button.default, {
    icon: "bar-chart"
  }, "Statistics"), /*#__PURE__*/_react.default.createElement(_select.default, {
    placeholder: "QA",
    onChange: handleQAChange
  }, /*#__PURE__*/_react.default.createElement(Option, {
    value: "create_qa_task"
  }, "Create QA task")), /*#__PURE__*/_react.default.createElement(_button.default, {
    icon: "wechat"
  }, "Comment"), /*#__PURE__*/_react.default.createElement(_button.default, {
    icon: "eye"
  }, "Viewer"), /*#__PURE__*/_react.default.createElement(_button.default, {
    icon: "profile"
  }, "Category Assignment")), /*#__PURE__*/_react.default.createElement("section", null, /*#__PURE__*/_react.default.createElement(_button.default, {
    icon: "delete"
  })));

  function handleQAChange(selectedOption) {
    console.log("selected ".concat(selectedOption));
  }
}
/**
 * all props should be addressed here
 */
// ActionsPopoverContent.propTypes = {
// };
// ActionsPopoverContent.defaultProps = {
// }