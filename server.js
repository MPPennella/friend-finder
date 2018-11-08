const path = require("path")
const express = require("express")

var app = express()

const PORT = process.env.PORT || 8080

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Import routes for API and HTML pages
require("./app/routing/apiRoutes")(app)
require("./app/routing/htmlRoutes")(app)


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  })
  