"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteNotificationResponse = exports.getNotificationTypeResponse = exports.getUsersResponse = exports.addNotificationMockResponse = exports.notificationsListMock = void 0;
var notificationsListMock = {
  notifications: [{
    type: 'externalTask',
    activity: 'activity ended',
    users: [{
      id: '53481a852c04751b35802557',
      display: 'Adam'
    }, {
      id: '51481a852c04751b35802557',
      display: 'Adam2'
    }]
  }, {
    type: 'externalTask',
    activity: 'activity ended',
    users: [{
      id: '53481a852c04751b35802557',
      display: 'Adam'
    }, {
      id: '51481a852c04751b35802557',
      display: 'Adam2'
    }]
  }, {
    type: 'externalTask',
    activity: 'activity ended',
    users: [{
      id: '57481a852c04751b35802557',
      display: 'Lee Azaria'
    }, {
      id: '51481a852c04751b35802557',
      display: 'Adam2'
    }]
  }, {
    type: 'curation',
    activity: 'activity1 ended',
    users: [{
      id: '5745aa02437fd1caebf2309b',
      display: 'BigBoss'
    }]
  }, {
    type: 'valueApproval',
    activity: 'activity2 ended',
    users: [{
      id: '5745aa02437fd1caebf2309a',
      display: 'Admin2'
    }, {
      id: '5745aa02437fd1caebf2309b',
      display: 'Admin1'
    }]
  }]
};
exports.notificationsListMock = notificationsListMock;
var addNotificationMockResponse = {};
exports.addNotificationMockResponse = addNotificationMockResponse;
var deleteNotificationResponse = {};
exports.deleteNotificationResponse = deleteNotificationResponse;
var getUsersResponse = {
  users: [{
    userId: '5745aa02437fd1caebf2309b',
    userName: 'Admin',
    display: 'BigBoss'
  }, {
    userId: '57481a852c04751b35802557',
    userName: 'lazaria',
    display: 'Lee Azaria'
  }, {
    userId: '5767ada82c047563b1d82f0d',
    userName: 'avigal',
    display: 'avigal avigal'
  }, {
    userId: '5767adb72c047563b1d82f12',
    userName: 'etene',
    display: 'Ely Tene'
  }, {
    userId: '574d2df72c047549ed7959c6',
    userName: 'ziv',
    display: 'ziv ziv'
  }]
};
exports.getUsersResponse = getUsersResponse;
var getNotificationTypeResponse = {
  typeToActivities: {
    'PRP Feedback': ['new feedback'],
    Duplicate: ['new external task'],
    externalTask: ['activity ended', 'activity ended 2'],
    curation: ['activity1 ended']
  }
};
exports.getNotificationTypeResponse = getNotificationTypeResponse;