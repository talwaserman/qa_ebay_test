"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FastMultiSelect;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

require("antd/es/spin/style/css");

var _spin = _interopRequireDefault(require("antd/es/spin"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

require("antd/es/icon/style/css");

var _icon = _interopRequireDefault(require("antd/es/icon"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../../../../utils");

require("./style.less");

var antIcon = /*#__PURE__*/_react.default.createElement(_icon.default, {
  type: "loading",
  style: {
    fontSize: 24
  },
  spin: true
});

function FastMultiSelect(_ref) {
  var optionValues = _ref.optionValues,
      selectedValues = _ref.selectedValues,
      onSelectChange = _ref.onSelectChange,
      width = _ref.width,
      isLoading = _ref.isLoading,
      placeholder = _ref.placeholder;

  var _useState = (0, _react.useState)(''),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      inputVal = _useState2[0],
      setInputVal = _useState2[1];

  var _useState3 = (0, _react.useState)(selectedValues),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      selected = _useState4[0],
      setSelected = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      showOptions = _useState6[0],
      updateShowOptions = _useState6[1];

  var _useState7 = (0, _react.useState)(placeholder),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      inputPlaceHolder = _useState8[0],
      setInputPlaceHolder = _useState8[1];

  (0, _react.useEffect)(function () {
    setSelected(selectedValues);
  }, [selectedValues]);
  var filteredOptions = inputVal === '' ? optionValues : optionValues.filter(function (item) {
    return item.display.toLowerCase().includes(inputVal.toLowerCase());
  });
  filteredOptions = filteredOptions.filter(function (item) {
    return !selected.map(function (selectedItem) {
      return selectedItem.display;
    }).includes(item.display);
  });
  var shouldShowOptions = filteredOptions.length > 0 && showOptions;
  var optionsStyle = shouldShowOptions ? 'show' : 'hide';
  var uniqueId = (0, _utils.uuid)();

  if (isLoading) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "fast-multi-select-spiner-wrapper"
    }, /*#__PURE__*/_react.default.createElement(_spin.default, {
      indicator: antIcon
    }), "Loading ...");
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "fast-multi-select-wrapper",
    style: {
      width: "".concat(width, "px")
    }
  }, /*#__PURE__*/_react.default.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/_react.default.createElement("label", {
    className: "values-wrapper",
    htmlFor: "controlled-select-input-".concat(uniqueId)
  }, selected.map(function (item) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "selected-item",
      key: item.userId
    }, item.display, /*#__PURE__*/_react.default.createElement("svg", {
      onClick: function onClick(e) {
        return handleDelete(e, item);
      },
      viewBox: "64 64 896 896",
      focusable: "false",
      "data-icon": "close",
      width: "1em",
      height: "1em",
      fill: "currentColor",
      "aria-hidden": "true"
    }, /*#__PURE__*/_react.default.createElement("path", {
      d: "M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"
    })));
  }), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    id: "controlled-select-input-".concat(uniqueId),
    value: inputVal,
    onChange: handleInputChange,
    onFocus: handleFocus,
    onBlur: handleBlur,
    placeholder: inputPlaceHolder
  }), !shouldShowOptions && /*#__PURE__*/_react.default.createElement("span", {
    className: "down-arrow"
  }, /*#__PURE__*/_react.default.createElement(_icon.default, {
    type: "down"
  })), shouldShowOptions && /*#__PURE__*/_react.default.createElement("span", {
    className: "down-arrow"
  }, /*#__PURE__*/_react.default.createElement(_icon.default, {
    type: "up"
  })))), /*#__PURE__*/_react.default.createElement("ul", {
    className: "options-wrapper ".concat(optionsStyle)
  }, filteredOptions.map(function (item) {
    return /*#__PURE__*/_react.default.createElement("li", {
      key: "".concat(item.userId),
      onMouseDown: function onMouseDown(e) {
        return onSelectDropDownItem(item);
      }
    }, item.display);
  })));

  function setSelectedValues(e) {
    e.preventDefault();

    if (inputVal === '') {
      return;
    }

    if (selected.includes(inputVal)) {
      return;
    } else {
      setSelected([].concat((0, _toConsumableArray2.default)(selected), [inputVal]));
      setInputVal('');
      onSelectChange([].concat((0, _toConsumableArray2.default)(selected), [inputVal]));
    }
  }

  function handleSubmit(e) {
    setSelectedValues(e);
  }

  function handleInputChange(e) {
    setInputVal(e.target.value);
  }

  function handleDelete(e, value) {
    e.preventDefault();
    var updatedValues = selected.filter(function (item) {
      return item !== value;
    });
    setSelected(updatedValues);
    onSelectChange(updatedValues);
  }

  function onSelectDropDownItem(value) {
    setSelected([].concat((0, _toConsumableArray2.default)(selected), [value]));
    onSelectChange([].concat((0, _toConsumableArray2.default)(selected), [value]));
    setInputVal('');
    updateShowOptions(false);
  }

  function handleFocus() {
    updateShowOptions(true);
    setInputPlaceHolder('');
  }

  function handleBlur(e) {
    updateShowOptions(false);
    setSelectedValues(e);
  }
}

FastMultiSelect.propTypes = {
  /** optionValues - all select options */
  optionValues: _propTypes.default.array.isRequired,

  /** selectedValues - all selected values to show as tags in the select input */
  selectedValues: _propTypes.default.array.isRequired,

  /** onSelectChange - callback function to be called and update consuming component */
  onSelectChange: _propTypes.default.func,

  /** width - the width of the select component */
  width: _propTypes.default.string,

  /** isLoading - indication if the select is fetching data */
  isLoading: _propTypes.default.bool,

  /** placeholder - a short hint that describes the expected value of an input field */
  placeholder: _propTypes.default.string
};
FastMultiSelect.defaultProps = {
  onSelectChange: function onSelectChange() {},
  width: '100%',
  isLoading: false
};