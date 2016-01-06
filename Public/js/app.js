angular.module('testerApp', ["ui.router", "ui.grid", "ngAnimate", "ngAria", "ngMaterial"])
.config(['$urlRouterProvider', '$stateProvider', '$mdThemingProvider', function($urlRouterProvider, $stateProvider, $mdThemingProvider) {
	$stateProvider
	.state('home', {
		url: '/home',
		templateUrl: 'templates/homeTmpl.html',
		controller: 'homeCtrl'
	})
	.state('teacherLogin', {
		url: '/teacherLogin',
		templateUrl: 'templates/teacherLoginTmpl.html',
		controller: 'teacherLoginCtrl'
	});
// .state('student', {
	// 	url: '/student/:studentId',
	// 	templateUrl: 'templates/studentTmpl.html',
	// 	controller: 'studentCtrl'
// })