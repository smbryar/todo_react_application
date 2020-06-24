import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Col, Container, Form } from 'react-bootstrap';
import SimpleButton from '../ButtonItem/SimpleButton';
import axios from 'axios';
import Cookies from 'js-cookie';

import './Login.css';


function Login(props) {
    const [username, setUsername] = useState("");
    const [newUsername, setNewUsername] = useState("");
    const [usernameError, setUsernameError] = useState(false);
    const [newUsernameError, setNewUsernameError] = useState(false);

    function handleUsernameChange(e) {
        setUsername(e.target.value);
        if (e.target.value.length === 0) {
            setUsernameError(true)
        }
        else { setUsernameError(false) }
    }

    function handleNewUsernameChange(e) {
        setNewUsername(e.target.value);
        if (e.target.value.length === 0) {
            setNewUsernameError(true)
        }
        else { setNewUsernameError(false) }
    }

    function handleSignInSubmit(e) {
        e.preventDefault();
        if (username.length === 0) {
            setUsernameError(true);
        }
        else {
            axios
                .get(`https://3f77y34kad.execute-api.eu-west-2.amazonaws.com/dev/users?username=${username}`)
                .then(response => {
                    const userDetails = response.data.user;
                    if (userDetails.length === 1) {
                        const userID = response.data.user[0].userID;
                        Cookies.set("userID",userID, { expires: 7 });
                        props.setLoggedIn(true);
                    }
                    else {
                        setUsernameError(true);
                    }
                }
                )
                .catch(error => {
                    console.log("Error fetching data", error);
                })
            props.history.push("/todo_react_application/");
        }
    }

    function handleNewUserSubmit(e) {
        e.preventDefault();
        if (newUsername.length === 0) {
            setNewUsernameError(true);
        }
        else {
            const newUser = { username: newUsername };
            axios
                .get(`https://3f77y34kad.execute-api.eu-west-2.amazonaws.com/dev/users?username=${newUsername}`)
                .then(response => {
                    if (response.data.user.length > 0) {
                        setNewUsernameError(true);
                        throw new Error("User already exists in database, usernames must be unique.")
                    }
                    else {
                        return axios.post("https://3f77y34kad.execute-api.eu-west-2.amazonaws.com/dev/users", newUser);
                    }
                })
                .then(response => {
                    const newUserID = response.data.newUser[0].userID;
                    Cookies.set("userID",newUserID, { expires: 7 });
                    props.setLoggedIn(true);
                })
                .catch(error => {
                    console.log("Error fetching data", error);
                })
            props.history.push("/todo_react_application/");
        }
    }

    return (
        <Container className="authentication">
            <Row className="authentication-row px-2">
                <Col xs={12} lg={6} className="m-auto py-2">
                    <Form
                        className="login p-3 pb-4 rounded"
                    >
                        <h1 className="h3 mb-3 font-weight-normal">Sign in</h1>
                        <Form.Group controlId="username">
                            <Form.Control
                                autoFocus
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={handleUsernameChange}
                            />
                            {usernameError &&
                                <Form.Text style={{ color: "red" }}>
                                    Please enter a valid username.
                            </Form.Text>}
                        </Form.Group>
                        <SimpleButton
                            variant="login"
                            type="submit"
                            onClick={handleSignInSubmit}
                        >Go</SimpleButton>
                    </Form>
                </Col>
                <Col xs={12} lg={6} className="m-auto py-2">
                    <Form
                        className="new-user p-3 pb-4 rounded"
                    >
                        <h1 className="h3 mb-3 font-weight-normal">Create new user</h1>
                        <Form.Group controlId="new-username">
                            <Form.Control
                                type="text"
                                placeholder="New Username"
                                value={newUsername}
                                onChange={handleNewUsernameChange}
                            />
                            {newUsernameError &&
                                <Form.Text style={{ color: "red" }}>
                                    Please enter a valid and unique username.
                            </Form.Text>}
                        </Form.Group>
                        <SimpleButton variant="new-user" type="submit" onClick={handleNewUserSubmit}>Go</SimpleButton>
                    </Form>
                </Col>
            </Row>


        </Container >
    );
}

export default withRouter(Login);