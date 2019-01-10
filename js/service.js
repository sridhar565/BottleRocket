'use strict';
 
var app = angular.module('myApp');

app.factory('myService', function($http, URLS) {
  var service = {};
  
  service.fetchAllRestaurants = function() {
      return $http.get(URLS.restaurants);
  };
  return service;

});