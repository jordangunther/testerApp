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
require( '.\/app.js');
//Directive
require( '.\/directives.js');

//Controllers
require( '.\/controllers/homeCtrl.js');
require( '.\/controllers/teacherLoginCtrl.js');
require( '.\/controllers/teacherRequestCtrl.js');
require( '.\/controllers/studentInfoCtrl.js');
require( '.\/controllers/studentLoginCtrl.js');
require( '.\/controllers/classInfoCtrl.js');
require( '.\/controllers/mainHeaderCtrl.js');
require( '.\/controllers/courseSelectCtrl.js');
require( '.\/controllers/testContentCtrl.js');
require( '.\/controllers/testQuestionsCtrl.js');
require( '.\/controllers/testResultsCtrl.js');



//End Of Controllers

//Services
require( '.\/services/homeService.js');
require( '.\/services/teacherLoginService.js');
require( '.\/services/teacherRequestService.js');
require( '.\/services/studentInfoService.js');
require( '.\/services/studentLoginService.js');
require( '.\/services/classInfoService.js');
require( '.\/services/courseSelectService.js');
require( '.\/services/dataService.js');
require( '.\/services/testContentService.js');
require( '.\/services/testQuestionsService.js');
require( '.\/services/testResultsService.js');

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
