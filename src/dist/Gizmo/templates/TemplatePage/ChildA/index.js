"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ChildA;

var _react = _interopRequireWildcard(require("react"));

var _context = require("../context");

require("./style.less");

// import { Icon } from 'antd';
// import PropTypes from 'prop-types';

/**
 * change the name of the function to illustrate the name of the component
 * the first letter should be capitalized
 */
function ChildA() {
  var _useContext = (0, _react.useContext)(_context.PageContext),
      contextState = _useContext.contextState;

  console.log('render todo list');
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "child-a-wrapper"
  }, /*#__PURE__*/_react.default.createElement("strong", null, "List of todos:"), contextState.todoList.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: index
    }, item);
  }));
  /**
   * all helper functions should be placed here
   */
}
/**
 * all props should be addressed here
 */
// ChildA.propTypes = {
// };
// ChildA.defaultProps = {
// }