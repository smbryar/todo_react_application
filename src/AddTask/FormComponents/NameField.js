import React from 'react';
import { Form } from 'react-bootstrap';

import '../AddTask.css';

function NameField(props) {
  return (
    <Form.Group controlId="formTaskName">
      <Form.Control 
        type="text" 
        placeholder={props.errors.name ? "Input a name for your task":"Name your next task"}
        onChange={e => props.setName(e.target.value)} 
        style={props.errors.name ? {backgroundColor:"yellow"} : null}
      />
    </Form.Group>
  )
}

export default NameField;