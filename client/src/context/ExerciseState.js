// ExerciseState.js

import React, { createContext, useReducer } from 'react';
import ExerciseReducer from './ExerciseReducer';
import axios from 'axios';

// Initial state
const initialState = {
 exercises: [],
 error: null,
 loading: true
}

// Create context
export const ExerciseContext = createContext(initialState);


// Provider component
export const ExerciseProvider = ({ children }) => {
 const [state, dispatch] = useReducer(ExerciseReducer, initialState);

 // Actions
 // == getExercises
 async function getExercises() {
  try {
   const res = await axios.get('/exercises');
   dispatch({
    type: 'GET_EXERCISES',
    payload: res.data.data
   });
  } catch (err) {
   dispatch({
    type: 'EXERCISE_ERROR',
    payload: err.response.data.error
   });
  }
 }

 // == getExerciseByID
 async function getExerciseById(id) {
  try {
   const res = await axios.get(`/exercises/${id}`);
   dispatch({
    type: 'GET_EXERCISE_By_ID',
    payload: res.data.data
   });
  } catch (err) {
   dispatch({
    type: 'EXERCISE_ERROR',
    payload: err.response.data.error
   });
  }
}

// == addExercise
async function addExercise(exercise) {
 const config = {
  headers: {
   'Content-Type': 'application/json'
  }
 }
 try {
  const res = await axios.post('/exercises/add', exercise, config);

  dispatch({
   type: 'ADD_EXERCISE',
   payload: res.data.data
  });
 } catch (err) {
  dispatch({
   type: 'EXERCISE_ERROR',
   payload: err.response.data.error
  });
 }
}
 
// == deleteExercise
async function deleteExercise(id) {
 try {
  await axios.delete(`/exercises/${id}`);

  dispatch({
   type: 'DELETE_EXERCISE',
   payload: id
  });
 } catch (err) {
  dispatch({
   type: 'EXERCISE_ERROR',
   payload: err.response.data.error
  });
 }
}


 return (
  <ExerciseContext.Provider value={{
  exercises: state.exercises,
  error: state.error,
  loading: state.loading,
  getExercises,
  getExerciseById,
  deleteExercise,
  addExercise
 }}>
  {children}
 </ExerciseContext.Provider>
);
}