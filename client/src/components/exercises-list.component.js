import React, { useContext, useEffect } from 'react';
import { ExerciseContext } from '../context/ExerciseState';
import Exercise from './exercise.component'



const ExercisesList = () => {
  
  const { exercises, getExercises } = useContext(ExerciseContext);

  useEffect(() => {
    getExercises();
  }, []);




  return (
    <div>
      <h3>Logged Exercises</h3>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Username</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {exercises.map(exercise => (<Exercise key={exercise._id} exercise={exercise} />))}
        </tbody>
      </table>
    </div>
  )
}

export default ExercisesList;