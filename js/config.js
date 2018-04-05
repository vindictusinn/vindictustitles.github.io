var ItemApp = angular.module('ItemApp', ['ngRoute','ItemControllers'/*,'ngDisqus'*/]);

ItemApp.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');	
  $routeProvider.
  when('/list', {
    template: '<table id="titles" class="table table-striped">'+
			'<thead class="thead-dark">'+
			'<th>Title</th><th>Description</th><th>Obtain</th><th>STR</th><th>WIL</th><th>AGI</th><th>INT</th><th>HP</th><th>ATK</th><th>MATK</th>'+
		'</thead>'+
			'<tbody>'+
				'<tr ng-repeat="item in ItemVariable | filter : ' + filter + '" class="events{{item.Event}} removed{{item.Removed}} unreleased{{item.Unreleased}} golden{{item.Golden}} exclusive{{item.Exclusive}}  pvp{{item.PvP}}"><td>{{item.Title}}</td><td>{{item.Desc}}</td><td>{{item.Obtain}}<br/><span class="requirements">({{item.Char}} Required)</span></td><td class="str">{{item.STR}}</td><td class="wil">{{item.WILL}}</td><td class="agi">{{item.DEX}}</td><td class="int">{{item.INT}}</td><td class="hp">{{item.HP}}</td><td class="atk">{{item.ATK}}</td><td class="matk">{{item.MATK}}</td></tr>'+
			'</tbody>'+
		'</table>',
    controller: 'ListController'
  }).
  when('/item/:ItemID/', {
    templateUrl: 'templates/stage-detail.html',
    controller: 'DetailsController'
  }).
  otherwise({
    redirectTo: '/list'
  });
}]);

/*
ItemApp.config(function($disqusProvider){
	 shortname = 'db-lovenikkiworld'
      $disqusProvider.setShortname(shortname);
   });
*/