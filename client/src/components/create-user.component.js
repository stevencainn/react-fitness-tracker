import React, { Component, useContext } from 'react';
import { UserContext } from '../context/UserState';
import Axios from "axios";
import { text } from 'body-parser';
import { addUser } from '../../../controllers/users_controller';


//handling the state with the reducer and state files
//pull in functions by using global context
//get rid of axios calls in component files
//need to get any setting of the state out of component files(handled in state file)
//using a usestate lifecycle hook 


export const CreateUser = () => {
  const [username, setUsername ] = useState('');
  const { addUser } = useContext(UserContext);
}

const onSubmit = e => {
  // Preventing the default behavior of the form submit (which is to refresh the page)
  e.preventDefault();
  console.log("submitting form");
  const newUser = {
    username: username,
  }
  addUser(username);
};



return (
  <div>
    <h3>Create New User</h3>
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label>Username: </label>
        <input type="text"
          required
          className="form-control"
          value={text} 
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input type="submit" value="Create User" className="btn btn-primary" />
      </div>
    </form>
  </div>
)