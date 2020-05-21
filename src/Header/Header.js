import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Header.css';

function Header(props) {
    const [expanded, setExpanded] = useState(false);
    return (
        <Navbar className="navbar--my-tasks-app" expand="sm" fixed="top" expanded={expanded}>
            <Navbar.Brand className="brand--my-tasks-app">My Tasks App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")}/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav onClick={() => setExpanded(false)}>
                    <Nav.Link className="px-3 navlink--my-tasks-app" href="#" onClick={() => props.setPage("Tasks")}>Tasks</Nav.Link>
                    <Nav.Link className="px-3 navlink--my-tasks-app" href="#" onClick={() => props.setPage("Graph")}>Graph</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;