(function(){
    'use strict';

    angular.module('springBootAngularApp')
        .controller('homeController', homeController);
    
    homeController.$inject = ['$rootScope'];
    
    function homeController($rootScope) {
    	
    	activate();
    	
    	function activate() {
    		
    		$rootScope.pageHeader = '';
    	}
    	
    }
})();