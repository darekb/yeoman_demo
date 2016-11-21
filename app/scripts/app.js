'use strict';

/**
 * @ngdoc overview
 * @name yeomanTestApp
 * @description
 * # yeomanTestApp
 *
 * Main module of the application.
 */
angular
  .module('yeomanTestApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/testRoute', {
        templateUrl: 'views/testroute.html',
        controller: 'TestrouteCtrl',
        controllerAs: 'testRoute'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
