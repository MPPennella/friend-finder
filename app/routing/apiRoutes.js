const path = require("path")
let friends = require("../data/friends")

module.exports = function(app) {
    app.get("/api/friends", (req, res) => {
        res.send(friends)
    })
    
    app.post("/api/friends", (req, res) => {
        console.log("POST request received")
        
        let newFriend = req.body
        console.log(newFriend)

        // Make sure new friend has correct keys
        if (newFriend.name && newFriend.photo && newFriend.scores && newFriend.scores.length == 10) {

            // Find best match to newFriend
            // Least difference in scores is best match
            
            // Get array of difference scores
            let differences = friends.map( (friend) => {
                console.log(friend.name)

                // Calculate amount of difference
                let diff = 0
                for (let i=0; i<friend.scores.length; i++) {
                    // Add absolute value of difference in rating 
                    diff += Math.abs(friend.scores[i]-newFriend.scores[i])
                    console.log(diff)
                }
                return diff
            })

            // Find lowest difference
            let bestMatchIndex=0
            for(let i=0; i<differences.length; i++) {
                if (differences[i] < differences[bestMatchIndex]) {
                    bestMatchIndex = i
                }
            }

            let bestMatch = friends[bestMatchIndex]

            console.log("BEST MATCH: ", bestMatch.name)
            console.log("SCORE: ",differences[bestMatchIndex])
            // Add new entry to friends array
            friends.push(newFriend)

            // Return bestMatch friend object as response
            res.send(bestMatch)
        } else {
            // Send bad request error
            res.status(400).send('Bad Request')
        }
    })
}
