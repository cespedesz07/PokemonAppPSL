'use strict';

pokemonApp.factory('pokemonGridService', ['$http', function($http){
  var pokemonGridService = {};

  var _getPokemons = function(){
    return $http({
      method: 'GET',
      url: 'http://pokeapi.co/api/v2/pokemon/'
    }).then( function(response){
      return response.data;
    });
  };

  var _getPokemonInfo = function(id){
    return $http({
      method: 'GET',
      url: 'http://pokeapi.co/api/v2/pokemon/' + id + '/'
    }).then( function(response){
      return response.data;
    });
  };

  pokemonGridService.getPokemons = _getPokemons;
  pokemonGridService.getPokemonInfo = _getPokemonInfo;

  return pokemonGridService;
}]);