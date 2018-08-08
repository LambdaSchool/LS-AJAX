import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import FriendsList from './components/friendslist';
import FriendForm from './components/friendform';

import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    this.getFriends();
  }

  getFriends() {
    axios
    .get(`http://localhost:5000/friends`)
    .then(response => {
      this.setState({ friends: response.data })
    })
    .catch(error => {
      console.error(error)
    });
  }

  render() {
    return (
      <div className="App">
        <Route path="/" render={props => <FriendsList {...props} friendslist={this.state.friends} />} />
        <FriendForm getFriends={this.getFriends}/>
      </div>
    );
  }
}

export default App;
