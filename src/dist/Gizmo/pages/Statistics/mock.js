"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.apiResponseMock = void 0;
var apiResponseMock = {
  jobHeaderContract: {
    jobId: '3028',
    name: 'Roy Product Curation ',
    description: '',
    type: 'Product Curation',
    state: 'In Progress',
    dueDate: 'N/A',
    createdDate: 'Thu Feb 06 15:26:05 IST 2020',
    priority: 'None',
    owners: ['Doron DM'],
    assignees: [{
      id: 0,
      displayName: 'eBay : QA - Doron',
      dropDownDisplayName: 'QA - Doron',
      vendorTeamLeaders: ['Doron DTL'],
      locales: null,
      organization: '1',
      epids: null,
      groups: ['cff42ee8-d5d4-42be-83a5-2ab3612741a4'],
      assigneeType: 'assignee'
    }],
    triages: [{
      id: 0,
      displayName: 'eBay : QA - Doron',
      dropDownDisplayName: 'QA - Doron',
      vendorTeamLeaders: ['Doron DTL'],
      locales: null,
      organization: '1',
      epids: null,
      groups: ['cff42ee8-d5d4-42be-83a5-2ab3612741a4'],
      assigneeType: 'assignee'
    }],
    dataOptions: 'none',
    tags: null,
    qaSampleSize: 0,
    dmQaSampleSize: 0,
    cancelationInfo: null,
    numberOfComments: null,
    jiraTicket: ''
  },
  statisticsContracts: [{
    label: 'Task Statistics',
    total: 8,
    type: 'Task',
    parts: [{
      label: 'In Progress',
      value: 2
    }, {
      label: 'Done',
      value: 8
    }]
  }, {
    label: 'Sent to Supervisor',
    total: 8,
    type: 'Task',
    parts: [{
      label: 'In Progress',
      value: 3
    }, {
      label: 'Done',
      value: 5
    }]
  }, {
    label: 'Curated Task Statistics',
    total: 9,
    type: 'Task',
    parts: [{
      label: 'Curated',
      value: 3
    }, {
      label: 'Not Curated',
      value: 6
    }]
  }],
  assignmentStatisticsContract: {
    columns: [{
      header: 'Name',
      fieldName: 'name'
    }, {
      header: 'Done',
      fieldName: 'assigneeDisplay'
    }, {
      header: 'Sent to Supervisor',
      fieldName: 'escalatedDisplay'
    }],
    userAssignmentContracts: [{
      name: 'Roy Agent',
      assigneeDisplay: '2/2 (100%)',
      escalatedDisplay: '1/1 (100%)'
    }, {
      name: 'Roy DM  [Supervisor]',
      assigneeDisplay: '2/2 (100%)',
      escalatedDisplay: 'N/A'
    }, {
      name: 'Roy TL  [Supervisor]',
      assigneeDisplay: '2/2 (100%)',
      escalatedDisplay: 'N/A'
    }, {
      name: 'Roy Admin  [Supervisor]',
      assigneeDisplay: '2/2 (100%)',
      escalatedDisplay: 'N/A'
    }]
  }
};
exports.apiResponseMock = apiResponseMock;