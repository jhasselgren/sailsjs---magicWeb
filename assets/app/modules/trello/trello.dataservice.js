(function() {
'use strict';

    angular
        .module('app.trello')
        .service('TrelloDataService', TrelloDataService);

    TrelloDataService.$inject = ['$http'];
    function TrelloDataService($http) {
        this.validateTrelloConnection = validateTrelloConnection;
        this.saveTrelloConnection = saveTrelloConnection;
        ////////////////

        function validateTrelloConnection(username) { 
            console.log("Loading trello token");
            return $http.get('api/'+username+'/connection/trello/validate')
                .then(validateTrelloConnectionCompleted);
            
            function validateTrelloConnectionCompleted(body){
                return body.data;
            }
        }
        
        function saveTrelloConnection(trelloConnect) { 
            console.log("saving trello token");
            return $http.put('api/'+trelloConnect.username+'/connection/trello', trelloConnect)
                .then(saveTrelloConnectionCompleted);
            
            
            function saveTrelloConnectionCompleted(body){
                return body.data;
            }
        }
    }
})();