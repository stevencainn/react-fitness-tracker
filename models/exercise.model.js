// exercise.model.js

var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var exerciseSchema = new Schema({
    // `name` must be unique and of type String
    username: {
        type: String,
        required: true,
    },
    description: {
         type: String,
         required: true,
    },
    duration: {
         type: Number,
         required: true,
    },
    date: {
         type: Date,
         required: true,
    },
},   {
        timestamps: true,
    });

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;
  