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
require( '.\/controllers/studentCourseSelCtrl.js');
require( '.\/controllers/courseOverviewCtrl.js');
//End Of Controllers

//Services
require( '.\/services/homeService.js');
require( '.\/services/teacherLoginService.js');
require( '.\/services/teacherRequestService.js');
require( '.\/services/studentInfoService.js');
require( '.\/services/studentLoginService.js');
require( '.\/services/classInfoService.js');
require( '.\/services/studentCourseSelService.js');
require( '.\/services/courseOverviewService.js');

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