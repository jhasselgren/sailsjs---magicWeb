(function () {
    'use strict';

    angular
        .module('app.main')
        .controller('MainController', MainController);

    /* @ngInject */
    function MainController($http) {
        var vm = this;

        vm.gui = {
            error: false,
            errorMessage: {}
        }

        vm.data = {
            leankit: {
                mail: '',
                password: ''
            },
            trello: {
                token: {
                    username: 'jhas',
                    token: ''
                }
            },
            cards: {}
        };

        var message = 'Hello World';

        vm.message = message;
        vm.getLeanKit = getLeanKit;
        vm.saveTrelloToken = saveTrelloToken;
        vm.createCard = createCard;
        vm.getTrelloList = getTrelloLists;
        vm.copyLeanKitCard = copyLeanKitCard;

        vm.gui.selectTrelloBoards = [];
        vm.gui.selectTrelloLists = [];
        vm.gui.selectTrelloLists.loaded = false;

        vm.data.trello.selectedBoard = {};
        vm.data.trello.selectedList = {};
        vm.data.trello.newTrello = {};

        activate();

        ////////////////

        function activate() {
            console.log("Activate MainController");
            getTrelloBoards();
        }

        function getTrelloBoards() {
            $http.get('api/trello/boards')
                .then(getTrelloBoardsCompleted, errorHttp)
        }

        function getTrelloBoardsCompleted(response) {
            var data = response.data;
            for (var board of data) {
                if (!board.closed) {
                    var selectObj = {
                        value: board,
                        label: board.name
                    }

                    vm.gui.selectTrelloBoards.push(selectObj);
                }
            }
        }
        
        function getTrelloLists(){
            console.log("Get Trello List");
            $http.get('api/trello/' + vm.data.trello.selectedBoard.id + '/lists')
                .then(getTrelloListsCompled, errorHttp)
        }

        function getTrelloListsCompled(response){
            var data = response.data;
            for(var list of data){
                var selectObj = {
                    value: list,
                    label: list.name
                }
                
                vm.gui.selectTrelloLists.push(selectObj)
            }
            
            vm.gui.selectTrelloLists.loaded = true;
            
        }
        
        function copyLeanKitCard(leanKitCard, newTrelloCard){
            vm.data.trello.newTrello = {
                name: leanKitCard.Title,
                desc: leanKitCard.Description,
                idList: vm.data.trello.selectedList.id
            }
        }
        
        function getLeanKit() {
            console.log("getLeanKit");
            $http.post('api/leankit/', vm.data.leankit)
                .then(getLeanKitCompleted, errorHttp)
        }

        function saveTrelloToken() {
            console.log("saving trello token");
            $http.put('api/trello/token', vm.data.trello.token)
                .then(trelloTokenSaved, errorHttp);
        }

        function createCard() {
            $http.put('api/trello', vm.data.trello)
                .then(
                    function (response) {
                        console.log("createCard OK")
                    },
                    errorHttp);
        }

        function getLeanKitCompleted(response) {
            var data = response.data;
            vm.data.cards = data.ReplyData[0].Results;
        }

        function errorLeanKit(response) {
            vm.gui.error = true;
            vm.gui.errorMessage = response;
        }

        function trelloTokenSaved(response) {
            console.log("Token saved")
        }

        function errorSavingTrelloToken(response) {
            vm.gui.error = true;
            vm.gui.errorMessage = response;
        }

        function errorHttp(response) {
            vm.gui.error = true;
            vm.gui.errorMessage = response;
        }
    }
})();