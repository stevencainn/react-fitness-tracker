const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

require('dotenv').config();

//db connection 
const URI = require('./config');
require('./models');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


if (process.env.NODE_ENV === 'production') {
 // Exprees will serve up production assets
 app.use(express.static('client/build'));

 // Express serve up index.html file if it doesn't recognize route
 const path = require('path');
 app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
 });
}


mongoose.connect(
 process.env.MONGODB_URI,
 {
  useNewUrlParser: true,
  useUnifiedTopology: true
 }
);

const connection = mongoose.connection;
connection.once('open', () => {
 console.log('Connected to mLab MongoDB Database successfully');
})

const exercisesRouter = require('./routes/exerciseRouter');
const usersRouter = require('./routes/usersRouter');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.use(cors());




app.listen(port, () => console.log(`Listening on port ${port}`));


