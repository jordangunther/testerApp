angular.module('testerApp')
.controller('studentInfoCtrl', function($scope, teacherRequestService) {
	$scope.test = "test";
	($scope.getStudentInfo = function (){
		$scope.myData = [{
			Student: "Jonny",
			Test: '1'
		}, {
			Student: "Jason",
			Test: '1'
		}];
		$scope.gridOptions = {
			data: $scope.myData
		}
		console.log($scope.myData);
	})();
})