var app = angular.module('quoteBook');

app.controller('mainCtrl', function($scope, mainService) {
	$scope.quotes = mainService.getData();
	$scope.showAddItem = false;
	$scope.showAddItems = function() {
		$scope.showAddItem = !$scope.showAddItem;
		$scope.addItemInput = '';
	}
	$scope.addItem = function() {
		mainService.addData($scope.addItemText, $scope.addItemAuthor);
		$scope.showAddItem = false;
		$scope.addItemInput = '';		
	}
}); 