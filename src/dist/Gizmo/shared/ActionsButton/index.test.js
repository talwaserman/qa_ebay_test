"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("antd/es/button/style/css");

var _button = _interopRequireDefault(require("antd/es/button"));

require("antd/es/select/style/css");

var _select = _interopRequireDefault(require("antd/es/select"));

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _index = _interopRequireDefault(require("./index"));

var Option = _select.default.Option;
var containerStyle = {
  display: 'flex',
  'flex-wrap': 'wrap'
};
var sectionStyle = {
  'max-width': '450px'
};

function PopupContent() {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: containerStyle
  }, /*#__PURE__*/_react.default.createElement("section", {
    style: sectionStyle
  }, /*#__PURE__*/_react.default.createElement(_button.default, {
    icon: "edit"
  }), /*#__PURE__*/_react.default.createElement(_button.default, {
    icon: "bar-chart"
  }, "Statistics"), /*#__PURE__*/_react.default.createElement(_select.default, {
    placeholder: "QA",
    style: {
      width: 260
    },
    onChange: handleQAChange
  }, /*#__PURE__*/_react.default.createElement(Option, {
    value: "create_qa_task"
  }, "Create QA task")), /*#__PURE__*/_react.default.createElement(_button.default, {
    icon: "wechat"
  }, "Comment"), /*#__PURE__*/_react.default.createElement(_button.default, {
    icon: "eye"
  }, "Viewer"), /*#__PURE__*/_react.default.createElement(_button.default, {
    icon: "profile"
  }, "Category Assignment")), /*#__PURE__*/_react.default.createElement("section", {
    style: sectionStyle
  }, /*#__PURE__*/_react.default.createElement(_button.default, {
    icon: "delete"
  })));

  function handleQAChange(selectedOption) {
    console.log("selected ".concat(selectedOption));
  }
}

it('Gizmo shared - ActionsButton', function () {
  var tree = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_index.default, {
    content: PopupContent()
  })).toJSON();

  expect(tree).toMatchSnapshot();
});