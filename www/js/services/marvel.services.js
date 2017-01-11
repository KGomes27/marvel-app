angular.module('marvel').factory('marvelServices', ['$http', 'MARVEL_URL', 'API_KEY', function($http, MARVEL_URL, API_KEY) {
  var services = {
    getComics: getComics,
    getComicsByQuery: getComicsByQuery
  };
  return services;

  function getComics() {
    return $http.get(MARVEL_URL + 'comics?apikey=' + API_KEY)
      .then(function(response) {
        return response.data;
      });
  }

  function getComicsByQuery(title, date) {
    var query = '?';
    if (title) {
      query += 'title=' + title;
      if (date) {
        query += '&dateRange=' + date;
      }
    }else if (date) {
      query += 'dateRange=' + date;
    }
    
    return $http.get(MARVEL_URL + 'comics' + query + '&apikey=' + API_KEY)
      .then(function(response) {
        return response.data;
      });
  }
 }]);