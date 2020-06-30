// exercise_controller.js

const Exercise = require("../models/exercise.model");

exports.getExercises = async (req, res, next) => {
 try {
  const exercises = await Exercise.find();

  return res.status(200).json({
   success: true,
   data: exercises
  });
 } catch (err) {
  return res.status(500).json({
   success: false,
   error: '.:.:SERVER ERROR GETTING EXERCISE:.:.'
  });
 }
}


exports.addExercises = async (req, res, next) => {
    try {
     const { username, description, duration, date } = req.body

     const exercises = await Exercise.create(req.body);
   
     return res.status(200).json({
      success: true,
      data: exercises
     });
    } catch (err) {
     return res.status(500).json({
      success: false,
      error: '.:.:SERVER ERROR ADDING EXERCISE:.:.'
     });
    }
}

exports.addExercises = async (req, res, next) => {
    try {
    
    } catch (err) {
     return res.status(500).json({
      success: false,
      error: '.:.:SERVER ERROR:.:.'
     });
    }
}

