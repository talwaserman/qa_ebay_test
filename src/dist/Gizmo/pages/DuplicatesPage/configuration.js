"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configuration = void 0;
var configuration = {
  matching: {
    // option 1 - Correct match
    // option 2 - Wrong match
    // option 3 - Skip
    reasons: {
      option1: ['Accessories/Parts', 'Aspects', 'Broken Link', 'Bundle Item', 'Bundle Product', 'Compatibility', 'Contradiction Image', 'Different local', 'Different Product Types', 'EPID has been removed', 'Item contradicting data', 'Item insufficient data', 'Listing ended', 'Lot EPID', 'Lot Item', 'Missing Aspect', 'MPN', 'Product contradicting data', 'Product insufficient data', 'UPC', 'Invalid item data', 'Invalid product data', 'Item is too Generic', 'Product is MLG', 'Other'],
      option2: ['Contradiction Product', 'Insufficient Product', 'Mlg Product'],
      option3: ['Accessories/Parts', 'Aspects', 'Broken Link', 'Bundle Item', 'Bundle Product', 'Compatibility', 'Contradiction Image', 'Different local', 'Different Product Types', 'EPID has been removed', 'Item contradicting data', 'Item insufficient data', 'Listing ended', 'Lot EPID', 'Lot Item', 'Missing Aspect', 'MPN', 'Product contradicting data', 'Product insufficient data', 'UPC', 'Invalid item data', 'Invalid product data', 'Item is too Generic', 'Product is MLG', 'Other']
    }
  },
  duplicates: [{
    decision: 'DUPLICATES',
    reason: 'duplicates reason',
    explanation: 'this is the explenation 1'
  }, {
    decision: 'DUPLICATES',
    reason: 'Different attribute',
    explanation: 'this is the explenation 1'
  }, {
    decision: 'NON_DUPLICATES',
    reason: 'non duplicate reason',
    explanation: 'this is the explenation 2'
  }, {
    decision: 'SKIP',
    reason: 'skip reason',
    explanation: 'this is the explenation 3'
  }],
  hardCodedDuplicates: {
    // option 1 - yes
    // option 2 - skip
    // option 3 - no
    reasons: {
      option1: ['Only Identical UPI(s)', 'Only Identical Title', 'Only Identical DATA'],
      option2: ['Cant Validate - prod1', 'Cant Validate - prod2', 'Cant Validate - both products', 'Insufficient - prod1', 'Insufficient - prod2', 'Merged - prod1', 'Merged - prod2', 'Merged - Both products', 'Deleted - prod1', 'Deleted - prod2', 'Deleted - Both products'],
      option3: ['Different Attribute', 'Different Products', 'Different Granularity', 'Conflict Data - prod1', 'Conflict Data - prod2', 'Conflict Data - both products', 'Mixed Results - prod1', 'Mixed Results - prod2', 'Mixed Results - Both Products', 'Invalid - prod1', 'Invalid - prod2', 'Invalid - Both products']
    }
  }
};
exports.configuration = configuration;