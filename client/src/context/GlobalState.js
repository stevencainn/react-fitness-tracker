// GlobalState.js


import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

// Initial state
const initialState = {
 exercises: [],
 error: null,
 loading: true
}

