'use strict';

/**
 * @ngdoc overview
 * @name pokemonApp2App
 * @description
 * # pokemonApp2App
 *
 * Main module of the application.
 */
angular
  .module('pokemonApp', [
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
      .otherwise({
        redirectTo: '/'
      });
  });
