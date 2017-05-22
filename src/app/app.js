var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope,$http) {
   $scope.submit= function(){
      var data = $.param({
        weather: JSON.stringify({
            name: $scope.name,
            location : $scope.location,
            temp : $scope.temp,
            humidity : $scope.humidity,
            wind : $scope.wind
           
        })
      });

      $http.post("/data", data).success(function(data, status) {
        console.log('Data posted successfully');
      })
   }
});