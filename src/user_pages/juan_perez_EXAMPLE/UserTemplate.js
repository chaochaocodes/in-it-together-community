import React from 'react';

const UserTemplate = () => {

    // Name
    const name = "Juan Pérez";

    // Github account
    const github = "https://github.com/In-It-Together";
    // other socials
    // example: twitter, linkedin, leetcode

    // Interests
    const interests = ["React", "Kayaking", "Open Source"]

    // Projects -> links || actual components || up to the user
    const projects = ["https://github.com/In-It-Together/c3_useState_Timer", "https://github.com/In-It-Together/c5_dynamic_forms"]

    const renderArray = array => {
        return array.map((element, index) => {
            return <li>{element}</li>
        })
    }

    return (
        <div className="main">
            <h1>Hello, my name is {name}.</h1>
            <p>My github accounts can be found <a href={github}>here</a>.</p>
            <p>My interests include:</p>
            <ul>
                {renderArray(interests)}
            </ul>

            <p>You can see my projects here:</p>
            <ul>
                {renderArray(projects)}
            </ul>
        </div>
    );
};

export default UserTemplate;