'use strict';

/**
 * @ngdoc function
 * @name learnJwtApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the learnJwtApp
 */
angular.module('learnJwtApp')
  .controller('RegisterCtrl', function ($scope,$rootScope,$http,alert) {
   $scope.submit = function () {
     var url = '/';
     var user = {};
     $http.post(url, user)
       .success(function(res){
         alert('success','OK!','You are now registered')
       })
       .error(function (res) {
         alert('warning','Opps!','Could not register')
       })
   }
  });
