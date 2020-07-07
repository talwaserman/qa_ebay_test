"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ChildC;

var _react = _interopRequireDefault(require("react"));

require("./style.less");

// import { Icon } from 'antd';
// import PropTypes from 'prop-types';

/**
 * change the name of the function to illustrate the name of the component
 * the first letter should be capitalized
 */
function ChildC(props) {
  console.log('render child c');
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "child-c-wrapper"
  }, "child c - not connected to context");
  /**
   * all helper functions should be placed here
   */
}
/**
 * all props should be addressed here
 */
// ChildC.propTypes = {
// };
// ChildC.defaultProps = {
// }