(function() {
    'use strict';

    angular
        .module('app.leankit.connect')
        .directive('jhasLeankitConnectEdit', LeanKitConnectEditDirective);

    //LeanKitConnectEditDirective.$inject = [];
    function LeanKitConnectEditDirective() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: {
                successCallback : '&'
            },
            controller: LeanKitConnectEditController,
            controllerAs: 'vm',
            link: link,
            restrict: 'EA',
            templateUrl: 'leankit/connect/leankit.connect.edit.tpl.html',
            scope: {}
        };
        return directive;
        
        function link(scope, element, attrs) {
        }
    }
    /* @ngInject */
    function LeanKitConnectEditController (LeanKitDataService) {
        var vm = this;
        
        vm.data = {
            newLeanKitConnection : {
                username: 'jhas',
                leankitUser: '',
                leankitPassword: ''
            }
        }
        
        vm.gui = {
            error: ''
        }
        
        vm.saveLeanKitConnection = saveLeanKitConnection;
        
        activate();
        
        ////////////////

        function activate() {
            console.log('Activating LeanKitConnectEditController');
        }
        
        function saveLeanKitConnection(){
            vm.gui.error = '';
            console.log(JSON.stringify(vm.data.newLeanKitConnection));
            
            LeanKitDataService.saveLeanKitConnection(vm.data.newLeanKitConnection)
                .then(tellParent, handleError);
        }
        
        function tellParent(response){
            vm.successCallback()();
        }
        
        function handleError(response){
            vm.gui.error = "Något gick fel: " + JSON.stringify(response);
            console.error(vm.gui.error);
        }
    }
})();