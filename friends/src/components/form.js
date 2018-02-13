import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      'name': '',
      'age': '',
      'email': ''
    }
  }

  handleChange = (event) => {
    const newState = this.state;
    if (event.target.name === 'age') {
      newState[event.target.name] = Number(event.target.value)
    } 
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  }

  onSubmit = (event) => {
    event.preventDefault();
    console.log(this.state)
  }

  render() {
    const { name, age, email } = this.state;
    return (
      <div>
        <form action="" onSubmit={this.onSubmit}>
          Name: <input type="text" name="name" value={name} onChange={this.handleChange}/> <br/>
          Age: <input type="text" name="age" value={age} onChange={this.handleChange}/> <br/>
          Email: <input type="text" name="email" value={email} onChange={this.handleChange}/> <br/>
          <input type="submit" value="Add"/>
        </form>
      </div>
    )
  }
}

export default Form;