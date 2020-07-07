"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNotifications = getNotifications;
exports.addNotification = addNotification;
exports.getUsers = getUsers;
exports.getNotificationTypeData = getNotificationTypeData;
exports.deleteNotification = deleteNotification;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _serviceAdapter = require("../../../serviceAdapter");

var _mock = require("./mock");

function getNotifications() {
  return _getNotifications.apply(this, arguments);
}

function _getNotifications() {
  _getNotifications = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _serviceAdapter.getAdapter)({
              url: "notification/get-all",
              mockResponse: _mock.notificationsListMock
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
  return _getNotifications.apply(this, arguments);
}

function addNotification(_x) {
  return _addNotification.apply(this, arguments);
}

function _addNotification() {
  _addNotification = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(notificationData) {
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _serviceAdapter.postAdapter)({
              url: "/notification/add",
              payload: notificationData,
              mockResponse: _mock.addNotificationMockResponse
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
  return _addNotification.apply(this, arguments);
}

function getUsers() {
  return _getUsers.apply(this, arguments);
}

function _getUsers() {
  _getUsers = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return (0, _serviceAdapter.getAdapter)({
              url: "user/get-all-usernames",
              mockResponse: _mock.getUsersResponse
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
  return _getUsers.apply(this, arguments);
}

function getNotificationTypeData() {
  return _getNotificationTypeData.apply(this, arguments);
}

function _getNotificationTypeData() {
  _getNotificationTypeData = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return (0, _serviceAdapter.getAdapter)({
              url: "notification/get-notification-type",
              mockResponse: _mock.getNotificationTypeResponse
            });

          case 2:
            return _context4.abrupt("return", _context4.sent);

          case 3:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _getNotificationTypeData.apply(this, arguments);
}

function deleteNotification(_x2) {
  return _deleteNotification.apply(this, arguments);
}

function _deleteNotification() {
  _deleteNotification = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(deleteData) {
    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return (0, _serviceAdapter.deleteAdapter)({
              url: "notification/delete",
              payload: deleteData,
              mockResponse: _mock.deleteNotificationResponse
            });

          case 2:
            return _context5.abrupt("return", _context5.sent);

          case 3:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _deleteNotification.apply(this, arguments);
}