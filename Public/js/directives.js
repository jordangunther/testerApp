angular.module("testerApp")
.directive("mainHeader", function() {
	return {
		templateUrl: "./templates/_mainHeader.html",
        controller: "headerCtrl",
        scope: {
            headerTitle: '='
        }
	};			 
})