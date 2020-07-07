"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = LockActions;

require("antd/es/modal/style/css");

var _modal = _interopRequireDefault(require("antd/es/modal"));

require("antd/es/button/style/css");

var _button = _interopRequireDefault(require("antd/es/button"));

require("./style.less");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function LockActions(_ref) {
  var modalTitle = _ref.modalTitle,
      message = _ref.message,
      buttonsConfig = _ref.buttonsConfig,
      isModalVisible = _ref.isModalVisible,
      onActionSelect = _ref.onActionSelect;
  return /*#__PURE__*/_react.default.createElement(_modal.default, {
    className: "lock-etd-actions-modal-wrapper",
    title: modalTitle,
    visible: isModalVisible,
    closable: false,
    footer: /*#__PURE__*/_react.default.createElement("div", null, buttonsConfig.map(function (button, index) {
      return /*#__PURE__*/_react.default.createElement(_button.default, {
        onClick: function onClick() {
          return onActionSelect(button.action);
        },
        key: index
      }, button.text);
    }))
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "lock-etd-modal-content"
  }, message));
}

LockActions.propTypes = {
  /** modalTitle - the modal title */
  modalTitle: _propTypes.default.string.isRequired,

  /** message - the message in the modal content */
  message: _propTypes.default.string.isRequired,

  /** buttonConfig - the content of the customed buttons */
  buttonsConfig: _propTypes.default.array.isRequired,

  /** isModalVisible -  a flag whether to show the modal */
  isModalVisible: _propTypes.default.bool.isRequired,

  /** onActionSelect - callback function when an action is selected  */
  onActionSelect: _propTypes.default.func.isRequired
};