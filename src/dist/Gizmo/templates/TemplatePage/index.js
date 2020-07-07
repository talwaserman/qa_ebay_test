"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TemplatePage;

var _react = _interopRequireWildcard(require("react"));

var _context = require("./context");

var _ChildA = _interopRequireDefault(require("./ChildA"));

var _ChildB = _interopRequireDefault(require("./ChildB"));

var _ChildC = _interopRequireDefault(require("./ChildC"));

require("./style.less");

// import { Icon } from 'antd';
// import PropTypes from 'prop-types';

/**
 * change the name of the function to illustrate the name of the component
 * the first letter should be capitalized
 */
function TemplatePage() {
  /**
   * use this hook to fetch required data
   */
  (0, _react.useEffect)(function () {// function that will be called when component is created
    // this is a good place to fetch initial data
  }, []);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "template-page-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_context.PageContextProvider, null, /*#__PURE__*/_react.default.createElement("h2", null, "** This is a template for page component **"), /*#__PURE__*/_react.default.createElement(_ChildB.default, null), /*#__PURE__*/_react.default.createElement(_ChildA.default, null), /*#__PURE__*/_react.default.createElement(_ChildC.default, null)));
  /**
   * all helper functions should be placed here
   */
}
/**
 * all props should be addressed here
 */
// TemplatePage.propTypes = {
// };
// TemplatePage.defaultProps = {
// }