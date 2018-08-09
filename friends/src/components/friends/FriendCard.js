import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import "./Friend.css";
import EditDeleteButtons from "../editDeleteButtons/EditDeleteButtons";

const FriendCard = props => {
  console.log("FriendCard", props);
  return (
    <Fragment>
      <Link to={`/friends/${props.friends.name}`} className="friendCardWrapper">
        <h2>{props.friends.name}</h2>
        <h4>{props.friends.age}</h4>
        <h4>{props.friends.email}</h4>
        <EditDeleteButtons />
      </Link>
    </Fragment>
  );
};

export default FriendCard;
