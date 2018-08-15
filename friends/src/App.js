import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';

import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      friends: []
    };
  }

componentDidMount(){
  axios
      .get('http://localhost:5000/friends')
      .then(response => {
        this.setState(() => ({ friends: response.data }));
      })
      .catch(error => {
        console.error('Server Error', error);
      });
}
  


  render() {
    return (
      <div className="App">
        {this.state.friends.map(each => each.name)}
      </div>
    );
  }
}

export default App;
