"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = UpdateEntityType;

require("antd/es/date-picker/style/css");

var _datePicker = _interopRequireDefault(require("antd/es/date-picker"));

require("antd/es/input/style/css");

var _input = _interopRequireDefault(require("antd/es/input"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

require("./style.less");

var _react = _interopRequireWildcard(require("react"));

var _cloneDeep = _interopRequireDefault(require("lodash/cloneDeep"));

var _moment = _interopRequireDefault(require("moment"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function UpdateEntityType(_ref) {
  var mode = _ref.mode,
      batchDetails = _ref.batchDetails,
      handleModalChange = _ref.handleModalChange;
  var batchNameTitle = mode === 'add' ? 'Batch Name' : 'Upadate Batch Name';

  var _useState = (0, _react.useState)({
    batchDetails: batchDetails
  }),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      etBatch = _useState2[0],
      setEtBatch = _useState2[1];

  (0, _react.useEffect)(function () {
    setEtBatch(batchDetails);
  }, [batchDetails]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "update-et-batch-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "update-et-batch-block"
  }, /*#__PURE__*/_react.default.createElement("label", null, batchNameTitle), /*#__PURE__*/_react.default.createElement("div", {
    className: "et-batch-block-input"
  }, /*#__PURE__*/_react.default.createElement(_input.default, {
    type: "text",
    placeholder: "Enter Release Name",
    value: etBatch.name,
    onChange: function onChange(e) {
      return onNameChanged(e.target.value);
    }
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "update-et-batch-block"
  }, /*#__PURE__*/_react.default.createElement("label", null, "Batch Due Date"), /*#__PURE__*/_react.default.createElement("div", {
    className: "et-batch-block-input"
  }, /*#__PURE__*/_react.default.createElement(_datePicker.default, {
    placeholder: "Enter Due Date",
    value: etBatch.dueDate ? (0, _moment.default)(etBatch.dueDate) : null,
    style: {
      width: '100%'
    },
    onChange: onDueDateChanged
  }))));

  function onNameChanged(batchName) {
    var tempEtBatch = (0, _cloneDeep.default)(etBatch);
    tempEtBatch.name = batchName;
    setEtBatch(tempEtBatch);
    var isModalOkDisabled = shouldDisableModal(tempEtBatch);
    handleModalChange(tempEtBatch, isModalOkDisabled);
  }

  function onDueDateChanged(date, dateString) {
    var tempEtBatch = (0, _cloneDeep.default)(etBatch);

    if (date == null) {
      tempEtBatch.dueDate = (0, _moment.default)(null);
    } else {
      // converting from moment to date
      tempEtBatch.dueDate = (0, _moment.default)(date).startOf('day').toDate();
    }

    setEtBatch(tempEtBatch);
    var isModalOkDisabled = shouldDisableModal(tempEtBatch);
    handleModalChange(tempEtBatch, isModalOkDisabled);
  }

  function shouldDisableModal(etBach) {
    return etBach.name.length === 0 || etBach.dueDate && etBach.dueDate.isValid && !etBach.dueDate.isValid();
  }
}

UpdateEntityType.propTypes = {
  /** mode - save or update Entity Type */
  mode: _propTypes.default.string.isRequired,

  /** batchDetails - batch upload details */
  batchDetails: _propTypes.default.object
};
UpdateEntityType.defaultProps = {
  mode: 'save',
  batchDetails: {}
};