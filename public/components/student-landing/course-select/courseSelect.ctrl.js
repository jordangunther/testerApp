angular.module('testerApp')
.controller('courseSelectCtrl', function($scope){
	$scope.courses = [{name: "course1"}, {name: "course2"}];
	$scope.courseSelected = "course1";
})