'use strict';

pokemonApp.controller('pokemonInfoDialogCtrl', ['$scope', '$mdToast', '$mdDialog',
  'selectedPokemonInfo',
  function($scope, $mdToast, $mdDialog, selectedPokemonInfo){

  //region Definitions
  $scope.selectedPokemonInfo = selectedPokemonInfo;
  $scope.isFilterActivated = false;
  //endregion

  $scope.closeDialog = function(){
    $mdDialog.cancel();
  };
  //endregion
}]);
