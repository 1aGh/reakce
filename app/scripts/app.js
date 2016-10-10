'use strict';

/**
 * @ngdoc overview
 * @name reakceApp
 * @description
 * # reakceApp
 *
 * Main module of the application.
 */
angular
  .module('reakceApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngMaterial'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/vizitky', {
        templateUrl: 'views/vizitky.html',
        controller: 'vizitkyCtrl',
        controllerAs: 'vizitky'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
