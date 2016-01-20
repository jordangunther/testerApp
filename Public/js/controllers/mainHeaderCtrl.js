angular.module("testerApp")
.controller("headerCtrl", ["$scope", function($scope) {
	
	$scope.headerBackBtn = function () {
		var url = window.location.href;
		window.history.back(-1);
		console.log(url);
	}
	
	$scope.headerMainText = "Welcome to College Tester";
	$scope.headerSubText;
	$scope.headerRightText;
}])