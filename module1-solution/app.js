(function () {
	'use strict';

	angular.module('LunchCheck',[])
	.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];

	function LunchCheckController($scope){
		$scope.lunchMessage = "I don't know yet";
		$scope.food = null;
		$scope.displayMsg = function(){
			var checkMsg = checkFood($scope.food);
			$scope.lunchMessage = checkMsg;
		};

		function checkFood(foodString){
			if(foodString==null) 
				return "Please enter data first";

			var foodArg = foodString.split(',');
			if(foodArg.length>0 && foodArg.length<4){
				return "Enjoy!";
			}else {
				return "Too much!";
			}

		};
		
		
	}


})();


