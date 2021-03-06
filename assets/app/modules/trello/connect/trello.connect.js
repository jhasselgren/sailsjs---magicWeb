(function () {
    'use strict';

    angular
        .module('app.trello.connect')
        .controller('TrelloConnectController', TrelloConnectController);

    TrelloConnectController.$inject = ['TrelloDataService', 'CentralDataService'];
    function TrelloConnectController(TrelloDataService, CentralDataService) {
        var vm = this;

        vm.trelloConnectUpdated = trelloConnectUpdated;

        vm.gui = {
            error: '',
            trello: {
                ok: false
            }
        }

        activate();

        ////////////////

        function activate() {
            CentralDataService.addCentralDataListener(trelloConnectStatusUpdated);
            TrelloDataService.validateTrelloConnection('jhas')
                .then(trelloConnectionLoaded, handleError);

        }

        function trelloConnectionLoaded(result) {
            CentralDataService.setTrelloConnectionStatus(result);
        }

        function trelloConnectUpdated() {
            CentralDataService.setTrelloConnectionStatus(true);
        }

        function trelloConnectStatusUpdated() {
            vm.gui.trello.ok = CentralDataService.getTrelloConnectionStatus();
            console.log(vm.gui.trello.ok);
        }

        function handleError(response) {
            vm.gui.error = 'Något gick fel: ' + JSON.stringify(response);
            console.error(vm.gui.error);

        }
    }
})();