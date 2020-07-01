import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserState';


//handling the state with the reducer and state files
//pull in functions by using global context
//get rid of axios calls in component files
//need to get any setting of the state out of component files(handled in state file)
//using a usestate lifecycle hook 

const CreateUser = () => {
  const [username, setUsername] = useState('');
  const { addUser } = useContext(UserContext);


  const onSubmit = e => {
    e.preventDefault();
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
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input type="submit" value="Create User" className="btn btn-primary" />
        </div>
      </form>
    </div>
  )
}

export default CreateUser;