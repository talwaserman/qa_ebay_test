"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.matchingColumnConfig = exports.duplicatesColumnConfig = void 0;
var duplicatesColumnConfig = [{
  title: 'Epid 1',
  dataIndex: 'survivorEpid',
  filterType: 'text'
}, {
  title: 'Title Epid 1',
  dataIndex: 'survivorTitle',
  filterType: 'text'
}, {
  title: 'Epid 2',
  dataIndex: 'victimEpid',
  filterType: 'text'
}, {
  title: 'Title Epid 2',
  dataIndex: 'victimTitle',
  filterType: 'text'
}, {
  title: 'Decision',
  dataIndex: 'decision',
  filterKey: 'productDuplicateActions',
  filterType: 'single-select-equal',
  filterOperation: 'text-dropdown'
}, {
  title: 'Assignee',
  dataIndex: 'assignee',
  filterKey: 'users',
  filterType: 'single-select-equal',
  filterOperation: 'text-dropdown'
}, {
  title: 'Observation Reason',
  dataIndex: 'observationReason',
  filterKey: 'observationReasons',
  filterType: 'single-select-equal',
  filterOperation: 'text-dropdown'
}, {
  title: 'Curated',
  dataIndex: 'entitiesChanged',
  filterKey: 'curatedOptions',
  filterType: 'single-select-multiJsonValue-equal',
  filterOperation: 'text-dropdown',
  excludeOrderBy: true
}, {
  title: 'QA',
  dataIndex: 'isQaed',
  filterKey: 'qaOptions',
  filterType: 'single-select-boolean-equal',
  filterOperation: 'text-dropdown'
}, {
  title: 'Submission Date',
  dataIndex: 'date',
  filterType: 'date',
  filterOperation: 'equal-date'
}];
exports.duplicatesColumnConfig = duplicatesColumnConfig;
var matchingColumnConfig = [{
  title: 'Site',
  dataIndex: 'site',
  filterKey: 'sites',
  filterType: 'single-select-equal-int'
}, {
  title: 'Category',
  dataIndex: 'category',
  filterType: 'int'
}, {
  title: 'Epid',
  dataIndex: 'epid',
  filterType: 'text'
}, {
  title: 'Product title',
  dataIndex: 'productTitle',
  filterType: 'text'
}, {
  title: 'Item ID',
  dataIndex: 'itemId',
  filterType: 'text'
}, {
  title: 'Variation ID',
  dataIndex: 'variationId',
  filterType: 'long'
}, {
  title: 'Decision',
  dataIndex: 'decision',
  filterKey: 'decisions',
  filterType: 'single-select-equal',
  filterOperation: 'text-dropdown'
}, {
  title: 'Reason',
  dataIndex: 'reason',
  filterType: 'text'
}, {
  title: 'Aspects',
  dataIndex: 'aspect',
  filterType: '',
  excludeOrderBy: true
}, {
  title: 'Comment',
  dataIndex: 'comment',
  filterType: 'text'
}, {
  title: 'Adoption method',
  dataIndex: 'adoptionMethod',
  filterType: 'text'
}, {
  title: 'Agent',
  dataIndex: 'assignee',
  filterKey: 'users',
  filterType: 'single-select-equal',
  filterOperation: 'text-dropdown'
}, {
  title: 'Date',
  dataIndex: 'date',
  filterType: 'date',
  filterOperation: 'equal-date'
}, {
  title: 'QA',
  dataIndex: 'isQaed',
  filterKey: 'qaOptions',
  filterType: 'single-select-boolean-equal'
}];
exports.matchingColumnConfig = matchingColumnConfig;