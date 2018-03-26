var ItemApp = angular.module('ItemApp', ['ngRoute','ItemControllers'/*,'ngDisqus'*/]);

ItemApp.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');	
  $routeProvider.
  when('/list', {
    template: '<table class="table table-striped">'+
			'<thead class="thead-dark">'+
			'<th>Title</th><th>Description</th><th>Obtain</th><th>STR</th><th>WIL</th><th>AGI</th><th>INT</th><th>HP</th>'+
		'</thead>'+
			'<tbody>'+
				'<tr ng-repeat="item in ItemVariable"><td>{{item.Title}}</td><td>{item.Desc}}</td><td>{item.Obtain}}</td><td>{item.STR}}</td><td>{item.WIL}}</td><td>{item.AGI}}</td><td>{item.INT}}</td><td>{item.HP}}</td></tr>'+
			'</tbody>'+
		'</table>',
    controller: 'ListController'
  '}).
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