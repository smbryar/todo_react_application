import React from 'react';
import { Form } from 'react-bootstrap';

import '../AddTask.css';

function RepeatsAfterCompletionField(props) {
  return (
    <Form.Row className="customRow">
      <Form.Check type="radio" name="repeatChoice" className="align-self-center" value="repeatsAfterCompletion" onChange={props.handleRadioButton} />
      <div className="col-4 col-md-2 align-self-center">
        <Form.Label className="noBottonMargin">Repeats every</Form.Label>
      </div>

      <div className="col-3 col-md-1">
        <Form.Control 
          type="number" 
          onChange={e => props.setRepeatAfterCompletionFrequency(e.target.value)} 
          placeholder={props.errors.repeatAfterCompletionFrequency ? "?": null}
          style={props.errors.repeatAfterCompletionFrequency ? {backgroundColor:"yellow"} : null}
        />
      </div>
      <div className="col-4 col-md-2">
        <Form.Control as="select" custom onChange={e => props.setRepeatAfterCompletionFrequencyType(e.target.value)}>
          <option>days</option>
          <option>weeks</option>
          <option>months</option>
          <option>years</option>
        </Form.Control>

      </div>
      <div className="col-12 col-md-6 align-self-center">
        <Form.Label className="noBottonMargin">after the task has been completed</Form.Label>
      </div>
    </Form.Row>

  )
}

export default RepeatsAfterCompletionField;