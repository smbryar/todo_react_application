import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Header.css';

function Header(props) {
    return (
        <Navbar className="navbar--my-tasks-app" expand="sm" fixed="top">
            <Navbar.Brand className="brand--my-tasks-app">My Tasks App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <Nav.Link className="px-3 navlink--my-tasks-app" href="#" onClick={() => props.setPage("Tasks")}>Tasks</Nav.Link>
                    <Nav.Link className="px-3 navlink--my-tasks-app" href="#" onClick={() => props.setPage("Graph")}>Graph</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;