import React from 'react';
import { Link } from 'react-router-dom'
import Component1 from './Component1'
import Component2 from './Component2'
import Component3 from './Component3'

const TOC = {
    "1": Component1,
    "2": Component2,
    "3": Component3
}

const AliciaMain = () => {
    const LinkMap = () => {
        return Object.keys(TOC).map((keyNum, index) => {
            console.log(keyNum, index);
            return (
                <div>{keyNum}</div> 
                // <Link key={index} to="/" component={TOC}> 
                //     <div>{indexNum}</div> 
                // </Link>
            )
        })
    }


    // Name
    const name = "Alicia";

    // Social Accounts
    const github = "https://github.com/chaochaocodes";
    const linkedin = "https://www.linkedin.com/in/alicia-chao/";
    const portfolio = "https://www.aliciabydesign.com";

    // Interests
    const interests = ["React", "JavaScript", "FrontEnd Dev"]

    // Projects -> links || actual components || up to the user
    const projects = ["https://github.com/In-It-Together/c3_useState_Timer", 
    "https://github.com/In-It-Together/c5_dynamic_forms"]

    const renderArray = array => {
        return array.map((element, index) => {
            return <li>{element}</li>
        })
    }

    return (
        <div>
            <h1>Hi! My name is {name}.</h1>
            <p>Checkout my work here <a href={portfolio}></a>.</p>
            <p>Contact me on <a href={linkedin}>LinkedIn</a>.</p>
            <p>View my codebase on <a href={github}>github</a> here.</p>

            <p>My interests include:</p>
            <ul>
                {renderArray(interests)}
            </ul>

            <p>You can see my projects here:</p>
            <ul>
                {renderArray(projects)}
            </ul>

            {LinkMap()}
        </div>
    );
};

export default AliciaMain;