(function () {
    'use strict';

    angular
        .module('blocks.centralData')
        .service('CentralDataService', CentralDataService);

    CentralDataService.$inject = [];
    function CentralDataService() {
        this.getTrelloConnectionStatus = getTrelloConnectionStatus;
        this.setTrelloConnectionStatus = setTrelloConnectionStatus;

        this.getLeanKitConnectionStatus = getLeanKitConnectionStatus;
        this.setLeanKitConnectionStatus = setLeanKitConnectionStatus;

        this.addCentralDataListener = addCentralDataListener;
        
        ////////////////
        
        var callbacks = [];
        var trelloConnectionStatus = false;
        var leankitConnectionStatus = false;

        function getTrelloConnectionStatus() {
            return trelloConnectionStatus;
        }

        function setTrelloConnectionStatus(connectionStatus) {
            trelloConnectionStatus = connectionStatus;
            executeListeners();
        }

        function getLeanKitConnectionStatus() {
            return leankitConnectionStatus;
        }

        function setLeanKitConnectionStatus(connectionStatus) {
            leankitConnectionStatus = connectionStatus;
            executeListeners();
        }
        
        function addCentralDataListener(callback) {
            callbacks.push(callback);
        }

        function executeListeners() {
            var listener;
            for (listener of callbacks) {
                listener();
            }
        }
    }
})();