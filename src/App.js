import React from 'react';

import Menu from 'components/Menu';
import { NavLink } from 'components/Menu';

function App() {
    return (
        <Menu>
            <NavLink to="/" isActive>Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </Menu>
    );
}

export default App;
