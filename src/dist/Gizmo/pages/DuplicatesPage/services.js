"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNextRow = getNextRow;
exports.getRowById = getRowById;
exports.saveTask = saveTask;
exports.changeCategory = changeCategory;
exports.getJobHeader = getJobHeader;
exports.getJobConfiguration = getJobConfiguration;
exports.getLoggedInUser = getLoggedInUser;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _serviceAdapter = require("../../../serviceAdapter");

var _mockDuplicates = require("./Duplicates/mockDuplicates.mock");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function getNextRow(_x, _x2) {
  return _getNextRow.apply(this, arguments);
}

function _getNextRow() {
  _getNextRow = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(jobId, type) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _serviceAdapter.postAdapter)({
              url: "/common-task/get-next-row",
              payload: {
                jobId: jobId,
                type: type
              },
              mockResponse: _mockDuplicates.clusterMockData
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
  return _getNextRow.apply(this, arguments);
}

function getRowById(_x3) {
  return _getRowById.apply(this, arguments);
}

function _getRowById() {
  _getRowById = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(_ref) {
    var rowId, type;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            rowId = _ref.rowId, type = _ref.type;
            _context2.next = 3;
            return (0, _serviceAdapter.postAdapter)({
              url: "common-task/get-row-by-id",
              payload: {
                rowId: rowId || '',
                type: type
              },
              mockResponse: null
            });

          case 3:
            return _context2.abrupt("return", _context2.sent);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getRowById.apply(this, arguments);
}

function saveTask(_x4) {
  return _saveTask.apply(this, arguments);
}

function _saveTask() {
  _saveTask = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(comparedEntityRowContract) {
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return (0, _serviceAdapter.postAdapter)({
              url: "/compared-entity/save-compared-entity-row",
              payload: _objectSpread({}, comparedEntityRowContract),
              mockResponse: '{}'
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
  return _saveTask.apply(this, arguments);
}

function changeCategory(_x5) {
  return _changeCategory.apply(this, arguments);
}

function _changeCategory() {
  _changeCategory = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(comparedEntityRowContract) {
    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return (0, _serviceAdapter.postAdapter)({
              url: "/compared-entity/change-category",
              payload: _objectSpread({}, comparedEntityRowContract),
              mockResponse: '{}'
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
  return _changeCategory.apply(this, arguments);
}

function getJobHeader(_x6) {
  return _getJobHeader.apply(this, arguments);
}

function _getJobHeader() {
  _getJobHeader = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(jobId) {
    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return (0, _serviceAdapter.getAdapter)({
              url: "/job-header/get-job-header?jobId=".concat(jobId),
              mockResponse: _mockDuplicates.mockJobHeader
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
  return _getJobHeader.apply(this, arguments);
}

function getJobConfiguration(_x7) {
  return _getJobConfiguration.apply(this, arguments);
}

function _getJobConfiguration() {
  _getJobConfiguration = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(configurationId) {
    return _regenerator.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return (0, _serviceAdapter.getAdapter)({
              url: "/task/get-task-configuration?taskId=".concat(configurationId),
              mockResponse: _mockDuplicates.mockConfigurationAllEnabled
            });

          case 2:
            return _context6.abrupt("return", _context6.sent);

          case 3:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _getJobConfiguration.apply(this, arguments);
}

function getLoggedInUser() {
  return _getLoggedInUser.apply(this, arguments);
}

function _getLoggedInUser() {
  _getLoggedInUser = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7() {
    var loggedInUser;
    return _regenerator.default.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            loggedInUser = localStorage.getItem('user');

            if (!loggedInUser) {
              _context7.next = 3;
              break;
            }

            return _context7.abrupt("return", JSON.parse(loggedInUser));

          case 3:
            _context7.next = 5;
            return (0, _serviceAdapter.getAdapter)({
              url: "/user/getLoginUser",
              mockResponse: _mockDuplicates.mockAgent
            });

          case 5:
            return _context7.abrupt("return", _context7.sent);

          case 6:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return _getLoggedInUser.apply(this, arguments);
}