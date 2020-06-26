import React from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Container } from 'react-bootstrap';

import Login from 'components/Login/Login';
import SignUp from 'components/Login/SignUp';

import './Login.css';


function LoginPage(props) {   

    return (
        <Container className="authentication">
            <Row className="authentication-row px-2">
                <Login/>
                <SignUp/>
            </Row>
        </Container >
    );
}

export default withRouter(LoginPage);