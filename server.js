const express = require('express');
const cors = require('cors');
const exercisesRouter = require('./routes/exerciseRouter');
const usersRouter = require('./routes/usersRouter');
const app = express();
const port = process.env.PORT || 5000;

//db connection 
require('./models');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);
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

app.listen(port, () => console.log(`Listening on port ${port}`));


