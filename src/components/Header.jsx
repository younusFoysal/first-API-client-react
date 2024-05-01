import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <h2>This is header</h2>
            <Link to={'/phones'}>Phones</Link>
        </div>
    );
};

export default Header;