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

exports.getExerciseById = async (req, res, next) => {
    try {

        const exercise = await Exercise.findById(req.params.id);

        if (!exercise) {
            return res.status(404).json({
                success: false,
                error: 'No exercise found'
            });
        }

        return res.status(200).json({
            success: true,
            data: exercise
        })


    } catch (err) {
        return res.status(500).json({
            success: false,
            error: '.:.:SERVER ERROR GETTING EXERCISE BY ID:.:.'
        });
    }
}


exports.deleteExercise = async (req, res, next) => {
    try {
        const exercise = await Exercise.findByIdAndDelete(req.params.id);

        if (!exercise) {
            return res.status(404).json({
                success: false,
                error: 'No exercise found'
            });
        }

        await exercise.remove();

        return res.status(200).json({
            success: true,
            data: {}
        })

    } catch (err) {
        return res.status(500).json({
            success: false,
            error: '.:.:SERVER ERROR DELETING EXERCISE:.:.'
        });
    }
}

exports.updateExercise = async (req, res, next) => {
    try {
        const { username, description, duration, date } = req.body

        const exercise = await Exercise.findById(req.params.id);

        if (!exercise) {
            return res.status(404).json({
                success: false,
                error: 'No exercise found'
            });
        }
        exercise.username = req.body.username;
        exercise.description = req.body.description;
        exercise.duration = Number(req.body.duration);
        exercise.date = Date.parse(req.body.date);

        await exercise.save();
        
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: '.:.:SERVER ERROR UPDATING EXERCISE:.:.'
        });
    }
}

