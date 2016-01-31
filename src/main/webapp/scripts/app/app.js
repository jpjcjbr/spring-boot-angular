'use strict';

angular.module('springBootAngularApp', [
	'ui.router',
	'ui.bootstrap',
    'angular-loading-bar',
    'pascalprecht.translate',
    'ngSanitize',
    'tmh.dynamicLocale'
])

    .run(function ($translate, tmhDynamicLocale) {
    	$translate.use('en');
    	tmhDynamicLocale.set('en');
    })
    .config(function ($urlRouterProvider, $translateProvider, tmhDynamicLocaleProvider) {
    	
    	$translateProvider.useLoader('$translatePartialLoader', {
            urlTemplate: 'i18n/{lang}/{part}.json'
        });
    	
    	$translateProvider.useSanitizeValueStrategy('sanitize');
    	$translateProvider.preferredLanguage('en');
    	
    	tmhDynamicLocaleProvider.localeLocationPattern('bower_components/angular-i18n/angular-locale_{{locale}}.js');
    	
    	$urlRouterProvider.otherwise('/home');
    });
