import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
    friends: [],
    name: '',
    age: '',
    email: '',
  };
}

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then(response => {
        this.setState({ friends: response.data});
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
    return (
      <div className="App">
      <h2>A list of friends, forthwith:</h2>
        {this.state.friends.map(friend => {
          return (
            <div>
            <h3>{friend.name}</h3>
            <p>{friend.age}</p>
            <p>{friend.email}</p>
            </div>
          )
        })}
         <div className="AddToFriendsForm">
          <form>
            <input
              type="text"
              placeholder="name"
              name="name"
              onChange={this.handleChange}
            />
             <input
              type="text"
              placeholder="age"
              name="age"
              onChange={this.handleChange}
            />
             <input
              type="text"
              placeholder="email"
              name="email"
              onChange={this.handleChange}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default App;
