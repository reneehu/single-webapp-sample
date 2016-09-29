(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuy = this;

  toBuy.items = ShoppingListCheckOffService.getToBuy();
  toBuy.moveItem = function (itemIndex) {
  	ShoppingListCheckOffService.moveItem(itemIndex);
  };

}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
	var alreadyBought = this;
	alreadyBought.items = ShoppingListCheckOffService.getbought();
}


function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var toBuyItems = [],
  	  boughtItems =[],

// create toBuyItems array of object literals
  	  toBuyItems = [
  	  { 
  	  	name: "cookies", 
  	  	quantity: 10 
  	  },
  	  { 
  	  	name: "yogurt", 
  	  	quantity: 2 
  	  },
  	  { 
  	  	name: "latte", 
  	  	quantity: 1
  	  }
  	  ] 

// push items to bought array then remove it from to buy array
  service.moveItem = function (itemIdex) {
  	boughtItems.push(toBuyItems[itemIdex]);
    toBuyItems.splice(itemIdex, 1);
  };

  service.getToBuy = function () {
    return toBuyItems;
  };

  service.getbought = function () {
  	return boughtItems;
  };

  service.checkTStatus = function () {

  };
}

})();