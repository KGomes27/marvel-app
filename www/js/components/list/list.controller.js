angular.module('marvel').controller('ListController', [
  '$scope',
  '$state',
  '$q',
  'marvelServices',
  function($scope, $state, $q, marvelServices) {
    $scope.getComics = function() {
      return marvelServices.getComics().then(function(response) {
        $scope.comics = response.data.results;
        console.log($scope.comics);
      });
    }

    $scope.getComics();
  }
]);