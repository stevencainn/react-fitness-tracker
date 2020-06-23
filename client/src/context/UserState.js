// UserState.js


import React, { createContext, useReducer } from 'react';
import UserReducer from './UserReducer';
import axios from 'axios';

// Initial state
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

    Actions
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

 

    async function addUser(user) {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await axios.post('/users/add', user, config);

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

    // async function deleteExercise(id) {
    //     try {
    //         await axios.delete(`/exercises/${id}`);

    //         dispatch({
    //             type: 'DELETE_EXERCISE',
    //             payload: id
    //         });
    //     } catch (err) {
    //         dispatch({
    //             type: 'DELETE_EXERCISE_ERROR',
    //             payload: err.response.data.error
    //         });
    //     }
    // }


    return (<UserContext.Provider value={{
        users: state.users,
        error: state.error,
        loading: state.loading,
        getUsers,
        addUser
    }}>
        {children}
       </UserContext.Provider>);
}