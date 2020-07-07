"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _services = require("../services");

var _index = _interopRequireDefault(require("./index"));

it('EntityTypeCategoriesList', /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
  var tree;
  return _regenerator.default.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          tree = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_index.default, {
            getEtCategories: _services.getEtCategories,
            rowId: '1',
            siteId: 'US'
          })).toJSON();
          expect(tree).toMatchSnapshot();

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})));