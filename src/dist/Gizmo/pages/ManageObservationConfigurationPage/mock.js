"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mockConfigurationOptions = void 0;
var mockConfigurationOptions = {
  executionRulesConfigurationContracts: [{
    rowId: '5ea19d4a115793460471380a',
    name: 'ExecutionRuleUpdate',
    reasonCodeContracts: [{
      decision: 'DUPLICATES',
      reason: 'reason1'
    }, {
      decision: 'DUPLICATES',
      reason: 'reason',
      explanation: 'explanation'
    }, {
      decision: 'NON_DUPLICATES',
      reason: 'reason3'
    }, {
      decision: 'SKIP',
      reason: 'reason4'
    }]
  }, {
    rowId: '5ea19d4a115793460471380b',
    name: 'executionRuleUpdate2',
    reasonCodeContracts: [{
      decision: 'DUPLICATES',
      reason: 'reason two'
    }, {
      decision: 'DUPLICATES',
      reason: 'reason',
      explanation: 'explanation  two'
    }, {
      decision: 'NON_DUPLICATES',
      reason: 'reason3 two'
    }, {
      decision: 'SKIP',
      reason: 'reason4'
    }]
  }, {
    rowId: '5ea163191157934244367df9',
    name: 'example',
    reasonCodeContracts: null
  }, {
    rowId: '5ea163191157934244367dc9',
    name: 'example4',
    reasonCodeContracts: []
  }]
};
exports.mockConfigurationOptions = mockConfigurationOptions;