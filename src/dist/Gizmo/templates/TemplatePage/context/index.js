"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actions = exports.PageContextProvider = exports.PageContext = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// import cloneDeep from 'lodash/cloneDeep';
var initialState = {
  todoList: ['buy dinner', 'run 5 km', 'finish work']
};
var actions = {
  /**
   * @param {String []} list list - list of todo items
   * @param {String} newItem newItem - string value that will be concatenated to the list of todo
   * @returns {String []} return - list of updated todo items
   */
  add: function add(list, newItem) {
    return newItem === '' ? list : list.concat(newItem);
  },

  /**
   * this is the funciton used to remove item from the todo list
   * @param {*} list list - bla list bla
   * @param {*} itemToRemove item bla bla
   * @returns {String []} return - list of updated todo items
   */
  remove: function remove(list, itemToRemove) {
    return itemToRemove === '' ? list : list.filter(function (item) {
      return item !== itemToRemove;
    });
  }
};
exports.actions = actions;

var PageContext = _react.default.createContext(initialState);

exports.PageContext = PageContext;

var pageReducer = function pageReducer(state, action) {
  switch (action.type) {
    case 'add':
      state.todoList = actions.add(state.todoList, action.payload);
      return _objectSpread({}, state);

    default:
      throw new Error();
  }
};

var PageContextProvider = function PageContextProvider(props) {
  var _useReducer = (0, _react.useReducer)(pageReducer, initialState),
      _useReducer2 = (0, _slicedToArray2.default)(_useReducer, 2),
      contextState = _useReducer2[0],
      updateContext = _useReducer2[1];

  return /*#__PURE__*/_react.default.createElement(PageContext.Provider, {
    value: {
      contextState: contextState,
      updateContext: updateContext
    }
  }, props.children);
};

exports.PageContextProvider = PageContextProvider;