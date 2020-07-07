"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRowsByMatchingJob = exports.getRowsByJob = void 0;
var getRowsByJob = {
  totalCount: {
    totalRows: 3,
    totalPages: 1
  },
  filteredRows: [{
    rowId: '5e1737b9b06964451d9c43cd',
    survivorEpid: '11000700544',
    survivorTitle: 'Apple iphone 7 Black SONY',
    victimEpid: '17000701346',
    victimTitle: 'Apple iphone 7 Black SONY',
    observationReason: 'Oded',
    decision: 'DUPLICATES',
    assignee: 'Tal Admin',
    entitiesChanged: 'No',
    qaed: false,
    date: '1580805723217'
  }, {
    rowId: '5e1737b9b06964451d9c43ce',
    survivorEpid: '170087765',
    survivorTitle: 'LG G2 D801 - 16GB - Black (Wind Mobile) Smartphone',
    victimEpid: '162321749',
    victimTitle: 'Apple iPhone SE - 128GB - Silver (Fido) (CA)',
    observationReason: 'Oded',
    decision: 'DUPLICATES',
    assignee: 'Tal Admin',
    entitiesChanged: 'Yes (no changes)',
    qaed: true,
    date: '1580805723218'
  }, {
    rowId: '5e1737b9b06964451d9c43cc',
    survivorEpid: '1703474934',
    survivorTitle: '#',
    victimEpid: '228382037',
    victimTitle: 'Apple iPhone 7 Plus - 256GB - Black (Rogers Wireless) A1784 (GSM) (CA)',
    observationReason: 'SKIP',
    decision: 'DUPLICATES',
    assignee: 'Tal Admin',
    entitiesChanged: 'Yes (with changes)',
    qaed: true,
    date: '1580805723217'
  }],
  selectOptions: {
    productDuplicateActions: [{
      name: 'DUPLICATES',
      value: 'DUPLICATES'
    }, {
      name: 'NON_DUPLICATES',
      value: 'NON_DUPLICATES'
    }, {
      name: 'SKIP',
      value: 'SKIP'
    }],
    users: [{
      name: 'Tal Admin',
      value: '5d4c0b5f3dbda31c6cf0fc8a'
    }],
    curatedOptions: [{
      name: 'Yes (with changes)',
      value: '[{"makeDecision":true},{"isChanged":true}]'
    }, {
      name: 'Yes (no changes)',
      value: '[{"makeDecision":true},{"isChanged":false}]'
    }, {
      name: 'No',
      value: '[{"makeDecision":false},{"isChanged":false}]'
    }],
    observationReasons: [{
      name: 'Oded bla bla bla blsa bla',
      value: 'Oded bla bla bla blsa bla'
    }, {
      name: 'SKIP',
      value: 'SKIP'
    }, {
      name: 'test 1',
      value: 'test 1'
    }, {
      name: 'Oded',
      value: 'Oded'
    }, {
      name: 'Not Good',
      value: 'Not Good'
    }, {
      name: 'MM',
      value: 'MM'
    }],
    qaOptions: [{
      name: 'Yes',
      value: 'true'
    }, {
      name: 'No',
      value: 'false'
    }]
  }
};
exports.getRowsByJob = getRowsByJob;
var getRowsByMatchingJob = {
  totalCount: {
    totalRows: 1,
    totalPages: 1
  },
  filteredRows: [{
    rowId: '5edf36001990be08888377e3',
    site: '0',
    category: '99',
    epid: '502504563',
    productTitle: 'Vlevel Groupid 12 24 23 49 33ef V 3',
    itemId: '120012897224',
    variationId: '420003391732',
    decision: 'CORRECT',
    reason: 'Accessories/Parts',
    comment: null,
    aspects: null,
    adoptionMethod: '1003',
    agent: 'Mira Admin',
    date: '2020-06-09T10:22:12',
    qaed: false
  }],
  selectOptions: {
    decisions: [{
      name: 'WRONG',
      value: 'WRONG'
    }, {
      name: 'CORRECT',
      value: 'CORRECT'
    }, {
      name: 'SKIP',
      value: 'SKIP'
    }],
    users: [{
      name: 'Mira Admin',
      value: '5acf061bfa1dad1f5fe9360a'
    }]
  }
};
exports.getRowsByMatchingJob = getRowsByMatchingJob;