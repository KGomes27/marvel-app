angular.module('marvel').controller('ListController', [
  '$scope',
  '$state',
  '$q',
  '$ionicLoading',
  'marvelServices',
  function($scope, $state, $q, $ionicLoading, marvelServices) {
    $scope.getComics = function() {
      $ionicLoading.show({template: 'Loading...'});
      return marvelServices.getComics().then(function(response) {
        $ionicLoading.hide();
        $scope.comics = response.data.results;
      });
    }

    $scope.getComics();

    $scope.search = function() {
      if (($scope.searchTitle != undefined && $scope.searchTitle != '') || ($scope.searchYear != undefined && $scope.searchYear != '')) {
        var title = null;
        var date = null;
        if ($scope.searchYear != undefined && $scope.searchYear != '') {
          date = $scope.searchYear + '-01-01,' + $scope.searchYear + '-12-12';  
        }

        if ($scope.searchTitle != undefined && $scope.searchTitle != '') {
          title = $scope.searchTitle;
        }
        $ionicLoading.show({template: 'Loading...'});
        return marvelServices.getComicsByQuery(title, date).then(function(response) {
          $ionicLoading.hide();
          $scope.comics = response.data.results;
        });
      }else {
        $scope.getComics();
      }
    }
  }
]);