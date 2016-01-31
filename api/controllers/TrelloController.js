/**
 * TrelloController
 *
 * @description :: Server-side logic for managing trelloes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    createToken: function createTrelloToken (req, res) {

        var username = req.param('username');
        var token = req.param('token');

        var trello = {
            username: username,
            token: token
        }

        Trello.findOne({ username: trello.username }).
            exec(function getUsersToken(err, data) {
                if (err) return res.negotiate(err);

                if (!data) saveToken(trello);

                updateToken(trello);

            });

        function saveToken(trello) {
            Trello.create(trello)
                .exec(function saveTrelloToken(err, data) {
                    if (err) return res.negotiate(err);

                    console.log("Created Trello Token");
                    console.log(JSON.stringify(data));

                    return res.ok();
                });
        }

        function updateToken(trello) {
            Trello.update({ username: trello.username }, { token: trello.token })
                .exec(function saveTrelloToken(err, data) {
                    if (err) return res.negotiate(err);
                    if (!data) return res.notFound();

                    console.log("Updated Trello Token");
                    console.log(JSON.stringify(data));

                    return res.ok();
                });
        }


    },
    
    getTrelloConnection: function getTrelloConnection(req, res){
        
        var reqUsername = req.param('username');
        
        Trello.findOne({ username: reqUsername })
            .exec(function fetchTrelloConnection(err, trelloConnection) {
                if (err) return res.negotiate(err);
                if (!trelloConnection){
                    trelloConnection = {
                        username: '',
                        token: ''
                    }
                }

                console.log(JSON.stringify(trelloConnection));
                return res.send(trelloConnection);
            });
    },

    saveCard: function updateTrelloToken(req, res) {
        //f2048869d89da6c518cd2e305f617a7734e08c3ff40815ff7f81f3de03b5617e
        
        var reqUsername = req.param('username');
        
        Trello.findOne({ username: reqUsername })
            .exec(function getTrelloToken(err, trelloToken) {
                if (err) return res.negotiate(err);
                if (!trelloToken) return res.notFound();

                console.log(JSON.stringify(trelloToken));

                callTrelloAPI(trelloToken.token)

            });

        function callTrelloAPI(token) {
            var TrelloAPI = require("node-trello");
            var t = new TrelloAPI("7a95a75d6dcd61c79d1e3b660d9c8333", token);




            t.get("/1/members/me", function (err, data) {
                if (err) return res.negotiate(err);
                console.log(JSON.stringify(data));
            });
 
            // URL arguments are passed in as an object. 
            t.get("/1/members/me", { cards: "open" }, function (err, data) {
                if (err) return res.negotiate(err);
                console.log(JSON.stringify(data));

                return res.ok();
            });
        }
    },

    getBoards: function (req, res) {
        
        var reqUsername = req.param('username');
        
        Trello.findOne({ username: reqUsername })
            .exec(function getTrelloToken(err, trelloToken) {
                if (err) return res.negotiate(err);
                if (!trelloToken) return res.notFound();

                callTrelloAPI(trelloToken.token)

            });
            
        function callTrelloAPI(token) {
            var TrelloAPI = require("node-trello");
            var t = new TrelloAPI("7a95a75d6dcd61c79d1e3b660d9c8333", token);


 
            // URL arguments are passed in as an object. 
            t.get("/1/members/me/boards", function (err, data) {
                if (err) return res.negotiate(err);

                return res.send(data);
            });
        }

    },

    getLists: function (req, res) {
        var reqUsername = req.param('username');
        
        Trello.findOne({ username: reqUsername })
            .exec(function getTrelloToken(err, trelloToken) {
                if (err) return res.negotiate(err);
                if (!trelloToken) return res.notFound();
                
                var boardId = req.param("boardId");
                
                callTrelloAPI(trelloToken.token, boardId)

            });
            
        function callTrelloAPI(token, boardId) {
            var TrelloAPI = require("node-trello");
            var t = new TrelloAPI("7a95a75d6dcd61c79d1e3b660d9c8333", token);
            
            // URL arguments are passed in as an object. 
            t.get("/1/boards/"+boardId+"/lists", function (err, data) {
                if (err) return res.negotiate(err);

                return res.send(data);
            });
        }

    }

};

