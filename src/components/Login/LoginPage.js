import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Col, Container, Form } from 'react-bootstrap';
import {Auth} from 'aws-amplify';
import axios from 'axios';
import Cookies from 'js-cookie';

import {useAppContext} from 'libs/contextLib';
import { onError } from "libs/errorLib";
import {useFormFields} from 'libs/hooksLib';
import SimpleButton from '../ButtonItem/SimpleButton';
import Login from 'components/Login/Login';
import SignUp from 'components/Login/SignUp';

import './Login.css';


function LoginPage(props) {
    const {setLoggedIn} = useAppContext();
    

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