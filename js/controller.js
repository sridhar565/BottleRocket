'use strict';
 
var app = angular.module('myApp');

app.controller('myController', ['$scope', 'myService', function($scope, myService) {
		  $scope.restaurants = [];
          $scope.fetchAllRestaurants = function(){
              myService.fetchAllRestaurants().then(function(response){
                $scope.restaurants = response.data.restaurants;
            });
          };
               
          $scope.fetchAllRestaurants();
          
          $scope.drawMap = function (lat, lng, index) {
        	  var mapProp= {
        	    center:new google.maps.LatLng(lat, lng),
        	    zoom:5,
        	  };
        	  var map = new google.maps.Map(document.getElementById("googleMap"+index), mapProp);
        	  }
 
      }]);