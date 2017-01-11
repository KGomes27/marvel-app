angular.module('marvel').controller('DetailController', [
  '$scope',
  '$state',
  '$stateParams',
  '$q',
  'marvelServices',
  function($scope, $state, $stateParams, $q, marvelServices) {
    $scope.comic = $stateParams.comic;
  }
]);