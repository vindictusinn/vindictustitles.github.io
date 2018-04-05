var ItemControllers = angular.module("ItemControllers", []);

ItemControllers.controller("ListController", ['$scope','$http', 
	function($scope, $http)
		{    
				$http.get('json/Titles.json').success (function(data){
				$scope.ItemVariable = data;

				setTimeout(function(){
					$('.str').each(function(){
						STR = $(this).html()
						if (STR === ''){$(this).html('').removeClass('str')} else {$(this).show()}
					})
					$('.wil').each(function(){
						WIL = $(this).html()
						if (WIL === ''){$(this).html('').removeClass('wil')} else {$(this).show()}
					})
					$('.agi').each(function(){
						AGI = $(this).html()
						if (AGI === ''){$(this).html('').removeClass('agi')} else {$(this).show()}
					})
					$('.int').each(function(){
						INT = $(this).html()
						if (INT === ''){$(this).html('').removeClass('int')} else {$(this).show()}
					})
					$('.hp').each(function(){
						HP = $(this).html()
						if (HP === ''){$(this).html('').removeClass('hp')} else {$(this).show()}
					})
					$('.atk').each(function(){
						ATK = $(this).html()
						if (ATK === ''){$(this).html('').removeClass('atk')} else {$(this).show()}
					})
					$('.matk').each(function(){
						MATK = $(this).html()
						if (MATK === ''){$(this).html('').removeClass('matk')} else {$(this).show()}
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
								null,
								null,
								null
							  ]
						});
					} );
					
					$('.requirements').each(function(){
						CheckReq = $(this).html()
						if(CheckReq!=='(All Required)' && CheckReq!=='( Required)'){$(this).show()}
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
