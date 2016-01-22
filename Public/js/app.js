import angular from "angular";
import ngAnimate from "angular-animate";
import ngAria from "angular-aria";
import ui.router from "angular-ui-router";
import ngMaterial from "angular-material";

angular.module('testerApp', ['ui.router', 'ngAnimate', 'ngAria', 'ngMaterial'])

.config(['$urlRouterProvider', '$stateProvider', '$mdThemingProvider', function ($urlRouterProvider, $stateProvider, $mdThemingProvider) {
	$urlRouterProvider.otherwise('/home');
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
	})
	.state('teacherRequest', {
		url: '/teacherRequest',
		templateUrl: 'templates/teacherRequestTmpl.html',
		controller: 'teacherRequestCtrl'
	})
	.state('studentLogin', {
		url: '/studentLogin',
		templateUrl: 'templates/studentLoginTmpl.html',
		controller: 'studentLoginCtrl'
	})
	.state('studentInfo', {
		url: '/studentInfo',
		templateUrl: 'templates/studentInfoTmpl.html',
		controller: 'studentInfoCtrl'
	})
	.state('classInfo', {
		url: '/classInfo',
		templateUrl: 'templates/classInfoTmpl.html',
		controller: 'classInfoCtrl'

	})
    .state('studentCourseSel', {
        url: '/studentCourseSel',
        templateUrl: 'templates/studentCourseSel.html',
        controller: 'studentCourseSelCtrl'
    })
    .state('courseOverview', {
        url: '/course/:courseId',
        templateUrl: 'templates/courseOverview.html',
        controller: 'courseOverviewCtrl'
    });

//		.state('student', {
//				url: '/student/:studentId',
//				templateUrl: 'templates/studentTmpl.html',
//				controller: 'studentCtrl'
//     });
	
	
	$mdThemingProvider.theme('default')
		.dark()
		.accentPalette('blue', {
			'default': '500',
			'hue-1': '300',
			'hue-1': '200',
			'hue-1': '50',
		})
		.primaryPalette('green', {
			'default': '500',
			'hue-1': '300',
			'hue-1': '200',
			'hue-1': '50',
		})
		.warnPalette('red', {
			'default': '500',
			'hue-1': '300',
			'hue-1': '200',
			'hue-1': '50',
		});
}]);
