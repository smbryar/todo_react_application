import React from 'react';
import {Form} from 'react-bootstrap';

import '../AddTask.css';

function TaskDetailsField(props) {
    return (
      <Form.Group controlId="formTaskDetails">
        <Form.Control type="text" placeholder="Enter details about your task" onChange={e => props.setTaskDetails(e.target.value)} />
      </Form.Group>
    )
}

export default TaskDetailsField;