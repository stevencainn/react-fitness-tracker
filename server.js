// server.js
// declaring variables
const express = require('express');
const cors = require('cors');
const app = express();
// const port = process.env.PORT || 5000;
const port = 5000;
const exercisesRouter = require('./routes/exercisesRouter');
const usersRouter = require('./routes/usersRouter');

require('dotenv').config();

// db connection
require('./models');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());



if (process.env.NODE_ENV === 'production') {
 // Exprees will serve up production assets
 app.use(express.static('client/build'));

 // Express serve up index.html file if it doesn't recognize route
 const path = require('path');
 app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
 });
}

// defining routes
app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));


