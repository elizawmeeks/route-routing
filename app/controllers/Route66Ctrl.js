"use strict";

app.controller("Route66Ctrl", function($scope, RouteFactory){

	RouteFactory.getRoutes()
	.then( (items) => {
		items.forEach(function(element){
			if (element.name === "Route 66"){
				$scope.highwayName = element.name;
				$scope.highwayDescription = element.description;
			}
		});
	});
});