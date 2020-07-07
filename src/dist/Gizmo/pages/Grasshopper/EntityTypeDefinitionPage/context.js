"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageContextProvider = exports.ETPageContext = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _cloneDeep = _interopRequireDefault(require("lodash/cloneDeep"));

var initialState = {
  aspectList: [],
  lastSavedAspects: [],
  totalUsAspects: 0,
  candidateList: null,
  selectedLocal: 'US',
  isLocked: false,
  relevantSites: [],
  assignedSites: []
};

var ETPageContext = _react.default.createContext(initialState);

exports.ETPageContext = ETPageContext;

var aspectListReducer = function aspectListReducer(state, action) {
  var temp;

  switch (action.type) {
    case 'update':
      return action.payload;

    case 'update-existing-aspect':
      return action.payload;

    case 'update-local':
      temp = (0, _cloneDeep.default)(state);
      temp.selectedLocal = action.payload.currentLocal;
      return temp;

    case 'update-candidate-list':
      temp = (0, _cloneDeep.default)(state);
      temp.candidateList = action.payload.candidateList;
      return temp;

    default:
      throw new Error();
  }
};

var PageContextProvider = function PageContextProvider(props) {
  var _useReducer = (0, _react.useReducer)(aspectListReducer, initialState),
      _useReducer2 = (0, _slicedToArray2.default)(_useReducer, 2),
      contextState = _useReducer2[0],
      updateContext = _useReducer2[1];

  return /*#__PURE__*/_react.default.createElement(ETPageContext.Provider, {
    value: {
      contextState: contextState,
      updateContext: updateContext
    }
  }, props.children);
};

exports.PageContextProvider = PageContextProvider;