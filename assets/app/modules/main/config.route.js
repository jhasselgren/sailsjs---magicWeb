/// <reference path="../../../../typings/tsd.d.ts" />


(function () {
    'use strict';

    angular
        .module('app.main')
        .config(mainStateConfig);
    
    /* @ngInject */
    function mainStateConfig($stateProvider, $urlRouterProvider) {
        console.log("Configure home state")
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: '/app/modules/main/main.html',
                controller: 'MainController',
                controllerAs: 'vm'
            });
    }


})();