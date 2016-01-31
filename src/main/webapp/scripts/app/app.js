'use strict';

angular.module('springBootAngularApp', [
	'ui.router',
	'ui.bootstrap',
    'angular-loading-bar',
    'pascalprecht.translate',
    'ngSanitize',
    'tmh.dynamicLocale',
    'ngCookies'
])
.run(function ($translate, tmhDynamicLocale, $rootScope, $state, $translatePartialLoader) {
	var changeLocale = function(newLocale) {
		$translate.use(newLocale);
		tmhDynamicLocale.set(newLocale);
	};
	
	$rootScope.changeLocale = changeLocale;
	
	changeLocale('en');
})
.config(function ($urlRouterProvider, $translateProvider, tmhDynamicLocaleProvider) {
	
	$translateProvider.useLoader('$translatePartialLoader', {
        urlTemplate: 'i18n/{lang}/{part}.json'
    });
	
	$translateProvider.useSanitizeValueStrategy('escape');
	$translateProvider.preferredLanguage('en');
	$translateProvider.useCookieStorage();
	
	tmhDynamicLocaleProvider.useCookieStorage();
	tmhDynamicLocaleProvider.localeLocationPattern('bower_components/angular-i18n/angular-locale_{{locale}}.js');
	tmhDynamicLocaleProvider.storageKey('NG_TRANSLATE_LANG_KEY');
	
	$urlRouterProvider.otherwise('/home');
});


