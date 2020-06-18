import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from "axios";


export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    

    this.state = {
      username: ""
    }
  }

  componentDidMount() {
    this.setState({
      users: ["test user"],
      username: ""
    })
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }


  onSubmit(e) {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    const user = {
      username: this.state.username
    }
    console.log(user);

    Axios.post('/users/add', user)
    .then(res => console.log(res.data));

    this.setState({
      username: ""
    })


  };




  render() {
    return (
      <div>
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Username: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}