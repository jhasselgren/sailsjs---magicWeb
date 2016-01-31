(function() {
    'use strict';

    angular
        .module('app.trello.connect')
        .directive('jhasTrelloConnectEdit', TrelloConnectEditDirective);

    //TrelloConnectEditDirective.$inject = [];
    function TrelloConnectEditDirective() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: {
                successCallback : '&'
            },
            controller: TrelloConnectEditController,
            controllerAs: 'vm',
            link: link,
            restrict: 'EA',
            templateUrl: 'trello/connect/trello.connect.edit.tpl.html',
            scope: {}
        };
        return directive;
        
        function link(scope, element, attrs) {
        }
    }
    /* @ngInject */
    function TrelloConnectEditController (TrelloDataService) {
        var vm = this;
        
        vm.data = {
            newTrelloConnection : {
                username: '',
                token: ''
            }
        }
        
        vm.gui = {
            error: ''
        }
        
        vm.saveTrelloConnection = saveTrelloConnection;
        
        activate();
        
        
        ////////////////

        function activate() {
            console.log('Activating TrelloConnectEditController');
        }
        
        function saveTrelloConnection(){
            vm.gui.error = '';
            TrelloDataService.saveTrelloConnection(vm.data.newTrelloConnection)
                .then(updateParentTrelloConnection, handleError);
        }
        
        function updateParentTrelloConnection(response){
            vm.successCallback()();
        }
        
        function handleError(response){
            vm.gui.error = "Något gick fel: " + JSON.stringify(response);
            console.error(vm.gui.error);
        }
    }
})();