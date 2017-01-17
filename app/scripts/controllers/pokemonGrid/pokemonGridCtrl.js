'use strict';

pokemonApp.controller('pokemonGridCtrl', ['$scope', 'pokemonGridService', function($scope, pokemonGridService){

  //region Definitions
  $scope.pokemonsArray = [];
  //endregion

  //region Functions
  $scope.loadPokemonGrid = function(){
    pokemonGridService.getPokemons()
      .then( function(response){
        $scope.pokemonsArray = response.results;
      },
      function(){

      });
  };
  //endregion

  $scope.loadPokemonGrid();

}]);