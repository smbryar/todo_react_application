import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import './Header.css';
import SimpleButton from '../ButtonItem/SimpleButton';

function Header(props) {
    const [expanded, setExpanded] = useState(false);

    function handleLogOut() {        
        props.history.push("/todo_react_application/");
        props.handleLogOut();
    }

    return (
        <Navbar className="navbar--my-tasks-app" expand="sm" fixed="top" expanded={expanded}>
            <Navbar.Brand className="brand--my-tasks-app">My Tasks App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")}/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav onClick={() => setExpanded(false)}>
                    <Link className="px-3 navlink--my-tasks-app" to="/todo_react_application/" >Tasks</Link>
                    <Link className="px-3 navlink--my-tasks-app" to="/todo_react_application/graph" >Graph</Link>
                    <Link className="px-3 navlink--my-tasks-app" to="/todo_react_application/day-plan" >Day Plan</Link>
                </Nav>
                {props.loggedIn && <Nav className="ml-auto">                    
                <SimpleButton variant="logout" onClick={handleLogOut}>Log Out</SimpleButton>
                </Nav>}
            </Navbar.Collapse>
        </Navbar>
    );
}

export default withRouter(Header);