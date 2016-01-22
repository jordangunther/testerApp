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
	__webpack_require__( 6);
	__webpack_require__( 7);
	__webpack_require__( 8);
	__webpack_require__( 9);

	__webpack_require__( 10);
	__webpack_require__( 11);

	//End Of Controllers

	//Services
	__webpack_require__( 12);
	__webpack_require__( 13);
	__webpack_require__( 14);
	__webpack_require__( 15);
	__webpack_require__( 16);
	__webpack_require__( 17);

	__webpack_require__( 18);
	__webpack_require__( 19);


	//End Services

	//Factories
	//End of Factories

	//Addons

	//NOTES:
	//		To add on more files to bundle just follow the format above
	//		Webpack Commands:
	//			To bundle files (from CollegeTester Dir): webpack
	//				Thats it.
	//				You can also use webpack to minify with: webpack -p

/***/ },
/* 1 */
/***/ function(module, exports) {

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
	.controller('teacherLoginCtrl', function($scope, teacherLoginService){

	})

/***/ },
/* 5 */
/***/ function(module, exports) {

	angular.module('testerApp')
	.controller('teacherRequestCtrl', function($scope, teacherRequestService) {


	});

/***/ },
/* 6 */
/***/ function(module, exports) {

	angular.module('testerApp')
	.controller('studentInfoCtrl', function($scope, teacherRequestService) {
		$scope.test = "test";
		($scope.getStudentInfo = function (){
			$scope.myData = [{
				Student: "Jonny",
				Test: '1'
			}, {
				Student: "Jason",
				Test: '1'
			}];
			$scope.gridOptions = {
				data: $scope.myData
			}
			console.log($scope.myData);
		})();
	})

/***/ },
/* 7 */
/***/ function(module, exports) {

	angular.module('testerApp')
	.controller('studentLoginCtrl', function($scope, studentLoginService){

	})

/***/ },
/* 8 */
/***/ function(module, exports) {

	angular.module('testerApp')
	.controller('classInfoCtrl', function($scope, teacherRequestService) {

	})

/***/ },
/* 9 */
/***/ function(module, exports) {

	angular.module("testerApp")
	.controller("headerCtrl", ["$scope", function($scope) {
		
		$scope.headerBackBtn = function() {
			var url = window.location.href;
			window.history.back(-1);
			console.log(url);
		}
		
		$scope.headerMainText = "Welcome to College Tester";
		$scope.headerSubText;
		$scope.headerRightText;
	}])

/***/ },
/* 10 */
/***/ function(module, exports) {

	angular.module('testerApp')
	.controller('studentCourseSelCtrl', function($scope, studentCourseSelService){

	})

/***/ },
/* 11 */
/***/ function(module, exports) {

	angular.module('testerApp')
	.controller('courseOverviewCtrl', function($scope, studentCourseSelService){

	})

/***/ },
/* 12 */
/***/ function(module, exports) {

	angular.module('testerApp')
	.service('homeService', function($q){

	})


/***/ },
/* 13 */
/***/ function(module, exports) {

	angular.module('testerApp')
	.service('teacherLoginService', function($q){

	})


/***/ },
/* 14 */
/***/ function(module, exports) {

	angular.module('testerApp')
	.service('teacherRequestService', function(){

	});

/***/ },
/* 15 */
/***/ function(module, exports) {

	angular.module('testerApp')
	.service('studentInfoService', function(){

	});

/***/ },
/* 16 */
/***/ function(module, exports) {

	angular.module('testerApp')
	.service('studentLoginService', function($q){

	})

/***/ },
/* 17 */
/***/ function(module, exports) {

	angular.module('testerApp')
	.service('classInfoService', function(){

	});

/***/ },
/* 18 */
/***/ function(module, exports) {

	angular.module('testerApp')
	.service('studentCourseSelService', function(){

	});

/***/ },
/* 19 */
/***/ function(module, exports) {

	angular.module('testerApp')
	.service('courseOverviewService', function(){

	});

/***/ }
/******/ ]);