angular.module("testerApp")
.directive("mainHeader", function() {
	return {
		templateUrl: "./templates/mainHeaderTmpl.html",
        controller: "headerCtrl",
        scope: {
            headerTitle: '='
        }
	};			 
})