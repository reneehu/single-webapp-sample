(function () {
	'use strict';

	angular.module('myApp',[])

	.controller('myCtlr', function($scope){
		$scope.name = "";
		$scope.totalNum = 0;
		$scope.displayNum = function(){
			var totalNameNum = caculateNumForString($scope.name);
			$scope.totalNum = totalNameNum;
		};

		function caculateNumForString(string){
			var totalStringValue = 0;
			for(var i=0;i<string.length;i++){
				totalStringValue += string.charCodeAt(i);
			}
			return totalStringValue;
		}

	});





})();

