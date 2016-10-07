(function () {
	'use strict';
	angular.module('NarrowItDownApp', [])
	.controller('NarrowItDownController', NarrowItDownController)
	.service('MenuSearchService', MenuSearchService);

	NarrowItDownController.$inject = ['MenuSearchService'];

	function NarrowItDownController(MenuSearchService) {
		// var menu = this;

		// var promise = MenuSearchService.getMenuItems();

		// promise.then(function (response) {
		// 	menu.categories = response.data;
		// })
		// .catch(function (error) {
		// 	console.log("Something went terribly wrong.");
		// });

		// menu.logMenuItems = function (shortName) {
		// 	var promise = MenuCategoriesService.getMenuForCategory(shortName);

		// 	promise.then(function (response) {
		// 		console.log(response.data);
		// 	})
		// 	.catch(function (error) {
		// 		console.log(error);
		// 	})
		// };

	}

	MenuSearchService.$inject = ['$http']
	function MenuSearchService($http) {
		var service = this;

		service.getMatchedMenuItems = function (searchItem) {
			return $http.get('https://davids-restaurant.herokuapp.com/menu_items.json')
			.then(
				function (response) {
					var foundItems = [];
					var returnItems = response.data.menu_items;
					returnItems.forEach(function (item) {
						if (item.description.toLowerCase().indexOf(searchItem) !== -1) {
							foundItems.push(item);
						}
					});
					return foundItems;
				}
			 )
		}
	}



})()