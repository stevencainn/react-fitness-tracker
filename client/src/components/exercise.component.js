import React, { useContext } from 'react';
import { ExerciseContext } from '../context/ExerciseState';
import { Link } from 'react-router-dom';

const Exercise = ({ exercise }) => {

 const { deleteExercise } = useContext(ExerciseContext);

 return (
  <tr>
     <td>{exercise.username}</td>
     <td>{exercise.description}</td>
     <td>{exercise.duration}</td>
     <td>{exercise.date.substring(0,10)}</td>
     <td>
       <Link to={"/edit/"+exercise._id}>edit</Link> | <a href="#" onClick={() => {deleteExercise(exercise._id)}}>delete</a>
     </td>
   </tr>
 )
}

export default Exercise;