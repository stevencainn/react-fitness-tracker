import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserState';

// were handling the state with state and reducer files. first we need to pull in the functions bt using globalContext
// and get rid of axios calls in component files
// we also need to get any setting of the state out of component files
// we wont need the constructor props or anything like that, were gunna use  const [var, setVar] = useState() and useContext();

const CreateUser = () => {

  const [username, setUsername] = useState('');
  const { addUser } = useContext(UserContext);

  const onSubmit = e => {
    e.preventDefault();
    const newUser = {
      username: username,
    }
    console.log(newUser);
    addUser(newUser);
  };

  return (
    <div>
      <h3>Create New User</h3>
      <form onSubmit={ onSubmit }>
        <div className="form-group">
          <label>Username: </label>
          <input type="text" required className="form-control" value={ username } onChange={ (e) => setUsername(e.target.value) }/>
        </div>
        <div className="form-group">
          <input type="submit"  value="Create User" className="btn btn-primary" />
        </div>
      </form>
    </div>
  )
}

export default CreateUser;