"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mockAgent = exports.assignRowResponseMock = exports.getUsersResponseMock = exports.batchEntityTypesResponseMock = void 0;
var batchEntityTypesResponseMock = {
  entityTypeRowContractList: [{
    id: '1',
    name: 'shoes',
    numberOfCategories: 10,
    assigneeId: '5745aa02437fd1caebf2309b',
    status: 'Aspect Translation',
    etSites: generateEtSites()
  }, {
    id: '2',
    name: 'shoes',
    numberOfCategories: 20,
    assigneeId: null,
    status: 'Aspect Translation',
    etSites: generateEtSites()
  }, {
    id: '3',
    name: 'shoes',
    numberOfCategories: 30,
    assigneeId: null,
    status: 'Aspect Translation',
    etSites: generateEtSites()
  }, {
    id: '4',
    name: 'shoes',
    numberOfCategories: 40,
    assigneeId: null,
    status: 'Aspect Design',
    etSites: generateEtSites()
  }, {
    id: '5',
    name: 'shoes',
    numberOfCategories: 50,
    assigneeId: null,
    status: 'Aspect Design',
    etSites: generateEtSites()
  }],
  totalCount: {
    totalRows: 4,
    totalPages: 1
  }
};
exports.batchEntityTypesResponseMock = batchEntityTypesResponseMock;
var getUsersResponseMock = {
  users: [{
    userId: '5745aa02437fd1caebf2309b',
    userName: 'Admin',
    display: 'John Oliver'
  }, {
    userId: '57481a852c04751b35802557',
    userName: 'lAzaria',
    display: 'Lee Azaria'
  }, {
    userId: '5767adb72c047563b1d82f12',
    userName: 'eTene',
    display: 'Ely Tene'
  }, {
    userId: '574d2df72c047549ed7959c6',
    userName: 'Ziv',
    display: 'Ziv Yogev'
  }]
};
exports.getUsersResponseMock = getUsersResponseMock;
var assignRowResponseMock = {
  userId: '123',
  display: 'test user'
};
exports.assignRowResponseMock = assignRowResponseMock;
var mockAgent = {
  display: 'Roy Agent',
  userId: '59e46dc5b9d7f33225eec311',
  userName: 'rbenenosh',
  firstName: 'Roy',
  lastName: 'Agent',
  role: 'Agent',
  rank: 2147483647,
  groups: [{
    organizationId: 0,
    organizationName: null,
    groupId: 'cff42ee8-d5d4-42be-83a5-2ab3612741a4',
    groupName: null
  }],
  email: 'rbenenosh@ebay.com',
  languages: 5[('English', 'French', 'Spanish', 'German', 'Italian')],
  tmsAuthorizations: false,
  createTmsUser: null,
  organization: 1,
  organizationName: null,
  groupIds: ['cff42ee8-d5d4-42be-83a5-2ab3612741a4'],
  active: false,
  isUserSupervisor: false
};
exports.mockAgent = mockAgent;

function generateEtSites() {
  return [{
    site: 'US',
    numberOfCategories: 4,
    assignee: '57481a852c04751b35802557',
    numberOfTranslatedAspects: 1,
    totalAspects: 10
  }, {
    site: 'UK',
    numberOfCategories: 4,
    assignee: '57481a852c04751b35802557',
    numberOfTranslatedAspects: 2,
    totalAspects: 10
  }, {
    site: 'AU',
    numberOfCategories: 2,
    assignee: '57481a852c04751b35802557',
    numberOfTranslatedAspects: 3,
    totalAspects: 10
  }, {
    site: 'DE',
    numberOfCategories: 2,
    assignee: '57481a852c04751b35802557',
    numberOfTranslatedAspects: 4,
    totalAspects: 10
  }, {
    site: 'FR',
    numberOfCategories: 2,
    assignee: '57481a852c04751b35802557',
    numberOfTranslatedAspects: 5,
    totalAspects: 10
  }];
}