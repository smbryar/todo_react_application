import React from 'react';
import { Form } from 'react-bootstrap';

import '../AddTask.css';

function RepeatsRegularDaysField(props) {
  return (
    <Form.Row className="customRow">
      <Form.Check type="radio" name="repeatChoice" className="align-self-center" value="repeatsRegularDays" onChange={props.handleRadioButton} />
      <div className="col-4 col-md-2 align-self-center">
        <Form.Label className="noBottonMargin">Repeats every</Form.Label>
      </div>
      <div className="col-3 col-md-1">
        <Form.Control type="number" onChange={e => props.setRepeatRegularDaysFrequency(e.target.value)} />
      </div>
      <div className="col-4 col-md-2 align-self-center">
        <Form.Label className="noBottonMargin">weeks on</Form.Label>
      </div>
      <div className="col-12 col-md-6 align-self-center">
        <div className="row">
          {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => (
            <Form.Check key={i} inline label={day} value={(i + 1) % 7} onChange={props.handleDayCheckboxes} />
          ))}
        </div>
      </div>
    </Form.Row>
  )
}

export default RepeatsRegularDaysField;