/* global LeanKitConnection */
/* global Buffer */
module.exports = {

    getUsersCard: function (req, res) {

        var Http = require('machinepack-http');
        var AES256 = require('machinepack-aes256');

        var username = req.param('username');

        LeanKitConnection.findOne({ username: username })
            .exec(function (err, leankitConnection) {
                if (err) return res.negotiate(err);

                if (!leankitConnection) return res.json({});
                
                console.info('Found LeanKit connection');
                console.info(JSON.stringify(leankitConnection));
                
                // Decrypt content
                AES256.decrypt({
                    value: leankitConnection.leankitPassword,
                    secret: '123456',
                    buffer: false,
                }).exec({
                    // An unexpected error occurred.
                    error: function (err) {
                        return res.negotiate(err);
                    },
                    // OK.
                    success: function (result) {
                        console.info("Managed to decrypt password");
                        console.info(JSON.stringify(result));
                        //https://netgain-swe.leankit.com/kanban/api/boards/235309304
        
                        var basicAuth = 'Basic ' + new Buffer(leankitConnection.leankitUser + ':' + result.text).toString('base64');
                        console.log(basicAuth);
        
                        // 'Basic am9ha2ltLmhhc3NlbGdyZW5AbmV0Z2Fpbi5zZToxTDJubW5aMTE='
        
                        // Send an HTTP request and receive the response.
                        Http.sendHttpRequest({
                            url: 'kanban/api/board/235309304/searchcards',
                            baseUrl: 'https://netgain-swe.leankit.com',
                            method: 'post',
                            params: {
                                "searchOptions": {
                                    "SearchInBoard": true,
                                    "AssignedUserIds": [259643344]
                                }
                            },
                            formData: false,
                            headers: { 'Authorization': basicAuth },
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
                                console.info('Fetching data from LeanKit: OK');
                                res.type('json');
                                return res.send(result.body);
                            },
                        });
                    },
                });

            });
    }

}