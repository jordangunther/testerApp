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
import './app.js';
//Directive
import './directives.js';

//Controllers
import './controllers/homeCtrl.js';
import './controllers/teacherLoginCtrl.js';
import './controllers/teacherRequestCtrl.js';
import './controllers/studentInfoCtrl.js';
import './controllers/studentLoginCtrl.js';
import './controllers/classInfoCtrl.js';
import './controllers/mainHeaderCtrl.js';
import './controllers/courseSelectCtrl.js';
import './controllers/testContentCtrl.js';
import './controllers/testQuestionsCtrl.js';
import './controllers/testResultsCtrl.js';



//End Of Controllers

//Services
import './services/homeService.js';
import './services/teacherLoginService.js';
import './services/teacherRequestService.js';
import './services/studentInfoService.js';
import './services/studentLoginService.js';
import './services/classInfoService.js';
import './services/courseSelectService.js';
import './services/dataService.js';
import './services/testContentService.js';
import './services/testQuestionsService.js';
import './services/testResultsService.js';

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
