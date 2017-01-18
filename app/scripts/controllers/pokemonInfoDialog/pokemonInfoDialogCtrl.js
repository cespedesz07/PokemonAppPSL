'use strict';

pokemonApp.controller('pokemonInfoDialogCtrl', ['$scope', '$mdToast', '$mdDialog',
  'selectedPokemonInfo',
  function($scope, $mdToast, $mdDialog, selectedPokemonInfo){

  //region Definitions
  $scope.selectedPokemonInfo = selectedPokemonInfo;
  $scope.isFilterActivated = false;
  //endregion

  //region Functions
  $scope.closeDialog = function(){
    $mdDialog.cancel();
  };

  $scope.toggleUnit = function(){
    $scope.selectedUnit = $scope.isFilterActivated ? 'cm' : 'm';
  };
  //endregion

  $scope.toggleUnit();
}]);
