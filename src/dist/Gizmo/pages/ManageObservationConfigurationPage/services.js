"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUpdateExecutionRulesConfigurationName = createUpdateExecutionRulesConfigurationName;
exports.createUpdateExecutionRulesConfiguration = createUpdateExecutionRulesConfiguration;
exports.getAllRulesConfiguration = getAllRulesConfiguration;
exports.deleteExcutionRulesConfigurationByRowId = deleteExcutionRulesConfigurationByRowId;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _serviceAdapter = require("../../../serviceAdapter");

var _mock = require("./mock");

function createUpdateExecutionRulesConfigurationName(_x) {
  return _createUpdateExecutionRulesConfigurationName.apply(this, arguments);
}

function _createUpdateExecutionRulesConfigurationName() {
  _createUpdateExecutionRulesConfigurationName = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(configurationNameData) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _serviceAdapter.putAdapter)({
              url: "duplicate-configuration/create-update-execution-rules-configuration-name",
              payload: configurationNameData,
              mockResponse: {
                executionRulesConfigurationId: '5ea19d4a1157934604713890a'
              }
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
  return _createUpdateExecutionRulesConfigurationName.apply(this, arguments);
}

function createUpdateExecutionRulesConfiguration(_x2) {
  return _createUpdateExecutionRulesConfiguration.apply(this, arguments);
}

function _createUpdateExecutionRulesConfiguration() {
  _createUpdateExecutionRulesConfiguration = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(configurationData) {
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _serviceAdapter.putAdapter)({
              url: "duplicate-configuration/create-update-execution-rules-configuration",
              payload: configurationData,
              mockResponse: {}
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
  return _createUpdateExecutionRulesConfiguration.apply(this, arguments);
}

function getAllRulesConfiguration() {
  return _getAllRulesConfiguration.apply(this, arguments);
}

function _getAllRulesConfiguration() {
  _getAllRulesConfiguration = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return (0, _serviceAdapter.getAdapter)({
              url: "duplicate-configuration/get-all-execution-rules-configurations",
              mockResponse: _mock.mockConfigurationOptions
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
  return _getAllRulesConfiguration.apply(this, arguments);
}

function deleteExcutionRulesConfigurationByRowId(_x3) {
  return _deleteExcutionRulesConfigurationByRowId.apply(this, arguments);
}

function _deleteExcutionRulesConfigurationByRowId() {
  _deleteExcutionRulesConfigurationByRowId = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(rowId) {
    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return (0, _serviceAdapter.deleteAdapter)({
              url: "duplicate-configuration/delete-execution-rules-configuration/" + rowId,
              mockResponse: {}
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
  return _deleteExcutionRulesConfigurationByRowId.apply(this, arguments);
}