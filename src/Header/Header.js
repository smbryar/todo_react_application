import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

function Header(props) {
    const [expanded, setExpanded] = useState(false);
    return (
        <Navbar className="navbar--my-tasks-app" expand="sm" fixed="top" expanded={expanded}>
            <Navbar.Brand className="brand--my-tasks-app">My Tasks App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")}/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav onClick={() => setExpanded(false)}>
                    <Link className="px-3 navlink--my-tasks-app" to="/" >Tasks</Link>
                    <Link className="px-3 navlink--my-tasks-app" to="/graph" >Graph</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>



// <nav>
// <ul>
//   <li>
//     <Link to="/">Tasks</Link>
//   </li>
//   <li>
//     <Link to="/graph">Graph</Link>
//   </li>
// </ul>
// </nav>
    );
}

export default Header;