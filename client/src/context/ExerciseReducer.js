// ExerciseReducer.js

export default (state, action) => {
  switch (action.type) {
   case 'GET_EXERCISES':
    return {
     ...state,
     loading: false,
     exercises: action.payload
    }
   case 'GET_EXERCISE_By_ID':
    return {
     ...state,
     loading: false,
     exercises: action.payload
    }
   case 'ADD_EXERCISE':
    return {
     ...state,
     exercises: [...state.exercises, action.payload]
    }
   case 'DELETE_EXERCISE':
    return {
     ...state,
     exercises: state.exercises.filter(exercise => exercise._id !== action.payload)
    }
   case 'EXERCISE_ERROR':
    return {
     ...state,
     error: action.payload
    }
   default:
    return state;
  }
 }