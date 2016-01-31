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
        
        ////////////////

        function validateLeanKitConnection(username) { 
            var promise = $http.get('api/'+username+'/connection/leankit/validate')
            return promise;
        }
        
        function saveLeanKitConnection(leanKitConnection){ 
            var promise = $http.put('api/'+leanKitConnection.username+'/connection/leankit', leanKitConnection)
            return promise;
        }
    }
})();
