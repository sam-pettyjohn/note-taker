const express = require("express");

// required routes
const api = require("./routes/API");
const html = require("./routes/HTML");

// App initialized, create port
const app = express();
const PORT = process.env.PORT || 3000;

// Setting up body
app.use("/", api); 
app.use("/", html); 

app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true })); 


// Server start on specified port
app.listen(PORT, () => {
    console.log(
        "App Listening on PORT " + PORT + " Visit http://localhost:%s/ in your browser.", PORT
    );
});