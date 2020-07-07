import React from 'react';
import Duplicates from './dist/Gizmo/pages/DuplicatesPage/Duplicates';
import {
  reasonDuplicateMock,
  mockDuplicateDecisions
} from './dist/Gizmo/pages/DuplicatesPage/Duplicates/DrawerContentMatching/mock';

import {
  mockConfigurationAllEnabled,
  mockAgent,
  clusterMockData
} from './dist/Gizmo/pages/DuplicatesPage/Duplicates/mockDuplicates.mock';

import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      <Duplicates
          clusterData={clusterMockData}
          updateClusterData={() => {}}
          decisions={mockDuplicateDecisions}
          reasons={reasonDuplicateMock}
          jobTypeConfiguration={mockConfigurationAllEnabled}
          jobId={clusterMockData.jobId}
          rowsDone={{
            totalDoneToday: clusterMockData.doneRowsContract.totalDoneToday,
            totalDone: clusterMockData.doneRowsContract.totalDone
          }}
          loggedInUser={mockAgent}
          saveTask={() => {}}
          saveAll={() => {}}
          changeCategory={() => {}}
          fetchNextCluster={() => {}}
        />
    </div>
  );
}

export default App;
