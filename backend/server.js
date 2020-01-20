const express = require("express"); 
const cors = require("cors");
const mongoose = require("mongoose");
const mongojs = require("mongojs")

require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Database configuration
// Save the URL of our database as well as the name of our collection
var databaseUrl = "";
var collections = [""];

// Use mongojs to hook the database to the db variable
var db = mongojs(databaseUrl, collections);

// This makes sure that any errors are logged if mongodb runs into an issue
db.on("error", function(error) {
    console.log("Database Error:", error);
  });
  
  db.on("connect", function() {
    console.log("Database Connected:");
});


app.listen(port, () => {
    console.log(`server is running on port: ${port}`)
});