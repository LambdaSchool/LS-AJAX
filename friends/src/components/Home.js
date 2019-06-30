import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

function Home() {
  return (
    <div>
      <h1>Matt's friends</h1>
      <h4>Come meet my friends!</h4>
      <p>Maybe you can be my friend too...</p>

      <Link to="my-friends">Enter</Link>
    </div>
  );
}

export default Home;
