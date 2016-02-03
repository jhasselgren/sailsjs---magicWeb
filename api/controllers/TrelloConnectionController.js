/* global TrelloConnection */
/**
 * TrelloController
 *
 * @description :: Server-side logic for managing trelloes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    saveTrelloConnection: function createTrelloConnection (req, res) {

        var username = req.param('username');
        var token = req.param('token');

        var trello = {
            username: username,
            token: token
        }

        TrelloConnection.findOne({ username: trello.username }).
            exec(function getUsersToken(err, data) {
                if (err) return res.negotiate(err);

                if (!data) return saveToken(trello);

                return updateToken(trello);

            });

        function saveToken(trello) {
            TrelloConnection.create(trello)
                .exec(function saveTrelloToken(err, data) {
                    if (err) return res.negotiate(err);

                    console.log("Created Trello Token");
                    console.log(JSON.stringify(data));

                    return res.ok();
                });
        }

        function updateToken(trello) {
            TrelloConnection.update({ username: trello.username }, { token: trello.token })
                .exec(function saveTrelloToken(err, data) {
                    if (err) return res.negotiate(err);
                    if (!data) return res.notFound();

                    console.log("Updated Trello Token");
                    console.log(JSON.stringify(data));

                    return res.ok();
                });
        }


    },
    
    validateTrelloConnection: function getTrelloConnection(req, res){
        
        var reqUsername = req.param('username');
        
        TrelloConnection.findOne({ username: reqUsername })
            .exec(function fetchTrelloConnection(err, trelloConnection) {
                if (err) return res.negotiate(err);
                if (!trelloConnection){
                    return res.json({validated: false});
                }

                return res.json({validated: true});
            });
    },
};

