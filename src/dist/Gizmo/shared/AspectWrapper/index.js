"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AspectWrapper;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

/**
 * change the name of the function to illustrate the name of the component
 * the first letter should be capitalized
 */
function AspectWrapper(_ref) {
  var children = _ref.children,
      hightHash = _ref.hightHash,
      aspect = _ref.aspect,
      showSuggestions = _ref.showSuggestions,
      showOriginalValues = _ref.showOriginalValues,
      updateAspectHights = _ref.updateAspectHights;
  (0, _react.useEffect)(function () {
    updateAspectHights(aspect.aspectName, (elemRef.current || {}).offsetHeight);
  }, [aspect, showOriginalValues, showSuggestions]);
  var elemRef = (0, _react.useRef)(null);
  var getBlankAspectHight = (0, _react.useCallback)(function () {
    if (showSuggestions && showOriginalValues) {
      return '94px';
    } else if (showSuggestions || showOriginalValues) {
      return '73px';
    } else {
      return '59px';
    }
  }, [showSuggestions, showOriginalValues]); // if the aspect that we present contain this key with value false than we should hide it from the screen
  // because this aspect is not available for that product

  var showBlankAspect = aspect.alignedWithSurvivor !== undefined && aspect.alignedWithSurvivor === false;
  var blankAspectHight = getBlankAspectHight();
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "aspect-logic-wrapper",
    ref: elemRef,
    style: {
      minHeight: hightHash[aspect.aspectName] + 'px'
    }
  }, /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.cloneElement(children, {
    showBlankAspect: showBlankAspect,
    blankAspectHight: blankAspectHight
  })));
}

AspectWrapper.propTypes = {
  /** children - child components that will be rendered under this wrapping component */
  children: _propTypes.default.any.isRequired,

  /** aspect - the aspect that will be  */
  aspect: _propTypes.default.object.isRequired,

  /** showSuggestions - boolean value to indicate if suggested values are displayed */
  showSuggestions: _propTypes.default.bool.isRequired,

  /** showOriginalValues - boolean value to indicate if original values are displayed */
  showOriginalValues: _propTypes.default.bool.isRequired,

  /** updateAspectHights - callback function used to update the aspect hights */
  updateAspectHights: _propTypes.default.func.isRequired,

  /** hightHash - the hight of all aspects, this prop is needed to keep the victim and survivor aspects in the same hight */
  hightHash: _propTypes.default.object.isRequired
};