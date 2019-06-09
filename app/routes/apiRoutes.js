// Requiring the friends.js 
const findFriend = require("../data/friends");


module.exports = function (app) {
    app.get("/api/friends", function (re, res) {
        res.json(findFriend)
    });
    app.post("/api/new", function (req, res) {
        // variables to calculate scores
        var scoreDiff;
        var friendScore;
        var userScore;
        var newUser = req.body;

        // variable object to connect to friend finder
        var bestMatch = {
            name: "",
            photo: "",
            friendDiff: Infinity
        };
        // For loop 1 to run through score difference 
        for (var i = o; i < findFriend.length; i++) {
            var currentFriend = findFriend[i];
            scoreDiff = 0
            // For loop 2 to run through current scores
            for (var j = 0; i < newUser.scores.length; j++) {
                friendScore = currentFriend.scores[j];

                userScore = newUser.scores[j];
                scoreDiff += Math.abs(parseInt(userScore) - parseInt(friendScore))
            }
            if (scoreDiff <= bestMatch.friendDiff) {
                bestMatch.name = currentFriend.name;
                bestMatch.photo = currentFriend.photo;
                bestMatch.friendDiff = scoreDiff;
            }
        }
        res.json(bestMatch)

    })
}