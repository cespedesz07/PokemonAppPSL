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

  var _getPokemonInfo = function(url){
    return $http({
      method: 'GET',
      url: url
    }).then( function(response){
      return response.data;
    });
  };

  var _getPokemonImg = function(id){
    return $http({
      method: 'GET',
      url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + ".png"
    }).then( function(response){
      return response.data;
    });
  };

  pokemonGridService.getPokemons = _getPokemons;
  pokemonGridService.getPokemonInfo = _getPokemonInfo;
  pokemonGridService.getPokemonImg = _getPokemonImg;

  return pokemonGridService;
}]);