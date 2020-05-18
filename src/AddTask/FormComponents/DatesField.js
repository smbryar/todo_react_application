import React from 'react';
import {Form} from 'react-bootstrap';

import '../AddTask.css';

function DatesField(props) {
    return (
      <div className="row">
              <div className="col-6">
                  <Form.Group controlId="formStartDate">
                    <Form.Label>When should you start this task?</Form.Label>
                    <Form.Control type="date" onChange={e => props.setStartDate(e.target.value)} />
                  </Form.Group>
              </div>
              <div className="col-6">
                  <Form.Group controlId="formEndDate">
                    <Form.Label>When do you need to finish this task?</Form.Label>
                    <Form.Control type="date" onChange={e => props.setEndDate(e.target.value)} />
                  </Form.Group>
              </div>
            </div>
    )
}

export default DatesField;