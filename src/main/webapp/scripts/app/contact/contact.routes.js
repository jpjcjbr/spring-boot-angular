(function(){
    'use strict';

    angular.module('springBootAngularApp')
        .config(function($stateProvider) {
            $stateProvider
                .state('contacts', {
                    url: '/contacts',
                    views: {
                        'content@': {
                        	templateUrl: 'scripts/app/contact/contact.html'
                        }
                    },
                    resolve: {
                        translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                            $translatePartialLoader.addPart('contact');
                            return $translate.refresh();
                        }]
                    }
                });
        });
})();