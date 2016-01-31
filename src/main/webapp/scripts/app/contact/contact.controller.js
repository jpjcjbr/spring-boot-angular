(function(){
    'use strict';

    angular.module('springBootAngularApp')
        .controller('contactController', contactController);
    
    contactController.$inject = ['$rootScope', '$translate'];
    
    function contactController($rootScope, $translate) {
    	
    	activate();
    	
    	function activate() {
    		$rootScope.pageHeader = $translate.instant('contact.title');
    		
    		$translate('contact.title').then(function(title) {
    			console.log(title);
    		});
    	}
    	
    }
})();