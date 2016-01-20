angular.module('testerApp')
.controller('classInfoCtrl', function($scope, teacherRequestService) {
	($scope.getStudentInfo = function (){
		$scope.myData = 1;
	})();
})