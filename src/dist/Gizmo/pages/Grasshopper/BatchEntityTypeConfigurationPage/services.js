"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchData = fetchData;
exports.addNewBatch = addNewBatch;
exports.getBatchById = getBatchById;
exports.deleteBatch = deleteBatch;
exports.updateBatch = updateBatch;
exports.uploadBatch = uploadBatch;
exports.exportBatch = exportBatch;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _serviceAdapter = require("../../../../serviceAdapter");

var _mock = require("./mock");

function fetchData(_x) {
  return _fetchData.apply(this, arguments);
}

function _fetchData() {
  _fetchData = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(filterData) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _serviceAdapter.postAdapter)({
              url: "gh-batch/get-all",
              payload: filterData,
              mockResponse: _mock.batchEntityTypeResponseMock
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
  return _fetchData.apply(this, arguments);
}

function addNewBatch(_x2, _x3) {
  return _addNewBatch.apply(this, arguments);
}

function _addNewBatch() {
  _addNewBatch = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(batchName, batchDueDate) {
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _serviceAdapter.postAdapter)({
              url: "gh-batch/add",
              payload: {
                name: batchName,
                dueDate: batchDueDate
              },
              mockResponse: _mock.batchEntityTypeResponseMock
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
  return _addNewBatch.apply(this, arguments);
}

function getBatchById(_x4) {
  return _getBatchById.apply(this, arguments);
}

function _getBatchById() {
  _getBatchById = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(batchId) {
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return (0, _serviceAdapter.getAdapter)({
              url: "gh-batch/get?id=".concat(batchId),
              mockResponse: {}
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
  return _getBatchById.apply(this, arguments);
}

function deleteBatch(_x5) {
  return _deleteBatch.apply(this, arguments);
}

function _deleteBatch() {
  _deleteBatch = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(batchId) {
    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return (0, _serviceAdapter.deleteAdapter)({
              url: "gh-batch/delete",
              payload: {
                batchId: batchId
              },
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
  return _deleteBatch.apply(this, arguments);
}

function updateBatch(_x6) {
  return _updateBatch.apply(this, arguments);
}

function _updateBatch() {
  _updateBatch = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(selectedBatch) {
    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return (0, _serviceAdapter.postAdapter)({
              url: "gh-batch/update",
              payload: {
                id: selectedBatch.id,
                name: selectedBatch.name,
                dueDate: selectedBatch.dueDate
              },
              mockResponse: {}
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
  return _updateBatch.apply(this, arguments);
}

function uploadBatch(_x7, _x8) {
  return _uploadBatch.apply(this, arguments);
}

function _uploadBatch() {
  _uploadBatch = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(batchId, fileContract) {
    return _regenerator.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return (0, _serviceAdapter.formMultiPartAdapter)({
              url: 'gh-aspects/init-gh-aspects-task/',
              payload: {
                batchId: batchId,
                inputFile: fileContract
              },
              mockResponse: {}
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
  return _uploadBatch.apply(this, arguments);
}

function exportBatch(_x9) {
  return _exportBatch.apply(this, arguments);
}

function _exportBatch() {
  _exportBatch = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7(batchId) {
    return _regenerator.default.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return (0, _serviceAdapter.postAdapter)({
              url: 'gh-aspects/export',
              payload: {
                batchId: batchId
              },
              mockResponse: {}
            });

          case 2:
            return _context7.abrupt("return", _context7.sent);

          case 3:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return _exportBatch.apply(this, arguments);
}