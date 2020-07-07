"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/modal/style/css");

var _modal = _interopRequireDefault(require("antd/es/modal"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

require("antd/es/select/style/css");

var _select = _interopRequireDefault(require("antd/es/select"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Option = _select.default.Option; // i used a class component and not a function component
// because the antd table does not allow to use hooks inside of the row.

var StateDropdown = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(StateDropdown, _Component);

  var _super = _createSuper(StateDropdown);

  function StateDropdown(props) {
    var _this;

    (0, _classCallCheck2.default)(this, StateDropdown);
    _this = _super.call(this, props);
    _this.state = {
      showModal: false,
      currentstate: props.currentstate,
      newJobState: null
    };

    _this.handleStateChange = function (value) {
      _this.setState({
        showModal: true,
        newJobState: value
      });
    };

    _this.getOptions = function (currentstate) {
      var OPEN = 'Open';
      var CANCELED = 'Canceled';
      var IN_PROGRESS = 'In Progress';
      var PENDING_APPROVAL = 'Pending Approval';
      var DONE = 'Done';
      var QA = 'QA';
      var ON_HOLD = 'On Hold';
      var possibleStates = {
        New: [OPEN, CANCELED],
        Open: [IN_PROGRESS, CANCELED, ON_HOLD],
        'In Progress': [PENDING_APPROVAL, CANCELED, ON_HOLD],
        'Pending Approval': [QA, DONE, CANCELED],
        QA: [DONE, CANCELED],
        'On Hold': [OPEN, CANCELED, IN_PROGRESS],
        Canceled: [[currentstate]],
        Done: [IN_PROGRESS],
        Initializing: ['Initializing']
      };
      return possibleStates[currentstate].map(function (item) {
        return /*#__PURE__*/_react.default.createElement(Option, {
          value: item
        }, item);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(StateDropdown, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/_react.default.createElement("div", {
        className: "state-select"
      }, /*#__PURE__*/_react.default.createElement(_select.default, {
        onChange: this.handleStateChange,
        value: this.state.currentstate,
        size: "small",
        disabled: this.state.currentstate === 'Initializing',
        loading: this.state.currentstate === 'Initializing'
      }, this.getOptions(this.state.currentstate)), /*#__PURE__*/_react.default.createElement(_modal.default, {
        title: "Change state for Job ".concat(this.props.rowId),
        visible: this.state.showModal,
        onOk: function onOk() {
          _this2.setState({
            showModal: false,
            currentstate: _this2.state.newJobState
          });

          _this2.props.changeJobState({
            _id: _this2.props.rowId,
            requestedState: _this2.state.newJobState,
            previousState: _this2.state.currentstate
          });
        },
        onCancel: function onCancel() {
          _this2.setState({
            showModal: false
          });
        }
      }, /*#__PURE__*/_react.default.createElement("div", null, "You are about to change job state from", ' ', /*#__PURE__*/_react.default.createElement("strong", null, this.state.currentstate), " to", ' ', /*#__PURE__*/_react.default.createElement("strong", null, this.state.newJobState), " are you sure?")));
    }
  }]);
  return StateDropdown;
}(_react.Component);

exports.default = StateDropdown;
StateDropdown.propTypes = {
  content: _propTypes.default.any.isRequired,
  rowId: _propTypes.default.string.isRequired,
  currentstate: _propTypes.default.string.isRequired,
  updateState: _propTypes.default.string.isRequired,
  changeJobState: _propTypes.default.func.isRequired
};