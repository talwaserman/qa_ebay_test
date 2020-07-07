"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Template;

var _react = _interopRequireWildcard(require("react"));

require("./style.less");

// import { Icon } from 'antd';
// import PropTypes from 'prop-types';

/**
 * change the name of the function to illustrate the name of the component
 * the first letter should be capitalized
 */
function Template() {
  /**
   * use this hook to fetch required data
   */
  (0, _react.useEffect)(function () {// function that will be called when component is created
    // this is a good place to fetch initial data
  }, []);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "template-wrapper"
  }, "This is a template for new components");
  /**
   * all helper functions should be placed here
   */
}
/**
 * all props should be addressed here
 */
// Template.propTypes = {
// };
// Template.defaultProps = {
// }