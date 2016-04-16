angular.module('testerApp')
	.config(['$mdThemingProvider', function ($mdThemingProvider) {

		$mdThemingProvider.definePalette('myTheme', {
			'50': '#4ddfcf',
			'100': 'ffcdd2',
			'200': 'ef9a9a',
			'300': 'e57373',
			'400': 'ef5350',
			'500': '#4ddfcf',
			'600': 'e53935',
			'700': 'd32f2f',
			'800': 'c62828',
			'900': 'b71c1c',
			'A100': 'ff8a80',
			'A200': 'ff5252',
			'A400': 'ff1744',
			'A700': 'd50000',
			'contrastDefaultColor': 'light'
		});
		$mdThemingProvider.theme('default')
			.accentPalette('blue', {
				'default': '500',
				'hue-1': '300',
				'hue-2': '200'
			})
			.primaryPalette('myTheme', {
				'default': '500',
				'hue-1': '300',
				'hue-2': '200'
			})
			.warnPalette('red', {
				'default': '500',
				'hue-1': '300',
				'hue-2': '200',
				'hue-3': '50'
			});
	}]);
