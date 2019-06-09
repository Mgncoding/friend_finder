// Requiring express
const express = require("express");
const app = express();
// Getting PORT 
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extend: true }));
app.use(express.json());

require(".routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);

// Listening for the PORT
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT)
})
