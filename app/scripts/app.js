'use strict';

var pokemonApp = angular.module('pokemonApp', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'ngMaterial'
]);

pokemonApp.config( function($routeProvider){
  $routeProvider
    .when( '/', {
      templateUrl: 'views/pokemonGrid/pokemonGrid.html',
      controller: 'pokemonGridCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});