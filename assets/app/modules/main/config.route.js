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
                views: {
                    '': {
                        templateUrl: 'main/main.tpl.html'
                    },
                    'trelloConnect@home': {
                        templateUrl: 'trello/connect/trello.connect.tpl.html',
                        controller: 'TrelloConnectController',
                        controllerAs: 'vm'
                    },
                    'leanKitConnect@home': {
                        templateUrl: 'leankit/connect/leankit.connect.tpl.html',
                        controller: 'LeanKitConnectController',
                        controllerAs: 'vm'
                    },
                    'leanKitCards@home': {
                        templateUrl: 'leankit/leankit.tpl.html',
                        controller: 'LeanKitController',
                        controllerAs: 'vm'
                    }

                }

            });
    }
})();