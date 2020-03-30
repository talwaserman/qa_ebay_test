"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAspectMetadata = exports.getSiteById = exports.queryParam = exports.compareArray = exports.uuid = exports.copyObject = void 0;

var copyObject = function copyObject(obj) {
  return JSON.parse(JSON.stringify(obj));
};

exports.copyObject = copyObject;

var uuid = function uuid() {
  return 'xxxxxxxx-xxxxxxx-xxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0,
        v = c === 'x' ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
};

exports.uuid = uuid;

var compareArray = function compareArray(arr1, arr2) {
  var flag = true;

  if (!arr1 || !arr2) {
    flag = false;
  }

  if (arr1.length !== arr2.length) {
    flag = false;
  }

  arr1.forEach(function (item) {
    if (!arr2.includes(item)) {
      flag = false;
    }
  });
  return flag;
};
/* istanbul ignore next */


exports.compareArray = compareArray;

var queryParam = function queryParam(parameterName) {
  var result = null,
      tmp = []; // eslint-disable-next-line no-restricted-globals

  var queryParams = window.location.href.split('?')[1];

  if (!queryParams) {
    return '';
  }

  queryParams.split('&').forEach(function (item) {
    tmp = item.split('=');
    if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
  });
  return result;
};

exports.queryParam = queryParam;

var getSiteById = function getSiteById(id) {
  var siteHash = {
    0: {
      id: 0,
      name: 'US',
      google: 'https://www.google.com',
      ebay: 'https://www.ebay.com',
      ebayDev: 'https://www.qa.ebay.com'
    },
    2: {
      id: 2,
      name: 'CA',
      google: 'https://www.google.com',
      ebay: 'https://www.ebay.com',
      ebayDev: 'https://www.qa.ebay.com'
    },
    3: {
      id: 3,
      name: 'UK',
      google: 'https://www.google.co.uk',
      ebay: 'https://www.ebay.co.uk',
      ebayDev: 'https://www.qa.ebay.co.uk'
    },
    15: {
      id: 15,
      name: 'AU',
      google: 'https://www.google.com.au',
      ebay: 'https://www.ebay.com.au',
      ebayDev: 'https://www.qa.ebay.com.au'
    },
    16: {
      id: 16,
      name: 'AT',
      google: 'https://www.google.com',
      ebay: 'https://www.ebay.at',
      ebayDev: 'https://www.qa.ebay.at'
    },
    77: {
      id: 77,
      name: 'DE',
      google: 'https://www.google.de',
      ebay: 'https://www.ebay.de',
      ebayDev: 'https://www.qa.ebay.de'
    },
    71: {
      id: 71,
      name: 'FR',
      google: 'https://www.google.fr',
      ebay: 'https://www.ebay.fr',
      ebayDev: 'https://www.qa.ebay.fr'
    },
    100: {
      id: 100,
      name: 'US_MOTORS',
      google: 'https://www.google.com',
      ebay: 'https://www.ebay.com/motors',
      ebayDev: 'https://www.qa.ebay.com/motors'
    },
    101: {
      id: 101,
      name: 'IT',
      google: 'https://www.google.it',
      ebay: 'http://www.ebay.it',
      ebayDev: 'http://www.qa.ebay.it'
    },
    186: {
      id: 186,
      name: 'ES',
      google: 'https://www.google.es',
      ebay: 'https://www.ebay.es',
      ebayDev: 'https://www.qa.ebay.es'
    },
    203: {
      id: 203,
      name: 'IN',
      google: 'https://www.google.com',
      ebay: 'https://www.ebay.com',
      ebayDev: 'https://www.qa.ebay.com'
    },
    205: {
      id: 205,
      name: 'IE',
      google: 'https://www.google.com',
      ebay: 'https://www.ebay.com',
      ebayDev: 'https://www.qa.ebay.com'
    },
    223: {
      id: 223,
      name: 'CN',
      google: 'https://www.google.com',
      ebay: 'https://www.ebay.com',
      ebayDev: 'https://www.qa.ebay.com'
    },
    146: {
      id: 146,
      name: 'NL',
      google: 'https://www.google.com',
      ebay: 'https://www.ebay.com',
      ebayDev: 'https://www.qa.ebay.com'
    },
    206: {
      id: 206,
      name: 'IL',
      google: 'https://www.google.co.il',
      ebay: 'https://www.ebay.com',
      ebayDev: 'https://www.qa.ebay.com'
    }
  };
  return siteHash[id];
};

exports.getSiteById = getSiteById;

var getAspectMetadata = function getAspectMetadata(aspectInformation) {
  var multiValue = aspectInformation.multiValue,
      umsAlignedAspect = aspectInformation.umsAlignedAspect,
      umsValues = aspectInformation.umsValues,
      aspectTypes = aspectInformation.aspectTypes;
  var isRequired = !aspectTypes ? false : aspectTypes.includes('REQUIREDHARD') && aspectTypes.includes('REQUIRED');
  var isRecomended = !aspectTypes ? false : !aspectTypes.includes('REQUIREDHARD') && aspectTypes.includes('REQUIRED');
  var isOptional = !aspectTypes ? false : !aspectTypes.includes('REQUIREDHARD') && !aspectTypes.includes('REQUIRED');
  var levelOfImportance = isRequired ? '[Required]' : isRecomended ? '[Recomended]' : isOptional ? '[Optional]' : '';
  var isWithUms = umsValues.length > 0;
  var isMultiValue = multiValue;
  var aspectMetaData = {
    isRequired: isRequired,
    isRecomended: isRecomended,
    isOptional: isOptional,
    levelOfImportance: levelOfImportance,
    isMultiValue: isMultiValue,
    umsAlignedAspect: umsAlignedAspect,
    umsValues: umsValues,
    isWithUms: isWithUms
  };
  return aspectMetaData;
};

exports.getAspectMetadata = getAspectMetadata;