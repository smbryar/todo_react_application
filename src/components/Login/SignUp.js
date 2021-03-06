import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Col, Form } from 'react-bootstrap';
import { Auth } from 'aws-amplify';
import axios from 'axios';

import { useAppContext } from 'libs/contextLib';
import { onError } from "libs/errorLib";
import { useFormFields } from 'libs/hooksLib';
import SimpleButton from '../ButtonItem/SimpleButton';

import './Login.css';


function SignUp(props) {
    const { setLoggedIn } = useAppContext();
    const { setUserID } = useAppContext();
    const { setUserGreeting } = useAppContext();
    const [newUser, setNewUser] = useState(null);
    const [newUsernameError, setNewUsernameError] = useState(false);
    const [fields, handleFieldChange] = useFormFields({
        name: "",
        newEmail: "",
        newPassword: "",
        confirmPassword: "",
        confirmationCode: ""
    })

    async function handleNewUserSubmit(e) {
        e.preventDefault();
        if (fields.newEmail.length === 0 || fields.newPassword.length === 0 || fields.confirmPassword === 0 || fields.newPassword !== fields.confirmPassword) {
            setNewUsernameError(true);
        }
        else {
            try {
                const newUser = await Auth.signUp({
                    username: fields.newEmail,
                    password: fields.newPassword,
                    attributes: { name: fields.name }
                });
                setNewUser(newUser);
            } catch (e) {
                onError(e);
            }
        }
    }

    async function handleConfirmationSubmit(e) {
        e.preventDefault();
        try {
            await Auth.confirmSignUp(fields.newEmail, fields.confirmationCode);
            await Auth.signIn(fields.newEmail, fields.newPassword);
            const userInfo = await Auth.currentUserInfo();
            const newUser = {userID: userInfo.username, username: userInfo.attributes.name};
            setUserID(userInfo.username);
            setUserGreeting(userInfo.attributes.name);

            axios
                .post("https://3f77y34kad.execute-api.eu-west-2.amazonaws.com/dev/users", newUser)
                .then(response =>{
                    setLoggedIn(true);
                    props.history.push("/todo_react_application/");
                })
                .catch(error => {
                    console.log("Error fetching data", error);
                })

        } catch (e) {
            onError(e);
        }
    }

    function renderForm() {
        return (
            <Col xs={12} lg={6} className="m-auto py-2">
                <Form className="new-user p-3 pb-4 rounded">
                    <h1 className="h3 mb-3 font-weight-normal">Create new user</h1>
                    <Form.Group controlId="name">
                        <Form.Control
                            type="name"
                            placeholder="Name"
                            value={fields.name}
                            onChange={handleFieldChange}
                        />
                        {newUsernameError &&
                            <Form.Text style={{ color: "red" }}>
                                Please enter a name.
                            </Form.Text>}
                    </Form.Group>
                    <Form.Group controlId="newEmail">
                        <Form.Control
                            type="email"
                            placeholder="Email"
                            value={fields.newEmail}
                            onChange={handleFieldChange}
                        />
                        {newUsernameError &&
                            <Form.Text style={{ color: "red" }}>
                                Please enter a valid email.
                            </Form.Text>}
                    </Form.Group>
                    <Form.Group controlId="newPassword">
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={fields.newPassword}
                            onChange={handleFieldChange}
                        />
                        {newUsernameError &&
                            <Form.Text style={{ color: "red" }}>
                                Please enter a valid password.
                            </Form.Text>}
                    </Form.Group>
                    <Form.Group controlId="confirmPassword">
                        <Form.Control
                            type="password"
                            placeholder="Confirm Password"
                            value={fields.confirmPassword}
                            onChange={handleFieldChange}
                        />
                        {newUsernameError &&
                            <Form.Text style={{ color: "red" }}>
                                Please enter a valid password.
                            </Form.Text>}
                    </Form.Group>
                    <SimpleButton variant="new-user" type="submit" onClick={handleNewUserSubmit}>Go</SimpleButton>
                </Form>
            </Col>
        )
    }

    function renderConfirmationForm() {
        return (
            <Col xs={12} lg={6} className="m-auto py-2">
                <Form className="new-user p-3 pb-4 rounded">
                    <h1 className="h3 mb-3 font-weight-normal">Enter the confirmation code you have been emailed</h1>
                    <Form.Group controlId="confirmationCode">
                        <Form.Control
                            type="tel"
                            placeholder="Confirmation Code"
                            value={fields.confirmationCode}
                            onChange={handleFieldChange}
                        />
                        {newUsernameError &&
                            <Form.Text style={{ color: "red" }}>
                                Please enter a valid confirmation code from your email.
                            </Form.Text>}
                    </Form.Group>
                    <SimpleButton variant="new-user" type="submit" onClick={handleConfirmationSubmit}>Go</SimpleButton>
                </Form>
            </Col>
        )
    }

    return (
        newUser === null ? renderForm() : renderConfirmationForm()
    );
}

export default withRouter(SignUp);