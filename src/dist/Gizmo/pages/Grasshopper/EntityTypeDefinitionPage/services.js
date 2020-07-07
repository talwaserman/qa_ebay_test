"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEtInformation = getEtInformation;
exports.getEtDefinition = getEtDefinition;
exports.updateEtTitle = updateEtTitle;
exports.addAspectToEtd = addAspectToEtd;
exports.saveAspectsData = saveAspectsData;
exports.removeAspect = removeAspect;
exports.rejectAspect = rejectAspect;
exports.getEtCategories = getEtCategories;
exports.finishEtd = finishEtd;
exports.lockEtd = lockEtd;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _serviceAdapter = require("../../../../serviceAdapter");

var _utils = require("../../../utils");

var _mock = require("./mock");

function getEtInformation(_x) {
  return _getEtInformation.apply(this, arguments);
}

function _getEtInformation() {
  _getEtInformation = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(rowId) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _serviceAdapter.getAdapter)({
              url: "gh-aspects/get-et-row-information?rowId=".concat(rowId),
              // not the actual url
              payload: {},
              mockResponse: _mock.etInformationMock
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
  return _getEtInformation.apply(this, arguments);
}

function getEtDefinition(_x2) {
  return _getEtDefinition.apply(this, arguments);
}

function _getEtDefinition() {
  _getEtDefinition = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(rowId) {
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _serviceAdapter.getAdapter)({
              url: "gh-aspects/get-entity-type-definition?rowId=".concat(rowId),
              payload: {},
              mockResponse: _mock.etDefinitionMock
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
  return _getEtDefinition.apply(this, arguments);
}

function updateEtTitle(_x3) {
  return _updateEtTitle.apply(this, arguments);
}

function _updateEtTitle() {
  _updateEtTitle = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(payload) {
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return (0, _serviceAdapter.postAdapter)({
              url: "gh-aspects/change-et-name",
              payload: payload,
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
  return _updateEtTitle.apply(this, arguments);
}

function addAspectToEtd(_x4) {
  return _addAspectToEtd.apply(this, arguments);
}

function _addAspectToEtd() {
  _addAspectToEtd = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(payloadObject) {
    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return (0, _serviceAdapter.postAdapter)({
              url: "gh-aspects/add-aspect-to-etd",
              payload: payloadObject,
              mockResponse: {
                aspectId: (0, _utils.uuid)(),
                aspectName: payloadObject.aspectName,
                localToTranslation: {
                  AU: {
                    value: payloadObject.aspectName,
                    source: 'EXACT_MATCH'
                  },
                  UK: {
                    value: payloadObject.aspectName,
                    source: 'EXACT_MATCH'
                  }
                }
              }
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
  return _addAspectToEtd.apply(this, arguments);
}

function saveAspectsData(_x5, _x6) {
  return _saveAspectsData.apply(this, arguments);
}

function _saveAspectsData() {
  _saveAspectsData = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(rowId, aspectContracts) {
    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return (0, _serviceAdapter.postAdapter)({
              url: "gh-aspects/save-aspect-data",
              payload: {
                rowId: Number(rowId),
                aspectContracts: aspectContracts
              },
              mockResponse: {
                status: 200
              }
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
  return _saveAspectsData.apply(this, arguments);
}

function removeAspect(_x7, _x8) {
  return _removeAspect.apply(this, arguments);
}

function _removeAspect() {
  _removeAspect = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(rowId, aspectId) {
    return _regenerator.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return (0, _serviceAdapter.deleteAdapter)({
              url: "gh-aspects/remove-aspect-from-etd",
              payload: {
                rowId: rowId,
                aspectId: aspectId
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
  return _removeAspect.apply(this, arguments);
}

function rejectAspect(_x9, _x10, _x11, _x12) {
  return _rejectAspect.apply(this, arguments);
}

function _rejectAspect() {
  _rejectAspect = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7(rowId, site, candidateName, rejected) {
    return _regenerator.default.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return (0, _serviceAdapter.postAdapter)({
              url: "gh-aspects/reject-candidate",
              payload: {
                rowId: rowId,
                site: site,
                candidateName: candidateName,
                rejected: rejected
              },
              mockResponse: {
                status: 200
              }
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
  return _rejectAspect.apply(this, arguments);
}

function getEtCategories(_x13) {
  return _getEtCategories.apply(this, arguments);
}

function _getEtCategories() {
  _getEtCategories = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee8(rowId) {
    return _regenerator.default.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return (0, _serviceAdapter.getAdapter)({
              url: "gh-aspects/get-categories?rowId=".concat(rowId),
              mockResponse: _mock.getCategoriesMock,
              mockMessage: ''
            });

          case 2:
            return _context8.abrupt("return", _context8.sent);

          case 3:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));
  return _getEtCategories.apply(this, arguments);
}

function finishEtd(_x14) {
  return _finishEtd.apply(this, arguments);
}

function _finishEtd() {
  _finishEtd = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee9(rowId) {
    return _regenerator.default.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.next = 2;
            return (0, _serviceAdapter.postAdapter)({
              url: "gh-aspects/finish-aspect-design",
              payload: {
                rowId: rowId
              },
              mockResponse: {
                status: 'Aspect Translation'
              },
              mockMessage: ''
            });

          case 2:
            return _context9.abrupt("return", _context9.sent);

          case 3:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));
  return _finishEtd.apply(this, arguments);
}

function lockEtd(_x15, _x16) {
  return _lockEtd.apply(this, arguments);
}

function _lockEtd() {
  _lockEtd = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee10(rowId, locked) {
    return _regenerator.default.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.next = 2;
            return (0, _serviceAdapter.postAdapter)({
              url: "gh-aspects/lock-etd",
              payload: {
                rowId: rowId,
                locked: locked
              },
              mockResponse: {
                status: 'Aspect Translation'
              },
              mockMessage: ''
            });

          case 2:
            return _context10.abrupt("return", _context10.sent);

          case 3:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }));
  return _lockEtd.apply(this, arguments);
}