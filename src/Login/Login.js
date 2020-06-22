import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import SimpleButton from '../ButtonItem/SimpleButton';
import axios from 'axios';
import { withRouter } from 'react-router-dom';


function Login(props) {
    const [username, setUsername] = useState("");

    function handleSubmit(e) {
        axios
            .get("https://3f77y34kad.execute-api.eu-west-2.amazonaws.com/dev/users")
            .then(response => {
                const user = response.data.users.find(user => user.username === username);
                if (!user) {
                    console.log("user not found")
                }
                else {
                    props.setUserID(user.userID);
                }
            })
            .catch(error => {
                console.log("Error fetching data", error);
            })
    }

    function handleUsernameChange(e) {
        setUsername(e.target.value);
    }

    return (
        <Container className="login">
            <Form>
                <h2>Login</h2>
                <Form.Group controlId="username">
                    <Form.Control
                        type="text"
                        placeholder="Username"
                        onChange={handleUsernameChange}
                    />
                </Form.Group>
            </Form>
            <SimpleButton variant="login" onClick={handleSubmit}>Go</SimpleButton>
        </Container >
    );
}

export default withRouter(Login);