(function () {
	'use strict';

	angular.module('myApp',[])

	.controller('myCtlr', function($scope){
		$scope.name = "hi";
		$scope.sayhello = function(){
			return "Hello Course";
		};
	});


})();

