"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RemoteSelect;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

require("antd/es/spin/style/css");

var _spin = _interopRequireDefault(require("antd/es/spin"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

require("antd/es/select/style/css");

var _select = _interopRequireDefault(require("antd/es/select"));

var _react = _interopRequireWildcard(require("react"));

var _debounce = _interopRequireDefault(require("lodash/debounce"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _services = require("./services");

require("./style.less");

var Option = _select.default.Option;

function RemoteSelect(_ref) {
  var placeholder = _ref.placeholder,
      mode = _ref.mode,
      parseDataFunction = _ref.parseDataFunction,
      baseUrl = _ref.baseUrl,
      onSelectChange = _ref.onSelectChange;

  var _useState = (0, _react.useState)([]),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      value = _useState4[0],
      setValue = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      fetching = _useState6[0],
      setFetching = _useState6[1];

  var _useState7 = (0, _react.useState)(0),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      lastFetchId = _useState8[0],
      setLastFetchId = _useState8[1];

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "remote-select-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_select.default, {
    mode: mode,
    showSearch: true,
    showArrow: false,
    labelInValue: true,
    value: value,
    placeholder: placeholder,
    notFoundContent: fetching ? /*#__PURE__*/_react.default.createElement(_spin.default, {
      size: "small"
    }) : null,
    filterOption: false,
    onSearch: (0, _debounce.default)(fetchData, 600),
    onChange: handleChange,
    style: {
      width: '100%'
    },
    dropdownMenuStyle: {
      whiteSpace: 'preWrap'
    }
  }, data.map(function (d) {
    return /*#__PURE__*/_react.default.createElement(Option, {
      key: d.value
    }, d.text);
  })));
  /* istanbul ignore next */

  function fetchData(_x) {
    return _fetchData.apply(this, arguments);
  }
  /* istanbul ignore next */


  function _fetchData() {
    _fetchData = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(value) {
      var res;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(value === '')) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              setLastFetchId(lastFetchId + 1);
              setFetching(true);
              setData([]);
              _context.next = 7;
              return (0, _services.getData)("".concat(baseUrl).concat(value));

            case 7:
              res = _context.sent;
              setData(parseDataFunction(res));
              setFetching(false);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _fetchData.apply(this, arguments);
  }

  function handleChange(value) {
    setFetching(false);
    setData([]);
    setValue(value);
    onSelectChange(value);
  }
}

RemoteSelect.propTypes = {
  /** placeholder - text shown before the user enter any value */
  placeholder: _propTypes.default.string,

  /** mode - multiple or single */
  mode: _propTypes.default.string,

  /** parseDataFunction - function used to parse the data fetched from backend */
  parseDataFunction: _propTypes.default.func.isRequired,

  /** baseUrl - url used to fetch data from backend*/
  baseUrl: _propTypes.default.string.isRequired,

  /** onSelectChange - function called from parent component on each select */
  onSelectChange: _propTypes.default.func
};
RemoteSelect.defaultProps = {
  placeholder: 'Enter search term',
  mode: 'single',
  onSelectChange: function onSelectChange() {}
};