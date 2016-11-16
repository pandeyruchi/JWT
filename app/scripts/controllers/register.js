'use strict';

/**
 * @ngdoc function
 * @name learnJwtApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the learnJwtApp
 */
angular.module('learnJwtApp')
  .controller('RegisterCtrl', function ($scope,$rootScope,$http,alert,authtoken) {
   $scope.submit = function () {

     var url = 'http://localhost:3000/register';
     var user =
     {
       email:$scope.email,
       password: $scope.password
     };

     $http.post(url, user)
       .success(function(res){
         alert('success','OK!','You are now registered')
         authtoken.setToken(res.token);
       })
       .error(function (res) {
         alert('warning','Opps!','Could not register')
       })
   }
  });
