import React from 'react';
import { Form, Col } from 'react-bootstrap';

import '../AddTask.css';

function DatesField(props) {
  return (
    <Form.Row>
      <Form.Group as={Col} controlId="formStartDate">
        <Form.Label>When should you start this task?</Form.Label>
        <Form.Control type="date" onChange={e => props.setStartDate(e.target.value)} />
      </Form.Group>
      <Form.Group as={Col} controlId="formEndDate">
        <Form.Label>When do you need to finish this task?</Form.Label>
        <Form.Control type="date" onChange={e => props.setEndDate(e.target.value)} />
      </Form.Group>
    </Form.Row>
  )
}

export default DatesField;