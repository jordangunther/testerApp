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
import './app';
//Directive
import './directives';

//Controllers
import './controllers/homeCtrl'
import './controllers/courseSelectCtrl';
import './controllers/testQuestionsCtrl';
import './controllers/classInfoCtrl';
import '../components/main-header/mainHeader.ctrl'
import './controllers/studentInfoCtrl'
//End Of Controllers

//Services
import './services/dataService';
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
