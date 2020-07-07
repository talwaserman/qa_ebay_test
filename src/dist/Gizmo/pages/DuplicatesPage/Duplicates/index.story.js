"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonViewport = require("@storybook/addon-viewport");

var _addonInfo = require("@storybook/addon-info");

var _addonKnobs = require("@storybook/addon-knobs");

var _mock = require("./DrawerContentMatching/mock");

var _mockDuplicates = require("./mockDuplicates.mock");

var _mockMatching = require("./mockMatching.mock");

require("../../../../../../.storybook/global-style.less");

var _index = _interopRequireDefault(require("./index"));

var clusterMockDataWithEscalated = _mockDuplicates.clusterMockData;
clusterMockDataWithEscalated.nextRowContract.comparedEntityRowContracts.map(function (item) {
  item.escalationInfo = {
    escalatedByUserName: 'Guy g'
  };
  return item;
});
(0, _react2.storiesOf)('Gizmo/pages/Duplicates', module).addParameters({
  viewport: {
    viewports: _addonViewport.INITIAL_VIEWPORTS
  }
}).addDecorator(_addonKnobs.withKnobs).addDecorator(_addonInfo.withInfo).add('default', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement(_index.default, {
    clusterData: _mockDuplicates.clusterMockData,
    updateClusterData: function updateClusterData() {},
    decisions: _mock.mockDuplicateDecisions,
    reasons: _mock.reasonDuplicateMock,
    jobTypeConfiguration: _mockDuplicates.mockConfigurationAllEnabled,
    jobId: _mockDuplicates.clusterMockData.jobId,
    rowsDone: {
      totalDoneToday: _mockDuplicates.clusterMockData.doneRowsContract.totalDoneToday,
      totalDone: _mockDuplicates.clusterMockData.doneRowsContract.totalDone
    },
    loggedInUser: _mockDuplicates.mockAgent,
    saveTask: function saveTask() {},
    saveAll: function saveAll() {},
    changeCategory: function changeCategory() {},
    fetchNextCluster: function fetchNextCluster() {}
  }));
}, {
  notes: 'Duplicates - duplicates page'
});
(0, _react2.storiesOf)('Gizmo/pages/Duplicates', module).addParameters({
  viewport: {
    viewports: _addonViewport.INITIAL_VIEWPORTS
  }
}).addDecorator(_addonKnobs.withKnobs).addDecorator(_addonInfo.withInfo).add('not editable', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement(_index.default, {
    clusterData: _mockDuplicates.clusterMockData,
    updateClusterData: function updateClusterData() {},
    decisions: _mock.mockDuplicateDecisions,
    reasons: _mock.reasonDuplicateMock,
    jobTypeConfiguration: _mockDuplicates.mockConfigurationNotEditable,
    jobId: _mockDuplicates.clusterMockData.jobId,
    rowsDone: {
      totalDoneToday: _mockDuplicates.clusterMockData.doneRowsContract.totalDoneToday,
      totalDone: _mockDuplicates.clusterMockData.doneRowsContract.totalDone
    },
    loggedInUser: _mockDuplicates.mockAgent,
    saveTask: function saveTask() {},
    saveAll: function saveAll() {},
    changeCategory: function changeCategory() {},
    fetchNextCluster: function fetchNextCluster() {}
  }));
}, {
  notes: 'Duplicates - duplicates page'
});
(0, _react2.storiesOf)('Gizmo/pages/Duplicates', module).addParameters({
  viewport: {
    viewports: _addonViewport.INITIAL_VIEWPORTS
  }
}).addDecorator(_addonKnobs.withKnobs).addDecorator(_addonInfo.withInfo).add('without headers', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement(_index.default, {
    clusterData: _mockDuplicates.clusterMockData,
    updateClusterData: function updateClusterData() {},
    decisions: _mock.mockDuplicateDecisions,
    reasons: _mock.reasonDuplicateMock,
    jobTypeConfiguration: _mockDuplicates.mockConfigurationWithoutHeaders,
    jobId: _mockDuplicates.clusterMockData.jobId,
    rowsDone: {
      totalDoneToday: _mockDuplicates.clusterMockData.doneRowsContract.totalDoneToday,
      totalDone: _mockDuplicates.clusterMockData.doneRowsContract.totalDone
    },
    loggedInUser: _mockDuplicates.mockAgent,
    saveTask: function saveTask() {},
    saveAll: function saveAll() {},
    changeCategory: function changeCategory() {},
    fetchNextCluster: function fetchNextCluster() {}
  }));
}, {
  notes: 'Duplicates - duplicates page'
});
(0, _react2.storiesOf)('Gizmo/pages/Duplicates', module).addParameters({
  viewport: {
    viewports: _addonViewport.INITIAL_VIEWPORTS
  }
}).addDecorator(_addonKnobs.withKnobs).addDecorator(_addonInfo.withInfo).add('not editable and without headers', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement(_index.default, {
    clusterData: _mockDuplicates.clusterMockData,
    updateClusterData: function updateClusterData() {},
    decisions: _mock.mockDuplicateDecisions,
    reasons: _mock.reasonDuplicateMock,
    jobTypeConfiguration: _mockDuplicates.mockConfigurationNotEditableAndWithoutHeaders,
    jobId: _mockDuplicates.clusterMockData.jobId,
    rowsDone: {
      totalDoneToday: _mockDuplicates.clusterMockData.doneRowsContract.totalDoneToday,
      totalDone: _mockDuplicates.clusterMockData.doneRowsContract.totalDone
    },
    loggedInUser: _mockDuplicates.mockAgent,
    saveTask: function saveTask() {},
    saveAll: function saveAll() {},
    changeCategory: function changeCategory() {},
    fetchNextCluster: function fetchNextCluster() {}
  }));
}, {
  notes: 'Duplicates - duplicates page'
});
(0, _react2.storiesOf)('Gizmo/pages/Duplicates', module).addParameters({
  viewport: {
    viewports: _addonViewport.INITIAL_VIEWPORTS
  }
}).addDecorator(_addonKnobs.withKnobs).addDecorator(_addonInfo.withInfo).add('with Sent To SuperVisior', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement(_index.default, {
    clusterData: _mockDuplicates.clusterMockData,
    updateClusterData: function updateClusterData() {},
    decisions: _mock.mockDuplicateDecisions,
    reasons: _mock.reasonDuplicateMock,
    jobTypeConfiguration: _mockDuplicates.mockConfigurationNotEditableAndWithoutHeaders,
    jobId: _mockDuplicates.clusterMockData.jobId,
    rowsDone: {
      totalDoneToday: _mockDuplicates.clusterMockData.doneRowsContract.totalDoneToday,
      totalDone: _mockDuplicates.clusterMockData.doneRowsContract.totalDone
    },
    loggedInUser: _mockDuplicates.mockAgent,
    saveTask: function saveTask() {},
    saveAll: function saveAll() {},
    changeCategory: function changeCategory() {},
    fetchNextCluster: function fetchNextCluster() {}
  }));
}, {
  notes: 'Duplicates - duplicates page'
});
(0, _react2.storiesOf)('Gizmo/pages/Duplicates', module).addParameters({
  viewport: {
    viewports: _addonViewport.INITIAL_VIEWPORTS
  }
}).addDecorator(_addonKnobs.withKnobs).addDecorator(_addonInfo.withInfo).add('edit mode', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement(_index.default, {
    clusterData: _mockDuplicates.clusterMockData,
    updateClusterData: function updateClusterData() {},
    decisions: _mock.mockDuplicateDecisions,
    reasons: _mock.reasonDuplicateMock,
    jobTypeConfiguration: _mockDuplicates.mockConfigurationAllEnabled,
    jobId: _mockDuplicates.clusterMockData.jobId,
    rowsDone: {
      totalDoneToday: _mockDuplicates.clusterMockData.doneRowsContract.totalDoneToday,
      totalDone: _mockDuplicates.clusterMockData.doneRowsContract.totalDone
    },
    loggedInUser: _mockDuplicates.mockAgent,
    workMode: 'edit',
    saveTask: function saveTask() {},
    saveAll: function saveAll() {},
    changeCategory: function changeCategory() {},
    fetchNextCluster: function fetchNextCluster() {}
  }));
}, {
  notes: 'Duplicates - duplicates page'
});
(0, _react2.storiesOf)('Gizmo/pages/Duplicates', module).addParameters({
  viewport: {
    viewports: _addonViewport.INITIAL_VIEWPORTS
  }
}).addDecorator(_addonKnobs.withKnobs).addDecorator(_addonInfo.withInfo).add('hide send to supervisor', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement(_index.default, {
    clusterData: _mockDuplicates.clusterMockData,
    updateClusterData: function updateClusterData() {},
    decisions: _mock.mockDuplicateDecisions,
    reasons: _mock.reasonDuplicateMock,
    jobTypeConfiguration: _mockDuplicates.mockConfigurationAllEnabled,
    jobId: _mockDuplicates.clusterMockData.jobId,
    rowsDone: {
      totalDoneToday: _mockDuplicates.clusterMockData.doneRowsContract.totalDoneToday,
      totalDone: _mockDuplicates.clusterMockData.doneRowsContract.totalDone
    },
    loggedInUser: _mockDuplicates.mockSupervisor,
    saveTask: function saveTask() {},
    saveAll: function saveAll() {},
    changeCategory: function changeCategory() {},
    fetchNextCluster: function fetchNextCluster() {}
  }));
}, {
  notes: 'Duplicates - duplicates page'
});
(0, _react2.storiesOf)('Gizmo/pages/Duplicates', module).addParameters({
  viewport: {
    viewports: _addonViewport.INITIAL_VIEWPORTS
  }
}).addDecorator(_addonKnobs.withKnobs).addDecorator(_addonInfo.withInfo).add('with escalated record', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement(_index.default, {
    clusterData: clusterMockDataWithEscalated,
    updateClusterData: function updateClusterData() {},
    decisions: _mock.mockDuplicateDecisions,
    reasons: _mock.reasonDuplicateMock,
    jobTypeConfiguration: _mockDuplicates.mockConfigurationAllEnabled,
    jobId: _mockDuplicates.clusterMockData.jobId,
    rowsDone: {
      totalDoneToday: _mockDuplicates.clusterMockData.doneRowsContract.totalDoneToday,
      totalDone: _mockDuplicates.clusterMockData.doneRowsContract.totalDone
    },
    loggedInUser: _mockDuplicates.mockSupervisor,
    saveTask: function saveTask() {},
    saveAll: function saveAll() {},
    changeCategory: function changeCategory() {},
    fetchNextCluster: function fetchNextCluster() {}
  }));
}, {
  notes: 'Duplicates - duplicates page'
});
(0, _react2.storiesOf)('Gizmo/pages/Duplicates', module).addParameters({
  viewport: {
    viewports: _addonViewport.INITIAL_VIEWPORTS
  }
}).addDecorator(_addonKnobs.withKnobs).addDecorator(_addonInfo.withInfo).add('Matching by Item', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement(_index.default, {
    clusterData: _mockMatching.clusterMockDataGroupByItem,
    updateClusterData: function updateClusterData() {},
    decisions: _mock.mockMatchingDecisions,
    reasons: _mock.reasonMatchingMock,
    jobTypeConfiguration: _mockMatching.mockConfigurationGroupByItem,
    jobId: _mockMatching.clusterMockDataGroupByItem.jobId,
    rowsDone: {
      totalDoneToday: _mockMatching.clusterMockDataGroupByItem.doneRowsContract.totalDoneToday,
      totalDone: _mockMatching.clusterMockDataGroupByItem.doneRowsContract.totalDone
    },
    loggedInUser: _mockDuplicates.mockSupervisor,
    saveTask: function saveTask() {},
    saveAll: function saveAll() {},
    changeCategory: function changeCategory() {},
    fetchNextCluster: function fetchNextCluster() {}
  }));
}, {
  notes: 'Matching - Matching page'
});
(0, _react2.storiesOf)('Gizmo/pages/Duplicates', module).addParameters({
  viewport: {
    viewports: _addonViewport.INITIAL_VIEWPORTS
  }
}).addDecorator(_addonKnobs.withKnobs).addDecorator(_addonInfo.withInfo).add('Matching by Product', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement(_index.default, {
    clusterData: _mockMatching.clusterMockDataGroupByProduct,
    updateClusterData: function updateClusterData() {},
    decisions: _mock.mockMatchingDecisions,
    reasons: _mock.reasonMatchingMock,
    jobTypeConfiguration: _mockMatching.mockConfigurationGroupByProduct,
    jobId: _mockMatching.mockConfigurationGroupByProduct.jobId,
    rowsDone: {
      totalDoneToday: _mockMatching.clusterMockDataGroupByProduct.doneRowsContract.totalDoneToday,
      totalDone: _mockMatching.clusterMockDataGroupByProduct.doneRowsContract.totalDone
    },
    loggedInUser: _mockDuplicates.mockSupervisor,
    saveTask: function saveTask() {},
    saveAll: function saveAll() {},
    changeCategory: function changeCategory() {},
    fetchNextCluster: function fetchNextCluster() {}
  }));
}, {
  notes: 'Matching - Matching page'
});
(0, _react2.storiesOf)('Gizmo/pages/Duplicates', module).addParameters({
  viewport: {
    viewports: _addonViewport.INITIAL_VIEWPORTS
  }
}).addDecorator(_addonKnobs.withKnobs).addDecorator(_addonInfo.withInfo).add('Matching by Product sent to supervisior enabled', function () {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement(_index.default, {
    clusterData: _mockMatching.clusterMockDataGroupByProduct,
    updateClusterData: function updateClusterData() {},
    decisions: _mock.mockMatchingDecisions,
    reasons: _mock.reasonMatchingMock,
    jobTypeConfiguration: _mockMatching.mockConfigurationGroupByProduct,
    jobId: _mockMatching.mockConfigurationGroupByProduct.jobId,
    rowsDone: {
      totalDoneToday: _mockMatching.clusterMockDataGroupByProduct.doneRowsContract.totalDoneToday,
      totalDone: _mockMatching.clusterMockDataGroupByProduct.doneRowsContract.totalDone
    },
    loggedInUser: _mockDuplicates.mockAgent,
    saveTask: function saveTask() {},
    saveAll: function saveAll() {},
    changeCategory: function changeCategory() {}
  }));
}, {
  notes: 'Matching - Matching page sent to supervisior enabled'
});