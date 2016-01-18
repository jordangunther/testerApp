angular.module('testerApp', ['ui.router','ui.grid', 'ngAnimate', 'ngAria', 'ngMaterial'])
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
    .state('studentInfo', {
        url: '/studentInfo',
        templateUrl: 'templates/studentInfoTmpl.html',
        controller: 'studentInfoCtrl'
    })
        .state('classInfo', {
        url: '/classInfo',
        templateUrl: 'templates/classInfoTmpl.html',
        controller: 'classInfoCtrl'
    });
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
    // .state('student', {
	//  	url: '/student/:studentId',
	//  	templateUrl: 'templates/studentTmpl.html',
	//  	controller: 'studentCtrl'
    // });
}]);
