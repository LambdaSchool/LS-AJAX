import React from 'react';
import styled from 'styled-components';

const StyledFriend = styled.div`
  margin: 5px auto;
  max-width: 50%;
  background-color: #2b2b2e;
  color: white;
  border: 1px solid black;
  border-radius: 4px;
  text-align: left;

  h2, h3 {
    padding-right: 20px;
  }
`;

const UpdateButton = styled.button`
  background-color: #bbbbbb;
  color: black;
  padding: 10px;
  border-radius: 3px;
`;

const Friend = props => {
  return (
    <StyledFriend>
      <div><h2>{props.friend.name}</h2></div>
      <div><h3>{props.friend.age} years old</h3></div>
      <div><h3>{props.friend.email}</h3></div>
      <UpdateButton>Update</UpdateButton>
    </StyledFriend>
  );
};

export default Friend;
