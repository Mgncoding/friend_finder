var friends = [{
    name: "The Sponge",
    photo: "https://cdn.mos.cms.futurecdn.net/YH2qZaMaBk6xp9S5tz8kcC-970-80.png",
    scores: [
        4,2,4,1,5,5,3,2,3,1
    ]
},{
    "name": "Link",
    "photo": "http://manvsgame.tv/wp/wp-content/uploads/2011/03/link-with-navi-zelda-ocarina-of-time-artwork.jpg",
    "scores": [
       5,1,3,1,4,5,3,2,4,2
    ]
},{
    "name": "Cartman",
    "photo": "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fdanidiplacido%2Ffiles%2F2017%2F11%2Fdcd9e5d9aa8f27f8fbec2d01251a815bfb87a971_hq.jpg",
    "scores": [
        3,4,1,1,2,5,3,4,5,2
    ]
},{
    "name": "Lala",
    "photo": "https://www.seekpng.com/png/detail/297-2970014_teletubbies-la-la-teletubby.png",
    "scores": [
        2,5,3,1,4,5,2,4,2,3
    ]
}
]
   
// match user with friend
function findFriend(user) {
    return new Promise((resolve, reject) => {

        // initial value to check against
        let diffSum = 100
        let currentSum = 0
        let currentFriend

        // loop through other users and compare their scores to current user
        for (let i = 0; i < friends.length; i++) {

            for (let j = 0; j < friends[i].scores.length; j++) {
                currentSum += Math.abs(friends[i].scores[j] - user.scores[j])
            }

            if (currentSum < diffSum) {
                diffSum = currentSum 
                currentFriend = friends[i]
            }

            currentSum = 0
        }

        resolve(currentFriend)
    })
}


module.exports = {
    friends,
    findFriend
}