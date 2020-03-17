const express = require("express"); 
const cors = require("cors");
const mongoose = require("mongoose");
const logger = require("morgan");
// var db = require("./models");



require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
// mongoose.connect("mongodb://localhost:27017/fitness-tracker", { useNewUrlParser: true });

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/fitness-tracker",
  {
    useMongoClient: true,
    useNewUrlParser: true
  }
);

const exerciseRouter = require("./routes/exerciseRouter");
const usersRouter = require("./routes/usersRouter");

app.use('/exercises', exerciseRouter);
app.use('/users', usersRouter);

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})


app.listen(port, () => {
    console.log(`server is running on port: ${port}`)
});