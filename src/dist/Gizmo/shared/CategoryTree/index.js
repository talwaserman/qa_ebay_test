"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CategoryTree;

require("antd/es/progress/style/css");

var _progress = _interopRequireDefault(require("antd/es/progress"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

require("antd/es/button/style/css");

var _button = _interopRequireDefault(require("antd/es/button"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

require("antd/es/tree/style/css");

var _tree = _interopRequireDefault(require("antd/es/tree"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./style.less");

var _services = require("./services");

var TreeNode = _tree.default.TreeNode;

function CategoryTree(_ref) {
  var jobId = _ref.jobId,
      submitHandler = _ref.submitHandler,
      defaultSubmitHandler = _ref.defaultSubmitHandler,
      setLoading = _ref.setLoading;

  var _useState = (0, _react.useState)([]),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      expandedKeys = _useState2[0],
      setExpandedKeys = _useState2[1];

  var _useState3 = (0, _react.useState)(true),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      autoExpandParent = _useState4[0],
      setAutoExpandParent = _useState4[1];

  var _useState5 = (0, _react.useState)([]),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      checkedKeys = _useState6[0],
      setCheckedKeys = _useState6[1];

  var _useState7 = (0, _react.useState)([]),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      selectedKeys = _useState8[0],
      setSelectedKeys = _useState8[1];

  var _useState9 = (0, _react.useState)([]),
      _useState10 = (0, _slicedToArray2.default)(_useState9, 2),
      treeData = _useState10[0],
      setTreeData = _useState10[1];

  var _useState11 = (0, _react.useState)(true),
      _useState12 = (0, _slicedToArray2.default)(_useState11, 2),
      isDisabled = _useState12[0],
      setDisabled = _useState12[1];

  (0, _react.useEffect)(function () {
    function getCategoryTreeData() {
      return _getCategoryTreeData.apply(this, arguments);
    }

    function _getCategoryTreeData() {
      _getCategoryTreeData = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var response;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                setLoading(true);
                _context.next = 3;
                return (0, _services.getCategoryAssignTree)(jobId);

              case 3:
                response = _context.sent;

                if (response) {
                  setTreeData(response.siteToCategoryNodeContracts);
                }

                setLoading(false);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _getCategoryTreeData.apply(this, arguments);
    }

    getCategoryTreeData();
  }, [jobId, setLoading]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "category-tree"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "tree-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_tree.default, {
    checkable: true,
    onExpand: onExpand,
    expandedKeys: expandedKeys,
    autoExpandParent: autoExpandParent,
    onCheck: onCheck,
    checkedKeys: checkedKeys,
    onSelect: onSelect,
    selectedKeys: selectedKeys
  }, renderTreeNodes(treeData, 0, 0))), /*#__PURE__*/_react.default.createElement("div", {
    className: "assign-button"
  }, /*#__PURE__*/_react.default.createElement(_button.default, {
    className: "regular-mode-btn",
    type: "default",
    onClick: defaultProductSelector
  }, "Start In Regular Mode"), /*#__PURE__*/_react.default.createElement(_button.default, {
    className: "category-mode-btn",
    type: "primary",
    onClick: assignSelectedCategories,
    disabled: isDisabled
  }, "Start In Category Mode")));

  function assignSelectedCategories() {
    submitHandler(checkedKeys);
  }

  function defaultProductSelector() {
    defaultSubmitHandler();
  }

  function onExpand(expandedKeys) {
    setExpandedKeys(expandedKeys);
    setAutoExpandParent(false);
  }

  function onCheck(checkedKeys, e) {
    var checkedCategories = e.checkedNodesPositions.filter(function (node) {
      return node.pos.split('-').length !== 2;
    }).map(function (node) {
      return node.node.key;
    });
    setDisabledButton(checkedCategories);
    setCheckedKeys(checkedCategories);

    function setDisabledButton(checkedCategories) {
      if (checkedCategories.length === 0) {
        setDisabled(true);
      } else {
        setDisabled(false);
      }
    }
  }

  function onSelect(selectedKeys, info) {
    setSelectedKeys(selectedKeys);
  }

  function renderTreeNodes(data, depth, outerSiblingLevel, site) {
    if (data.length === 0) {
      depth = 0;
    }

    if (data) {
      return data.map(function (item, siblingIndex) {
        if (outerSiblingLevel !== siblingIndex) {
          outerSiblingLevel = siblingIndex;

          if (data.length === 1) {
            depth++;
          }
        } else {
          depth++;
        }

        if (isSiteId(depth, item)) {
          site = item.nodeName;
        }

        if (item.children) {
          return /*#__PURE__*/_react.default.createElement(TreeNode, {
            title: getNodeTitle(item),
            key: item.nodeId + "_" + site,
            dataRef: item,
            disabled: item.doneProducts === item.totalProducts
          }, renderTreeNodes(item.children, depth, siblingIndex, site));
        }

        return /*#__PURE__*/_react.default.createElement(TreeNode, (0, _extends2.default)({
          key: item.nodeId
        }, item));
      });
    }
  }

  function getNodeTitle(node) {
    return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", null, node.nodeName + '  (' + node.nodeId + ')', /*#__PURE__*/_react.default.createElement(_progress.default, {
      percent: getNodeProgress(node)
    }), '  ' + node.doneProducts + '/' + node.totalProducts));
  }

  function getNodeProgress(node) {
    return Number((node.doneProducts / node.totalProducts * 100).toFixed());
  }
}

CategoryTree.propTypes = {
  /** jobId - jobId of the selected task, this id is used to get the category tree  */
  jobId: _propTypes.default.number.isRequired,

  /** SubmitHandler - function passed by consuming component */
  submitHandler: _propTypes.default.func.isRequired,
  //** Default SubmitHandler - function passed by consuming component */
  defaultSubmitHandler: _propTypes.default.func.isRequired,

  /** setLoading - show a loading indicator when the data is fetched from the service */
  setLoading: _propTypes.default.func.isRequired
};

function isSiteId(depth, item) {
  return depth === 1 && item.nodeName.length === 2;
}