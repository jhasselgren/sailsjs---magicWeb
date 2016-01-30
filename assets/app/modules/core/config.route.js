(function () {
    'use strict';
    angular
        .module('app.core')
        .config(otherwiseConfig);
    
    /* @ngInject */
    function otherwiseConfig($stateProvider, $urlRouterProvider) {
        console.log('Set default to /home');
        $urlRouterProvider.otherwise('/home');
    }
})();