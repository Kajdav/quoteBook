var app = angular.module('quoteBook');

app.controller('mainCtrl', function($scope, mainService) {
	$scope.quotes = mainService.getData();
	$scope.showAddItem = false;
	$scope.showRemoveItem = false;
	$scope.showFilter = false;
	$scope.showAddItems = function() {
		$scope.showAddItem = !$scope.showAddItem;
		$scope.showRemoveItem = false;
		$scope.showFilter = false;
		$scope.addItemText = '';
		$scope.addItemAuthor = '';
	}
	$scope.showRemoveItems = function() {
		$scope.showRemoveItem = !$scope.showRemoveItem;
		$scope.showAddItem = false;
		$scope.showFilter = false;
		$scope.removeItemText = '';
	}
	$scope.showFilters = function() {
		$scope.showFilter = !$scope.showFilter;
		$scope.showAddItem = false;
		$scope.showRemoveItem = false;
		$scope.filterText = '';
	}
	$scope.addItem = function() {
		mainService.addData($scope.addItemText, $scope.addItemAuthor);
		$scope.showAddItem = false;
		$scope.addItemInput = '';		
	}
	$scope.removeItem = function() {
		mainService.removeData($scope.removeItemText);
		$scope.showRemoveItem = false;
		$scope.removeItemText = '';
	}
}); 