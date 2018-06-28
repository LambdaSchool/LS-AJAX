import React from 'react';
import { Link } from 'react-router-dom';

const FriendFormError = props => {
  return(
    <div id="form-error">
      You have reached this page because you tried to update an imaginary friend.
      <Link to='/'>
        <button><div>Go to Friends</div></button>
      </Link>
    </div>
  );
}

export default FriendFormError;
