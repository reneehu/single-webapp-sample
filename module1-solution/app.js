(function () {
	'use strict';

	angular.module('LunchCheck',[])
	.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];

	function LunchCheckController($scope){
		$scope.lunchMessage = "I don't know yet";
		$scope.food = null;
		$scope.validMsg = false;
		$scope.displayMsg = function(){
			var checkMsg = checkFood($scope.food);
			$scope.lunchMessage = checkMsg;
		};

		function checkFood(foodString){
			if(foodString==null) 
				return "Please enter data first";

			var foodArg = foodString.split(',');
			$scope.validMsg = true;
			if(foodArg.length<4){	
				return "Enjoy!";	
			}else {
				return "Too much!";	
			}

		};
		
		
	}


})();


