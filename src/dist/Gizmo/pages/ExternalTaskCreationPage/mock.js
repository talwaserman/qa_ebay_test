"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mockGetExternalTaskCreationRows = void 0;
var mockGetExternalTaskCreationRows = {
  totalCount: {
    totalRows: 2,
    totalPages: 1
  },
  filteredAmlTaskContract: [{
    rowId: '1',
    taskType: 'Product Curation',
    subTaskId: '11',
    site: 'US',
    creationDate: 1579688366167,
    inputFiles: [{
      fileName: 'http://localhost:9009/?path=/story/gizmo-pages-externaltaskcreationpage--default',
      tempUrl: null
    }, {
      fileName: 'META',
      tempUrl: null
    }],
    outputFiles: [{
      fileName: 'File',
      tempUrl: null
    }, {
      fileName: 'META',
      tempUrl: null
    }],
    candidates: '400',
    gizmoTaskId: '5349',
    gimzoTaskStatus: 'DONE',
    sampleName: 'sample2'
  }, {
    rowId: '2',
    taskType: 'Product Curation',
    subTaskId: '22',
    site: 'UK',
    creationDate: 1579688366167,
    inputFiles: [{
      fileName: 'UK',
      tempUrl: null
    }, {
      fileName: 'INFO',
      tempUrl: null
    }],
    outputFiles: [{
      fileName: 'File',
      tempUrl: null
    }, {
      fileName: 'File2',
      tempUrl: null
    }, {
      fileName: 'File3',
      tempUrl: null
    }, {
      fileName: 'File3',
      tempUrl: null
    }, {
      fileName: 'File3',
      tempUrl: null
    }, {
      fileName: 'File3',
      tempUrl: null
    }],
    candidates: '400',
    gizmoTaskId: '7654',
    gimzoTaskStatus: 'IN_PROGRESS',
    sampleName: 'sample1'
  }, {
    rowId: '3',
    taskType: 'Product Curation',
    subTaskId: '33',
    site: 'UK',
    creationDate: 1579688366167,
    inputFiles: [{
      fileName: 'UK',
      tempUrl: null
    }, {
      fileName: 'INFO',
      tempUrl: null
    }],
    outputFiles: [{
      fileName: 'File',
      tempUrl: null
    }, {
      fileName: 'File2',
      tempUrl: null
    }, {
      fileName: 'File3',
      tempUrl: null
    }, {
      fileName: 'File3',
      tempUrl: null
    }, {
      fileName: 'File3',
      tempUrl: null
    }, {
      fileName: 'File3',
      tempUrl: null
    }],
    candidates: '400',
    gizmoTaskId: '8536',
    gimzoTaskStatus: 'IN_PROGRESS',
    sampleName: 'sample2'
  }, {
    rowId: '4',
    taskType: 'Product Curation',
    subTaskId: '44',
    site: 'UK',
    creationDate: 1579688366167,
    inputFiles: [{
      fileName: 'UK',
      tempUrl: null
    }, {
      fileName: 'INFO',
      tempUrl: null
    }],
    outputFiles: [{
      fileName: 'File',
      tempUrl: null
    }, {
      fileName: 'File2',
      tempUrl: null
    }, {
      fileName: 'File3',
      tempUrl: null
    }, {
      fileName: 'File3',
      tempUrl: null
    }, {
      fileName: 'File3',
      tempUrl: null
    }, {
      fileName: 'File3',
      tempUrl: null
    }],
    candidates: '400',
    gizmoTaskId: null,
    gimzoTaskStatus: 'IN_PROGRESS',
    sampleName: 'sample4'
  }, {
    rowId: '5',
    taskType: 'Duplicates',
    subTaskId: '55',
    site: 'UK',
    creationDate: 1579688366167,
    inputFiles: [{
      fileName: 'UK',
      tempUrl: null
    }, {
      fileName: 'INFO',
      tempUrl: null
    }],
    outputFiles: [{
      fileName: 'File',
      tempUrl: null
    }, {
      fileName: 'File2',
      tempUrl: null
    }, {
      fileName: 'File3',
      tempUrl: null
    }, {
      fileName: 'File3',
      tempUrl: null
    }, {
      fileName: 'File3',
      tempUrl: null
    }, {
      fileName: 'File3',
      tempUrl: null
    }],
    candidates: '400',
    gizmoTaskId: null,
    gimzoTaskStatus: 'IN_PROGRESS',
    sampleName: 'sample5'
  }],
  selectOptions: {
    jobStates: [{
      name: 'NEW',
      value: 'NEW'
    }, {
      name: 'OPEN',
      value: 'OPEN'
    }, {
      name: 'IN_PROGRESS',
      value: 'IN_PROGRESS'
    }, {
      name: 'INITIALIZING',
      value: 'INITIALIZING'
    }, {
      name: 'PENDING_APPROVAL',
      value: 'PENDING_APPROVAL'
    }, {
      name: 'DONE',
      value: 'DONE'
    }, {
      name: 'CANCELED',
      value: 'CANCELED'
    }, {
      name: 'ON_HOLD',
      value: 'ON_HOLD'
    }, {
      name: 'QA',
      value: 'QA'
    }],
    sites: [{
      name: 'US',
      value: '0'
    }, {
      name: 'CA',
      value: '2'
    }, {
      name: 'UK',
      value: '3'
    }, {
      name: 'AU',
      value: '15'
    }, {
      name: 'AT',
      value: '16'
    }, {
      name: 'DE',
      value: '77'
    }, {
      name: 'FR',
      value: '71'
    }, {
      name: 'US_MOTORS',
      value: '100'
    }, {
      name: 'IT',
      value: '101'
    }, {
      name: 'ES',
      value: '186'
    }, {
      name: 'IN',
      value: '203'
    }, {
      name: 'IE',
      value: '205'
    }, {
      name: 'CN',
      value: '223'
    }, {
      name: 'NL',
      value: '146'
    }, {
      name: 'IL',
      value: '206'
    }]
  }
};
exports.mockGetExternalTaskCreationRows = mockGetExternalTaskCreationRows;