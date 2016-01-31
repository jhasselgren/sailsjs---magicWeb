/// <reference path="../../../../../typings/tsd.d.ts" />

(function () {
    'use strict';

    angular
        .module('app.leankit.connect')
        .controller('LeanKitConnectController', LeanKitConnectController);

    LeanKitConnectController.$inject = ['LeanKitDataService','CentralDataService'];
    function LeanKitConnectController(LeanKitDataService, CentralDataService) {
        var vm = this;

        vm.gui = {
            error: '',
            trello: {
                ok: false
            },
            leankit: {
                ok: false
            }
        }

        activate();

        ////////////////

        function activate() {
            CentralDataService.addCentralDataListener(centralDataUpdated);
            LeanKitDataService.validateLeanKitConnection('jhas')
                .then(validateLeanKitConnectionResult, handleError);
            
        }
        
        function validateLeanKitConnectionResult(response){
            CentralDataService.setLeanKitConnectionStatus(response.data.validated);
        }
        
        function leankitConnectUpdated() {
            CentralDataService.setLeanKitConnectionStatus(true);
        }
        
        function centralDataUpdated(){
            vm.gui.leankit.ok = CentralDataService.getLeanKitConnectionStatus();
        }
        
        function handleError(response) {
            vm.gui.error = 'Något gick fel: ' + JSON.stringify(response);
            console.error(vm.gui.error);
        }
    }
})();