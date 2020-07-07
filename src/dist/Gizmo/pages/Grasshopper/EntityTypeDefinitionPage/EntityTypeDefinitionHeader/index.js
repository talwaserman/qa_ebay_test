"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = EntityTypeDefinitionHeader;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

require("antd/es/tooltip/style/css");

var _tooltip = _interopRequireDefault(require("antd/es/tooltip"));

require("antd/es/icon/style/css");

var _icon = _interopRequireDefault(require("antd/es/icon"));

require("antd/es/button/style/css");

var _button = _interopRequireDefault(require("antd/es/button"));

require("antd/es/input/style/css");

var _input = _interopRequireDefault(require("antd/es/input"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

require("antd/es/modal/style/css");

var _modal = _interopRequireDefault(require("antd/es/modal"));

require("./style.less");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _context3 = require("../context");

var _workerProvider = _interopRequireDefault(require("../workerProvider"));

var confirm = _modal.default.confirm;

function EntityTypeDefinitionHeader(_ref) {
  var entityTypeName = _ref.entityTypeName,
      onSaveEtNameTitle = _ref.onSaveEtNameTitle,
      hintText = _ref.hintText,
      phaseLabel = _ref.phaseLabel,
      stage = _ref.stage,
      finishEtd = _ref.finishEtd,
      batchId = _ref.batchId,
      rowId = _ref.rowId,
      isViewMode = _ref.isViewMode;

  var _useContext = (0, _react.useContext)(_context3.ETPageContext),
      contextState = _useContext.contextState;

  var _useState = (0, _react.useState)(true),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isEditable = _useState2[0],
      setIsEditable = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      isSavingEtLabel = _useState4[0],
      setIsSavingEtLabel = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      finishingEtd = _useState6[0],
      setFinishingEtd = _useState6[1];

  var _useState7 = (0, _react.useState)(entityTypeName),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      innerEntityTypeName = _useState8[0],
      setInnerEntityTypeName = _useState8[1];

  var _useState9 = (0, _react.useState)(entityTypeName),
      _useState10 = (0, _slicedToArray2.default)(_useState9, 2),
      savedEntityTypeName = _useState10[0],
      setSavedEntityTypeName = _useState10[1];

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "et-definition-header-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "section-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "main-header"
  }, /*#__PURE__*/_react.default.createElement("span", null, "ET Definition ", phaseLabel)), /*#__PURE__*/_react.default.createElement("div", {
    className: "title-name"
  }, /*#__PURE__*/_react.default.createElement("span", null, "Match aspects to entity type"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "section-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "name-title"
  }, /*#__PURE__*/_react.default.createElement("span", {
    id: "et-name"
  }, "ET Name: "), isEditable && /*#__PURE__*/_react.default.createElement("span", {
    id: "name-title-value"
  }, innerEntityTypeName), !isEditable && /*#__PURE__*/_react.default.createElement("section", null, /*#__PURE__*/_react.default.createElement(_input.default, {
    size: 'small',
    value: innerEntityTypeName,
    type: "textarea",
    onChange: function onChange(e) {
      return updateInputData(e.target.value);
    },
    style: {
      width: '200px'
    }
  })), isEditable && /*#__PURE__*/_react.default.createElement("section", null, /*#__PURE__*/_react.default.createElement(_button.default, {
    icon: 'edit',
    style: {
      fontSize: '16px',
      color: '#08c'
    },
    size: 'small',
    onClick: onEditButtonClick,
    loading: isSavingEtLabel,
    disabled: stage !== 'Aspect Design' && !contextState.isLocked
  })), !isEditable && /*#__PURE__*/_react.default.createElement("section", null, /*#__PURE__*/_react.default.createElement(_button.default, {
    icon: 'check',
    size: 'small',
    style: {
      fontSize: '14px',
      color: '#49d039'
    },
    onClick: onSaveButtonClick
  }), /*#__PURE__*/_react.default.createElement(_button.default, {
    icon: 'close',
    size: 'small',
    style: {
      fontSize: '14px',
      color: '#d0395b'
    },
    onClick: onCancelButtonClick
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "title-name"
  }, /*#__PURE__*/_react.default.createElement("span", null, "Sites Allocated:", /*#__PURE__*/_react.default.createElement("span", {
    className: "site-names"
  }, contextState.assignedSites.join(', '))), /*#__PURE__*/_react.default.createElement(_tooltip.default, {
    placement: "bottom",
    title: /*#__PURE__*/_react.default.createElement("span", null, hintText)
  }, /*#__PURE__*/_react.default.createElement(_icon.default, {
    type: "question-circle",
    style: {
      paddingLeft: '4px'
    }
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: "section-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "stage-title"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "title-name",
    id: "stage-name"
  }, "Stage:"), /*#__PURE__*/_react.default.createElement("span", {
    id: "stage-value"
  }, stage)), /*#__PURE__*/_react.default.createElement("div", {
    className: "finish-etd"
  }, stage === 'Aspect Design' && /*#__PURE__*/_react.default.createElement(_button.default, {
    type: "primary",
    onClick: finishEtdClick,
    loading: finishingEtd
  }, "Finish ETD"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "section-wrapper"
  }, isViewMode && /*#__PURE__*/_react.default.createElement("p", {
    className: "view-mode-title"
  }, "View Mode")));

  function updateInputData(value) {
    setInnerEntityTypeName(value);
  }

  function onEditButtonClick() {
    setIsEditable(!isEditable);
  }

  function onSaveButtonClick() {
    return _onSaveButtonClick.apply(this, arguments);
  }

  function _onSaveButtonClick() {
    _onSaveButtonClick = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setIsSavingEtLabel(true);
              setIsEditable(true);
              clearLockTimeout();
              _context.next = 5;
              return onSaveEtNameTitle(innerEntityTypeName);

            case 5:
              setSavedEntityTypeName(innerEntityTypeName);
              setIsSavingEtLabel(false);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _onSaveButtonClick.apply(this, arguments);
  }

  function onCancelButtonClick() {
    setInnerEntityTypeName(savedEntityTypeName);
    setIsEditable(true);
  }

  function finishEtdClick() {
    confirm({
      title: "Are you sure you want to finish ETD: ".concat(entityTypeName),
      icon: /*#__PURE__*/_react.default.createElement(_icon.default, {
        type: "warning"
      }),
      content: '',
      onOk: function onOk() {
        onFinishEtd();
      },
      onCancel: function onCancel() {}
    });
  }

  function onFinishEtd() {
    return _onFinishEtd.apply(this, arguments);
  }

  function _onFinishEtd() {
    _onFinishEtd = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              setFinishingEtd(true);
              _context2.next = 3;
              return finishEtd(rowId);

            case 3:
              setFinishingEtd(false);
              window.open("#/grasshopper/batch-entity-types?batchId=".concat(batchId, "&batchName=").concat(entityTypeName), '_self');

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _onFinishEtd.apply(this, arguments);
  }

  function clearLockTimeout() {
    // on locked state the lock countdown should be initialized for every action
    if (contextState.isLocked) {
      _workerProvider.default.postMessage('stop-countdown');
    }
  }
}

EntityTypeDefinitionHeader.propTypes = {
  /** entityTypeName - the entity type name */
  entityTypeName: _propTypes.default.string.isRequired,

  /** onSaveEtNameTitl - exteral service call save title fuction */
  onSaveEtNameTitle: _propTypes.default.func.isRequired,

  /** hintText - text shown while hovering question mark */
  hintText: _propTypes.default.string.isRequired,

  /** phaseLabel - phase Label text */
  phaseLabel: _propTypes.default.string,

  /** stage - the ET status */
  stage: _propTypes.default.string.isRequired,

  /** finishEtd - finish the Et work callback */
  finishEtd: _propTypes.default.func.isRequired,

  /** batchId - the batch ID */
  batchId: _propTypes.default.string.isRequired,

  /** rowId - the row ID */
  rowId: _propTypes.default.string.isRequired,

  /** isViewMode - whether the stage is Aspect Design and the user is not assigned to the ET */
  isViewMode: _propTypes.default.bool.isRequired
};