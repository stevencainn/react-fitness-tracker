//models index
const mongoose = require('mongoose');
const URI = require('./config');


mongoose.connect(process.env.MONGODB_URI || URI,
    {
     useNewUrlParser: true,
     useUnifiedTopology: true
    }
   );
   
   const connection = mongoose.connection;
   connection.once('open', () => {
    console.log('Connected to mLab MongoDB Database successfully');
   })