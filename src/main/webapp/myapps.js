//there are two flavour of same methods

/*
	var myApp = angular.module('myeventsApp', []);
	myApp.controller("EventsController", function ($scope, $http) {
		$http({method: 'get', url: 'http://localhost:8080/spring-angularJS/springcontent.json'}).
		success(function (data, status, headers, config) {
			$scope.user = data;
	 	   //this callback will be called asynchronously, when the response is available
		}).
		error(function(data, status, headers, config) {
			  //called asynchronously if an error occurs or server returns response with an error status.
			});
	});
*/

var myApp = angular.module('myeventsApp', []);  // empty array means there is no any dependency.
myApp.controller("EventsController", restEventFun);  //restFun is event handler function 

function restEventFun ($scope, $http) {
	$http.get('http://localhost:8080/spring-angularJS/springcontent.json').
	success(function (data) {
		$scope.user = data;
	});
}
