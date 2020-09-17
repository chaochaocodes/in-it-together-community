import React from 'react';
import { Link } from 'react-router-dom'
import Component1 from './Component1'
import Component2 from './Component2'
import Component3 from './Component3'
import './aliciapage.css';

const AliciaPage = () => {

    // Name
    const name = "Alicia";

    // Social Accounts
    const github = "https://github.com/chaochaocodes";
    const linkedin = "https://www.linkedin.com/in/alicia-chao/";
    const portfolio = "https://www.aliciabydesign.com";

    // Interests
    const interests = "React, JavaScript, FrontEnd Dev"

    // Projects -> links || actual components || up to the user
    const projects = [
        "Project ABC", 
        "Project 123", 
        "Project Do Re Mi",
        "Project You and Me",
        "Project Can't you see"
    ]

    const renderArray = array => {
        return array.map((element, index) => {
            return <li className="project-card">{element}</li>
        })
    }

    return (
        <div className="main alicia">
          <div className="profile">
            <div id="profile-card" >
                <div className="avatar"> Avatar </div>
                <h1>Hi! My name is {name}.</h1>
                <p>Checkout my work <a href={portfolio}>here</a>.</p>
                <p>Contact me on <a href={linkedin}>LinkedIn</a>.</p>
                <p>View my <a href={github}>github</a> here.</p>
                <p>My interests include:</p>
                    {interests}
            </div>

            <div className="projects">
            <h3>You can see my projects here:</h3>
            <br/>
              <ul>
                {renderArray(projects)}
              </ul>
            </div>
          </div>
        </div>
    );
};

export default AliciaPage;