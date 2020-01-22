import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class ExercisesList extends Component {
  render() {
    return (
      <div>
        <h3>Logged Exercises</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
        </table>
      </div>
    )
  }
}