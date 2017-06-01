"use strict";

app.controller("BlueRidgeCtrl", function($scope, RouteFactory){

	RouteFactory.getRoutes()
	.then( (items) => {
		items.forEach(function(element){
			if (element.name === "Blue Ridge Parkway"){
				$scope.highwayName = element.name;
				$scope.highwayDescription = element.description;
			}
		});

	});
});