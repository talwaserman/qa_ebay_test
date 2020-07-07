"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DecisionPopOver;

require("antd/es/button/style/css");

var _button = _interopRequireDefault(require("antd/es/button"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

require("antd/es/input/style/css");

var _input = _interopRequireDefault(require("antd/es/input"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./style.less");

var TextArea = _input.default.TextArea;

function DecisionPopOver(_ref) {
  var comment = _ref.comment,
      handleClose = _ref.handleClose,
      handleSaveClick = _ref.handleSaveClick;

  var _useState = (0, _react.useState)(comment),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      innerComment = _useState2[0],
      updateInnerComment = _useState2[1];

  (0, _react.useEffect)(function () {
    updateInnerComment(comment);
  }, [comment]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "decision-popup-content"
  }, /*#__PURE__*/_react.default.createElement("label", null, "Comment:", /*#__PURE__*/_react.default.createElement("span", {
    className: "mandatory"
  }, "*")), /*#__PURE__*/_react.default.createElement(TextArea, {
    rows: 4,
    value: innerComment,
    onChange: function onChange(e) {
      return updateComment(e.target.value);
    }
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("section", {
    className: "action-btn"
  }, /*#__PURE__*/_react.default.createElement(_button.default, {
    onClick: innerHandleClose,
    size: "small"
  }, "Cancel"), /*#__PURE__*/_react.default.createElement(_button.default, {
    type: "primary",
    size: "small",
    onClick: innerHandleSave,
    disabled: innerComment === ''
  }, "Save")));

  function updateComment(updatedComment) {
    updateInnerComment(updatedComment);
  }

  function innerHandleClose() {
    updateInnerComment('');
    handleClose(); // close popup
  }

  function innerHandleSave() {
    handleSaveClick(innerComment);
    handleClose(); // close popup
  }
}

DecisionPopOver.propTypes = {
  /** comment - delete comment */
  comment: _propTypes.default.string.isRequired,

  /** handleClose -  close popup without saving data if changed*/
  handleClose: _propTypes.default.func.isRequired,

  /** handleSaveClick -  close popup with saving data if changed*/
  handleSaveClick: _propTypes.default.func.isRequired
};
DecisionPopOver.defaultProps = {};