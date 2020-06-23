// users.model.js

var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    // `username` must be unique and of type String
    username: {
      type: String,
      required: [true, 'Please add a username'],
      unique: true,
      trim: true,
      minlength: 3
    },
},   {
        timestamps: true,
    });

const User = mongoose.model('User', UserSchema);

module.exports = User;
  