"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("../../../../utils");

var _worker = _interopRequireDefault(require("./worker"));

var pageWorker = new _utils.WebWorker(_worker.default);
var _default = pageWorker;
exports.default = _default;