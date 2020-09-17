import React from 'react';
import dino from '../assets/dino_blue.png'

const Welcome = () => {
    return (
      <div className="main">
        <h1>Welcome to In It Together!</h1>

        <h3>Thanks for contributing.</h3>
        <a href="https://www.meetup.com/Dinasours/">Dinasours Meetup Group</a>
        <p><img className="dino" src={dino}/></p>
      </div>
    );
}

export default Welcome;
