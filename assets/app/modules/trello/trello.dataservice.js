(function() {
'use strict';

    angular
        .module('app.trello')
        .service('TrelloDataService', TrelloDataService);

    TrelloDataService.$inject = ['$http'];
    function TrelloDataService($http) {
        this.getTrelloConnection = getTrelloConnection;
        this.saveTrelloConnection = saveTrelloConnection;
        ////////////////

        function getTrelloConnection(username) { 
            console.log("Loading trello token");
            var promise = $http.get('api/trello/'+username+'/token');
            return promise;
        }
        
        function saveTrelloConnection(trelloConnect) { 
            console.log("saving trello token");
            var promise = $http.put('api/trello/token', trelloConnect);
            return promise;
        }
    }
})();