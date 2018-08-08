import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import FriendsList from "./components/FriendsList";
import AddFriend from "./components/AddFriend";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        this.setState(() => ({ friends: response.data }));
      })
      .catch(error => {
        console.error("Server Error", error);
      });
  }

  updateHandler = friends => {
    this.setState({ friends });
  };

  render() {
    return (
      <div className="App">
        <AddFriend update={this.updateHandler} />
        <FriendsList friends={this.state.friends} />
      </div>
    );
  }
}

export default App;
