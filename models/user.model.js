var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    // `name` must be unique and of type String
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3
    }
},   {
        timestamps: true,
    });

const User = mongoose.model('User', UserSchema);

module.exports = User;
  