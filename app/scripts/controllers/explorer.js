'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */
angular.module('yapp')
        .controller('ExplorerCtrl', function ($rootScope, $scope, $location, $http, $window, utils, popup) {

            $scope.loading = false;
            $scope.loginDisabled = true;

            $scope.login = function () {
                $scope.loading = true;
                utils.login($scope.credentials.username, $scope.credentials.password);
                $scope.loading = false;
            };

            $scope.checkInput = function () {
                $scope.loginDisabled = $scope.credentials.username.length === 0 || $scope.credentials.password.length === 0;
            };

            $scope.getLoginDisabled = function () {
                return $scope.loginDisabled;
            };

            $scope.getLoading = function () {
                return $scope.loading;
            };

          $scope.blocks = [
            {
              "blockNumber": 3077,
              "dataHash": "28d4653990363f0bd9142a49cd3b0b8c1683a4af78640b0313fb0efae8f31159",
              "envelopeInfo": [
                {
                  "channelId": "channel1",
                  "timestamp": 1522154732437,
                  "transactionActionInfoList": [
                    {
                      "args": [
                        "updateReplenishmentRequestStatus",
                        "{\"replenishmentRequestId\":\"6f3f06a8-f3e9-181e-b4b2-f72cea134399\",\"newStatus\":\"done\"}"
                      ],
                      "endorsementsNumber": 1,
                      "ledgerWrites": [
                        {
                          "key": "\u0000id~replrequest\u00006f3f06a8-f3e9-181e-b4b2-f72cea134399\u0000",
                          "namespace": "omnitude-chaincode",
                          "value": "{\"replenishmentRequestId\":\"6f3f06a8-f3e9-181e-b4b2-f72cea134399\",\"productId\":\"SDP001\",\"productLabel\":\"Product Desc 1\",\"quantity\":20,\"status\":\"done\",\"statusDescription\":\"Goods Received Note issued by the DC signalling product in DC with no non conformance issues\",\"statusTimeStamp\":\"2018-03-27T12:45:32.437Z\",\"csCartReference\":\"Vanilla\"}"
                        }
                      ],
                      "responseMessage": "",
                      "responseStatus": 200
                    }
                  ],
                  "transactionId": "1635088484e37314e5938a95efa2ec41308ab62e6e01fcd44f9068352dbde34c",
                  "type": "TRANSACTION_ENVELOPE",
                  "valid": true
                }
              ],
              "hash": "51ffb6574a9d4c7426f02b97cd1f419631c8bd289df5f83da184e2f8da1647c0",
              "previousHash": "04e6263c4577505eb6871c3d68347ae1ac09dca78d38c0a6131d3d634f044b35"
            },
            {
              "blockNumber": 3076,
              "dataHash": "eed1ab3999525f6ef70418b41d09258cd81a070f6b06a2beb554ccccb6576a79",
              "envelopeInfo": [
                {
                  "channelId": "channel1",
                  "timestamp": 1522154730327,
                  "transactionActionInfoList": [
                    {
                      "args": [
                        "updateReplenishmentRequestStatus",
                        "{\"replenishmentRequestId\":\"6f3f06a8-f3e9-181e-b4b2-f72cea134399\",\"newStatus\":\"arrived_distribution_center\"}"
                      ],
                      "endorsementsNumber": 1,
                      "ledgerWrites": [
                        {
                          "key": "\u0000id~replrequest\u00006f3f06a8-f3e9-181e-b4b2-f72cea134399\u0000",
                          "namespace": "omnitude-chaincode",
                          "value": "{\"replenishmentRequestId\":\"6f3f06a8-f3e9-181e-b4b2-f72cea134399\",\"productId\":\"SDP001\",\"productLabel\":\"Product Desc 1\",\"quantity\":20,\"status\":\"arrived_distribution_center\",\"statusDescription\":\"SCM monitored inbound orders through to product being received in Distribution Centre\",\"statusTimeStamp\":\"2018-03-27T12:45:30.327Z\",\"csCartReference\":\"Vanilla\"}"
                        }
                      ],
                      "responseMessage": "",
                      "responseStatus": 200
                    }
                  ],
                  "transactionId": "c39c185667028d53209eace8a25f4e1ed1535503fef0adff598ae79aae62b0b5",
                  "type": "TRANSACTION_ENVELOPE",
                  "valid": true
                }
              ],
              "hash": "04e6263c4577505eb6871c3d68347ae1ac09dca78d38c0a6131d3d634f044b35",
              "previousHash": "976208189ef1d200a9050c61ad56bf0e300a8ad058c46dd2ea52c31f378bff57"
            },
            {
              "blockNumber": 3075,
              "dataHash": "1dedd865f70e17f9f9238c4c28125ca307e1125c84da7d59c9bb82b00599b517",
              "envelopeInfo": [
                {
                  "channelId": "channel1",
                  "timestamp": 1522154728209,
                  "transactionActionInfoList": [
                    {
                      "args": [
                        "updateReplenishmentRequestStatus",
                        "{\"replenishmentRequestId\":\"6f3f06a8-f3e9-181e-b4b2-f72cea134399\",\"newStatus\":\"confirmed_transport_method\"}"
                      ],
                      "endorsementsNumber": 1,
                      "ledgerWrites": [
                        {
                          "key": "\u0000id~replrequest\u00006f3f06a8-f3e9-181e-b4b2-f72cea134399\u0000",
                          "namespace": "omnitude-chaincode",
                          "value": "{\"replenishmentRequestId\":\"6f3f06a8-f3e9-181e-b4b2-f72cea134399\",\"productId\":\"SDP001\",\"productLabel\":\"Product Desc 1\",\"quantity\":20,\"status\":\"confirmed_transport_method\",\"statusDescription\":\"SCM confirmed transport method based on risk of inventory shortage and sent using appropriate channel. (In event of change of transport, change procedures started in ERP system)\",\"statusTimeStamp\":\"2018-03-27T12:45:28.209Z\",\"csCartReference\":\"Vanilla\"}"
                        }
                      ],
                      "responseMessage": "",
                      "responseStatus": 200
                    }
                  ],
                  "transactionId": "23ac58e4705d78dd1421e76f4ed47995958434f674cc164b4cfbb591dece007f",
                  "type": "TRANSACTION_ENVELOPE",
                  "valid": true
                }
              ],
              "hash": "976208189ef1d200a9050c61ad56bf0e300a8ad058c46dd2ea52c31f378bff57",
              "previousHash": "cdb6e22d4d934a50984fd8f2077645fcd10403967e34e17952609b50b156aeb2"
            },
            {
              "blockNumber": 3074,
              "dataHash": "1e618ede69a1e088bb74d6edec1c1063d35d8630589caf87307dbd8c56667d50",
              "envelopeInfo": [
                {
                  "channelId": "channel1",
                  "timestamp": 1522154726097,
                  "transactionActionInfoList": [
                    {
                      "args": [
                        "updateReplenishmentRequestStatus",
                        "{\"replenishmentRequestId\":\"6f3f06a8-f3e9-181e-b4b2-f72cea134399\",\"newStatus\":\"arrived_factory_gates\"}"
                      ],
                      "endorsementsNumber": 1,
                      "ledgerWrites": [
                        {
                          "key": "\u0000id~replrequest\u00006f3f06a8-f3e9-181e-b4b2-f72cea134399\u0000",
                          "namespace": "omnitude-chaincode",
                          "value": "{\"replenishmentRequestId\":\"6f3f06a8-f3e9-181e-b4b2-f72cea134399\",\"productId\":\"SDP001\",\"productLabel\":\"Product Desc 1\",\"quantity\":20,\"status\":\"arrived_factory_gates\",\"statusDescription\":\"SCM monitored progress of one or multiple (in event of consolidation) orders until arrival at factory gates\",\"statusTimeStamp\":\"2018-03-27T12:45:26.097Z\",\"csCartReference\":\"Vanilla\"}"
                        }
                      ],
                      "responseMessage": "",
                      "responseStatus": 200
                    }
                  ],
                  "transactionId": "75bcddde54538fb5e2f920fb682a7183b1aee2ddb7c7d56b502405f06e9bbab1",
                  "type": "TRANSACTION_ENVELOPE",
                  "valid": true
                }
              ],
              "hash": "cdb6e22d4d934a50984fd8f2077645fcd10403967e34e17952609b50b156aeb2",
              "previousHash": "d1d852f977e7aa0b9d6b80cbe30f861ab5c24fab5fd37f57738f26e1c8665e8e"
            },
            {
              "blockNumber": 3073,
              "dataHash": "0212ae07e8a56a300e75bbc1f42336d996a4978ed94a0588396ab975357ac2d0",
              "envelopeInfo": [
                {
                  "channelId": "channel1",
                  "timestamp": 1522154723996,
                  "transactionActionInfoList": [
                    {
                      "args": [
                        "updateReplenishmentRequestStatus",
                        "{\"replenishmentRequestId\":\"6f3f06a8-f3e9-181e-b4b2-f72cea134399\",\"newStatus\":\"cross_docking_planned\"}"
                      ],
                      "endorsementsNumber": 1,
                      "ledgerWrites": [
                        {
                          "key": "\u0000id~replrequest\u00006f3f06a8-f3e9-181e-b4b2-f72cea134399\u0000",
                          "namespace": "omnitude-chaincode",
                          "value": "{\"replenishmentRequestId\":\"6f3f06a8-f3e9-181e-b4b2-f72cea134399\",\"productId\":\"SDP001\",\"productLabel\":\"Product Desc 1\",\"quantity\":20,\"status\":\"cross_docking_planned\",\"statusDescription\":\"If possibility to consolidate loads together, cross docking planned and full or partial container scheduled at cross docking point\",\"statusTimeStamp\":\"2018-03-27T12:45:23.996Z\",\"csCartReference\":\"Vanilla\"}"
                        }
                      ],
                      "responseMessage": "",
                      "responseStatus": 200
                    }
                  ],
                  "transactionId": "3029963b66990feb58e785c48ebfd6bbc50a9c5a69805bbbe810ca58865a0f52",
                  "type": "TRANSACTION_ENVELOPE",
                  "valid": true
                }
              ],
              "hash": "d1d852f977e7aa0b9d6b80cbe30f861ab5c24fab5fd37f57738f26e1c8665e8e",
              "previousHash": "a306637bfbfd6646c04f506f9a57a18480708a1aa4c79632bc939e508889e134"
            },
            {
              "blockNumber": 3072,
              "dataHash": "11adf4c41f76348ff0b898080baecadc09585748e3996b40d942034bef566c82",
              "envelopeInfo": [
                {
                  "channelId": "channel1",
                  "timestamp": 1522154721891,
                  "transactionActionInfoList": [
                    {
                      "args": [
                        "updateReplenishmentRequestStatus",
                        "{\"replenishmentRequestId\":\"6f3f06a8-f3e9-181e-b4b2-f72cea134399\",\"newStatus\":\"order_combining_checked\"}"
                      ],
                      "endorsementsNumber": 1,
                      "ledgerWrites": [
                        {
                          "key": "\u0000id~replrequest\u00006f3f06a8-f3e9-181e-b4b2-f72cea134399\u0000",
                          "namespace": "omnitude-chaincode",
                          "value": "{\"replenishmentRequestId\":\"6f3f06a8-f3e9-181e-b4b2-f72cea134399\",\"productId\":\"SDP001\",\"productLabel\":\"Product Desc 1\",\"quantity\":20,\"status\":\"order_combining_checked\",\"statusDescription\":\"Checked if order can be combined with other orders from same or local supplier\",\"statusTimeStamp\":\"2018-03-27T12:45:21.891Z\",\"csCartReference\":\"Vanilla\"}"
                        }
                      ],
                      "responseMessage": "",
                      "responseStatus": 200
                    }
                  ],
                  "transactionId": "2118df8fd78cdc7bf6e492ad28778c884d517a92f2471631bd7b08093725328a",
                  "type": "TRANSACTION_ENVELOPE",
                  "valid": true
                }
              ],
              "hash": "a306637bfbfd6646c04f506f9a57a18480708a1aa4c79632bc939e508889e134",
              "previousHash": "dc367a41c2da7ae06616a17fbe9045128e4b378af28eb6648f0c15a60bbb2591"
            },
            {
              "blockNumber": 3071,
              "dataHash": "0ce15467d6f406b21899e9a138e7e8c13b214f23cd4219f2b51ef785cb2a6d1b",
              "envelopeInfo": [
                {
                  "channelId": "channel1",
                  "timestamp": 1522154719783,
                  "transactionActionInfoList": [
                    {
                      "args": [
                        "updateReplenishmentRequestStatus",
                        "{\"replenishmentRequestId\":\"6f3f06a8-f3e9-181e-b4b2-f72cea134399\",\"newStatus\":\"transport_po_raised\"}"
                      ],
                      "endorsementsNumber": 1,
                      "ledgerWrites": [
                        {
                          "key": "\u0000id~replrequest\u00006f3f06a8-f3e9-181e-b4b2-f72cea134399\u0000",
                          "namespace": "omnitude-chaincode",
                          "value": "{\"replenishmentRequestId\":\"6f3f06a8-f3e9-181e-b4b2-f72cea134399\",\"productId\":\"SDP001\",\"productLabel\":\"Product Desc 1\",\"quantity\":20,\"status\":\"transport_po_raised\",\"statusDescription\":\"SCM raised transport purchase order and identifies pick up date/time at supplier factory gate\",\"statusTimeStamp\":\"2018-03-27T12:45:19.783Z\",\"csCartReference\":\"Vanilla\"}"
                        }
                      ],
                      "responseMessage": "",
                      "responseStatus": 200
                    }
                  ],
                  "transactionId": "912d45f5ae07f3ce575a5113af6e11b726aae11076082097281360c1ea71d019",
                  "type": "TRANSACTION_ENVELOPE",
                  "valid": true
                }
              ],
              "hash": "dc367a41c2da7ae06616a17fbe9045128e4b378af28eb6648f0c15a60bbb2591",
              "previousHash": "8d11e4b8eabe91c101da65c5523ef840e982ccb13409ff61076a13fd75dd6829"
            },
            {
              "blockNumber": 3070,
              "dataHash": "8d097b7ae8d1a3c06ce9086c0e42ca006f7ffaed7e0b986d3df968b3777bc552",
              "envelopeInfo": [
                {
                  "channelId": "channel1",
                  "timestamp": 1522154717684,
                  "transactionActionInfoList": [
                    {
                      "args": [
                        "updateReplenishmentRequestStatus",
                        "{\"replenishmentRequestId\":\"6f3f06a8-f3e9-181e-b4b2-f72cea134399\",\"newStatus\":\"logistics_selected\"}"
                      ],
                      "endorsementsNumber": 1,
                      "ledgerWrites": [
                        {
                          "key": "\u0000id~replrequest\u00006f3f06a8-f3e9-181e-b4b2-f72cea134399\u0000",
                          "namespace": "omnitude-chaincode",
                          "value": "{\"replenishmentRequestId\":\"6f3f06a8-f3e9-181e-b4b2-f72cea134399\",\"productId\":\"SDP001\",\"productLabel\":\"Product Desc 1\",\"quantity\":20,\"status\":\"logistics_selected\",\"statusDescription\":\"SCM decided logistics choice based on current risks\",\"statusTimeStamp\":\"2018-03-27T12:45:17.684Z\",\"csCartReference\":\"Vanilla\"}"
                        }
                      ],
                      "responseMessage": "",
                      "responseStatus": 200
                    }
                  ],
                  "transactionId": "9d7a598e63b95614937f9204a379f243aec7949c20a8b2acc65c022b4f252cf1",
                  "type": "TRANSACTION_ENVELOPE",
                  "valid": true
                }
              ],
              "hash": "8d11e4b8eabe91c101da65c5523ef840e982ccb13409ff61076a13fd75dd6829",
              "previousHash": "4ac7cd76e88df67ddbfd06dc98ebd06eb7bbb75e4b7bfe7c9927f6a1a083bf01"
            },
            {
              "blockNumber": 3069,
              "dataHash": "85d4e9cc38ee40b52a064f9ad494a5174098e1122af8025487f77bf385945873",
              "envelopeInfo": [
                {
                  "channelId": "channel1",
                  "timestamp": 1522154715572,
                  "transactionActionInfoList": [
                    {
                      "args": [
                        "createReplenishmentRequest",
                        "{\"replenishmentRequestId\":\"6f3f06a8-f3e9-181e-b4b2-f72cea134399\",\"productId\":\"SDP001\",\"productLabel\":\"Product Desc 1\",\"quantity\":20,\"status\":\"new\",\"statusDescription\":\"n/a\",\"statusTimeStamp\":\"n/a\",\"csCartReference\":\"Vanilla\"}"
                      ],
                      "endorsementsNumber": 1,
                      "ledgerWrites": [
                        {
                          "key": "\u0000id~replrequest\u00006f3f06a8-f3e9-181e-b4b2-f72cea134399\u0000",
                          "namespace": "omnitude-chaincode",
                          "value": "{\"replenishmentRequestId\":\"6f3f06a8-f3e9-181e-b4b2-f72cea134399\",\"productId\":\"SDP001\",\"productLabel\":\"Product Desc 1\",\"quantity\":20,\"status\":\"new\",\"statusDescription\":\"SCM raised replenishment purchase order\",\"statusTimeStamp\":\"2018-03-27T12:45:15.572Z\",\"csCartReference\":\"Vanilla\"}"
                        }
                      ],
                      "responseMessage": "",
                      "responseStatus": 200
                    }
                  ],
                  "transactionId": "88713f82f7e5ccfcef4e7608ffeb5edea341cafdd69fb0f953af0e330d869531",
                  "type": "TRANSACTION_ENVELOPE",
                  "valid": true
                }
              ],
              "hash": "4ac7cd76e88df67ddbfd06dc98ebd06eb7bbb75e4b7bfe7c9927f6a1a083bf01",
              "previousHash": "0f7832ef1fb8fa14bf7dbc29138f2c0e1f57f7470b377dfc0c82d2e300d89586"
            },
            {
              "blockNumber": 3068,
              "dataHash": "6589ce83a9477035a7cd04ce4bc3438bb73441e3a708bd3e8407775a4d2c3c15",
              "envelopeInfo": [
                {
                  "channelId": "channel1",
                  "timestamp": 1522154701821,
                  "transactionActionInfoList": [
                    {
                      "args": [
                        "updateReplenishmentRequestStatus",
                        "{\"replenishmentRequestId\":\"439a8db3-13f0-b27c-a287-26229943476c\",\"newStatus\":\"done\"}"
                      ],
                      "endorsementsNumber": 1,
                      "ledgerWrites": [
                        {
                          "key": "\u0000id~replrequest\u0000439a8db3-13f0-b27c-a287-26229943476c\u0000",
                          "namespace": "omnitude-chaincode",
                          "value": "{\"replenishmentRequestId\":\"439a8db3-13f0-b27c-a287-26229943476c\",\"productId\":\"SDP001\",\"productLabel\":\"Product Desc 1\",\"quantity\":10,\"status\":\"done\",\"statusDescription\":\"Goods Received Note issued by the DC signalling product in DC with no non conformance issues\",\"statusTimeStamp\":\"2018-03-27T12:45:01.821Z\",\"csCartReference\":\"Vanilla\"}"
                        }
                      ],
                      "responseMessage": "",
                      "responseStatus": 200
                    }
                  ],
                  "transactionId": "18546abafa7256ef47940b78c8cb1769ec68daf80111022c78aa2ba2e713ecaa",
                  "type": "TRANSACTION_ENVELOPE",
                  "valid": true
                }
              ],
              "hash": "0f7832ef1fb8fa14bf7dbc29138f2c0e1f57f7470b377dfc0c82d2e300d89586",
              "previousHash": "8fdc2f3f25f810e4ef687fd411e7eb4d72f0470e2cd6db724c5a165c28a63fec"
            }
          ];
        });