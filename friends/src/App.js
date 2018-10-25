import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import FriendList from './components/friendList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      friends: [],
      newFriend: {
        name: '',
        age: '',
        email: ','
      }
     }
  }

componentDidMount() {
  axios
  .get('http://localhost:5000/friends')
    .then(response => {
    this.setState({friends: response.data })
  })
  .catch(error => console.log('Error!'))
}

changeHandler = event => {
  this.setState({
      newFriend: {
          ...this.state.newFriend,
          [event.target.name]: event.target.value 
}

});
}

addFriend = event => {
event.preventDefault();
axios.post('http://localhost:5000/friends', this.state.newFriend)
.then(response => this.setState({ friends: response.data }))

}






  render() { 
    return (  
      <div className="App">
        <form>
       <input type='text' 
       onChange={this.changeHandler} 
       name='name' 
       value={this.state.newFriend.name} /> 
       <input type='text' 
       onChange={this.changeHandler}  
       name='age' 
       value={this.state.newFriend.age} />
       <input type='text' 
       onChange={this.changeHandler}  
       name='email' 
       value={this.state.newFriend.email} />
     </form>
     <button onClick={this.addFriend}>Add Friend</button> 
        {this.state.friends.map(friends => (
        <FriendList key={friends.id} friends={friends} />
         ))}
      </div>
    );
  }
}
     


      
 
export default App;
