"use strict";

app.factory("RouteFactory", ($q, $http) => {

	let getRoutes = () => {
		return $q( (resolve, reject) => {
			$http.get('./routes.json')
			.then( (routesObj) => {
				console.log("routesObj", routesObj);
				resolve(routesObj.data.routes);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};

	return {getRoutes};
});