const path = require("path")
let friends = require("../data/friends")

module.exports = function(app) {
    app.get("/api/friends", (req, res) => {
        res.send(friends)
    })
    
    app.post("/api/friends", (req, res) => {
        res.end()
    })
}
