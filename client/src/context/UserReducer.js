// USerReducer.js

export default (state, action) => {
  switch (action.type) {
   case 'GET_USERS':
    return {
     ...state,
     loading: false,
     users: action.payload
    }
   case 'ADD_USER':
    return {
     ...state,
     users: [...state.users, action.payload]
    }
   case 'USER_ERROR':
     return {
       ...state,
       error: action.payload
     }
   default:
    return state;
  }
 }