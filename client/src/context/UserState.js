import React, { createContext, useReducer } from 'react';
import UserReducer from './UserReducer';
import axios from 'axios';


const initialState = {
 users: [],
 error: null,
 loading: true
}

// Create context
export const UserContext = createContext(initialState);


// Provider component
export const UserProvider = ({ children }) => {
 const [state, dispatch] = useReducer(UserReducer, initialState);

 // Actions
 // == getUsers
 async function getUsers() {
  try {
   const res = await axios.get('/users');
   dispatch({
    type: 'GET_USERS',
    payload: res.data.data
   });
  } catch (err) {
   dispatch({
    type: 'USER_ERROR',
    payload: err.response.data.error
   });
  }
 }


 // == addUser
 async function addUser(newUser) {
  const config = {
   headers: {
    'Content-Type': 'application/json'
   }
  }
  try {
   const res = await axios.post('/users/add', newUser, config);

   dispatch({
    type: 'ADD_USER',
    payload: res.data.data
   });
  } catch (err) {
   dispatch({
    type: 'USER_ERROR',
    payload: err.response.data.error
   });
  }
 }

 // // == deleteUser -- not using currently
 // async function deleteUser(id) {
 //  try {
 //   await axios.delete(`/users/${id}`);

 //   dispatch({
 //    type: 'DELETE_USER',
 //    payload: id
 //   });
 //  } catch (err) {
 //   dispatch({
 //    type: 'USER_ERROR',
 //    payload: err.response.data.error
 //   });
 //  }
 // }

 return (
  <UserContext.Provider value={{
   users: state.users,
   error: state.error,
   loading: state.loading,
   getUsers,
   addUser
  }}>
   {children}
  </UserContext.Provider>
 );
}