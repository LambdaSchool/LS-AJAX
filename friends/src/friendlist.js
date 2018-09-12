import React from 'react';
import './App.css';

import Friend from './Friend';

const FriendList = props => {
  return (
    <div>
      {props.friends.map(friend => {
        return (
          <Friend key = {friend.id} friend = {friend} />
        )
      })}
    </div>
  );
}

export default FriendList;
