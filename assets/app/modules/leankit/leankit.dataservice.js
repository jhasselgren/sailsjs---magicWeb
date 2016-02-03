/// <reference path="../../../../typings/tsd.d.ts" />

(function () {
    'use strict';

    angular
        .module('app.leankit')
        .service('LeanKitDataService', LeanKitDataService);

    LeanKitDataService.$inject = ['$http'];
    function LeanKitDataService($http) {
        this.validateLeanKitConnection = validateLeanKitConnection;
        this.saveLeanKitConnection = saveLeanKitConnection;
        this.getLeanKitCards = getLeanKitCards;
        
        //////////////// Connection

        function validateLeanKitConnection(username) {
            return $http.get('api/' + username + '/connection/leankit/validate')
                .then(validateLeanKitConnectionCompleted);

            function validateLeanKitConnectionCompleted(body) {
                return body.data;
            }
        }

        function saveLeanKitConnection(leanKitConnection) {
            var promise = $http.put('api/' + leanKitConnection.username + '/connection/leankit', leanKitConnection)
            return promise;
        }
        
        //////////////// Cards
        
        function getLeanKitCards(username) {

            return $http.get('/api/' + username + '/leankit/cards')
                .then(getLeanKitCardsCompleted);

            function getLeanKitCardsCompleted(response) {
                var replyData = response.data.ReplyData;
                var leanKitCards = replyData[0].Results;

                var cards = [];

                for (var leanKitCard of leanKitCards) {
                    var card = {
                        boardId: leanKitCard.BoardId,
                        title: leanKitCard.Title,
                        description: leanKitCard.Description,
                    };
                    
                    cards.push(card);
                }
                
                return cards;

            }

        }



    }
})();
