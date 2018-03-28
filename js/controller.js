var ItemControllers = angular.module("ItemControllers", []);

ItemControllers.controller("ListController", ['$scope','$http', 
	function($scope, $http)
		{    
				$http.get('json/Titles.json').success (function(data){
				$scope.ItemVariable = data;

				setTimeout(function(){
					$('.str').each(function(){
						STR = $(this).html()
						if (STR === 'STR +'){$(this).html('')}
					})
					$('.wil').each(function(){
						WIL = $(this).html()
						if (WIL === 'WIL +'){$(this).html('')}
					})
					$('.agi').each(function(){
						AGI = $(this).html()
						if (AGI === 'AGI +'){$(this).html('')}
					})
					$('.int').each(function(){
						INT = $(this).html()
						if (INT === 'INT +'){$(this).html('')}
					})
					$('.hp').each(function(){
						HP = $(this).html()
						if (HP === 'HP +'){$(this).html('')}
					})
					
					$(document).ready(function() {
						$('#titles').DataTable({
							"lengthMenu": [[10, 50, 100, 300, -1], [10, 50, 100, 300, "All"]],
							"columns": [
								{ "type": "html" },
								null,
								null,
								null,
								{ "type": "num" },
								null,
								null,
								null
							  ]
						});
					} );
					
					$('.requirements').each(function(){
						CheckReq = $(this).html()
						if(CheckReq!=='(All Required)'){$(this).show()}
					})
					
					var menu = "js/menu.js";
							$.getScript( menu, function() {
								InsertMenu()
							})

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
