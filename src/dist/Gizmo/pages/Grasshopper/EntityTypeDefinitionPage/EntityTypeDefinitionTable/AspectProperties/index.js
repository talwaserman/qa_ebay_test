"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AspectProperties;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

require("antd/es/button/style/css");

var _button = _interopRequireDefault(require("antd/es/button"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

require("./style.less");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _cloneDeep = _interopRequireDefault(require("lodash/cloneDeep"));

var _LabelWithValues = _interopRequireDefault(require("./LabelWithValues"));

var _LabelWithInput = _interopRequireDefault(require("./LabelWithInput"));

var _YesNoOption = _interopRequireDefault(require("./YesNoOption"));

var _LabelWithTextArea = _interopRequireDefault(require("./LabelWithTextArea"));

var _context2 = require("../../context");

var _LabelWithTagsInput = _interopRequireDefault(require("./LabelWithTagsInput"));

/* eslint-disable */
function AspectProperties(_ref) {
  var aspectProperties = _ref.aspectProperties,
      recommendations = _ref.recommendations,
      onPropertyChange = _ref.onPropertyChange,
      onValidValuesChange = _ref.onValidValuesChange,
      onSave = _ref.onSave,
      disableSave = _ref.disableSave,
      stage = _ref.stage,
      validValues = _ref.validValues;

  var _useState = (0, _react.useState)(aspectProperties),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      properties = _useState2[0],
      setProperties = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      saving = _useState4[0],
      setSaving = _useState4[1];

  var _useContext = (0, _react.useContext)(_context2.ETPageContext),
      contextState = _useContext.contextState;

  var disableValues = stage !== 'Aspect Design' && !contextState.isLocked;
  var propertyOptions = {
    'Requirement Level': ['Optional', 'Prefered', 'Required'],
    'Tag Type': ['BT', 'ST', 'Both'],
    'Sort Type - ST': ['Alpha', 'Custom'],
    'Sort Type - BT': ['Alpha', 'Custom'],
    'Identity Set': ['Yes', 'No'],
    Variation: ['Yes', 'No'],
    'Multiple Values': ['Yes', 'No'],
    'Closed Tag': ['Yes', 'No'],
    'Aspect Usage': ['Yes', 'No']
  };
  (0, _react.useEffect)(function () {
    var tempProperties = (0, _cloneDeep.default)(aspectProperties);
    var index = tempProperties.findIndex(function (p) {
      return p.name === 'Tag Type';
    });
    var value = index !== -1 ? properties[index].value : ''; // in case Tag Type === 'ST' we need to disable 'Sort Type - BT' property

    index = tempProperties.findIndex(function (p) {
      return p.name === 'Sort Type - BT';
    });

    if (index !== -1) {
      tempProperties[index].disabled = value === 'ST';
    } else {
      tempProperties.push({
        name: 'Sort Type - BT',
        value: null,
        disabled: value === 'ST'
      });
    } // in case Tag Type === 'BT' we need to disable 'Sort Type - ST' property


    index = tempProperties.findIndex(function (p) {
      return p.name === 'Sort Type - ST';
    });

    if (index !== -1) {
      tempProperties[index].disabled = value === 'BT';
    } else {
      tempProperties.push({
        name: 'Sort Type - ST',
        value: null,
        disabled: value === 'BT'
      });
    } // in case Tag Type === 'Both' we need to ebable 'Sort Type - BT' / 'Sort Type - ST'


    if (value === 'Both') {
      index = tempProperties.findIndex(function (p) {
        return p.name === 'Sort Type - ST';
      });
      if (index !== -1) tempProperties[index].disabled = false;
      index = tempProperties.findIndex(function (p) {
        return p.name === 'Sort Type - BT';
      });
      if (index !== -1) tempProperties[index].disabled = false;
    }

    setProperties(tempProperties);
  }, [aspectProperties]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "aspect-properties-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "column-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_LabelWithValues.default, {
    propertyName: "Requirement Level",
    propertyOptions: propertyOptions['Requirement Level'],
    setPropertyValue: function setPropertyValue(key, value) {
      return _setPropertyValue(key, value);
    },
    getButtonClass: function getButtonClass(key, value) {
      return _getButtonClass(key, value);
    },
    recommendation: createRecommendationLabel('Requirement Level'),
    disableValues: disableValues
  }), /*#__PURE__*/_react.default.createElement(_LabelWithValues.default, {
    propertyName: "Tag Type",
    propertyOptions: propertyOptions['Tag Type'],
    setPropertyValue: function setPropertyValue(key, value) {
      return _setPropertyValue(key, value);
    },
    getButtonClass: function getButtonClass(key, value) {
      return _getButtonClass(key, value);
    },
    recommendation: createRecommendationLabel('Tag Type'),
    disableValues: disableValues
  }), /*#__PURE__*/_react.default.createElement(_LabelWithValues.default, {
    propertyName: "Sort Type - ST",
    propertyOptions: propertyOptions['Sort Type - ST'],
    setPropertyValue: function setPropertyValue(key, value) {
      return _setPropertyValue(key, value);
    },
    getButtonClass: function getButtonClass(key, value) {
      return _getButtonClass(key, value);
    },
    recommendation: createRecommendationLabel('Sort Type - ST'),
    disableValues: disableValuesForAttribute('Sort Type - ST') || disableValues
  }), /*#__PURE__*/_react.default.createElement(_LabelWithValues.default, {
    propertyName: "Sort Type - BT",
    propertyOptions: propertyOptions['Sort Type - BT'],
    setPropertyValue: function setPropertyValue(key, value) {
      return _setPropertyValue(key, value);
    },
    getButtonClass: function getButtonClass(key, value) {
      return _getButtonClass(key, value);
    },
    recommendation: createRecommendationLabel('Sort Type - BT'),
    disableValues: disableValuesForAttribute('Sort Type - BT') || disableValues
  }), /*#__PURE__*/_react.default.createElement(_LabelWithInput.default, {
    propertyName: "Sort Order",
    inputType: "number",
    getInputValue: function getInputValue() {
      return getValueByName('Sort Order');
    },
    setPropertyValue: function setPropertyValue(key, value) {
      return _setPropertyValue(key, value);
    },
    recommendation: createRecommendationLabel('Sort Order'),
    disableValue: disableValues
  }), /*#__PURE__*/_react.default.createElement(_LabelWithTagsInput.default, {
    label: "Valid Values",
    setValidValues: function setValidValues(values) {
      return _setValidValues(values);
    },
    validValues: validValues,
    disableValue: disableValues,
    shouldOpenDropDown: false
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "property-row"
  }, /*#__PURE__*/_react.default.createElement(_button.default, {
    loading: saving,
    id: "save-button",
    icon: "save",
    onClick: saveProperies,
    disabled: disableSave
  }, "Save"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "column-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_YesNoOption.default, {
    propertyName: "Variation",
    setPropertyValue: function setPropertyValue(key, value) {
      return _setPropertyValue(key, value);
    },
    getButtonClass: function getButtonClass(key, value) {
      return _getButtonClass(key, value);
    },
    recommendation: createYesNoRecommendationLabel('Variation'),
    disableValues: disableValues
  }), /*#__PURE__*/_react.default.createElement(_YesNoOption.default, {
    propertyName: "Multiple Values",
    setPropertyValue: function setPropertyValue(key, value) {
      return _setPropertyValue(key, value.toString());
    },
    getButtonClass: function getButtonClass(key, value) {
      return _getButtonClass(key, value);
    },
    recommendation: createYesNoRecommendationLabel('Multiple Values'),
    disableValues: disableValues
  }), /*#__PURE__*/_react.default.createElement(_YesNoOption.default, {
    propertyName: "Closed Tag",
    setPropertyValue: function setPropertyValue(key, value) {
      return _setPropertyValue(key, value.toString());
    },
    getButtonClass: function getButtonClass(key, value) {
      return _getButtonClass(key, value);
    },
    recommendation: createYesNoRecommendationLabel('Closed Tag'),
    disableValues: disableValues
  }), /*#__PURE__*/_react.default.createElement(_YesNoOption.default, {
    propertyName: "Aspect Usage",
    setPropertyValue: function setPropertyValue(key, value) {
      return _setPropertyValue(key, value.toString());
    },
    getButtonClass: function getButtonClass(key, value) {
      return _getButtonClass(key, value);
    },
    recommendation: createYesNoRecommendationLabel('Aspect Usage'),
    disableValues: disableValues
  }), /*#__PURE__*/_react.default.createElement(_YesNoOption.default, {
    propertyName: "Identity Set",
    setPropertyValue: function setPropertyValue(key, value) {
      return _setPropertyValue(key, value.toString());
    },
    getButtonClass: function getButtonClass(key, value) {
      return _getButtonClass(key, value);
    },
    recommendation: createYesNoRecommendationLabel('Identity Set'),
    disableValues: disableValues
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "help-text-column-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_LabelWithTextArea.default, {
    propertyName: 'Help Text',
    setPropertyValue: function setPropertyValue(key, value) {
      return _setPropertyValue(key, value);
    },
    value: getPropertyValueByName('Help Text'),
    numberOfRows: 4,
    maxLength: 800,
    disableValue: disableValues
  }), /*#__PURE__*/_react.default.createElement(_LabelWithTextArea.default, {
    propertyName: 'Comment',
    setPropertyValue: function setPropertyValue(key, value) {
      return _setPropertyValue(key, value);
    },
    value: getPropertyValueByName('Comment'),
    numberOfRows: 3,
    maxLength: 1000,
    disableValue: disableValues
  })));

  function saveProperies() {
    return _saveProperies.apply(this, arguments);
  }

  function _saveProperies() {
    _saveProperies = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setSaving(true);
              _context.next = 3;
              return onSave();

            case 3:
              setSaving(false);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _saveProperies.apply(this, arguments);
  }

  function _setPropertyValue(key, value) {
    var tempProperties = (0, _cloneDeep.default)(properties);
    var index = properties.findIndex(function (property) {
      return property.name === key;
    });

    if (index !== -1) {
      tempProperties[index].value = value;
    } else {
      tempProperties.push({
        name: key,
        value: value
      });
    }

    setProperties(tempProperties);
    onPropertyChange(tempProperties.filter(function (p) {
      return p.value !== null && !p.disabled;
    }));
  }

  function _setValidValues(values) {
    onValidValuesChange(values);
  }

  function _getButtonClass(key, value) {
    var index = properties.findIndex(function (property) {
      return property.name === key && property.value === value;
    });
    return index !== -1 ? 'selected-value' : '';
  }

  function getValueByName(name) {
    var index = properties.findIndex(function (property) {
      return property.name === name;
    });
    return index !== -1 ? properties[index].value : null;
  }

  function createRecommendationLabel(propertyName) {
    var recommendation = recommendations[propertyName];

    if (recommendation) {
      return "(".concat(recommendation.counter, "/").concat(recommendation.total, ") ").concat(recommendation.value);
    }

    return '';
  }

  function createYesNoRecommendationLabel(propertyName) {
    var subLabel = '';
    var recommendation = recommendations[propertyName];

    if (recommendation) {
      if (recommendation.value === 'true') {
        subLabel = 'Yes';
      } else {
        subLabel = 'No';
      }

      return "(".concat(recommendation.counter, "/").concat(recommendation.total, ") ").concat(subLabel);
    }

    return '';
  }

  function getPropertyValueByName(propertyName) {
    var index = properties.findIndex(function (p) {
      return p.name === propertyName;
    });
    return index !== -1 ? properties[index].value : '';
  }

  function disableValuesForAttribute(propertyName) {
    var index = properties.findIndex(function (p) {
      return p.name === propertyName;
    });
    return index !== -1 ? properties[index].disabled : false;
  }
}

AspectProperties.prototypes = {
  /** aspectProperties - the whole aspect properties */
  aspectProperties: _propTypes.default.object.isRequired,

  /** recommendations - map of property name and reccomendation */
  recommendations: _propTypes.default.object.isRequired,

  /** onPropertyChange - update the aspect properties callback */
  onPropertyChange: _propTypes.default.func.isRequired,

  /** onSave - save aspect callback */
  onSave: _propTypes.default.func.isRequired,

  /** disableSave - a flag whether the aspect was changed */
  disableSave: _propTypes.default.bool.isRequired,

  /** stage - the ET status */
  stage: _propTypes.default.string.isRequired
};