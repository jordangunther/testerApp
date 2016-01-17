/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	//App
	__webpack_require__( 1);
	//Directive
	__webpack_require__( 2);

	//Controllers
	__webpack_require__( 3);
	__webpack_require__( 4);
	__webpack_require__( 5);
<<<<<<< HEAD
	__webpack_require__( 6);
	__webpack_require__( 7);
	//End Of Controllers

	//Services
	__webpack_require__( 8);
	__webpack_require__( 9);
	__webpack_require__( 10);
	__webpack_require__( 11);
	__webpack_require__( 12);
	__webpack_require__( 13);

=======
	//End Of Controllers

	//Services
	__webpack_require__( 6);
	__webpack_require__( 7);
>>>>>>> master
	//End Services

	//Factories
	//End of Factories

	//Addons

	//NOTES:
	//		To add on more files to bundle just follow the format above
	//		Webpack Commands:
	//			To bundle files (from CollegeTester Dir): webpack
	//				Thats it.
<<<<<<< HEAD
=======
<<<<<<< HEAD
	//				You can also use webpack to minify with: webpack -p
=======
>>>>>>> master
>>>>>>> master

/***/ },
/* 1 */
/***/ function(module, exports) {

<<<<<<< HEAD
=======
<<<<<<< HEAD
	angular.module('testerApp', ['ui.router', 'ui.grid', 'ngAnimate', 'ngAria', 'ngMaterial'])
	.config(['$urlRouterProvider', '$stateProvider', '$mdThemingProvider', function ($urlRouterProvider, $stateProvider, $mdThemingProvider) {
		$stateProvider
=======
>>>>>>> master
	angular.module('testerApp', ['ui.router','ui.grid', 'ngAnimate', 'ngAria', 'ngMaterial'])
	.config(['$urlRouterProvider', '$stateProvider', '$mdThemingProvider', function ($urlRouterProvider, $stateProvider, $mdThemingProvider) {
		$urlRouterProvider.otherwise('/home');
	    $stateProvider
<<<<<<< HEAD
=======
>>>>>>> master
>>>>>>> master
		.state('home', {
			url: '/home',
			templateUrl: 'templates/homeTmpl.html',
			controller: 'homeCtrl'
		})
		.state('teacherLogin', {
			url: '/teacherLogin',
			templateUrl: 'templates/teacherLoginTmpl.html',
			controller: 'teacherLoginCtrl'
<<<<<<< HEAD
=======
<<<<<<< HEAD
		});
	// .state('student', {
	//	 	url: '/student/:studentId',
	//	 	templateUrl: 'templates/studentTmpl.html',
	//	 	controller: 'studentCtrl'
	// })
=======
>>>>>>> master
		})
		.state('teacherRequest', {
			url: '/teacherRequest',
			templateUrl: 'templates/teacherRequestTmpl.html',
			controller: 'teacherRequestCtrl'
		})
<<<<<<< HEAD
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
=======
	    .state('studentLogin', {
	        url: '/studentLogin',
	        templateUrl: 'templates/studentLoginTmpl.html',
	        controller: 'studentLoginCtrl'
	    });
>>>>>>> master
	    // .state('student', {
		//  	url: '/student/:studentId',
		//  	templateUrl: 'templates/studentTmpl.html',
		//  	controller: 'studentCtrl'
	    // });
<<<<<<< HEAD
=======
>>>>>>> master
>>>>>>> master
	}]);


/***/ },
/* 2 */
/***/ function(module, exports) {

	angular.module("testerApp")
	.directive("mainHeader", function() {
		return {
			templateUrl: "./templates/mainHeaderTmpl.html"				 
		};			 
	})

/***/ },
/* 3 */
/***/ function(module, exports) {

	angular.module('testerApp')
	.controller('homeCtrl', function($scope, homeService){

	})

/***/ },
/* 4 */
/***/ function(module, exports) {

	angular.module('testerApp')
<<<<<<< HEAD
	.controller('teacherRequestCtrl', function($scope, teacherRequestService) {


	});

/***/ },
/* 5 */
/***/ function(module, exports) {

	angular.module('testerApp')
	.controller('studentInfoCtrl', function($scope, teacherRequestService) {

=======
	.controller('teacherLoginCtrl', function($scope, teacherLoginService){
>>>>>>> master

	})

/***/ },
<<<<<<< HEAD
/* 6 */
/***/ function(module, exports) {

	angular.module('testerApp')
	.controller('studentLoginCtrl', function($scope, studentLoginService){

	})

/***/ },
/* 7 */
/***/ function(module, exports) {

	angular.module('testerApp')
	.controller('classInfoCtrl', function($scope, teacherRequestService) {

=======
/* 5 */
/***/ function(module, exports) {
>>>>>>> master

	angular.module("testerApp")
	.controller("headerCtrl", ["$scope", function($scope) {
		
		$scope.headerMainText = "Welcome to College Tester";
		$scope.headerSubText;
		$scope.headerRightText;
	}])

/***/ },
<<<<<<< HEAD
/* 8 */
=======
/* 6 */
>>>>>>> master
/***/ function(module, exports) {

	angular.module('testerApp')
	.service('homeService', function($q){

	})


/***/ },
<<<<<<< HEAD
/* 9 */
=======
/* 7 */
>>>>>>> master
/***/ function(module, exports) {

	angular.module('testerApp')
	.service('teacherLoginService', function($q){

	})

<<<<<<< HEAD

/***/ },
/* 10 */
/***/ function(module, exports) {

	angular.module('testerApp')
	.service('teacherRequestService', function(){

	});

/***/ },
/* 11 */
/***/ function(module, exports) {

	angular.module('testerApp')
	.service('studentInfoService', function(){

	});

/***/ },
/* 12 */
/***/ function(module, exports) {

	angular.module('testerApp')
	.service('studentLoginService', function($q){

	})

/***/ },
/* 13 */
/***/ function(module, exports) {

	angular.module('testerApp')
	.service('classInfoService', function(){

	});

=======

>>>>>>> master
/***/ }
/******/ ]);