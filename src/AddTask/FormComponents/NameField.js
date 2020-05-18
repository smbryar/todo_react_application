import React from 'react';
import { Form } from 'react-bootstrap';

import '../AddTask.css';

function NameField(props) {
  return (
    <Form.Group controlId="formTaskName">
      <Form.Control type="text" style={{ colour: "red" }} placeholder="Name your next task" onChange={e => props.setName(e.target.value)} />
      {props.errors.name && <span className="error">Input a name for your task</span>}
    </Form.Group>
  )
}

export default NameField;