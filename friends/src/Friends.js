import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

class Friends extends Component {
    state = {
        friends: []
    }

    componentDidMount() {
        axios.get("http://localhost:5000/friends")
            .then(response => {
                this.setState({friends: response.data})
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        return (
            <div>
                <div className="Friends">
                    {this.state.friends.map(friend => {
                        return (
                            <div key={friend.id}>{friend.name}</div>
                        )
                    })}
                </div>
                <input
                    type= 'text'
                    placeholder= 'Name'
                    name= 'name'
                    value={this.state.name} 
                />
                <input
                    type='text'
                    placeholder='Age'
                    name='age'
                    value={this.state.age}
                />
                <input
                    type='text'
                    placeholder='Email'
                    name='email'
                    value={this.state.email}
                />
            </div>
        );
    }
}

export default Friends;