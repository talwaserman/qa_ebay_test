"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRowsByJobId = getRowsByJobId;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _serviceAdapter = require("../../../serviceAdapter");

var _mock = require("./mock");

function getRowsByJobId(_x) {
  return _getRowsByJobId.apply(this, arguments);
}

function _getRowsByJobId() {
  _getRowsByJobId = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(_ref) {
    var jobId, jobType, pageNumber, orderType, orderBy, dataFilterContracts;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            jobId = _ref.jobId, jobType = _ref.jobType, pageNumber = _ref.pageNumber, orderType = _ref.orderType, orderBy = _ref.orderBy, dataFilterContracts = _ref.dataFilterContracts;
            _context.next = 3;
            return (0, _serviceAdapter.postAdapter)({
              url: "/common-task/get-filtered-rows",
              payload: {
                dataFilterContracts: dataFilterContracts || [],
                orderBy: orderBy || 'survivorEpid',
                orderType: orderType || 'ASC',
                pageNumber: pageNumber,
                jobType: jobType,
                jobId: jobId
              },
              mockResponse: jobType === 'Duplicates' ? _mock.getRowsByJob : _mock.getRowsByMatchingJob
            });

          case 3:
            return _context.abrupt("return", _context.sent);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getRowsByJobId.apply(this, arguments);
}