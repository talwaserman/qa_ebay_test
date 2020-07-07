"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEntityTypes = getEntityTypes;
exports.getUsers = getUsers;
exports.assignRowToUser = assignRowToUser;
exports.getLoggedInUser = getLoggedInUser;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _serviceAdapter = require("../../../../serviceAdapter");

var _mock = require("./mock");

function getEntityTypes(_x) {
  return _getEntityTypes.apply(this, arguments);
}

function _getEntityTypes() {
  _getEntityTypes = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(filterData) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _serviceAdapter.postAdapter)({
              url: "gh-aspects/get-entity-type-rows",
              payload: filterData,
              mockResponse: _mock.batchEntityTypesResponseMock
            });

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getEntityTypes.apply(this, arguments);
}

function getUsers() {
  return _getUsers.apply(this, arguments);
}

function _getUsers() {
  _getUsers = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _serviceAdapter.getAdapter)({
              url: "user/get-all-usernames",
              mockResponse: _mock.getUsersResponseMock
            });

          case 2:
            return _context2.abrupt("return", _context2.sent);

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getUsers.apply(this, arguments);
}

function assignRowToUser(_x2) {
  return _assignRowToUser.apply(this, arguments);
}

function _assignRowToUser() {
  _assignRowToUser = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(rowData) {
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return (0, _serviceAdapter.postAdapter)({
              url: "gh-aspects/assign-row",
              payload: rowData,
              mockResponse: _mock.assignRowResponseMock
            });

          case 2:
            return _context3.abrupt("return", _context3.sent);

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _assignRowToUser.apply(this, arguments);
}

function getLoggedInUser() {
  return _getLoggedInUser.apply(this, arguments);
}

function _getLoggedInUser() {
  _getLoggedInUser = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
    var loggedInUser;
    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            loggedInUser = localStorage.getItem('user');

            if (!loggedInUser) {
              _context4.next = 3;
              break;
            }

            return _context4.abrupt("return", JSON.parse(loggedInUser));

          case 3:
            _context4.next = 5;
            return (0, _serviceAdapter.getAdapter)({
              url: "/user/getLoginUser",
              mockResponse: _mock.mockAgent
            });

          case 5:
            return _context4.abrupt("return", _context4.sent);

          case 6:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _getLoggedInUser.apply(this, arguments);
}