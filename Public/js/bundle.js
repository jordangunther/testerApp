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
/******/ 	__webpack_require__.p = '';

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

	//Controllers
	__webpack_require__( 2);
	__webpack_require__( 3);
	//End Of Controllers

	//Services
	__webpack_require__( 4);
	__webpack_require__( 5);
	//End Services

	//Factories
	//End of Factories

	//Addons

/***/ },
/* 1 */
/***/ function(module, exports) {

	angular.module('testerApp', ['ui.router', 'ngAnimate', 'ngAria', 'ngMaterial'])
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
		})
		.state('teacherRequest', {
 		url: '/teacherRequest',
 		templateUrl: 'templates/teacherRequestTmpl.html',
 		controller: 'teacherRequestCtrl'
 		})
 		.state('classInfo', {
 		url: '/classInfo',
 		templateUrl: 'templates/classInfoTmpl.html',
 		controller: 'classInfoCtrl'
 		})
 		.state('studentInfo', {
 		url: '/studentInfo',
 		templateUrl: 'templates/studentInfoTmpl.html',
 		controller: 'studentInfoCtrl'
 		});
	// .state('student', {
	//	 	url: '/student/:studentId',
	//	 	templateUrl: 'templates/studentTmpl.html',
	//	 	controller: 'studentCtrl'
	// })
}]);

/***/ },
/* 2 */
/***/ function(module, exports) {

	angular.module('testerApp')
	.controller('homeCtrl', function($scope, homeService){

	})

/***/ },
/* 3 */
/***/ function(module, exports) {

	angular.module('testerApp')
	.controller('teacherLoginCtrl', function($scope, teacherLoginService){

	})


	angular.module('testerApp')
	.controller('teacherRequestCtrl', function($scope, teacherRequestService) {


	})

	angular.module('testerApp')
	.controller('classInfoCtrl', function($scope, teacherRequestService) {


	})

	angular.module('testerApp')
	.controller('studentInfoCtrl', function($scope, teacherRequestService) {


	})

/***/ },
/* 4 */
/***/ function(module, exports) {

	angular.module('testerApp')
	.service('homeService', function($q){

	})


/***/ },
/* 5 */
/***/ function(module, exports) {

	angular.module('testerApp')
	.service('teacherLoginService', function($q){

	})

	angular.module('testerApp')
	.service('teacherRequestService', function(){

	})

/***/ }
/******/ ]);

