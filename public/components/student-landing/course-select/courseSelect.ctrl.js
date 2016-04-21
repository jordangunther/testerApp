angular.module('testerApp')
.controller('courseSelectCtrl', function($scope){
	$scope.title = "List of Courses";
	// $scope.courses = [{name: "course1", discription: "this is about math", score: null}, {name: "course2", discription: "this is about science", score: null}, {name: "course1", discription: "this is about math", score: 80%}]
	$scope.courses = ["course1", "course2", "course3","course4", "course5", "course6","course7", "course8", "course9"];

})