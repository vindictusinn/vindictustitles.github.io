var ItemControllers = angular.module("ItemControllers", []);

ItemControllers.controller("ListController", ['$scope','$http', 
	function($scope, $http)
		{    
				$http.get('json/Titles.json').success (function(data){
				$scope.ItemVariable = data;

				setTimeout(function(){
					

}, 200);
			}); 
		}]
);

ItemControllers.controller("DetailsController", ['$scope','$http','$routeParams',
	 function($scope, $http, $routeParams)
		{    
				$http.get('json/StageInfo.json').success (function(data){
				$scope.ItemVariable = data;

				$scope.whichItem = $routeParams.ItemID;
				$scope.keyToDisplay = 'ID';
				setTimeout(function(){
				

					

}, 200);
			}); 
		}]
);
