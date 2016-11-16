'use strict';

/**
 * @ngdoc function
 * @name learnJwtApp.controller:HeaderctrlCtrl
 * @description
 * # HeaderctrlCtrl
 * Controller of the learnJwtApp
 */
angular.module('learnJwtApp')
  .controller('HeaderctrlCtrl', function ($scope,authtoken) {
    $scope.isAuthenticated = authtoken.isAuthenticated;
  });
