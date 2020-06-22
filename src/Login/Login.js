import React, { useState } from 'react';
import { Row, Col, Container, Form } from 'react-bootstrap';
import SimpleButton from '../ButtonItem/SimpleButton';
import axios from 'axios';

import './Login.css';


function Login(props) {
    const [username, setUsername] = useState("");
    const [newUsername, setNewUsername] = useState("");

    function handleSignInSubmit(e) {
        e.preventDefault();
        axios
            .get(`https://3f77y34kad.execute-api.eu-west-2.amazonaws.com/dev/users?username=${username}`)
            .then(response => {
                const userDetails = response.data.user;
                if (userDetails.length === 1) {
                    props.setUserID(response.data.user[0].userID);
                }
                else {
                    console.log("User not found")
                }
            }
            )
            .catch(error => {
                console.log("Error fetching data", error);
            })
    }

    function handleNewUserSubmit(e) {
        e.preventDefault();
        const newUser = { username: newUsername };

        axios
            .get(`https://3f77y34kad.execute-api.eu-west-2.amazonaws.com/dev/users?username=${newUsername}`)
            .then(response => {
                if (response.data.user.length > 0) {
                    throw new Error("User already exists in database, usernames must be unique.")
                }
                else {
                    return axios.post("https://3f77y34kad.execute-api.eu-west-2.amazonaws.com/dev/users", newUser);
                }
            })
            .then(response => {
                const newUserID = response.data.newUser[0].userID;
                props.setUserID(newUserID);
            })
            .catch(error => {
                console.log("Error fetching data", error);
            })

    }

    return (
        <Container className="authentication">
            <Row>
                <Col>
                    <Form className="login">
                        <h1 class="h3 mb-3 font-weight-normal">Sign in</h1>
                        <Form.Group controlId="username">
                            <Form.Control autoFocus type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
                        </Form.Group>
                        <SimpleButton variant="add-task" type="submit" onClick={handleSignInSubmit}>Go</SimpleButton>
                    </Form>
                </Col>
                <Col>
                    <Form className="new-user">
                        <h1 class="h3 mb-3 font-weight-normal">Create new user</h1>
                        <Form.Group controlId="new-username">
                            <Form.Control autoFocus type="text" placeholder="New Username" value={newUsername} onChange={e => setNewUsername(e.target.value)} />
                        </Form.Group>
                        <SimpleButton variant="add-task" type="submit" onClick={handleNewUserSubmit}>Go</SimpleButton>
                    </Form>
                </Col>
            </Row>


        </Container >
    );
}

export default Login;