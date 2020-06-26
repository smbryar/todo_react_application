import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Col, Form } from 'react-bootstrap';
import { Auth } from 'aws-amplify';

import { useAppContext } from 'libs/contextLib';
import { onError } from "libs/errorLib";
import { useFormFields } from 'libs/hooksLib';
import SimpleButton from '../ButtonItem/SimpleButton';

import './Login.css';


function Login(props) {
    const { setLoggedIn } = useAppContext();
    const [usernameError, setUsernameError] = useState(false);
    const [fields, handleFieldChange] = useFormFields({
        email: "",
        password: ""
    })

    async function handleSignInSubmit(e) {
        e.preventDefault();
        if (fields.email.length === 0 || fields.password.length === 0) {
            setUsernameError(true);
        }
        else {
            try {
                await Auth.signIn(fields.email, fields.password);
                setLoggedIn(true);
            } catch (e) {
                onError(e);
            }
            props.history.push("/todo_react_application/");
        }
    }

    return (
        <Col xs={12} lg={6} className="m-auto py-2">
            <Form
                className="login p-3 pb-4 rounded"
            >
                <h1 className="h3 mb-3 font-weight-normal">Sign in</h1>
                <Form.Group controlId="email">
                    <Form.Control
                        autoFocus
                        type="email"
                        placeholder="Email"
                        value={fields.email}
                        onChange={handleFieldChange}
                    />
                    {usernameError &&
                        <Form.Text style={{ color: "red" }}>
                            Please enter a valid email.
                            </Form.Text>}
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Control
                        autoFocus
                        type="password"
                        placeholder="Password"
                        value={fields.password}
                        onChange={handleFieldChange}
                    />
                    {usernameError &&
                        <Form.Text style={{ color: "red" }}>
                            Please enter a valid password.
                            </Form.Text>}
                </Form.Group>
                <SimpleButton
                    variant="login"
                    type="submit"
                    onClick={handleSignInSubmit}
                >Go</SimpleButton>
            </Form>
        </Col>
    );
}

export default withRouter(Login);