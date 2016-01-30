(function(){
    'use strict';

    angular.module('springBootAngularApp')
        .config(function($stateProvider) {
            $stateProvider
                .state('home', {
                    url: '/home',
                    views: {
                        'content@': {
                        	templateUrl: 'scripts/app/home/home.html'
                        }
                    },
                    data: {
                    	pageTitle: 'home.title'
                    }
                });
        });
})();