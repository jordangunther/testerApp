angular.module("testerApp")
.directive("mainHeader", function() {
	return {
		template: require("../components/main-header/mainHeader.view.html"),
        controller: "headerCtrl",
        scope: {
            headerTitle: '='
        }
	};			 
})