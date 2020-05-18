import React, { useState } from 'react';
import moment from 'moment';

import ButtonItem, { AddIcon } from '../ButtonItem/ButtonItem';
import { Card, Collapse, Form, OverlayTrigger, Tooltip } from 'react-bootstrap';

import './AddTask.css';

function AddTask(props) {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState("");
  const [taskDetails, setTaskDetails] = useState("");
  const [startDate, setStartDate] = useState(moment().format("YYYY-MM-DD"));
  const [endDate, setEndDate] = useState(moment().format("YYYY-MM-DD"));
  const [repeats, setRepeats] = useState(false);
  const [repeatType, setRepeatType] = useState(null);
  const [repeatAfterCompletionFrequency, setRepeatAfterCompletionFrequency] = useState(null);
  const [repeatAfterCompletionFrequencyType, setRepeatAfterCompletionFrequencyType] = useState("days");
  const [repeatRegularDaysFrequency, setRepeatRegularDaysFrequency] = useState(null);
  const [repeatRegularDaysArrayDays, setRepeatRegularDaysArrayDays] = useState([false, false, false, false, false, false, false]);

  function handleAddTaskClick() {
    props.addTask(name, taskDetails, startDate, endDate, repeats, repeatType,
      repeatAfterCompletionFrequency,
      repeatAfterCompletionFrequencyType,
      repeatRegularDaysFrequency,
      repeatRegularDaysArrayDays);
  }

  function handleRadioButton(event) {
    console.log(event.target);
    if (event.target.value === "repeatsAfterCompletion") {
      setRepeats(true);
      setRepeatType("repeatsAfterCompletion");
    }
    else if (event.target.value === "repeatsRegularDays") {
      setRepeats(true);
      setRepeatType("repeatsRegularDays");
    }
    else if (event.target.value === "doesNotRepeat") {
      setRepeats(false)
    };
  }

  function handleDayCheckboxes(e) {
    repeatRegularDaysArrayDays[e.target.value] = !repeatRegularDaysArrayDays[e.target.value];
    setRepeatRegularDaysArrayDays(repeatRegularDaysArrayDays);
  }

  return (
    <Card className="add-task">
      <Card.Header
        tabIndex="0"
        as="h4"
        aria-controls="add-task-contents"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <div className="row">
          <div className="col-10 align-self-center"
            onKeyPress={(target) => target.charCode === 13 ? setOpen(!open) : null}>
            Add Task
          </div>
          <div className="col-2">
            <div className="float-right">
              <AddIcon squareHeight="1.2em" />
            </div>
          </div>
        </div>
      </Card.Header>

      <Collapse in={open}>
        <Card.Body>
          <div id="add-task-contents">
            <Form>
              <Form.Group controlId="formTaskName">
                <Form.Control type="text" placeholder="Name your next task" onChange={e => setName(e.target.value)} />
              </Form.Group>
            </Form>

            <Form>
              <Form.Group controlId="formTaskDetails">
                <Form.Control type="text" placeholder="Enter details about your task" onChange={e => setTaskDetails(e.target.value)} />
              </Form.Group>
            </Form>

            <div className="row">
              <div className="col-6">
                <Form>
                  <Form.Group controlId="formStartDate">
                    <Form.Label>Start date</Form.Label>
                    <Form.Control type="date" onChange={e => setStartDate(e.target.value)} />
                  </Form.Group>
                </Form>
              </div>
              <div className="col-6">
                <Form>
                  <Form.Group controlId="formEndDate">
                    <Form.Label>End date</Form.Label>
                    <Form.Control type="date" onChange={e => setEndDate(e.target.value)} />
                  </Form.Group>
                </Form>
              </div>
            </div>
          </div>

          <Form>
            <Form.Row className="customRow">
              <Form.Check type="radio" name="repeatChoice" className="align-self-center" value="doesNotRepeat" onChange={handleRadioButton} />
              <div className="col align-self-center">
                <Form.Label className="noBottonMargin">Does not repeat</Form.Label>
              </div>
            </Form.Row>

            <Form.Row className="customRow">
              <Form.Check type="radio" name="repeatChoice" className="align-self-center" value="repeatsAfterCompletion" onChange={handleRadioButton} />
              <div className="col-4 col-md-2 align-self-center">
                <Form.Label className="noBottonMargin">Repeats every</Form.Label>
              </div>

              <div className="col-3 col-md-1">
                <Form.Control type="number" onChange={e => setRepeatAfterCompletionFrequency(e.target.value)} />
              </div>
              <div className="col-4 col-md-2">
                <Form.Control as="select" custom onChange={e => setRepeatAfterCompletionFrequencyType(e.target.value)}>
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
            {/* <Form.Row className="customRow">
              <Form.Check type="radio" name="repeatChoice" className="align-self-center" value="repeatsRegularDays" onChange={handleRadioButton} />
              <div className="col-4 col-md-2 align-self-center">
                <Form.Label className="noBottonMargin">Repeats every</Form.Label>
              </div>
              <div className="col-3 col-md-1">
                <Form.Control type="number" onChange={e => setRepeatRegularDaysFrequency(e.target.value)} />
              </div>
              <div className="col-4 col-md-2 align-self-center">
                <Form.Label className="noBottonMargin">weeks on</Form.Label>
              </div>
              <div className="col-12 col-md-6 align-self-center">
                <div className="row">
                  {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => (
                    <Form.Check key={i} inline label={day} value={(i + 1) % 7} onChange={handleDayCheckboxes} />
                  ))}
                </div>
              </div>
            </Form.Row> */}
          </Form>
          <button type="submit" className = "btn btn-light btn-outline-secondary btn-block mt-3" onClick={handleAddTaskClick}>Submit task</button>
        </Card.Body>
      </Collapse>
    </Card >
  );
}

export default AddTask;
