"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AdditionalFieldSelect;

require("antd/es/input/style/css");

var _input = _interopRequireDefault(require("antd/es/input"));

require("antd/es/tooltip/style/css");

var _tooltip = _interopRequireDefault(require("antd/es/tooltip"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

require("antd/es/select/style/css");

var _select = _interopRequireDefault(require("antd/es/select"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _get = _interopRequireDefault(require("lodash/get"));

var Option = _select.default.Option;

function AdditionalFieldSelect(_ref) {
  var jobTypeConfiguration = _ref.jobTypeConfiguration,
      isManadatory = _ref.isManadatory,
      changedInfoItem = _ref.changedInfoItem,
      itemIndex = _ref.itemIndex,
      style = _ref.style,
      infoItem = _ref.infoItem;

  var _useState = (0, _react.useState)(infoItem.value || []),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      additionalFieldValue = _useState2[0],
      setAdditionalFieldValue = _useState2[1];

  var jobType = jobTypeConfiguration.taskConfiguration.type.toLowerCase();
  var matchingJobType = jobType === 'matching';
  var additionalFieldsMap = (0, _get.default)(jobTypeConfiguration, 'configurationResponse.additionalFields', []).reduce(function (obj, item) {
    obj[item.fieldName] = item;
    return obj;
  }, {});
  var mainMandatoryFieldsMap = (0, _get.default)(jobTypeConfiguration, 'configurationResponse.mainMandatoryFields', []).reduce(function (obj, item) {
    obj[item.fieldName] = item;
    return obj;
  }, {});
  var fieldType = matchingJobType ? additionalFieldsMap[infoItem.name].fieldType : mainMandatoryFieldsMap[infoItem.name].fieldType;
  var dropDownValues = matchingJobType ? additionalFieldsMap[infoItem.name].values : mainMandatoryFieldsMap[infoItem.name].values;
  (0, _react.useEffect)(function () {
    setAdditionalFieldValue(infoItem.value);
  }, [infoItem.value]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "additional-field-select-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "label-name"
  }, /*#__PURE__*/_react.default.createElement(_tooltip.default, {
    placement: "top",
    title: infoItem.name
  }, /*#__PURE__*/_react.default.createElement("label", null, infoItem.name, ":", isManadatory))), fieldType === 'Free Text' && /*#__PURE__*/_react.default.createElement(_input.default, {
    type: "text",
    value: additionalFieldValue,
    onChange: function onChange(e) {
      return _onChange(e.target.value, itemIndex);
    },
    style: style
  }), fieldType === 'Dropdown' && /*#__PURE__*/_react.default.createElement(_select.default, {
    dropdownStyle: {
      position: 'fixed'
    },
    dropdownMenuStyle: {
      maxHeight: '100px'
    },
    value: additionalFieldValue,
    placeholder: 'select value',
    onChange: function onChange(value) {
      return _onChange(value, itemIndex);
    },
    style: style
  }, dropDownValues.map(function (dropdownValue) {
    return /*#__PURE__*/_react.default.createElement(Option, {
      key: dropdownValue,
      value: dropdownValue
    }, dropdownValue);
  })));

  function _onChange(value, itemIndex) {
    setAdditionalFieldValue(value);
    changedInfoItem(value, itemIndex);
  }
}

AdditionalFieldSelect.propTypes = {
  /** jobTypeConfiguration - job type data - such as type and additioal/mandatory fields configuration */
  jobTypeConfiguration: _propTypes.default.object.isRequired,

  /** itemIndex - poision where to store the selected item */
  itemIndex: _propTypes.default.number.isRequired,

  /** changedInfoItem - function used to update the selected infoItem */
  changedInfoItem: _propTypes.default.func.isRequired,

  /** initialValue - initial selected value to show in the Aspect dropdown */
  defaultValue: _propTypes.default.string.isRequired,

  /** isManadatory - should return mandatory sign or empty string */
  isManadatory: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.string])
};
AdditionalFieldSelect.defaultProps = {};