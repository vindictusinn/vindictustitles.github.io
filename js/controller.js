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
					$('.bal').each(function(){
						BAL = $(this).html()
						if (BAL === ''){$(this).html('').removeClass('bal')} else {$(this).show()}
					})
					$('.crit').each(function(){
						CRIT = $(this).html()
						if (CRIT === ''){$(this).html('').removeClass('crit')} else {$(this).show()}
					})
					
					$('.account-1').each(function(){
						$(this).append('<img src="/img/account-1.png" class="account_emblem" title="Account Shared">')
					})
					
					$(document).ready(function() {
						$('#titles').DataTable({
							"lengthMenu": [[10, 50, 100, 300, -1], [10, 50, 100, 300, "All"]],
							/*iDisplayLength: -1,*/
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
					

						/*c_event_even = $('.events1.removed.unreleased.golden.exclusive.pvp.eu.even').length
						c_event_odd = $('.events1.removed.unreleased.golden.exclusive.pvp.eu.odd').length
						*/
						c_events = $('.events1.removed.unreleased.golden.exclusive.pvp.eu').length
						c_total = $('#titles tr').length
						/*c_events = c_event_odd + c_event_even*/
						c_removed = $('#titles .removed1').length
						c_unreleased = $('#titles .unreleased1').length
						c_golden = $('#titles .golden1').length
						c_exclusive = $('#titles .exclusive1').length
						c_pvp = $('#titles .pvp1').length
						c_eu = $('#titles .eu1').length
						
						TotalTitles = c_total - 1 /*Subtract table header*/ - 1 /*Subtract Custom Title*/ - c_removed - c_unreleased - c_exclusive + 19 /*Actually obtainable Exclusive titles*/ - c_pvp - c_eu - 166 /*Total Ein Lacher*/ + 75
						
						NormalTitles = TotalTitles - 10 - 75 - /*c_event_odd - c_event_even*/ c_events
						
						console.log(NormalTitles + ' Normal Titles')
						console.log(c_events + ' Event Titles')
						console.log(TotalTitles + ' Total Titles')
					
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
