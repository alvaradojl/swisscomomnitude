'use strict';

/**
 * @ngdoc overview
 * @name yapp
 * @description
 * # yapp
 *
 * Main module of the application.
 */
angular
  .module('yapp', [
    'ui.router',
    'ngAnimate',
    'ui-notification'
  ])
  .config(function(NotificationProvider) {
    NotificationProvider.setOptions({
      delay: 10000,
      startTop: 20,
      startRight: 10,
      verticalSpacing: 20,
      horizontalSpacing: 20,
      positionX: 'right',
      positionY: 'bottom'
    });
  })
  .config(function($stateProvider, $urlRouterProvider) {

    // $urlRouterProvider.when('/dashboard', '/dashboard/overview');
    $urlRouterProvider.otherwise('/explorer');

    $stateProvider
      .state('base', {
        abstract: true,
        url: '',
        templateUrl: 'views/base.html'
      })
        .state('explorer', {
          url: '/explorer',
          parent: 'base',
          templateUrl: 'views/explorer.html',
          controller: 'ExplorerCtrl'
        });

  })
  .service('popup', ['Notification', function(Notification){
    this.success = function(message) {
      Notification.success({message: '<div style="text-align: center">' + message + '</div>', title: 'Notification'});
    }

    this.error = function(message) {
      Notification.error({message: '<div style="text-align: center">' + message + '</div>', title: 'Something wrong'});
    }
  }])
  .service('utils', ['$window', '$location', '$http', 'popup', function($window, $location, $http, popup){

    this.secondsToTimestampString = function (seconds) {
      var date = new Date(null);
      date.setSeconds(seconds);
      var dateStr = date.toUTCString();
      return dateStr.substr(0, dateStr.indexOf("GMT") - 1);
    };

  }]);
