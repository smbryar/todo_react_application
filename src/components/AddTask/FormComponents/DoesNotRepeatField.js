import React from 'react';
import { Form } from 'react-bootstrap';

import '../AddTask.css';

function DoesNotRepeatField(props) {

  function handleRadioButton(e) {
    if (e.target.value === 'doesNotRepeat') {
      props.setRepeats(false);
    }
    else props.setRepeats(true);
  }


  return (
    <>
      {props.errors.repeats && <span className="error">Select whether this task repeats</span>}
      <Form.Row className="customRow" >
        <Form.Check defaultChecked type="radio" name="repeatChoice" className="align-self-center" id="doesNotRepeat" value="doesNotRepeat" onChange={handleRadioButton}/>
        <div className="col align-self-center">
          <Form.Label className="noBottonMargin">Does not repeat</Form.Label>
        </div>
      </Form.Row >
    </>
  )
}

export default DoesNotRepeatField;