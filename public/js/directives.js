angular.module("testerApp")
.directive("mainHeader", function() {
	return {
		template: require("../templates/_mainHeader.html"),
        controller: "headerCtrl",
        scope: {
            headerTitle: '='
        }
	};			 
})