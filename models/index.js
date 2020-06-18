//models index
const mongoose = require('mongoose');
const URI = require('../config');


mongoose.connect(process.env.MONGODB_URI || URI,
    {
     useNewUrlParser: true,
     useUnifiedTopology: true
    }
);

//when succesfully connected
mongoose.connection.on('connected', () => {
    console.log('Established Mongoose Default Connection');
});

//when connection error 
mongoose.connection.on('error', err => {
    console.log('Mongoose Default Connection Error : ' + err);
});
