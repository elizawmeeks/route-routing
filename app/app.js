"use strict";

var app = angular.module("RouteApp", ["ngRoute"]);

app.config( ($routeProvider) => {
	$routeProvider
	.when('/', {
		templateUrl: 'partials/greeting.html'
	})
	.when('/blueridge', {
		templateUrl: 'partials/blueridge.html',
		controller: 'BlueRidgeCtrl'
	})
	.when('/route66', {
		templateUrl: 'partials/route66.html',
		controller: 'Route66Ctrl'
	})
	.otherwise('/');
});