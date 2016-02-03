/* global LeanKitConnection */
module.exports = {

    createConnection: function (req, res) {
        
        var AES256 = require('machinepack-aes256');
        
        var username = req.param('username');
        var leankitUser = req.param('leankitUser');
        var leankitPassword = req.param('leankitPassword');

        var securePassword = '';
        
        console.log('leankitPassword: ' + leankitPassword);
        
        AES256.encrypt({
            value: leankitPassword,
            secret: '123456',
            buffer: false,
        }).exec({
            // An unexpected error occurred.
            error: function (err) {
                return res.negotiate(err);
            },
            // OK.
            success: function (result) {
                console.log("Secure Password: " + JSON.stringify(result));
                securePassword = result.text;

                var leanKitConnection = {
                    username: username,
                    leankitUser: leankitUser,
                    leankitPassword: result.text
                }

                LeanKitConnection.findOne({ username: leanKitConnection.username })
                    .exec(function (err, data) {
                        if (err) return res.negotiate(err);

                        if (!data) return saveConnection(res, leanKitConnection);

                        return updateConnection(res, leanKitConnection);

                    });

            },
        });
    },

    validateLeanKitConnection: function (req, res) {
        var username = req.param('username');
        LeanKitConnection.findOne({ username: username })
            .exec(function (err, data) {
                if (err) return res.negotiate(err);

                if (!data) return res.send({ validated: false });

                return res.send({ validated: true });
            });
    }
}

function saveConnection(res, connection) {
    LeanKitConnection.create(connection)
        .exec(function saveConnectionCallback(err, data) {
            if (err) return res.negotiate(err);
            console.log("Leankit connection for " + connection.username + " created");
            return res.ok();
        });

}

function updateConnection(res, connection) {
    function saveConnection(res, connection) {
        LeanKitConnection.update({ username: connection.username }, connection)
            .exec(function updateConnectionCallback(err, data) {
                if (err) return res.negotiate(err);
                console.log("Leankit connection for " + connection.username + " created");
                return res.ok();
            });

    }
}