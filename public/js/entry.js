//Injectables
import angular from "angular";
import ngAnimate from "angular-animate";
import ngAria from "angular-aria";
import uirouter from "angular-ui-router";
import ngMaterial from "angular-material";
import ngMessages from "angular-messages";
import uigrid from "../../bower_components/angular-ui-grid/ui-grid.js";
import "lodash";
import "angular-toastr";

//App
import './app'
import './routes.config'
import './materialThemes.config'

//Controllers
import '../components/landing/landing.ctrl';
import '../components/main-header/mainHeader.ctrl';
import '../components/landing/student-login/studentLogin.ctrl';
import '../components/landing/teacher-login/teacherLogin.ctrl';
import '../components/student-landing/course-select/courseSelect.ctrl';
import './../components/student-tests/test-questions/testQuestions.ctrl';
import './../components/teacher-landing/classInfoCtrl';
import './../components/teacher-landing/studentInfoCtrl';
//End Of Controllers

//Addons
import './dataService';

//NOTES:
//		To add on more files to bundle just follow the format above
//		Webpack Commands:
//			To bundle files (from CollegeTester Dir): webpack
//				Thats it.
//				You can also use webpack to minify with: webpack -p
