var app = angular.module('myApp',[]);
 app.controller('myCtrl',function($scope,$http){    
 $scope.submit=function(){      
 			var data = {
                    name     : $scope.name, 
                    location : $scope.location,
                    temp     : $scope.temp,
                    humidity : $scope.humidity,
                    wind     : $scope.wind
                    
                }   
            };      

 	$http.post('/', $scope.data)
            .success(function (data, status, headers, config) {
                    $scope.result = data;
                    console.log("inserted successfully")
                })
                .error(function(data, status, header, config){
                    $scope.result = "Data: " + status;


                });
     });