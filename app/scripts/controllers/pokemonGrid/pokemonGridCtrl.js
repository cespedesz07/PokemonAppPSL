'use strict';

pokemonApp.controller('pokemonGridCtrl', ['$scope', '$filter', 'pokemonGridService', '$mdToast', '$mdDialog',
  function($scope, $filter, pokemonGridService, $mdToast, $mdDialog){

  //region Definitions
  $scope.pokemonsArray = [];
  //endregion


  //region Functions
  $scope.loadPokemonGrid = function(){
    pokemonGridService.getPokemons()
      .then( function(response){
        $scope.pokemonsArray = response.results;
        $scope.loadPokemonsImgs();
      },
      function(exception){
        $mdToast.showSimple("Couldn't retrieve Pokemons. " + exception.toString());
      });
  };

  $scope.loadPokemonsImgs = function(){
    angular.forEach( $scope.pokemonsArray, function(item, index){
      var pokemonUrl = item.url.split('/');
      var id = pokemonUrl[pokemonUrl.length - 2];
      item.img = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + ".png"
    });
  };

  $scope.openPokemonInfoDialog = function(selectedPokemonInfo){
    $mdDialog.show({
      controller: 'pokemonInfoDialogCtrl',
      templateUrl: '/views/pokemonInfoDialog/pokemonInfoDialog.html',
      locals: {
        selectedPokemonInfo: selectedPokemonInfo
      }
    });
  };

  $scope.loadPokemonInfo = function(selectedPokemon){
    pokemonGridService.getPokemonInfo(selectedPokemon.url)
      .then( function(response){
          var filteredInfo =  filterPokemonInfo(response);
          $scope.openPokemonInfoDialog(filteredInfo);
      },
      function(exception){
        $mdToast.showSimple("Couldn't retrieve Pokemon info. " + exception.toString());
      });
  };

  var filterPokemonInfo = function(pokemonInfoObj){
    var newFilteredObj = pokemonInfoObj;
    var objectKeys = Object.keys(pokemonInfoObj);
    angular.forEach( objectKeys, function(key){
      if (newFilteredObj[key] instanceof Array || newFilteredObj[key] instanceof Object){
        delete newFilteredObj[key];
      }
    });
    return newFilteredObj;
  };
  //endregion


  //region Function Calls
  $scope.loadPokemonGrid();
  //endregion
}]);