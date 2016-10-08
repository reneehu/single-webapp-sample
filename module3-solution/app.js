(function () {
  'use strict';
  angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .controller('FoundItemsController', FoundItemsController)
    .service("MenuSearchService", MenuSearchService)
    .directive('foundItems', foundItemsDirective);

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var narrowMenu = this;
    narrowMenu.found = [];
    narrowMenu.display = true;
    narrowMenu.search = function () {
      if (narrowMenu.searchTerm === '') {
        narrowMenu.display = false;
        return;
      }
      MenuSearchService.getMatchedMenuItems(narrowMenu.searchTerm).then(
        function (response) {
          narrowMenu.found = response;
          if (narrowMenu.found.length === 0) {
            narrowMenu.display = false;
          } else {
            narrowMenu.display = true;
          }
        }
      );
    };
    narrowMenu.remove = function (index) {
      narrowMenu.found.splice(index, 1);
    }
  }

  MenuSearchService.$inject = ['$http'];
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

  function foundItemsDirective() {
    var ddo = {
      templateUrl: 'foundItems.html',
      scope: {
        items : '<',
        display: '<',
        onRemove: '&'
      },
      controller: FoundItemsController,
      controllerAs: 'list',
      bindToController: true
    };
    return ddo;
  }

  function FoundItemsController() {
    var list = this;
  }
})();