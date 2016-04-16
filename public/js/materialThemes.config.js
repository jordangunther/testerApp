angular.module('testerApp')
	.config(['$mdThemingProvider', function ($mdThemingProvider) {
		
		$mdThemingProvider.theme('default')
			.accentPalette('blue', {
				'default': '500',
				'hue-1': '300',
				'hue-2': '200',
				'hue-3': '50'
			})
			.primaryPalette('green', {
				'default': '500',
				'hue-1': '300',
				'hue-2': '200',
				'hue-3': '50'
			})
			.warnPalette('red', {
				'default': '500',
				'hue-1': '300',
				'hue-2': '200',
				'hue-3': '50'
			});
	}]);
