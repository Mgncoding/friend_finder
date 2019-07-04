// Requiring express
const express = require("express");
const app = express();
const path = require("path")

// Getting PORT 
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(__dirname + "/app/public"))

require("./app/routes/apiRoutes")(app);
require("./app/routes/htmlRoutes")(app);

// Listening for the PORT
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT)
})
