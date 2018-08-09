import React, { Component, Fragment } from "react";
import axios from "axios";

import "./App.css";
import Friend from "./components/friends/Friend";
import FriendForm from "./components/friendForm/FriendForm";

let dataUrl = "http://localhost:5000/friends/";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friendsData: [],
      loading: true
    };
  }
  componentDidMount() {
    axios
      .get(dataUrl)
      .then(response => {
        this.setState({ friendsData: response.data, loading: false });
      })
      .catch(err => {
        console.log(err);
      });
  }

  // getFriend = id => {

  // }

  render() {
    return (
      <Fragment>
        <div className="mainAppWrapper">
          <div className="crt">
            <h2>List of Friends</h2>
          </div>
          <Friend friends={this.state.friendsData} />
          <FriendForm />
        </div>
      </Fragment>
    );
  }
}

export default App;
