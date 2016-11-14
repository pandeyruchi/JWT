/**
 * Created by synerzip on 14/11/16.
 */
angular
  .module('learnJwtApp').config(function($urlRouterProvider,$stateProvider){

  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('main',{
      url:'/',
      templateUrl:'/views/main.html'
    })

    .state('register',{
    url:'/register',
    templateUrl:'/views/register.html',
      controller:'RegisterCtrl'
  })
})
