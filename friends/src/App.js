import React, { Component } from 'react';
import FriendsList from '../src/components/FriendsList';
import './App.css';
import { Route, NavLink } from 'react-router-dom';
import FriendForm from '../src/components/FriendForm';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navbar">
          <NavLink to="/friend-form">Add Friend</NavLink>
        </div>
        <Route path="/" component={FriendsList} />
        <Route path="/friend-form" component={FriendForm} />
      </div>
    );
  }
}

export default App;
