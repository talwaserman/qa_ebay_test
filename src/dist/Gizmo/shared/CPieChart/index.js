"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CPieChart;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _recharts = require("recharts");

require("./style.less");

function CPieChart(_ref) {
  var data = _ref.data,
      cx = _ref.cx,
      cy = _ref.cy,
      innerRadius = _ref.innerRadius,
      outerRadius = _ref.outerRadius,
      width = _ref.width,
      height = _ref.height;

  if (data.drawingData.innerCircle.data === 0) {
    return renderEmptyResults();
  }

  return renderPieChart();

  function renderEmptyResults() {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "piechart-wrapper"
    }, /*#__PURE__*/_react.default.createElement(LabelDraw, {
      className: 'piechart-label',
      label: data.label
    }), /*#__PURE__*/_react.default.createElement(LabelDraw, {
      className: 'piechart-label-na',
      label: 'N/A'
    }));
  }

  function renderPieChart() {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "piechart-wrapper"
    }, /*#__PURE__*/_react.default.createElement(LabelDraw, {
      className: 'piechart-label',
      label: data.label
    }), /*#__PURE__*/_react.default.createElement(_recharts.PieChart, {
      width: width,
      height: height
    }, /*#__PURE__*/_react.default.createElement(_recharts.Pie, {
      dataKey: "value",
      label: renderActiveShape,
      data: data.drawingData.outerCircle,
      cx: cx,
      cy: cy,
      innerRadius: innerRadius,
      outerRadius: outerRadius
    }, data.drawingData.outerCircle.map(function (entry, index) {
      return /*#__PURE__*/_react.default.createElement(_recharts.Cell, {
        key: index,
        fill: data.drawingConfig.color[data.drawingData.outerCircle[index].label],
        total: data.drawingData.innerCircle.data,
        jobStatus: data.drawingData.outerCircle[index].label
      });
    }))));
  }

  function LabelDraw(_ref2) {
    var className = _ref2.className,
        label = _ref2.label;
    return /*#__PURE__*/_react.default.createElement("div", {
      className: className
    }, label);
  }

  function renderActiveShape(props) {
    var RADIAN = Math.PI / 180;
    var cx = props.cx,
        cy = props.cy,
        midAngle = props.midAngle,
        innerRadius = props.innerRadius,
        outerRadius = props.outerRadius,
        startAngle = props.startAngle,
        endAngle = props.endAngle,
        fill = props.fill,
        percent = props.percent,
        value = props.value,
        total = props.total,
        jobStatus = props.jobStatus;
    var sin = Math.sin(-RADIAN * midAngle);
    var cos = Math.cos(-RADIAN * midAngle);
    var sx = cx + (outerRadius + 10) * cos;
    var sy = cy + (outerRadius + 10) * sin;
    var mx = cx + (outerRadius + 30) * cos;
    var my = cy + (outerRadius + 30) * sin;
    var ex = mx + (cos >= 0 ? 1 : -1) * 22;
    var ey = my;
    var textAnchor = cos >= 0 ? 'start' : 'end';
    return /*#__PURE__*/_react.default.createElement("g", null, /*#__PURE__*/_react.default.createElement("text", {
      x: cx,
      y: cy - 10,
      dy: 8,
      textAnchor: "middle",
      fill: '#5a687b'
    }, total), /*#__PURE__*/_react.default.createElement("text", {
      x: cx,
      y: cy + 10,
      dy: 8,
      textAnchor: "middle",
      fill: '#505d6f',
      style: {
        width: '107.5px',
        height: '27px'
      }
    }, "Total"), /*#__PURE__*/_react.default.createElement(_recharts.Sector, {
      cx: cx,
      cy: cy,
      innerRadius: innerRadius,
      outerRadius: outerRadius,
      startAngle: startAngle,
      endAngle: endAngle,
      fill: fill
    }), /*#__PURE__*/_react.default.createElement("path", {
      d: "M".concat(sx, ",").concat(sy, "L").concat(mx, ",").concat(my, "L").concat(ex, ",").concat(ey),
      stroke: fill,
      fill: "none"
    }), /*#__PURE__*/_react.default.createElement("circle", {
      cx: ex,
      cy: ey,
      r: 2,
      fill: fill,
      stroke: "none"
    }), /*#__PURE__*/_react.default.createElement("text", {
      x: ex + (cos >= 0 ? 1 : -1) * 12,
      y: ey,
      textAnchor: textAnchor,
      fill: "#333"
    }, "".concat(jobStatus)), /*#__PURE__*/_react.default.createElement("text", {
      x: ex + (cos >= 0 ? 1 : -1) * 12,
      y: ey,
      dy: 18,
      textAnchor: textAnchor,
      fill: "#999",
      style: {
        fontSize: '12px'
      }
    }, "".concat(value, " (").concat((percent * 100).toFixed(0), "%)")));
  }
}
/**
 * all props should be addressed here
 */


CPieChart.propTypes = {
  /** data - object used to define the pie chart */
  data: _propTypes.default.object.isRequired,

  /** cx - attribute define the x coordinate of the center of the circle */
  cx: _propTypes.default.number,

  /** cy - attribute define the x and y coordinate of the center of the circle   */
  cy: _propTypes.default.number,

  /** innerRadius - inner radius of the circle   */
  innerRadius: _propTypes.default.number,

  /** outerRadius - outer radius of the circle  */
  outerRadius: _propTypes.default.number,

  /** width - width of pie chart container. */
  width: _propTypes.default.number,

  /** height - height of pie chart container.   */
  height: _propTypes.default.number
};
CPieChart.defaultProps = {
  cx: 300,
  cy: 200,
  innerRadius: 60,
  outerRadius: 80,
  width: 800,
  height: 400
};