(function() {
'use strict';

    angular
        .module('app.leankit')
        .controller('LeanKitController', LeanKitController);

    LeanKitController.$inject = ['LeanKitDataService', 'CentralDataService'];
    function LeanKitController(LeanKitDataService, CentralDataService) {
        var vm = this;
        
        vm.leankitConnectionStatus;
        
        vm.data = {
            cards: []
        }

        activate();

        ////////////////

        function activate() { 
            CentralDataService.addCentralDataListener(leankitConnectionStatusChanged);
            vm.leankitConnectionStatus = CentralDataService.getLeanKitConnectionStatus();
            
            if(vm.leankitConnectionStatus){
                loadLeanKitCards();
            }
        }
        
        function leankitConnectionStatusChanged(){
            var oldStatus = vm.leankitConnectionStatus;
            
            if(!oldStatus && CentralDataService.getLeanKitConnectionStatus()){
                loadLeanKitCards();
            }
            
            vm.leankitConnectionStatus = CentralDataService.getLeanKitConnectionStatus();
        }
        
        function loadLeanKitCards(){
            LeanKitDataService.getLeanKitCards('jhas')
                    .then(leanKitCardsLoaded, handleError)
        }
        
        function leanKitCardsLoaded(cards){
            vm.data.cards = cards;
        }
        
        function handleError(response) {
            vm.gui.error = 'Något gick fel: ' + JSON.stringify(response);
            console.error(vm.gui.error);

        }
        
    }
})();