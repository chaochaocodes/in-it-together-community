import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <ul>
            <li><Link to="/Juan_P">Juan Pérez (EXAMPLE USER)</Link></li>
            <li><Link to="/javila35">Joe</Link></li>
            <li><Link to="/Shawn_H">Shawn</Link></li>
        </ul>
    )
};

export default Navbar;