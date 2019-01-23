import React from 'react';
import axios from 'axios';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  captureInput = e => {
    let newState = {};
    newState[e.target.id] = e.target.value;
    this.setState(newState);
  };

  theSubmit = (props, e) => {
    let newUser = Object.assign(this.state);
    newUser.id = props.newId;
    if (newUser.name && newUser.age && newUser.email) {
      newUser.age = Number(newUser.age);
      axios
        .post('http://www.localhost:5000/friends', newUser)
        .then(res => console.log(res));
    }
    e.preventDefault();
  };

  render() {
    return (
      <div className="formCont">
        <form onSubmit={this.theSubmit}>
          <label htmlFor="firstName">Name: </label>
          <input type="text" id="name" onChange={this.captureInput} />
          <label htmlFor="age">Age: </label>
          <input type="text" id="age" onChange={this.captureInput} />
          <label htmlFor="email">Email: </label>
          <input type="email" id="email" onChange={this.captureInput} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
