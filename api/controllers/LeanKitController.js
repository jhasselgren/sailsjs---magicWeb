/* global Buffer */
module.exports = {

    getData: function (req, res) {

        var Http = require('machinepack-http');
        
        var user = req.param('mail');
        var password = req.param('password');
        
        console.log(user);
        console.log(password);
        
        //https://netgain-swe.leankit.com/kanban/api/boards/235309304
        
        var basicAuth = 'Basic ' + new Buffer(user+':'+password).toString('base64');
        console.log(basicAuth);
        
        // 'Basic am9ha2ltLmhhc3NlbGdyZW5AbmV0Z2Fpbi5zZToxTDJubW5aMTE='
        
        // Send an HTTP request and receive the response.
        Http.sendHttpRequest({
            url: 'kanban/api/board/235309304/searchcards',
            baseUrl: 'https://netgain-swe.leankit.com',
            method: 'post',
            params: {
                "searchOptions": {
                    "SearchInBoard":true,
                    "AssignedUserIds":[259643344]
                }
            },
            formData: false,
            headers: { 'Authorization':  basicAuth},
        }).exec({
            // An unexpected error occurred.
            error: function (err) {
                return res.negotiate(err);
            },
            // 404 status code returned from server
            notFound: function (result) {
                return res.negotiate(result);
            },
            // 400 status code returned from server
            badRequest: function (result) {
                return res.negotiate(result);
            },
            // 403 status code returned from server
            forbidden: function (result) {
                return res.negotiate(result);
            },
            // 401 status code returned from server
            unauthorized: function (result) {
                return res.negotiate(result);
            },
            // 5xx status code returned from server (this usually means something went wrong on the other end)
            serverError: function (result) {
                return res.negotiate(result);
            },
            // Unexpected connection error: could not send or receive HTTP request.
            requestFailed: function () {
                return res.negotiate();
            },
            // OK.
            success: function (result) {

                res.type('json');

                return res.send(result.body);
            },
        });

    }

}