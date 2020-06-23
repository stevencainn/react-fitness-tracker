// exercise_controller.js

const Exercise = require("../models/exercise.model");

exports.getExercises = async (req, res, next) => {
 try {
  const exercises = await Exercise.find();

  return res.status(200).json({
   success: true,
   count: exercises.length,
   data: exercises
  });
 } catch (err) {
  return res.status(500).json({
   success: false,
   error: '.:.:SERVER ERROR:.:.'
  });
 }
}