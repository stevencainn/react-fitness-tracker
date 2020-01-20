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
mongoose.connect("mongodb://localhost:27017/fitness-tracker", { useNewUrlParser: true });

const exerciseRouter = require("./routes/exercise");
const usersRouter = require("./routes/users");

app.use('/exercises', exerciseRouter);
app.use('/users', usersRouter);


app.listen(port, () => {
    console.log(`server is running on port: ${port}`)
});