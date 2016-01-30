'use strict';

angular.module('springBootAngularApp', [
	'ui.router'
])

    .run(function () {
        
    })
    .config(function ($urlRouterProvider) {
    	$urlRouterProvider.otherwise('/home');
    });
