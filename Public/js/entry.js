//App
require( '.\/app.js');
//Directive
require( '.\/directives.js');

//Controllers
require( '.\/controllers/homeCtrl.js');
require( '.\/controllers/teacherLoginCtrl.js');
require( '.\/controllers/headerCtrl.js');
//End Of Controllers

//Services
require( '.\/services/homeService.js');
require( '.\/services/teacherLoginService.js');
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