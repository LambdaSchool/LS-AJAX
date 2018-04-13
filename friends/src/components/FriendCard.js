import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardBody, CardText } from 'reactstrap'

export default class FriendCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            friend: this.props.friend
        }
    }

    handleDeleteFriend = (id) => {
        axios
            .delete(`http://localhost:5000/friends/${id}`)
            .then(response => {
                this.setState(() => ({ friends: response.data }));
                this.props.getFriends();
            })
            .catch(error => {
                console.log(error);
            })
    };

    // handleEditFriend = (id) => {
    //     axios
    //         .put(`http://localhost:5000/friends/${id}`)

    // }

    render() {
        const { id, name, age, email } = this.state.friend;
        return (
            <Card>
                <CardHeader>
                    <Link to={`/friends/${id}`}>
                        {name}
                    </Link>
                    <br />
                    <button onClick={(e) => {
                        e.preventDefault();
                        this.handleDeleteFriend(id)}}>
                        Remove Friend
                    </button>
                </CardHeader>
                <CardBody className="text-left">
                    <CardText>Age: {age}</CardText>
                    <CardText>Email: {email}</CardText>
                    <CardText>Id: {id}</CardText>
                </CardBody>
            </Card>
        )
    }
}