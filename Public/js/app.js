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

	$mdThemingProvider.definePalette('myTheme', {
		'50': '#4ddfcf',
    	'100': 'ffcdd2',
	    '200': 'ef9a9a',
	    '300': 'e57373',
	    '400': 'ef5350',
	    '500': '#4ddfcf',
	    '600': 'e53935',
	    '700': 'd32f2f',
	    '800': 'c62828',
	    '900': 'b71c1c',
	    'A100': 'ff8a80',
	    'A200': 'ff5252',
	    'A400': 'ff1744',
	    'A700': 'd50000',
		'contrastDefaultColor': 'light'
	});
	$mdThemingProvider.theme('default')
		.accentPalette('blue', {
			'default': '500',
			'hue-1': '300',
			'hue-2': '200',
		})
		.primaryPalette('myTheme', {
			'default': '500',
			'hue-1': '300',
			'hue-2': '200',
		})
		.warnPalette('red', {
			'default': '500',
			'hue-1': '300',
			'hue-2': '200',
			'hue-3': '50'
		});
}]);
