'use strict';

/**
 * @ngdoc service
 * @name learnJwtApp.alert
 * @description
 * # alert
 * Service in the learnJwtApp.
 */
angular.module('learnJwtApp')
  .service('alert', function alert($rootScope, $timeout) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var alertTimeOut
    return function (type, title,message, timeout) {
      $rootScope.alert={
        hasBeenShown : true,
        show: true,
        type:type,
        message:message,
        title:title
      };
$timeout.cancel(alertTimeOut);
      alertTimeOut= $timeout(function () {
        $rootScope.alert.show=false;
      }, timeout||200)
    }
  });
