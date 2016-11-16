'use strict';

/**
 * @ngdoc service
 * @name learnJwtApp.authtoken
 * @description
 * # authtoken
 * Factory in the learnJwtApp.
 */
angular.module('learnJwtApp')
  .factory('authtoken', function ($window) {

    var storage = $window.localStorage;
    var cachedToken;

    return {
      setToken: function (token) {
        cachedToken = token;
        storage.setItem('userToken',token);
      },

      getToken:function () {
        if(!cachedToken)
          storage.getItem('userToken');

        return cachedToken;
      },

      isAuthenticated:function () {
        return !!getToken();
      }
    };
  });
