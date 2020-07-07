"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clusterMockData = exports.mockSupervisor = exports.mockAgent = exports.mockJobHeader = exports.mockConfigurationWithoutHeaders = exports.mockConfigurationNotEditable = exports.mockConfigurationNotEditableAndWithoutHeaders = exports.mockConfigurationAllEnabled = void 0;
var clusterMockData = {
  jobId: '3871',
  type: 'Duplicates',
  doneRowsContract: {
    totalDone: 20,
    totalDoneToday: 10
  },
  nextRowContract: {
    comparedEntityRowContracts: [{
      rowId: '5e7c768545bfe5059c7e4660',
      sendToSupervisor: null,
      recordExecuted: false,
      actionsContract: {
        makeObservation: true,
        makeDecision: true,
        isChanged: true
      },
      additionalInformationContract: {
        additionalInformationDataList: []
      },
      escalationInfo: null,
      entities: [{
        entityId: '170087765',
        product: {
          productDefinition: {
            siteId: '0',
            entityId: '54861558',
            productTitle: 'Nokia 2600 classic - Midnight Blue (Unlocked) Cellular Phone ',
            prpUrl: 'http://www.ebay.com/p/54861558',
            categories: {
              currentValues: [{
                categoryId: 9355,
                categoryBreadcrumb: 'Cell Phones & Accessories(15032)>Cell Phones & Smartphones(9355)'
              }],
              newValues: [{
                categoryId: 9355,
                categoryBreadcrumb: 'Cell Phones & Accessories(15032)>Cell Phones & Smartphones(9355)'
              }],
              categoryId: '9355'
            },
            images: {
              originalImages: [{
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Nokia_2600_Classic_1.jpg',
                copyright: 'Ebay Seller Provided',
                subcopyright: null,
                imageSizeContract: {
                  widthSize: 150,
                  heightSize: 221
                },
                imageDecisionContract: {
                  rejectReasons: [],
                  action: ''
                }
              }, {
                imageUrl: 'https://images.theinformr.com/phones/11/902/nokia-2600-classic-full-1.jpg',
                copyright: 'Ebay Seller Provided',
                subcopyright: null,
                imageSizeContract: {
                  widthSize: 150,
                  heightSize: 221
                },
                imageDecisionContract: {
                  rejectReasons: [],
                  action: ''
                }
              }, {
                imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41eHFN%2BYWlL._SY450_.jpg',
                copyright: 'Ebay Seller Provided',
                subcopyright: null,
                imageSizeContract: {
                  widthSize: 150,
                  heightSize: 221
                },
                imageDecisionContract: {
                  rejectReasons: [],
                  action: ''
                }
              }],
              newImages: [{
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Nokia_2600_Classic_1.jpg',
                copyright: 'Ebay Seller Provided',
                subcopyright: null,
                imageSizeContract: {
                  widthSize: 150,
                  heightSize: 221
                },
                imageDecisionContract: {
                  rejectReasons: [],
                  action: []
                }
              }, {
                imageUrl: 'https://images.theinformr.com/phones/11/902/nokia-2600-classic-full-1.jpg',
                copyright: 'Ebay Seller Provided',
                subcopyright: null,
                imageSizeContract: {
                  widthSize: 150,
                  heightSize: 221
                },
                imageDecisionContract: {
                  rejectReasons: [],
                  action: ''
                }
              }, {
                imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41eHFN%2BYWlL._SY450_.jpg',
                copyright: 'Ebay Seller Provided',
                subcopyright: null,
                imageSizeContract: {
                  widthSize: 150,
                  heightSize: 221
                },
                imageDecisionContract: {
                  rejectReasons: [],
                  action: ''
                }
              }],
              changed: false
            }
          },
          groupToAspectsMap: {
            Identifiers: [{
              aspectName: 'Brand',
              alignedWithSurvivor: true,
              currentValues: [{
                value: 'Nokia',
                information: {
                  umsAlignedValue: true,
                  crawlingValue: false
                }
              }],
              propertyDecisionContract: {
                suggestedValues: [{
                  value: 'Nokia',
                  information: {
                    umsAlignedValue: false,
                    crawlingValue: false
                  }
                }],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG', 'REQUIREDHARD', 'REQUIRED'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'MPN',
              alignedWithSurvivor: true,
              currentValues: [{
                value: '002D378',
                information: {
                  umsAlignedValue: false,
                  crawlingValue: false
                }
              }],
              propertyDecisionContract: {
                suggestedValues: [{
                  value: '002D378',
                  information: {
                    umsAlignedValue: false,
                    crawlingValue: false
                  }
                }],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['SELLERTAG', 'REQUIRED'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }],
            'Both aspects': [{
              aspectName: 'Camera Resolution',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG', 'REQUIRED'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Color',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG', 'REQUIRED'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Contract',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG', 'REQUIRED'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Features',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG', 'REQUIRED'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Lock Status',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG', 'REQUIRED'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Manufacturer Color',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG', 'REQUIRED'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Model',
              alignedWithSurvivor: true,
              currentValues: [{
                value: '2600 classic',
                information: {
                  umsAlignedValue: false,
                  crawlingValue: false
                }
              }],
              propertyDecisionContract: {
                suggestedValues: [{
                  value: '2600 classic',
                  information: {
                    umsAlignedValue: false,
                    crawlingValue: false
                  }
                }],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG', 'REQUIRED'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Model Number',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG', 'REQUIRED'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Network',
              alignedWithSurvivor: true,
              currentValues: [{
                value: 'Unlocked',
                information: {
                  umsAlignedValue: true,
                  crawlingValue: false
                }
              }],
              propertyDecisionContract: {
                suggestedValues: [{
                  value: 'Unlocked',
                  information: {
                    umsAlignedValue: false,
                    crawlingValue: false
                  }
                }],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG', 'REQUIRED'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Operating System',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG', 'REQUIRED'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Processor',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG', 'REQUIRED'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'RAM',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG', 'REQUIRED'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Screen Size',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG', 'REQUIRED'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'SIM Card Slot',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG', 'REQUIRED'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Storage Capacity',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG', 'REQUIRED'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Style',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Memory Card Type',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Country/Region of Manufacture',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Connectivity',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Cellular Band',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }],
            'SellerTag aspects': [{
              aspectName: 'Unit Type',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG', 'HideEntityAspect'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Unit Quantity',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG', 'HideEntityAspect'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Manufacturer Warranty',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Custom Bundle',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'California Prop 65 Warning',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Bundle Description',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }],
            'Additional aspects': [],
            Title: [{
              aspectName: 'Title',
              alignedWithSurvivor: true,
              currentValues: [{
                value: 'Nokia 2600 classic - Midnight Blue (Unlocked) Cellular Phone ',
                information: {
                  umsAlignedValue: true,
                  crawlingValue: false
                }
              }],
              propertyDecisionContract: {
                suggestedValues: [{
                  value: 'Nokia 2600 classic - Midnight Blue (Unlocked) Cellular Phone ',
                  information: {
                    umsAlignedValue: false,
                    crawlingValue: false
                  }
                }],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: true,
                multiValue: false,
                umsAlignedAspect: true,
                aspectTypes: ['NOENTITYTYPE'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }]
          },
          productStatus: {
            status: null,
            comment: '',
            urls: []
          },
          additionalInformation: {
            additionalInformationDataList: [{
              name: 'Mandatory Field 1',
              value: null,
              mandatory: true
            }, {
              name: 'Mandatory Field 2',
              value: null,
              mandatory: false
            }, {
              name: 'Mandatory Field 3',
              value: null,
              mandatory: true
            }, {
              name: 'Mandatory Field 4',
              value: null,
              mandatory: false
            }]
          },
          escalationInfo: null,
          siteId: '0',
          categoryId: 14
        },
        prodDec: null
      }, {
        entityId: '120006338031',
        product: {
          productDefinition: {
            siteId: '15',
            entityId: '120006338031',
            productTitle: 'Convair Multi Directional Turbo Fan - Grey/silver',
            prpUrl: 'http://www.ebay.com.au/p/120006338031',
            categories: {
              currentValues: [{
                categoryId: 20612,
                categoryBreadcrumb: 'Home Appliances(20710)>Heating, Cooling & Air(69197)>Indoor Air Quality & Fans(185114)>Portable Fans(20612)'
              }],
              newValues: [{
                categoryId: 20612,
                categoryBreadcrumb: 'Home Appliances(20710)>Heating, Cooling & Air(69197)>Indoor Air Quality & Fans(185114)>Portable Fans(20612)'
              }],
              categoryId: '20612'
            },
            images: {
              originalImages: [{
                imageUrl: 'https://s.catch.com.au/images/product/0001/1614/54e3ee39346dc680479563.jpg',
                copyright: 'Ebay Seller Provided',
                subcopyright: null,
                imageSizeContract: {
                  widthSize: 150,
                  heightSize: 221
                },
                imageDecisionContract: {
                  rejectReasons: [],
                  action: ''
                }
              }, {
                imageUrl: 'https://s.catch.com.au/images/product/0001/1614/54e3ee2ec37b2624583861.jpg',
                copyright: 'Ebay Seller Provided',
                subcopyright: null,
                imageSizeContract: {
                  widthSize: 150,
                  heightSize: 221
                },
                imageDecisionContract: {
                  rejectReasons: [],
                  action: ''
                }
              }, {
                imageUrl: 'https://s.catch.com.au/images/product/0001/1614/54e3ee34062ab691520978.jpg',
                copyright: 'Ebay Seller Provided',
                subcopyright: null,
                imageSizeContract: {
                  widthSize: 150,
                  heightSize: 221
                },
                imageDecisionContract: {
                  rejectReasons: [],
                  action: ''
                }
              }],
              newImages: [{
                imageUrl: 'https://s.catch.com.au/images/product/0001/1614/54e3ee39346dc680479563.jpg',
                copyright: 'Ebay Seller Provided',
                subcopyright: null,
                imageSizeContract: {
                  widthSize: 150,
                  heightSize: 221
                },
                imageDecisionContract: {
                  rejectReasons: [],
                  action: []
                }
              }, {
                imageUrl: 'https://s.catch.com.au/images/product/0001/1614/54e3ee2ec37b2624583861.jpg',
                copyright: 'Ebay Seller Provided',
                subcopyright: null,
                imageSizeContract: {
                  widthSize: 150,
                  heightSize: 221
                },
                imageDecisionContract: {
                  rejectReasons: [],
                  action: ''
                }
              }, {
                imageUrl: 'https://s.catch.com.au/images/product/0001/1614/54e3ee34062ab691520978.jpg',
                copyright: 'Ebay Seller Provided',
                subcopyright: null,
                imageSizeContract: {
                  widthSize: 150,
                  heightSize: 221
                },
                imageDecisionContract: {
                  rejectReasons: [],
                  action: ''
                }
              }],
              changed: false
            },
            productMaturityLevelIndicator: {
              rank: 100,
              isTtp: false,
              premiumQualityIndicator: 'MANUAL_HIGH_QUALITY'
            }
          },
          groupToAspectsMap: {
            Identifiers: [{
              aspectName: 'Brand',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [{
                  information: {
                    umsAlignedValue: true,
                    crawlingValue: false
                  },
                  value: 'Pioneer'
                }, {
                  information: {
                    umsAlignedValue: true,
                    crawlingValue: false
                  },
                  value: 'Panasonic'
                }],
                urls: []
              }
            }, {
              aspectName: 'MPN',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG', 'REQUIREDHARD', 'REQUIRED'],
                umsValues: []
              },
              crawlingData: {
                values: [{
                  information: {
                    umsAlignedValue: true,
                    crawlingValue: false
                  },
                  value: 'Pioneer'
                }, {
                  information: {
                    umsAlignedValue: true,
                    crawlingValue: false
                  },
                  value: 'Panasonic'
                }],
                urls: []
              }
            }],
            'Both aspects': [{
              aspectName: 'Camera Resolution',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [{
                  information: {
                    umsAlignedValue: true,
                    crawlingValue: false
                  },
                  value: 'Pioneer'
                }, {
                  information: {
                    umsAlignedValue: true,
                    crawlingValue: false
                  },
                  value: 'Panasonic'
                }],
                urls: []
              }
            }, {
              aspectName: 'Color',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [{
                  information: {
                    umsAlignedValue: true,
                    crawlingValue: true
                  },
                  value: 'Pioneer'
                }, {
                  information: {
                    umsAlignedValue: true,
                    crawlingValue: true
                  },
                  value: 'Panasonic'
                }],
                urls: []
              }
            }, {
              aspectName: 'Contract',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [{
                  information: {
                    umsAlignedValue: true,
                    crawlingValue: true
                  },
                  value: 'Pioneer'
                }, {
                  information: {
                    umsAlignedValue: true,
                    crawlingValue: true
                  },
                  value: 'Panasonic'
                }],
                urls: []
              }
            }, {
              aspectName: 'Features',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [{
                  information: {
                    umsAlignedValue: true,
                    crawlingValue: true
                  },
                  value: 'Pioneer'
                }, {
                  information: {
                    umsAlignedValue: true,
                    crawlingValue: true
                  },
                  value: 'Panasonic'
                }],
                urls: []
              }
            }, {
              aspectName: 'Lock Status',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [{
                  information: {
                    umsAlignedValue: true,
                    crawlingValue: true
                  },
                  value: 'Pioneer'
                }, {
                  information: {
                    umsAlignedValue: true,
                    crawlingValue: true
                  },
                  value: 'Panasonic'
                }],
                urls: []
              }
            }, {
              aspectName: 'Manufacturer Color',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Model',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG', 'REQUIRED'],
                umsValues: []
              },
              crawlingData: {
                values: [{
                  information: {
                    umsAlignedValue: true,
                    crawlingValue: true
                  },
                  value: 'Pioneer'
                }, {
                  information: {
                    umsAlignedValue: true,
                    crawlingValue: true
                  },
                  value: 'Panasonic'
                }],
                urls: []
              }
            }, {
              aspectName: 'Model Number',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Network',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Operating System',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Processor',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'RAM',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Screen Size',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'SIM Card Slot',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Storage Capacity',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Style',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Memory Card Type',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Country/Region of Manufacture',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Connectivity',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Cellular Band',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }],
            'SellerTag aspects': [{
              aspectName: 'Unit Type',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Unit Quantity',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Manufacturer Warranty',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Custom Bundle',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG', 'AspectUsage'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'California Prop 65 Warning',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Bundle Description',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG', 'AspectUsage'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }],
            'Additional aspects': [{
              aspectName: 'BRAND',
              alignedWithSurvivor: true,
              currentValues: [{
                value: 'Convair',
                information: {
                  umsAlignedValue: false,
                  crawlingValue: false
                }
              }],
              propertyDecisionContract: {
                suggestedValues: [{
                  value: 'Convair',
                  information: {
                    umsAlignedValue: false,
                    crawlingValue: false
                  }
                }],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'UPC',
              alignedWithSurvivor: true,
              currentValues: [{
                value: '0000093121712',
                information: {
                  umsAlignedValue: false,
                  crawlingValue: false
                }
              }],
              propertyDecisionContract: {
                suggestedValues: [{
                  value: '0000093121712',
                  information: {
                    umsAlignedValue: false,
                    crawlingValue: false
                  }
                }],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Modification Description',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG', 'AspectUsage'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Power Source',
              alignedWithSurvivor: true,
              currentValues: [{
                value: 'Electric',
                information: {
                  umsAlignedValue: true,
                  crawlingValue: false
                }
              }],
              propertyDecisionContract: {
                suggestedValues: [{
                  value: 'Electric',
                  information: {
                    umsAlignedValue: false,
                    crawlingValue: false
                  }
                }],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Housing Material',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Wattage',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Number of Speeds',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Smart Home Compatibility',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Colour',
              alignedWithSurvivor: true,
              currentValues: [{
                value: 'Grey',
                information: {
                  umsAlignedValue: true,
                  crawlingValue: false
                }
              }],
              propertyDecisionContract: {
                suggestedValues: [{
                  value: 'Grey',
                  information: {
                    umsAlignedValue: false,
                    crawlingValue: false
                  }
                }],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG', 'REQUIRED'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Control Style',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Blade Orientation',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Lead Length',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Voltage',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Height',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Mounting Style',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Modified Item',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG', 'AspectUsage'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Time Control',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Recommended Environment',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Number of Blades',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Fan Style',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Smart Home Protocol',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }],
            Title: [{
              aspectName: 'Title',
              alignedWithSurvivor: true,
              currentValues: [{
                value: 'Convair Multi Directional Turbo Fan - Grey/silver',
                information: {
                  umsAlignedValue: true,
                  crawlingValue: false
                }
              }],
              propertyDecisionContract: {
                suggestedValues: [{
                  value: 'Convair Multi Directional Turbo Fan - Grey/silver',
                  information: {
                    umsAlignedValue: false,
                    crawlingValue: false
                  }
                }],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: true,
                aspectTypes: ['NOENTITYTYPE'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }]
          },
          productStatus: {
            status: null,
            comment: '',
            urls: []
          },
          additionalInformation: {
            additionalInformationDataList: [{
              name: 'Mandatory Field 1',
              value: null,
              mandatory: true
            }, {
              name: 'Mandatory Field 2',
              value: null,
              mandatory: false
            }, {
              name: 'Mandatory Field 3',
              value: null,
              mandatory: true
            }, {
              name: 'Mandatory Field 4',
              value: null,
              mandatory: false
            }]
          },
          escalationInfo: null,
          siteId: '0',
          categoryId: 14
        },
        prodDec: {
          productDuplicateAction: 'NON_DUPLICATES',
          decisionContract: {
            reason: 'Different Attribute',
            observation: {
              reason: 'Different Granularity',
              explanation: 'MLG vs PLG',
              Decision: 'Not Duplicates'
            },
            reasonDetails: null,
            comment: 'I am different Attribute Comment',
            urls: [{
              name: 'url1',
              url: ''
            }, {
              name: 'url2',
              url: ''
            }]
          }
        }
      }]
    }, {
      rowId: '5e7c768545bfe5059c7e4661',
      sendToSupervisor: null,
      recordExecuted: false,
      actionsContract: {
        makeObservation: true,
        makeDecision: true,
        isChanged: true
      },
      additionalInformationContract: {
        additionalInformationDataList: []
      },
      escalationInfo: null,
      entities: [{
        entityId: '170087765',
        product: {
          productDefinition: {
            siteId: '15',
            entityId: '170087765',
            productTitle: 'Convair Multi Directional Turbo Fan - Grey/silver',
            prpUrl: 'http://www.ebay.com.au/p/170087765',
            categories: {
              currentValues: [{
                categoryId: 20612,
                categoryBreadcrumb: 'Home Appliances(20710)>Heating, Cooling & Air(69197)>Indoor Air Quality & Fans(185114)>Portable Fans(20612)'
              }],
              newValues: [{
                categoryId: 20612,
                categoryBreadcrumb: 'Home Appliances(20710)>Heating, Cooling & Air(69197)>Indoor Air Quality & Fans(185114)>Portable Fans(20612)'
              }],
              categoryId: '20612'
            },
            images: {
              originalImages: [],
              newImages: [],
              changed: false
            }
          },
          groupToAspectsMap: {
            Identifiers: [{
              aspectName: 'Brand',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [{
                  information: {
                    umsAlignedValue: true,
                    crawlingValue: false
                  },
                  value: 'Pioneer'
                }, {
                  information: {
                    umsAlignedValue: true,
                    crawlingValue: false
                  },
                  value: 'Panasonic'
                }],
                urls: []
              }
            }, {
              aspectName: 'MPN',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG', 'REQUIREDHARD', 'REQUIRED'],
                umsValues: []
              },
              crawlingData: {
                values: [{
                  information: {
                    umsAlignedValue: true,
                    crawlingValue: false
                  },
                  value: 'Pioneer'
                }, {
                  information: {
                    umsAlignedValue: true,
                    crawlingValue: false
                  },
                  value: 'Panasonic'
                }],
                urls: []
              }
            }],
            'Both aspects': [{
              aspectName: 'Camera Resolution',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [{
                  information: {
                    umsAlignedValue: true,
                    crawlingValue: false
                  },
                  value: 'Pioneer'
                }, {
                  information: {
                    umsAlignedValue: true,
                    crawlingValue: false
                  },
                  value: 'Panasonic'
                }],
                urls: []
              }
            }, {
              aspectName: 'Color',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [{
                  information: {
                    umsAlignedValue: true,
                    crawlingValue: true
                  },
                  value: 'Pioneer'
                }, {
                  information: {
                    umsAlignedValue: true,
                    crawlingValue: true
                  },
                  value: 'Panasonic'
                }],
                urls: []
              }
            }, {
              aspectName: 'Contract',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [{
                  information: {
                    umsAlignedValue: true,
                    crawlingValue: true
                  },
                  value: 'Pioneer'
                }, {
                  information: {
                    umsAlignedValue: true,
                    crawlingValue: true
                  },
                  value: 'Panasonic'
                }],
                urls: []
              }
            }, {
              aspectName: 'Features',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [{
                  information: {
                    umsAlignedValue: true,
                    crawlingValue: true
                  },
                  value: 'Pioneer'
                }, {
                  information: {
                    umsAlignedValue: true,
                    crawlingValue: true
                  },
                  value: 'Panasonic'
                }],
                urls: []
              }
            }, {
              aspectName: 'Lock Status',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [{
                  information: {
                    umsAlignedValue: true,
                    crawlingValue: true
                  },
                  value: 'Pioneer'
                }, {
                  information: {
                    umsAlignedValue: true,
                    crawlingValue: true
                  },
                  value: 'Panasonic'
                }],
                urls: []
              }
            }, {
              aspectName: 'Manufacturer Color',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Model',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG', 'REQUIRED'],
                umsValues: []
              },
              crawlingData: {
                values: [{
                  information: {
                    umsAlignedValue: true,
                    crawlingValue: true
                  },
                  value: 'Pioneer'
                }, {
                  information: {
                    umsAlignedValue: true,
                    crawlingValue: true
                  },
                  value: 'Panasonic'
                }],
                urls: []
              }
            }, {
              aspectName: 'Model Number',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Network',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Operating System',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Processor',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'RAM',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Screen Size',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'SIM Card Slot',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Storage Capacity',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Style',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Memory Card Type',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Country/Region of Manufacture',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Connectivity',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Cellular Band',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }],
            'SellerTag aspects': [{
              aspectName: 'Unit Type',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Unit Quantity',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Manufacturer Warranty',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Custom Bundle',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG', 'AspectUsage'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'California Prop 65 Warning',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Bundle Description',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG', 'AspectUsage'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }],
            'Additional aspects': [{
              aspectName: 'BRAND',
              alignedWithSurvivor: true,
              currentValues: [{
                value: 'Convair',
                information: {
                  umsAlignedValue: false,
                  crawlingValue: false
                }
              }],
              propertyDecisionContract: {
                suggestedValues: [{
                  value: 'Convair',
                  information: {
                    umsAlignedValue: false,
                    crawlingValue: false
                  }
                }],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'UPC',
              alignedWithSurvivor: true,
              currentValues: [{
                value: '0000093121712',
                information: {
                  umsAlignedValue: false,
                  crawlingValue: false
                }
              }],
              propertyDecisionContract: {
                suggestedValues: [{
                  value: '0000093121712',
                  information: {
                    umsAlignedValue: false,
                    crawlingValue: false
                  }
                }],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Modification Description',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG', 'AspectUsage'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Power Source',
              alignedWithSurvivor: true,
              currentValues: [{
                value: 'Electric',
                information: {
                  umsAlignedValue: true,
                  crawlingValue: false
                }
              }],
              propertyDecisionContract: {
                suggestedValues: [{
                  value: 'Electric',
                  information: {
                    umsAlignedValue: false,
                    crawlingValue: false
                  }
                }],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Housing Material',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Wattage',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Number of Speeds',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Smart Home Compatibility',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Colour',
              alignedWithSurvivor: true,
              currentValues: [{
                value: 'Grey',
                information: {
                  umsAlignedValue: true,
                  crawlingValue: false
                }
              }],
              propertyDecisionContract: {
                suggestedValues: [{
                  value: 'Grey',
                  information: {
                    umsAlignedValue: false,
                    crawlingValue: false
                  }
                }],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG', 'REQUIRED'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Control Style',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Blade Orientation',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Lead Length',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Voltage',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Height',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Mounting Style',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Modified Item',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG', 'AspectUsage'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Time Control',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Recommended Environment',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Number of Blades',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Fan Style',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Smart Home Protocol',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }],
            Title: [{
              aspectName: 'Title',
              alignedWithSurvivor: true,
              currentValues: [{
                value: 'Convair Multi Directional Turbo Fan - Grey/silver',
                information: {
                  umsAlignedValue: true,
                  crawlingValue: false
                }
              }],
              propertyDecisionContract: {
                suggestedValues: [{
                  value: 'Convair Multi Directional Turbo Fan - Grey/silver',
                  information: {
                    umsAlignedValue: false,
                    crawlingValue: false
                  }
                }],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: true,
                aspectTypes: ['NOENTITYTYPE'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }]
          },
          productStatus: {
            status: null,
            comment: '',
            urls: []
          },
          additionalInformation: {
            additionalInformationDataList: [{
              name: 'Mandatory Field 1',
              value: null,
              mandatory: true
            }, {
              name: 'Mandatory Field 2',
              value: null,
              mandatory: false
            }, {
              name: 'Mandatory Field 3',
              value: null,
              mandatory: true
            }, {
              name: 'Mandatory Field 4',
              value: null,
              mandatory: false
            }]
          },
          escalationInfo: null,
          siteId: '0',
          categoryId: 14
        },
        prodDec: {
          productDuplicateAction: 'NON_DUPLICATES',
          decisionContract: {
            reason: 'Different Attribute',
            observation: {
              reason: 'Different Products',
              explanation: "Product type' vs 'Product type' (Laptop vs Table)",
              Decision: 'Not Duplicates'
            },
            reasonDetails: null,
            comment: 'I am different Attribute Comment',
            urls: [{
              name: 'url1',
              url: ''
            }, {
              name: 'url2',
              url: ''
            }]
          }
        }
      }, {
        entityId: '120006338032',
        product: {
          productDefinition: {
            siteId: '15',
            entityId: '120006338032',
            productTitle: 'Convair Multi Directional Turbo Fan - Grey/silver',
            prpUrl: 'http://www.ebay.com.au/p/120006338032',
            categories: {
              currentValues: [{
                categoryId: 20612,
                categoryBreadcrumb: 'Home Appliances(20710)>Heating, Cooling & Air(69197)>Indoor Air Quality & Fans(185114)>Portable Fans(20612)'
              }],
              newValues: [{
                categoryId: 20612,
                categoryBreadcrumb: 'Home Appliances(20710)>Heating, Cooling & Air(69197)>Indoor Air Quality & Fans(185114)>Portable Fans(20612)'
              }],
              categoryId: '20612'
            },
            images: {
              originalImages: [],
              newImages: [],
              changed: false
            }
          },
          groupToAspectsMap: {
            Identifiers: [{
              aspectName: 'Brand',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [{
                  information: {
                    umsAlignedValue: true,
                    crawlingValue: false
                  },
                  value: 'Pioneer'
                }, {
                  information: {
                    umsAlignedValue: true,
                    crawlingValue: false
                  },
                  value: 'Panasonic'
                }],
                urls: []
              }
            }, {
              aspectName: 'MPN',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG', 'REQUIREDHARD', 'REQUIRED'],
                umsValues: []
              },
              crawlingData: {
                values: [{
                  information: {
                    umsAlignedValue: true,
                    crawlingValue: false
                  },
                  value: 'Pioneer'
                }, {
                  information: {
                    umsAlignedValue: true,
                    crawlingValue: false
                  },
                  value: 'Panasonic'
                }],
                urls: []
              }
            }],
            'Both aspects': [{
              aspectName: 'Camera Resolution',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [{
                  information: {
                    umsAlignedValue: true,
                    crawlingValue: false
                  },
                  value: 'Pioneer'
                }, {
                  information: {
                    umsAlignedValue: true,
                    crawlingValue: false
                  },
                  value: 'Panasonic'
                }],
                urls: []
              }
            }, {
              aspectName: 'Color',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [{
                  information: {
                    umsAlignedValue: true,
                    crawlingValue: true
                  },
                  value: 'Pioneer'
                }, {
                  information: {
                    umsAlignedValue: true,
                    crawlingValue: true
                  },
                  value: 'Panasonic'
                }],
                urls: []
              }
            }, {
              aspectName: 'Contract',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [{
                  information: {
                    umsAlignedValue: true,
                    crawlingValue: true
                  },
                  value: 'Pioneer'
                }, {
                  information: {
                    umsAlignedValue: true,
                    crawlingValue: true
                  },
                  value: 'Panasonic'
                }],
                urls: []
              }
            }, {
              aspectName: 'Features',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [{
                  information: {
                    umsAlignedValue: true,
                    crawlingValue: true
                  },
                  value: 'Pioneer'
                }, {
                  information: {
                    umsAlignedValue: true,
                    crawlingValue: true
                  },
                  value: 'Panasonic'
                }],
                urls: []
              }
            }, {
              aspectName: 'Lock Status',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [{
                  information: {
                    umsAlignedValue: true,
                    crawlingValue: true
                  },
                  value: 'Pioneer'
                }, {
                  information: {
                    umsAlignedValue: true,
                    crawlingValue: true
                  },
                  value: 'Panasonic'
                }],
                urls: []
              }
            }, {
              aspectName: 'Manufacturer Color',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Model',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG', 'REQUIRED'],
                umsValues: []
              },
              crawlingData: {
                values: [{
                  information: {
                    umsAlignedValue: true,
                    crawlingValue: true
                  },
                  value: 'Pioneer'
                }, {
                  information: {
                    umsAlignedValue: true,
                    crawlingValue: true
                  },
                  value: 'Panasonic'
                }],
                urls: []
              }
            }, {
              aspectName: 'Model Number',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Network',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Operating System',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Processor',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'RAM',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Screen Size',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'SIM Card Slot',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Storage Capacity',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Style',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Memory Card Type',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Country/Region of Manufacture',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Connectivity',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Cellular Band',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }],
            'SellerTag aspects': [{
              aspectName: 'Unit Type',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Unit Quantity',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Manufacturer Warranty',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Custom Bundle',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG', 'AspectUsage'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'California Prop 65 Warning',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Bundle Description',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG', 'AspectUsage'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }],
            'Additional aspects': [{
              aspectName: 'BRAND',
              alignedWithSurvivor: true,
              currentValues: [{
                value: 'Convair',
                information: {
                  umsAlignedValue: false,
                  crawlingValue: false
                }
              }],
              propertyDecisionContract: {
                suggestedValues: [{
                  value: 'Convair',
                  information: {
                    umsAlignedValue: false,
                    crawlingValue: false
                  }
                }],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'UPC',
              alignedWithSurvivor: true,
              currentValues: [{
                value: '0000093121712',
                information: {
                  umsAlignedValue: false,
                  crawlingValue: false
                }
              }],
              propertyDecisionContract: {
                suggestedValues: [{
                  value: '0000093121712',
                  information: {
                    umsAlignedValue: false,
                    crawlingValue: false
                  }
                }],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Modification Description',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG', 'AspectUsage'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Power Source',
              alignedWithSurvivor: true,
              currentValues: [{
                value: 'Electric',
                information: {
                  umsAlignedValue: true,
                  crawlingValue: false
                }
              }],
              propertyDecisionContract: {
                suggestedValues: [{
                  value: 'Electric',
                  information: {
                    umsAlignedValue: false,
                    crawlingValue: false
                  }
                }],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Housing Material',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Wattage',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Number of Speeds',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Smart Home Compatibility',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Colour',
              alignedWithSurvivor: true,
              currentValues: [{
                value: 'Grey',
                information: {
                  umsAlignedValue: true,
                  crawlingValue: false
                }
              }],
              propertyDecisionContract: {
                suggestedValues: [{
                  value: 'Grey',
                  information: {
                    umsAlignedValue: false,
                    crawlingValue: false
                  }
                }],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG', 'REQUIRED'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Control Style',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Blade Orientation',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Lead Length',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Voltage',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Height',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Mounting Style',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Modified Item',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG', 'AspectUsage'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Time Control',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Recommended Environment',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Number of Blades',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Fan Style',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Smart Home Protocol',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }],
            Title: [{
              aspectName: 'Title',
              alignedWithSurvivor: true,
              currentValues: [{
                value: 'Convair Multi Directional Turbo Fan - Grey/silver',
                information: {
                  umsAlignedValue: true,
                  crawlingValue: false
                }
              }],
              propertyDecisionContract: {
                suggestedValues: [{
                  value: 'Convair Multi Directional Turbo Fan - Grey/silver',
                  information: {
                    umsAlignedValue: false,
                    crawlingValue: false
                  }
                }],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: true,
                aspectTypes: ['NOENTITYTYPE'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }]
          },
          productStatus: {
            status: null,
            comment: '',
            urls: []
          },
          additionalInformation: {
            additionalInformationDataList: [{
              name: 'Mandatory Field 1',
              value: null,
              mandatory: true
            }, {
              name: 'Mandatory Field 2',
              value: null,
              mandatory: false
            }, {
              name: 'Mandatory Field 3',
              value: null,
              mandatory: true
            }, {
              name: 'Mandatory Field 4',
              value: null,
              mandatory: false
            }]
          },
          escalationInfo: null,
          siteId: '0',
          categoryId: 14
        },
        prodDec: {
          productDuplicateAction: 'NON_DUPLICATES',
          decisionContract: {
            reason: 'Different Attribute',
            observation: null,
            reasonDetails: null,
            comment: 'I am different Attribute Comment',
            urls: [{
              name: 'url1',
              url: ''
            }, {
              name: 'url2',
              url: ''
            }]
          }
        }
      }]
    }, {
      rowId: '5e7c768545bfe5059c7e4662',
      sendToSupervisor: null,
      recordExecuted: false,
      actionsContract: {
        makeObservation: true,
        makeDecision: true,
        isChanged: true
      },
      additionalInformationContract: {
        additionalInformationDataList: []
      },
      escalationInfo: null,
      entities: [{
        entityId: '170087765',
        product: {
          productDefinition: {
            siteId: '15',
            entityId: '12000633803',
            productTitle: 'Convair Multi Directional Turbo Fan - Grey/silver',
            prpUrl: 'http://www.ebay.com.au/p/12000633803',
            categories: {
              currentValues: [{
                categoryId: 20612,
                categoryBreadcrumb: 'Home Appliances(20710)>Heating, Cooling & Air(69197)>Indoor Air Quality & Fans(185114)>Portable Fans(20612)'
              }],
              newValues: [{
                categoryId: 20612,
                categoryBreadcrumb: 'Home Appliances(20710)>Heating, Cooling & Air(69197)>Indoor Air Quality & Fans(185114)>Portable Fans(20612)'
              }],
              categoryId: '20612'
            },
            images: {
              originalImages: [],
              newImages: [],
              changed: false
            }
          },
          groupToAspectsMap: {
            Identifiers: [{
              aspectName: 'Brand',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [{
                  information: {
                    umsAlignedValue: true,
                    crawlingValue: false
                  },
                  value: 'Pioneer'
                }, {
                  information: {
                    umsAlignedValue: true,
                    crawlingValue: false
                  },
                  value: 'Panasonic'
                }],
                urls: []
              }
            }, {
              aspectName: 'MPN',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG', 'REQUIREDHARD', 'REQUIRED'],
                umsValues: []
              },
              crawlingData: {
                values: [{
                  information: {
                    umsAlignedValue: true,
                    crawlingValue: false
                  },
                  value: 'Pioneer'
                }, {
                  information: {
                    umsAlignedValue: true,
                    crawlingValue: false
                  },
                  value: 'Panasonic'
                }],
                urls: []
              }
            }],
            'Both aspects': [{
              aspectName: 'Camera Resolution',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [{
                  information: {
                    umsAlignedValue: true,
                    crawlingValue: false
                  },
                  value: 'Pioneer'
                }, {
                  information: {
                    umsAlignedValue: true,
                    crawlingValue: false
                  },
                  value: 'Panasonic'
                }],
                urls: []
              }
            }, {
              aspectName: 'Color',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [{
                  information: {
                    umsAlignedValue: true,
                    crawlingValue: true
                  },
                  value: 'Pioneer'
                }, {
                  information: {
                    umsAlignedValue: true,
                    crawlingValue: true
                  },
                  value: 'Panasonic'
                }],
                urls: []
              }
            }, {
              aspectName: 'Contract',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [{
                  information: {
                    umsAlignedValue: true,
                    crawlingValue: true
                  },
                  value: 'Pioneer'
                }, {
                  information: {
                    umsAlignedValue: true,
                    crawlingValue: true
                  },
                  value: 'Panasonic'
                }],
                urls: []
              }
            }, {
              aspectName: 'Features',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [{
                  information: {
                    umsAlignedValue: true,
                    crawlingValue: true
                  },
                  value: 'Pioneer'
                }, {
                  information: {
                    umsAlignedValue: true,
                    crawlingValue: true
                  },
                  value: 'Panasonic'
                }],
                urls: []
              }
            }, {
              aspectName: 'Lock Status',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [{
                  information: {
                    umsAlignedValue: true,
                    crawlingValue: true
                  },
                  value: 'Pioneer'
                }, {
                  information: {
                    umsAlignedValue: true,
                    crawlingValue: true
                  },
                  value: 'Panasonic'
                }],
                urls: []
              }
            }, {
              aspectName: 'Manufacturer Color',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Model',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG', 'REQUIRED'],
                umsValues: []
              },
              crawlingData: {
                values: [{
                  information: {
                    umsAlignedValue: true,
                    crawlingValue: true
                  },
                  value: 'Pioneer'
                }, {
                  information: {
                    umsAlignedValue: true,
                    crawlingValue: true
                  },
                  value: 'Panasonic'
                }],
                urls: []
              }
            }, {
              aspectName: 'Model Number',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Network',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Operating System',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Processor',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'RAM',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Screen Size',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'SIM Card Slot',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Storage Capacity',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Style',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Memory Card Type',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Country/Region of Manufacture',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Connectivity',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Cellular Band',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }],
            'SellerTag aspects': [{
              aspectName: 'Unit Type',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Unit Quantity',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Manufacturer Warranty',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Custom Bundle',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG', 'AspectUsage'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'California Prop 65 Warning',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Bundle Description',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG', 'AspectUsage'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }],
            'Additional aspects': [{
              aspectName: 'BRAND',
              alignedWithSurvivor: true,
              currentValues: [{
                value: 'Convair',
                information: {
                  umsAlignedValue: false,
                  crawlingValue: false
                }
              }],
              propertyDecisionContract: {
                suggestedValues: [{
                  value: 'Convair',
                  information: {
                    umsAlignedValue: false,
                    crawlingValue: false
                  }
                }],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'UPC',
              alignedWithSurvivor: true,
              currentValues: [{
                value: '0000093121712',
                information: {
                  umsAlignedValue: false,
                  crawlingValue: false
                }
              }],
              propertyDecisionContract: {
                suggestedValues: [{
                  value: '0000093121712',
                  information: {
                    umsAlignedValue: false,
                    crawlingValue: false
                  }
                }],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Modification Description',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG', 'AspectUsage'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Power Source',
              alignedWithSurvivor: true,
              currentValues: [{
                value: 'Electric',
                information: {
                  umsAlignedValue: true,
                  crawlingValue: false
                }
              }],
              propertyDecisionContract: {
                suggestedValues: [{
                  value: 'Electric',
                  information: {
                    umsAlignedValue: false,
                    crawlingValue: false
                  }
                }],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Housing Material',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Wattage',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Number of Speeds',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Smart Home Compatibility',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Colour',
              alignedWithSurvivor: true,
              currentValues: [{
                value: 'Grey',
                information: {
                  umsAlignedValue: true,
                  crawlingValue: false
                }
              }],
              propertyDecisionContract: {
                suggestedValues: [{
                  value: 'Grey',
                  information: {
                    umsAlignedValue: false,
                    crawlingValue: false
                  }
                }],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG', 'REQUIRED'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Control Style',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Blade Orientation',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Lead Length',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Voltage',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Height',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Mounting Style',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Modified Item',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG', 'AspectUsage'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Time Control',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Recommended Environment',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Number of Blades',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Fan Style',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Smart Home Protocol',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }],
            Title: [{
              aspectName: 'Title',
              alignedWithSurvivor: true,
              currentValues: [{
                value: 'Convair Multi Directional Turbo Fan - Grey/silver',
                information: {
                  umsAlignedValue: true,
                  crawlingValue: false
                }
              }],
              propertyDecisionContract: {
                suggestedValues: [{
                  value: 'Convair Multi Directional Turbo Fan - Grey/silver',
                  information: {
                    umsAlignedValue: false,
                    crawlingValue: false
                  }
                }],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: true,
                aspectTypes: ['NOENTITYTYPE'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }]
          },
          productStatus: {
            status: null,
            comment: '',
            urls: []
          },
          additionalInformation: {
            additionalInformationDataList: [{
              name: 'Mandatory Field 1',
              value: null,
              mandatory: true
            }, {
              name: 'Mandatory Field 2',
              value: null,
              mandatory: false
            }, {
              name: 'Mandatory Field 3',
              value: null,
              mandatory: true
            }, {
              name: 'Mandatory Field 4',
              value: null,
              mandatory: false
            }]
          },
          escalationInfo: null,
          siteId: '0',
          categoryId: 14
        },
        prodDec: {
          productDuplicateAction: 'NON_DUPLICATES',
          decisionContract: {
            reason: 'Different Attribute',
            observation: null,
            reasonDetails: null,
            comment: 'I am different Attribute Comment',
            urls: [{
              name: 'url1',
              url: ''
            }, {
              name: 'url2',
              url: ''
            }]
          }
        }
      }, {
        entityId: '120006338034',
        product: {
          productDefinition: {
            siteId: '15',
            entityId: '120006338034',
            productTitle: 'Convair Multi Directional Turbo Fan - Grey/silver',
            prpUrl: 'http://www.ebay.com.au/p/120006338034',
            categories: {
              currentValues: [{
                categoryId: 20612,
                categoryBreadcrumb: 'Home Appliances(20710)>Heating, Cooling & Air(69197)>Indoor Air Quality & Fans(185114)>Portable Fans(20612)'
              }],
              newValues: [{
                categoryId: 20612,
                categoryBreadcrumb: 'Home Appliances(20710)>Heating, Cooling & Air(69197)>Indoor Air Quality & Fans(185114)>Portable Fans(20612)'
              }],
              categoryId: '20612'
            },
            images: {
              originalImages: [],
              newImages: [],
              changed: false
            }
          },
          groupToAspectsMap: {
            Identifiers: [{
              aspectName: 'Brand',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [{
                  information: {
                    umsAlignedValue: true,
                    crawlingValue: false
                  },
                  value: 'Pioneer'
                }, {
                  information: {
                    umsAlignedValue: true,
                    crawlingValue: false
                  },
                  value: 'Panasonic'
                }],
                urls: []
              }
            }, {
              aspectName: 'MPN',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG', 'REQUIREDHARD', 'REQUIRED'],
                umsValues: []
              },
              crawlingData: {
                values: [{
                  information: {
                    umsAlignedValue: true,
                    crawlingValue: false
                  },
                  value: 'Pioneer'
                }, {
                  information: {
                    umsAlignedValue: true,
                    crawlingValue: false
                  },
                  value: 'Panasonic'
                }],
                urls: []
              }
            }],
            'Both aspects': [{
              aspectName: 'Camera Resolution',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [{
                  information: {
                    umsAlignedValue: true,
                    crawlingValue: false
                  },
                  value: 'Pioneer'
                }, {
                  information: {
                    umsAlignedValue: true,
                    crawlingValue: false
                  },
                  value: 'Panasonic'
                }],
                urls: []
              }
            }, {
              aspectName: 'Color',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [{
                  information: {
                    umsAlignedValue: true,
                    crawlingValue: true
                  },
                  value: 'Pioneer'
                }, {
                  information: {
                    umsAlignedValue: true,
                    crawlingValue: true
                  },
                  value: 'Panasonic'
                }],
                urls: []
              }
            }, {
              aspectName: 'Contract',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [{
                  information: {
                    umsAlignedValue: true,
                    crawlingValue: true
                  },
                  value: 'Pioneer'
                }, {
                  information: {
                    umsAlignedValue: true,
                    crawlingValue: true
                  },
                  value: 'Panasonic'
                }],
                urls: []
              }
            }, {
              aspectName: 'Features',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [{
                  information: {
                    umsAlignedValue: true,
                    crawlingValue: true
                  },
                  value: 'Pioneer'
                }, {
                  information: {
                    umsAlignedValue: true,
                    crawlingValue: true
                  },
                  value: 'Panasonic'
                }],
                urls: []
              }
            }, {
              aspectName: 'Lock Status',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [{
                  information: {
                    umsAlignedValue: true,
                    crawlingValue: true
                  },
                  value: 'Pioneer'
                }, {
                  information: {
                    umsAlignedValue: true,
                    crawlingValue: true
                  },
                  value: 'Panasonic'
                }],
                urls: []
              }
            }, {
              aspectName: 'Manufacturer Color',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Model',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG', 'REQUIRED'],
                umsValues: []
              },
              crawlingData: {
                values: [{
                  information: {
                    umsAlignedValue: true,
                    crawlingValue: true
                  },
                  value: 'Pioneer'
                }, {
                  information: {
                    umsAlignedValue: true,
                    crawlingValue: true
                  },
                  value: 'Panasonic'
                }],
                urls: []
              }
            }, {
              aspectName: 'Model Number',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Network',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Operating System',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Processor',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'RAM',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Screen Size',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'SIM Card Slot',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Storage Capacity',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Style',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Memory Card Type',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Country/Region of Manufacture',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Connectivity',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Cellular Band',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }],
            'SellerTag aspects': [{
              aspectName: 'Unit Type',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Unit Quantity',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Manufacturer Warranty',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Custom Bundle',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG', 'AspectUsage'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'California Prop 65 Warning',
              alignedWithSurvivor: false,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Bundle Description',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG', 'AspectUsage'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }],
            'Additional aspects': [{
              aspectName: 'BRAND',
              alignedWithSurvivor: true,
              currentValues: [{
                value: 'Convair',
                information: {
                  umsAlignedValue: false,
                  crawlingValue: false
                }
              }],
              propertyDecisionContract: {
                suggestedValues: [{
                  value: 'Convair',
                  information: {
                    umsAlignedValue: false,
                    crawlingValue: false
                  }
                }],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: false,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'UPC',
              alignedWithSurvivor: true,
              currentValues: [{
                value: '0000093121712',
                information: {
                  umsAlignedValue: false,
                  crawlingValue: false
                }
              }],
              propertyDecisionContract: {
                suggestedValues: [{
                  value: '0000093121712',
                  information: {
                    umsAlignedValue: false,
                    crawlingValue: false
                  }
                }],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: [],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Modification Description',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG', 'AspectUsage'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Power Source',
              alignedWithSurvivor: true,
              currentValues: [{
                value: 'Electric',
                information: {
                  umsAlignedValue: true,
                  crawlingValue: false
                }
              }],
              propertyDecisionContract: {
                suggestedValues: [{
                  value: 'Electric',
                  information: {
                    umsAlignedValue: false,
                    crawlingValue: false
                  }
                }],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Housing Material',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Wattage',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Number of Speeds',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Smart Home Compatibility',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Colour',
              alignedWithSurvivor: true,
              currentValues: [{
                value: 'Grey',
                information: {
                  umsAlignedValue: true,
                  crawlingValue: false
                }
              }],
              propertyDecisionContract: {
                suggestedValues: [{
                  value: 'Grey',
                  information: {
                    umsAlignedValue: false,
                    crawlingValue: false
                  }
                }],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG', 'REQUIRED'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Control Style',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Blade Orientation',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Lead Length',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Voltage',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Height',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Mounting Style',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Modified Item',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG', 'AspectUsage'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Time Control',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Recommended Environment',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Number of Blades',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Fan Style',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }, {
              aspectName: 'Smart Home Protocol',
              alignedWithSurvivor: true,
              currentValues: [],
              propertyDecisionContract: {
                suggestedValues: [],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: true,
                umsAlignedAspect: true,
                aspectTypes: ['BUYERTAG', 'SELLERTAG'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }],
            Title: [{
              aspectName: 'Title',
              alignedWithSurvivor: true,
              currentValues: [{
                value: 'Convair Multi Directional Turbo Fan - Grey/silver',
                information: {
                  umsAlignedValue: true,
                  crawlingValue: false
                }
              }],
              propertyDecisionContract: {
                suggestedValues: [{
                  value: 'Convair Multi Directional Turbo Fan - Grey/silver',
                  information: {
                    umsAlignedValue: false,
                    crawlingValue: false
                  }
                }],
                changed: false,
                status: 'NONE',
                deleteReason: null
              },
              aspectInformation: {
                mandatoryOnProduct: false,
                multiValue: false,
                umsAlignedAspect: true,
                aspectTypes: ['NOENTITYTYPE'],
                umsValues: []
              },
              crawlingData: {
                values: [],
                urls: []
              }
            }]
          },
          productStatus: {
            status: null,
            comment: '',
            urls: []
          },
          additionalInformation: {
            additionalInformationDataList: [{
              name: 'Mandatory Field 1',
              value: null,
              mandatory: true
            }, {
              name: 'Mandatory Field 2',
              value: null,
              mandatory: false
            }, {
              name: 'Mandatory Field 3',
              value: null,
              mandatory: true
            }, {
              name: 'Mandatory Field 4',
              value: null,
              mandatory: false
            }]
          },
          escalationInfo: null,
          siteId: '0',
          categoryId: 14
        },
        prodDec: {
          productDuplicateAction: 'NON_DUPLICATES',
          decisionContract: {
            reason: 'Different Attribute',
            observation: null,
            reasonDetails: null,
            comment: 'I am different Attribute Comment',
            urls: [{
              name: 'url1',
              url: ''
            }, {
              name: 'url2',
              url: ''
            }]
          }
        }
      }]
    }]
  }
};
exports.clusterMockData = clusterMockData;
var mockConfigurationAllEnabled = {
  taskConfiguration: {
    taskId: '5df2319db8c61b334ca22f48',
    name: 'Dup Test Config',
    type: 'Duplicates'
  },
  configurationResponse: {
    observationConfiguration: [{
      reason: 'Different Attribute',
      explanation: 'One or more Attributes in different between the Products',
      Decision: 'Not Duplicates'
    }, {
      reason: 'Different Products',
      explanation: "Product type' vs 'Product type' (Laptop vs Table)",
      Decision: 'Not Duplicates'
    }, {
      reason: 'Different Granularity',
      explanation: 'MLG vs PLG, Customized Products, Apple Foreign Product',
      Decision: 'Not Duplicates'
    }, {
      reason: 'Conflict Data - prod1',
      explanation: 'There is a contradiction in the Product between the Attribute (Color = Blue) and the Title (Color = Red)',
      Decision: 'Not Duplicates'
    }, {
      reason: 'Conflict Data - prod2',
      explanation: null,
      Decision: 'Not Duplicates'
    }, {
      reason: 'Conflict Data - Both products',
      explanation: null,
      Decision: 'Not Duplicates'
    }, {
      reason: 'Mixed Results - prod1',
      explanation: 'The Product leads to several different results (Product is not unique)',
      Decision: 'Not Duplicates'
    }, {
      reason: 'Mixed Results - prod2',
      explanation: null,
      Decision: 'Not Duplicates'
    }, {
      reason: 'Mixed Results - Both Products',
      explanation: null,
      Decision: 'Not Duplicates'
    }, {
      reason: 'Invalid - prod 1',
      explanation: 'Bad Product, that is not in the proper formation of Product, for instance Product with the Title Technical Details',
      Decision: 'Not Duplicates'
    }, {
      reason: 'Invalid - prod 2',
      explanation: null,
      Decision: 'Not Duplicates'
    }, {
      reason: 'Invalid - Both Products',
      explanation: null,
      Decision: 'Not Duplicates'
    }, {
      reason: 'Valid not Duplicate - prod 1',
      explanation: 'In case both products are valid but they are actually NOT duplicates',
      Decision: 'Not Duplicates'
    }, {
      reason: 'Valid not Duplicate - prod 2',
      explanation: null,
      Decision: 'Not Duplicates'
    }, {
      reason: 'Only Identical UPI(s)',
      explanation: 'Used for Poor Product, where the GTIN is invalid and the Only Identical Data between the Products is their UPIs',
      Decision: 'Duplicates'
    }, {
      reason: 'Only Identical Title',
      explanation: 'Used for Poor Product, where the GTIN is invalid or missing and the two conditions',
      Decision: 'Duplicates'
    }, {
      reason: 'Only Identical DATA',
      explanation: 'Used for Poor Product, where the GTIN is invalid or missing and the two conditions',
      Decision: 'Duplicates'
    }, {
      reason: 'Valid Duplicate - prod 1',
      explanation: 'In case both products are valid but they are actually NOT duplicates',
      Decision: 'Duplicates'
    }, {
      reason: 'Valid Duplicate - prod 2',
      explanation: null,
      Decision: 'Duplicates'
    }, {
      reason: 'Insufficient - prod 1',
      explanation: "Poor Product. Products that miss core feature aspects (and title) that can't be concluded by the UPIs since they are - isMissingLocaleDataError, Leads to no results",
      Decision: 'Skip'
    }, {
      reason: 'Insufficient - prod 2',
      explanation: null,
      Decision: 'Skip'
    }, {
      reason: 'Insufficient - Both Products',
      explanation: null,
      Decision: 'Skip'
    }],
    mainMandatoryFields: [{
      fieldName: 'Mandatory Field 1',
      mandatory: false,
      fieldType: 'Free Text',
      values: []
    }, {
      fieldName: 'Mandatory Field 2',
      mandatory: true,
      fieldType: 'Dropdown',
      values: ['aa', 'bb']
    }],
    hiddenFieldsGroups: [{
      groupName: 'NOENTITYTYPE',
      displayName: 'Non UMS aspects',
      message: 'Non UMS aspects',
      hide: false
    }, {
      groupName: 'HideEntityAspect',
      displayName: 'Hidden GH aspects',
      message: 'Hidden GH aspects',
      hide: false
    }, {
      groupName: 'AspectUsage',
      displayName: 'Listing related aspects',
      message: 'Listing related aspects',
      hide: false
    }],
    sourceInformation: {
      vendor: 'eBay SDO',
      sourceType: 'SDO Enrichment',
      sourcingMethod: 'Vendors',
      track: 'Top Products',
      allowComparison: true,
      sendFullSnapshot: true
    },
    clusterStrategy: 'None',
    updatePlatformRedirect: true,
    updatePlatformProduct: true,
    enableProductCuration: true,
    survivorProvided: true,
    addCrawling: false,
    onlyLive: true
  }
};
exports.mockConfigurationAllEnabled = mockConfigurationAllEnabled;
var mockConfigurationNotEditable = {
  taskConfiguration: {
    taskId: '5df2319db8c61b334ca22f48',
    name: 'Dup Test Config',
    type: 'Duplicates'
  },
  configurationResponse: {
    mainMandatoryFields: [{
      fieldName: 'Mandatory Field 1',
      mandatory: false,
      fieldType: 'Free Text',
      values: []
    }, {
      fieldName: 'Mandatory Field 2',
      mandatory: true,
      fieldType: 'Dropdown',
      values: ['aa', 'bb']
    }],
    hiddenFieldsGroups: [{
      groupName: 'NOENTITYTYPE',
      displayName: 'Non UMS aspects',
      message: 'Non UMS aspects',
      hide: false
    }, {
      groupName: 'HideEntityAspect',
      displayName: 'Hidden GH aspects',
      message: 'Hidden GH aspects',
      hide: false
    }, {
      groupName: 'AspectUsage',
      displayName: 'Listing related aspects',
      message: 'Listing related aspects',
      hide: false
    }],
    sourceInformation: {
      vendor: 'eBay SDO',
      sourceType: 'SDO Enrichment',
      sourcingMethod: 'Vendors',
      track: 'Top Products',
      allowComparison: true,
      sendFullSnapshot: true
    },
    clusterStrategy: 'None',
    updatePlatformRedirect: true,
    updatePlatformProduct: true,
    enableProductCuration: false,
    survivorProvided: true,
    addCrawling: false,
    onlyLive: true
  }
};
exports.mockConfigurationNotEditable = mockConfigurationNotEditable;
var mockConfigurationWithoutHeaders = {
  taskConfiguration: {
    taskId: '5df2319db8c61b334ca22f48',
    name: 'Dup Test Config',
    type: 'Duplicates'
  },
  configurationResponse: {
    mainMandatoryFields: [{
      fieldName: 'Mandatory Field 1',
      mandatory: false,
      fieldType: 'Free Text',
      values: []
    }, {
      fieldName: 'Mandatory Field 2',
      mandatory: true,
      fieldType: 'Dropdown',
      values: ['aa', 'bb']
    }],
    hiddenFieldsGroups: [{
      groupName: 'NOENTITYTYPE',
      displayName: 'Non UMS aspects',
      message: 'Non UMS aspects',
      hide: false
    }, {
      groupName: 'HideEntityAspect',
      displayName: 'Hidden GH aspects',
      message: 'Hidden GH aspects',
      hide: false
    }, {
      groupName: 'AspectUsage',
      displayName: 'Listing related aspects',
      message: 'Listing related aspects',
      hide: false
    }],
    sourceInformation: {
      vendor: 'eBay SDO',
      sourceType: 'SDO Enrichment',
      sourcingMethod: 'Vendors',
      track: 'Top Products',
      allowComparison: true,
      sendFullSnapshot: true
    },
    clusterStrategy: 'None',
    updatePlatformRedirect: true,
    updatePlatformProduct: true,
    enableProductCuration: true,
    survivorProvided: false,
    addCrawling: false,
    onlyLive: true
  }
};
exports.mockConfigurationWithoutHeaders = mockConfigurationWithoutHeaders;
var mockConfigurationNotEditableAndWithoutHeaders = {
  taskConfiguration: {
    taskId: '5df2319db8c61b334ca22f48',
    name: 'Dup Test Config',
    type: 'Duplicates'
  },
  configurationResponse: {
    mainMandatoryFields: [{
      fieldName: 'Mandatory Field 1',
      mandatory: false,
      fieldType: 'Free Text',
      values: []
    }, {
      fieldName: 'Mandatory Field 2',
      mandatory: true,
      fieldType: 'Dropdown',
      values: ['aa', 'bb']
    }],
    hiddenFieldsGroups: [{
      groupName: 'NOENTITYTYPE',
      displayName: 'Non UMS aspects',
      message: 'Non UMS aspects',
      hide: false
    }, {
      groupName: 'HideEntityAspect',
      displayName: 'Hidden GH aspects',
      message: 'Hidden GH aspects',
      hide: false
    }, {
      groupName: 'AspectUsage',
      displayName: 'Listing related aspects',
      message: 'Listing related aspects',
      hide: false
    }],
    sourceInformation: {
      vendor: 'eBay SDO',
      sourceType: 'SDO Enrichment',
      sourcingMethod: 'Vendors',
      track: 'Top Products',
      allowComparison: true,
      sendFullSnapshot: true
    },
    clusterStrategy: 'None',
    updatePlatformRedirect: true,
    updatePlatformProduct: true,
    enableProductCuration: false,
    survivorProvided: false,
    addCrawling: false,
    onlyLive: true
  }
};
exports.mockConfigurationNotEditableAndWithoutHeaders = mockConfigurationNotEditableAndWithoutHeaders;
var mockJobHeader = {
  jobHeaderContract: {
    jobId: '3164',
    name: 'tal - dup 73',
    description: '',
    type: 'Duplicates',
    state: 'Open',
    dueDate: null,
    priority: 'None',
    owners: ['5acc6015fa1dad062a4adc86'],
    assignees: [{
      id: 0,
      displayName: 'eBay : Classification',
      dropDownDisplayName: 'Classification',
      vendorTeamLeaders: ['59db20197b651913627144ad'],
      locales: null,
      organization: '1',
      epids: null,
      groups: ['6e0bd6ed-dd30-43d3-8a54-e0f6710de2f5'],
      assigneeType: 'assignee'
    }],
    triages: [{
      id: 0,
      displayName: 'eBay : Classification',
      dropDownDisplayName: 'Classification',
      vendorTeamLeaders: ['59db20197b651913627144ad'],
      locales: null,
      organization: '1',
      epids: null,
      groups: ['6e0bd6ed-dd30-43d3-8a54-e0f6710de2f5'],
      assigneeType: 'assignee'
    }],
    dataOptions: 'none',
    tags: null,
    qaSampleSize: 0,
    dmQaSampleSize: 0,
    cancelationInfo: null,
    numberOfComments: null,
    jiraTicket: ''
  },
  typeConfiguration: {
    fileName: 'duplicates test file - staging2.tsv',
    selectedDuplicateConfigurationId: '5df2319db8c61b334ca22f48'
  }
};
exports.mockJobHeader = mockJobHeader;
var mockAgent = {
  display: 'Roy Agent',
  userId: '59e46dc5b9d7f33225eec311',
  userName: 'rbenenosh',
  firstName: 'Roy',
  lastName: 'Agent',
  role: 'Agent',
  rank: 2147483647,
  groups: [{
    organizationId: 0,
    organizationName: null,
    groupId: 'cff42ee8-d5d4-42be-83a5-2ab3612741a4',
    groupName: null
  }],
  email: 'rbenenosh@ebay.com',
  languages: 5[('English', 'French', 'Spanish', 'German', 'Italian')],
  tmsAuthorizations: false,
  createTmsUser: null,
  organization: 1,
  organizationName: null,
  groupIds: ['cff42ee8-d5d4-42be-83a5-2ab3612741a4'],
  active: false,
  isUserSupervisor: false
};
exports.mockAgent = mockAgent;
var mockSupervisor = {
  display: 'Roy Admin',
  userId: '59e46dc5b9d7f33225eec311',
  userName: 'rbenenosh',
  firstName: 'Roy',
  lastName: 'Admin',
  role: 'Administrator',
  rank: 2147483647,
  groups: [{
    organizationId: 0,
    organizationName: null,
    groupId: 'cff42ee8-d5d4-42be-83a5-2ab3612741a4',
    groupName: null
  }],
  email: 'rbenenosh@ebay.com',
  languages: 5[('English', 'French', 'Spanish', 'German', 'Italian')],
  tmsAuthorizations: false,
  createTmsUser: null,
  organization: 1,
  organizationName: null,
  groupIds: ['cff42ee8-d5d4-42be-83a5-2ab3612741a4'],
  active: false,
  isUserSupervisor: true
};
exports.mockSupervisor = mockSupervisor;