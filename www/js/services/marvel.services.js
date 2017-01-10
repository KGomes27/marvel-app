angular.module('marvel').factory('marvelServices', ['$http', 'MARVEL_URL', 'API_KEY', function($http, MARVEL_URL, API_KEY) {
  var services = {
    getComics: getComics
  };
  return services;

  function getComics() {
    return $http.get(MARVEL_URL + 'comics?apikey=' + API_KEY)
      .then(function(response) {
        return response.data;
      });
  }
 }]);