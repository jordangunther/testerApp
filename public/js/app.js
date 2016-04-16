angular.module('testerApp', ['ui.router', 'ngAnimate', 'ngAria', 'ngMaterial', 'ngMessages', 'ui.grid', 'toastr'])
.config(['$urlRouterProvider', '$stateProvider', '$mdThemingProvider', function ($urlRouterProvider, $stateProvider, $mdThemingProvider) {
	$urlRouterProvider.otherwise('/home');
	$stateProvider
		.state('home', {
			url: '/home',
			template: require('../templates/_home.html'),
			controller: 'homeCtrl'
		})
		.state('teacherLogin', {
			url: '/teacherLogin',
			template: require('../templates/teacherLoginTmpl.html'),
			controller: null
		})
		.state('teacherRequest', {
			url: '/teacherRequest',
			template: require('../templates/teacherRequestTmpl.html'),
			controller: null
		})
		.state('studentLogin', {
			url: '/studentLogin',
			template: require('../templates/studentLoginTmpl.html'),
			controller: null
		})
		.state('studentInfo', {
			url: '/studentInfo',
			template: require('../templates/studentInfoTmpl.html'),
			controller: 'studentInfoCtrl'
		})
		.state('classInfo', {
			url: '/classInfo',
			template: require('../templates/classInfoTmpl.html'),
			controller: 'classInfoCtrl'

		})
	  .state('courseSelect', {
	      url: '/courseSelect',
	      template: require('../templates/courseSelectTmpl.html'),
	      controller: 'courseSelectCtrl'
	  })
	  .state('testContent', {
	      url: '/testContent',
	      template: require('../templates/testContentTmpl.html'),
	      controller: 'testContentCtrl'
	  })
	  .state('testQuestions', {
	      url: '/testQuestions',
	      template: require('../templates/testQuestionsTmpl.html'),
	      controller: 'testQuestionsCtrl'
	  })
	  .state('testResults', {
	      url: '/testResults',
	      template: require('../templates/testResultsTmpl.html'),
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
