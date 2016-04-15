angular.module('testerApp', ['ui.router', 'ngAnimate', 'ngAria', 'ngMaterial', 'ngMessages', 'ui.grid', 'toastr'])
.config(['$urlRouterProvider', '$stateProvider', '$mdThemingProvider', function ($urlRouterProvider, $stateProvider, $mdThemingProvider) {
	$urlRouterProvider.otherwise('/home');
	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'templates/_home.html',
			controller: 'homeCtrl'
		})
		.state('teacherLogin', {
			url: '/teacherLogin',
			templateUrl: 'templates/teacherLoginTmpl.html',
			controller: null
		})
		.state('teacherRequest', {
			url: '/teacherRequest',
			templateUrl: 'templates/teacherRequestTmpl.html',
			controller: null
		})
		.state('studentLogin', {
			url: '/studentLogin',
			templateUrl: 'templates/studentLoginTmpl.html',
			controller: null
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
	  .state('courseSelect', {
	      url: '/courseSelect',
	      templateUrl: 'templates/courseSelectTmpl.html',
	      controller: 'courseSelectCtrl'
	  })
	  .state('testContent', {
	      url: '/testContent',
	      templateUrl: 'templates/testContentTmpl.html',
	      controller: 'testContentCtrl'
	  })
	  .state('testQuestions', {
	      url: '/testQuestions',
	      templateUrl: 'templates/testQuestionsTmpl.html',
	      controller: 'testQuestionsCtrl'
	  })
	  .state('testResults', {
	      url: '/testResults',
	      templateUrl: 'templates/testResultsTmpl.html',
	      controller: 'testResultsCtrl'
	  });

	$mdThemingProvider.theme('default')
		.accentPalette('blue', {
			'default': '500',
			'hue-1': '300',
			'hue-2': '200',
			'hue-3': '50'
		})
		.primaryPalette('green', {
			'default': '500',
			'hue-1': '300',
			'hue-2': '200',
			'hue-3': '50'
		})
		.warnPalette('red', {
			'default': '500',
			'hue-1': '300',
			'hue-2': '200',
			'hue-3': '50'
		});
}]);
