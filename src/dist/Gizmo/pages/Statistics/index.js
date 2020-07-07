"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Statistics;

require("antd/es/table/style/css");

var _table = _interopRequireDefault(require("antd/es/table"));

require("antd/es/divider/style/css");

var _divider = _interopRequireDefault(require("antd/es/divider"));

require("antd/es/spin/style/css");

var _spin = _interopRequireDefault(require("antd/es/spin"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _index = _interopRequireDefault(require("../../shared/CPieChart/index"));

var _index2 = _interopRequireDefault(require("../../shared/CardInfoSection/index"));

var _services = require("./services");

require("./style.less");

function Statistics(_ref) {
  var jobId = _ref.jobId;

  var _useState = (0, _react.useState)({
    cardInfoSectionData: null,
    cpiechartDrawDataSuperVisiorData: null,
    cpiechartDrawTaskData: null,
    cpiechartDrawMovedCurationTaskData: null,
    tableDataSource: null,
    tableColumns: null,
    isLoading: true
  }),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      statData = _useState2[0],
      setStatData = _useState2[1];

  var spinerStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%'
  };
  var getStatisticsFunc = (0, _react.useCallback)( /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
    var res;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _services.getStatistics)(jobId);

          case 2:
            res = _context.sent;
            setStatData({
              cardInfoSectionData: extractCardInfoData(res, res.jobHeaderContract.name),
              cpiechartDrawDataSuperVisiorData: extractCpiechartDrawDataSuperVisiorData(res.statisticsContracts[1]),
              cpiechartDrawTaskData: extractCpiechartDrawTaskData(res.statisticsContracts[0]),
              cpiechartDrawMovedCurationTaskData: extractCpiechartDrawMovedCurationTaskData(res.statisticsContracts[2]),
              tableDataSource: extractTableDataSource(res.assignmentStatisticsContract),
              tableColumns: extractTableColumns(res.assignmentStatisticsContract),
              isLoading: false
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), [jobId]);
  (0, _react.useEffect)(function () {
    getStatisticsFunc();
  }, [getStatisticsFunc]);
  var cardInfoSectionData = statData.cardInfoSectionData,
      cpiechartDrawDataSuperVisiorData = statData.cpiechartDrawDataSuperVisiorData,
      cpiechartDrawTaskData = statData.cpiechartDrawTaskData,
      cpiechartDrawMovedCurationTaskData = statData.cpiechartDrawMovedCurationTaskData,
      tableDataSource = statData.tableDataSource,
      tableColumns = statData.tableColumns,
      isLoading = statData.isLoading;

  if (isLoading) {
    return /*#__PURE__*/_react.default.createElement(_spin.default, {
      style: spinerStyle
    });
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "statistics-wrapper"
  }, cardInfoSectionData && /*#__PURE__*/_react.default.createElement(_index2.default, {
    infoData: cardInfoSectionData
  }), /*#__PURE__*/_react.default.createElement(_divider.default, {
    className: "statistics-divider"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "piecharts-wrapper"
  }, renderTaskPieChart(), renderSuperVisiorPieChart(), renderTaskPieChartMovedCuration()), /*#__PURE__*/_react.default.createElement(LabelDraw, {
    label: 'Records assignment per agent',
    className: 'table-title'
  }), tableDataSource && tableColumns && /*#__PURE__*/_react.default.createElement("div", {
    className: "table-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_table.default, {
    pagination: {
      pageSize: 10
    },
    dataSource: tableDataSource,
    columns: tableColumns,
    bordered: true
  })));

  function renderSuperVisiorPieChart() {
    return cpiechartDrawDataSuperVisiorData && /*#__PURE__*/_react.default.createElement(_index.default, {
      width: 500,
      height: 300,
      cx: 240,
      cy: 150,
      outerRadius: 85,
      data: cpiechartDrawDataSuperVisiorData
    });
  }

  function renderTaskPieChart() {
    return cpiechartDrawTaskData && /*#__PURE__*/_react.default.createElement(_index.default, {
      width: 500,
      height: 300,
      cx: 240,
      cy: 150,
      outerRadius: 85,
      data: cpiechartDrawTaskData
    });
  }

  function renderTaskPieChartMovedCuration() {
    return cpiechartDrawMovedCurationTaskData && /*#__PURE__*/_react.default.createElement(_index.default, {
      width: 500,
      height: 300,
      cx: 240,
      cy: 150,
      outerRadius: 85,
      data: cpiechartDrawMovedCurationTaskData
    });
  }

  function LabelDraw(_ref3) {
    var className = _ref3.className,
        label = _ref3.label;
    return /*#__PURE__*/_react.default.createElement("div", {
      className: className
    }, label);
  }

  function extractCardInfoData(data, taskName) {
    var cardInfoSectionData = [{
      label: 'Task Name',
      value: taskName
    }, {
      label: 'Owners',
      value: data.jobHeaderContract.owners
    }, {
      label: 'Vendor TLs',
      value: data.jobHeaderContract.assignees[0].vendorTeamLeaders
    }, {
      label: 'Organization',
      value: 'eBay'
    }, {
      label: 'Date Created',
      value: !data.jobHeaderContract.createdDate ? 'N/A' : data.jobHeaderContract.createdDate
    }];
    return cardInfoSectionData;
  }

  function extractCpiechartDrawTaskData(data) {
    var CpiechartDrawTaskData = [];

    if (data) {
      CpiechartDrawTaskData.push({
        label: data.label,
        drawingData: {
          innerCircle: {
            data: data.total,
            label: 'Total'
          },
          outerCircle: data.parts
        },
        drawingConfig: {
          color: {
            'In Progress': '#ffe700',
            Done: '#2cd9c5',
            'Not Done': '#edf0f4'
          }
        }
      });
    }

    return CpiechartDrawTaskData[0];
  }

  function extractCpiechartDrawDataSuperVisiorData(data) {
    var CpiechartDrawTaskData = [];

    if (data) {
      CpiechartDrawTaskData.push({
        label: data.label,
        drawingData: {
          innerCircle: {
            data: data.total,
            label: 'Total'
          },
          outerCircle: data.parts
        },
        drawingConfig: {
          color: {
            'In Progress': '#2cd9c5',
            Done: '#ff8f6d'
          }
        }
      });
    }

    return CpiechartDrawTaskData[0];
  }

  function extractCpiechartDrawMovedCurationTaskData(data) {
    var CpiechartDrawTaskData = [];

    if (data) {
      CpiechartDrawTaskData.push({
        label: data.label,
        drawingData: {
          innerCircle: {
            data: data.total,
            label: 'Total'
          },
          outerCircle: data.parts
        },
        drawingConfig: {
          color: {
            Curated: '#FF69B4',
            'Not Curated': '#2cd9c5'
          }
        }
      });
    }

    return CpiechartDrawTaskData[0];
  }

  function extractTableDataSource(data) {
    var tableDataSource = [];
    var i = 0;
    data.userAssignmentContracts.map(function (item) {
      return tableDataSource.push({
        key: parseInt(i++),
        name: item.name,
        assigneeDisplay: item.assigneeDisplay,
        escalatedDisplay: item.escalatedDisplay
      });
    });
    return tableDataSource;
  }

  function extractTableColumns(data) {
    var tableColumns = [];
    data.columns.map(function (item) {
      return tableColumns.push({
        title: item.header,
        dataIndex: item.fieldName,
        key: item.fieldName
      });
    });
    return tableColumns;
  }
}

Statistics.propTypes = {
  /** jobId - query field to get data for */
  jobId: _propTypes.default.number.isRequired
};