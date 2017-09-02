import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <p>Demonstrating react redux app.</p>
        <Link to="about">Learn more...</Link>
      </div>
    );
  }
}

export default HomePage;
