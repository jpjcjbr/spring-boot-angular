(function(){
    'use strict';

    angular.module('springBootAngularApp')
        .controller('homeController', homeController);
    
    homeController.$inject = ['$rootScope', '$translate'];
    
    function homeController($rootScope, $translate) {
    	
    	activate();
    	
    	function activate() {
    		$rootScope.pageHeader = $translate.instant('home.title');
    	}
    	
    }
})();