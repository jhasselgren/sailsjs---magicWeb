(function() {
    'use strict';

    angular
        .module('app.leankit')
        .directive('jhasLeankitCardShow', jhasLeankitCardShow);

    //jhasLeankitCardShow.$inject = ['LeanKitDataservice'];
    function jhasLeankitCardShow() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: {
                card : '='
            },
            controller: LeanKitCardShowController,
            controllerAs: 'vm',
            link: link,
            restrict: 'E',
            templateUrl: 'leankit/card/leankit.card.tpl.html',
            scope: {}
        };
        return directive;
        
        function link(scope, element, attrs) {
        }
    }
    /* @ngInject */
    function LeanKitCardShowController () {
        
    }
})();