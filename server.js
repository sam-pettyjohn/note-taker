const express = require("express");

// Create Routes
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

// Initialize app & designate port
const app = express();
const PORT = process.env.PORT || 3000;

// Application Setup
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(express.static("public"));
app.use("/", apiRoutes); 
app.use("/", htmlRoutes); 

// Start server on designated port
app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));