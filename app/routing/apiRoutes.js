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
            // Add new entry to friends array
            friends.push(newFriend)

            // Return newFriend object as response
            res.send(newFriend)
        } else {
            // Send bad request error
            res.status(400).send('Bad Request')
        }
    })
}
