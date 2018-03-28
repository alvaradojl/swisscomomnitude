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

        $scope.blockNumber = ($window.innerHeight / 140) - 1;

        $scope.$on('$viewContentLoaded', function() {
            //alert("loaded");
            $scope.getHistory(-1, $scope.blockNumber);
        });

        $scope.loading = false;



        $scope.checkInput = function () {
            $scope.loginDisabled = $scope.credentials.username.length === 0 || $scope.credentials.password.length === 0;
        };

        $scope.getLoading = function () {
            return $scope.loading;
        };

        $scope.selectBlock = function (blockId) {
            var block = $scope.blocks.filter(function (el) {
                return el.blockNumber === blockId;
            })[0];

            $scope.trxs = [];

            var index = 1;
            block.envelopeInfo.forEach(function(el){
               var trx = {
                   index: index++,
                   timeStamp: utils.parseTimeStamp(el.timestamp),
                   transactionId: el.transactionId,
                   valid: el.valid,
                   trxName: el.transactionActionInfoList[0].args[0],
                   trxInfo:{}
               };

                trx.trxInfo = JSON.parse(el.transactionActionInfoList[0].args[1]);
                $scope.trxs.push(trx);
            });
        };

        $scope.getHistory = function (blockId, number) {

            var startBlock = Number(blockId) < 0 ? "%2D1" : blockId;
            $scope.loading = true;
            $http.get(settings.hyperledgerUrl + 'api/Channels/history?blockId='+startBlock+'&&num=' + number)
                .success(function (data, status, headers, config) {
                    // alert(data);
                    $scope.blocks = data;
                    $scope.loading = false;
                })
                .error(function (data, status, headers, config) {
                    $scope.loading = false;
                    popup.error("Can not login (Staus:" + status + "):" + data);
                });
        };

        $scope.next = function () {
            $scope.getHistory($scope.blocks[$scope.blocks.length - 1].blockNumber, $scope.blockNumber);
        }

        $scope.getLoading = function () {
            return $scope.loading;
        };

        $scope.trxs = [];
        $scope.blocks = [];
    });
