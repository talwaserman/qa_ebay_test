"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ChildB;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _context = require("../context");

require("./style.less");

// import { Icon } from 'antd';
// import PropTypes from 'prop-types';

/**
 * change the name of the function to illustrate the name of the component
 * the first letter should be capitalized
 */
function ChildB() {
  var _useContext = (0, _react.useContext)(_context.PageContext),
      updateContext = _useContext.updateContext;

  var _useState = (0, _react.useState)(''),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      newVal = _useState2[0],
      setNewVal = _useState2[1];

  console.log('render input');
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "child-b-wrapper"
  }, /*#__PURE__*/_react.default.createElement("input", {
    value: newVal,
    onChange: function onChange(e) {
      return setNewVal(e.target.value);
    }
  }), /*#__PURE__*/_react.default.createElement("button", {
    onClick: onClickAdd
  }, "Add"));
  /**
   * all helper functions should be placed here
   */

  function onClickAdd() {
    updateContext({
      type: 'add',
      payload: newVal
    });
    setNewVal('');
  }
}
/**
 * all props should be addressed here
 */
// ChildB.propTypes = {
// };
// ChildB.defaultProps = {
// }