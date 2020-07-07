"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mockDuplicateDecisions = exports.mockMatchingTaskConfiguration = exports.mockDuplicateTaskConfiguration = exports.mockMatchingDecisions = exports.reasonMatchingMock = exports.reasonDuplicateMock = void 0;
// option 1 - yes
// option 2 - skip
// option 3 - no
var reasonDuplicateMock = [{
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
}];
exports.reasonDuplicateMock = reasonDuplicateMock;
var reasonMatchingMock = {
  option1: ['Accessories/Parts', 'Aspects', 'Broken Link', 'Bundle Item', 'Bundle Product', 'Compatibility', 'Contradiction Image', 'Different local', 'Different Product Types', 'EPID has been removed', 'Item contradicting data', 'Item insufficient data', 'Listing ended', 'Lot EPID', 'Lot Item', 'Missing Aspect', 'MPN', 'Product contradicting data', 'Product insufficient data', 'UPC', 'Invalid item data', 'Invalid product data', 'Item is too Generic', 'Product is MLG', 'Other'],
  option2: ['Contradiction Product', 'Insufficient Product', 'Mlg Product'],
  option3: ['Accessories/Parts', 'Aspects', 'Broken Link', 'Bundle Item', 'Bundle Product', 'Compatibility', 'Contradiction Image', 'Different local', 'Different Product Types', 'EPID has been removed', 'Item contradicting data', 'Item insufficient data', 'Listing ended', 'Lot EPID', 'Lot Item', 'Missing Aspect', 'MPN', 'Product contradicting data', 'Product insufficient data', 'UPC', 'Invalid item data', 'Invalid product data', 'Item is too Generic', 'Product is MLG', 'Other']
};
exports.reasonMatchingMock = reasonMatchingMock;
var mockMatchingDecisions = [{
  leftEntityId: '170087765',
  rightEntityId: '120006338031',
  selectedOption: null,
  decisionInfo: {
    reason: {
      value: 'Only Identical UPI(s)',
      mandatory: false
    },
    observation: {
      value: null,
      mandatory: true
    },
    comment: {
      value: 'Some comment...',
      mandatory: true
    },
    urls: [{
      name: 'URL 1',
      url: 'http://mock-url1.com'
    }, {
      name: 'URL 2',
      url: 'http://mock-url1.com'
    }],
    additionalInfo: [{
      name: 'info1',
      value: 'Info Value 1',
      mandatory: true
    }, {
      name: 'info2',
      value: 'Info value 2',
      mandatory: false
    }],
    sendToSupervisor: false
  }
}, {
  leftEntityId: '170087765',
  rightEntityId: '120006338032',
  selectedOption: null,
  decisionInfo: {
    reason: {
      value: 'testing...',
      mandatory: true
    },
    observation: {
      value: null,
      mandatory: true
    },
    comment: {
      value: '',
      mandatory: true
    },
    urls: [{
      name: 'URL 1',
      url: ''
    }, {
      name: 'URL 2',
      url: ''
    }],
    additionalInfo: [{
      name: 'info1',
      value: '',
      mandatory: true
    }, {
      name: 'info2',
      value: '',
      mandatory: false
    }],
    sendToSupervisor: false
  }
}, {
  leftEntityId: '170087765',
  rightEntityId: '120006338034',
  selectedOption: null,
  decisionInfo: {
    reason: {
      value: '',
      mandatory: false
    },
    observation: {
      value: null,
      mandatory: true
    },
    comment: {
      value: '',
      mandatory: true
    },
    urls: [{
      name: 'URL 1',
      url: ''
    }, {
      name: 'URL 2',
      url: ''
    }],
    additionalInfo: [{
      name: 'info1',
      value: '',
      mandatory: true
    }, {
      name: 'info2',
      value: '',
      mandatory: false
    }],
    sendToSupervisor: false
  }
}];
exports.mockMatchingDecisions = mockMatchingDecisions;
var mockDuplicateDecisions = [{
  leftEntityId: '170087765',
  rightEntityId: '120006338031',
  selectedOption: null,
  decisionInfo: {
    reason: {
      value: 'Only Identical UPI(s)',
      mandatory: false
    },
    observation: {
      value: null,
      mandatory: true
    },
    comment: {
      value: 'Some comment...',
      mandatory: true
    },
    urls: [{
      name: 'URL 1',
      url: 'http://mock-url1.com',
      indication: 'Victim'
    }, {
      name: 'URL 2',
      url: 'http://mock-url1.com',
      indication: 'Survivor'
    }],
    additionalInfo: [{
      name: 'Mandatory Field 1',
      value: 'Info Value 1',
      mandatory: true
    }, {
      name: 'Mandatory Field 2',
      value: 'Info value 2',
      mandatory: false
    }],
    sendToSupervisor: false
  }
}, {
  leftEntityId: '170087765',
  rightEntityId: '120006338032',
  selectedOption: null,
  decisionInfo: {
    reason: {
      value: 'testing...',
      mandatory: true
    },
    observation: {
      value: null,
      mandatory: true
    },
    comment: {
      value: '',
      mandatory: true
    },
    urls: [{
      name: 'URL 1',
      url: 'http://mock-url1.com',
      indication: 'Survivor'
    }, {
      name: 'URL 2',
      url: 'http://mock-url2.com',
      indication: 'Survivor'
    }],
    additionalInfo: [{
      name: 'Mandatory Field 1',
      value: 'Info Value 1',
      mandatory: true
    }, {
      name: 'Mandatory Field 2',
      value: 'Info value 2',
      mandatory: false
    }],
    sendToSupervisor: false
  }
}, {
  leftEntityId: '170087765',
  rightEntityId: '120006338034',
  selectedOption: null,
  decisionInfo: {
    reason: {
      value: '',
      mandatory: false
    },
    observation: {
      value: null,
      mandatory: true
    },
    comment: {
      value: '',
      mandatory: true
    },
    urls: [{
      name: 'URL 1',
      url: '',
      indication: ''
    }, {
      name: 'URL 2',
      url: '',
      indication: ''
    }],
    additionalInfo: [{
      name: 'Mandatory Field 1',
      value: 'Info Value 1',
      mandatory: true
    }, {
      name: 'Mandatory Field 2',
      value: 'Info value 2',
      mandatory: false
    }],
    sendToSupervisor: false
  }
}];
exports.mockDuplicateDecisions = mockDuplicateDecisions;
var mockDuplicateTaskConfiguration = {
  taskConfiguration: {
    taskId: '5df2319db8c61b334ca22f48',
    name: 'Dup Test Config',
    type: 'Duplicates'
  },
  configurationResponse: {
    mainMandatoryFields: [{
      fieldName: 'Mandatory Field 1',
      mandatory: false,
      fieldType: 'Free Text',
      values: []
    }, {
      fieldName: 'Mandatory Field 2',
      mandatory: true,
      fieldType: 'Dropdown',
      values: ['aa', 'bb']
    }],
    hiddenFieldsGroups: [{
      groupName: 'NOENTITYTYPE',
      displayName: 'Non UMS aspects',
      message: 'Non UMS aspects',
      hide: false
    }, {
      groupName: 'HideEntityAspect',
      displayName: 'Hidden GH aspects',
      message: 'Hidden GH aspects',
      hide: false
    }, {
      groupName: 'AspectUsage',
      displayName: 'Listing related aspects',
      message: 'Listing related aspects',
      hide: false
    }],
    sourceInformation: {
      vendor: 'eBay SDO',
      sourceType: 'SDO Enrichment',
      sourcingMethod: 'Vendors',
      track: 'Top Products',
      allowComparison: true,
      sendFullSnapshot: true
    },
    clusterStrategy: 'None',
    updatePlatformRedirect: true,
    updatePlatformProduct: true,
    enableProductCuration: true,
    survivorProvided: true,
    addCrawling: false,
    onlyLive: true
  }
};
exports.mockDuplicateTaskConfiguration = mockDuplicateTaskConfiguration;
var mockMatchingTaskConfiguration = {
  taskConfiguration: {
    taskId: '5eb93ee4251bea2615b198d0',
    name: 'Ziv',
    type: 'Matching'
  },
  configurationResponse: {
    additionalFields: [{
      fieldName: 'info1',
      mandatory: true,
      fieldType: 'Free Text',
      values: []
    }, {
      fieldName: 'info2',
      mandatory: false,
      fieldType: 'Dropdown',
      values: ['1', '2', '3', '4', '5']
    }],
    productCurationConfigurationContract: {
      taskId: '5d5541276d2ad52dd135569d',
      name: 'Product Curation Test - Doron',
      type: 'Product Curation'
    },
    groupByType: 'Item',
    updateOnSubmit: true,
    enableProductCuration: false,
    survivorProvided: false
  }
};
exports.mockMatchingTaskConfiguration = mockMatchingTaskConfiguration;