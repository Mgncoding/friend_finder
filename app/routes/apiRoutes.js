var friends = require('./../data/friends')
var friendMatch = require('../data/friendMatch')


module.exports = function(app) {
  app.get('/api/friends', function(req, res) {
    return res.json(friends)
  })

  app.post('/api/friends', function(req, res) {
    let newFriend = req.body;
    res.json(friendMatch(newFriend.scores))
   
    // return match
    friends.push(newFriend);
  })
}