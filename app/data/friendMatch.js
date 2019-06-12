const friends = require('./friends')



module.exports = function(yourSurvey) {
    //array of results
    var results = []
    var compare = []
    for (var i = 0; i < friends.length; i++) {
      var otherSurveys = friends[i].scores;
      console.log('Other Surveys: ' + otherSurveys)
      console.log('Your Survey: ' + yourSurvey)
      for (var j = 0; j < 10; j++) {
        var difference = Math.abs(parseInt(otherSurveys) - parseInt(yourSurvey[i]))
        compare.push(difference)
      }
      console.log('compare: ' + compare)
      results.push(compare.reduce(function(a, b){return a + b}, 0))
      compare = []
      console.log('results: ' + results)
    }
    console.log('Match: ' + Math.min.apply(null, results))
    var matchIndex = results.indexOf(Math.min.apply(null, results))
    return friends[matchIndex]
    
  }