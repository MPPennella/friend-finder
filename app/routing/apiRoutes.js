const path = require("path")

module.exports = function(app) {
    app.get("/api/friends", (req, res) => {
        res.end()
    })
    
    app.post("/api/friends", (req, res) => {
        res.end()
    })
}
