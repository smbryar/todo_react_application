import React, {useState} from 'react';
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
  const [repeatFrequency, setRepeatFrequency] = useState(0);
  const [repeatFrequencyType, setRepeatFrequencyType] = useState("");

  function handleAddTaskClick() {
    props.addTask(name,taskDetails,startDate,endDate,repeats,repeatFrequency,repeatFrequencyType);
  }

  function handleRadioButton(event) {
    if (event.target.value === "doesRepeat") {
      setRepeats(true);
    }
    else if (event.target.value === "doesNotRepeat") {
      setRepeats(false)
    };
  }

  return (
    <Card className="add-task">
      <Card.Header
        tabIndex="0"  
        as="h4"
        onClick={() => setOpen(!open)}
        onKeyPress={(target) => target.charCode === 13 ? setOpen(!open) : null}
        aria-controls="add-task-contents"
        aria-expanded={open}
      >
        <div className="row">
          <div className="col-10 align-self-center">
            Add Task
          </div>
          <div className="col-2">
            <div className="float-right">
            <OverlayTrigger placement="left" overlay={<Tooltip>Add task</Tooltip>}>
              <ButtonItem type="submit" aria-label="Add task" onClick = {handleAddTaskClick}>
                <AddIcon squareHeight="2em" />
              </ButtonItem>
              </OverlayTrigger>
            </div>
          </div>
        </div>
      </Card.Header>

      <Collapse in={open}>
        <Card.Body>
          <div id="add-task-contents">
            <Form>
              <Form.Group controlId="formTaskName">
                <Form.Control type="text" placeholder="Name your next task" onChange = {e => setName(e.target.value)}/>
              </Form.Group>
            </Form>

            <Form>
              <Form.Group controlId="formTaskDetails">
                <Form.Control type="text" placeholder="Enter details about your task" onChange = {e => setTaskDetails(e.target.value)}/>
              </Form.Group>
            </Form>

          <div className="row">
            <div className="col-6">
              <Form>
                <Form.Group controlId="formStartDate">
                  <Form.Label>Start date</Form.Label>
                  <Form.Control type="date" onChange = {e => setStartDate(e.target.value)}/>
                </Form.Group>
              </Form>
            </div>
            <div className="col-6">
              <Form>
                <Form.Group controlId="formEndDate">
                  <Form.Label>End date</Form.Label>
                  <Form.Control type="date" onChange = {e => setEndDate(e.target.value)}/>
                </Form.Group>
              </Form>
            </div>
          </div>
          </div>

        <Form>
          <Form.Row className="customRow">
            <Form.Check type="radio" name="repeatChoice" className="align-self-center" value="doesNotRepeat" onChange = { handleRadioButton }/>
            <div className="col align-self-center">
              <Form.Label className="noBottonMargin">Does not repeat</Form.Label>
            </div>
          </Form.Row>

          <Form.Row className="customRow">
            <Form.Check type="radio" name="repeatChoice" className="align-self-center" value="doesRepeat" onChange = { handleRadioButton }/>
            <div className="col-4 col-md-2 align-self-center">
              <Form.Label className="noBottonMargin">Repeats every</Form.Label>
            </div>

            <div className="col-3 col-md-1">
              <Form.Control type="number" onChange = {e => setRepeatFrequency(e.target.value)}/>
            </div>
            <div className="col-4 col-md-2">
              <Form.Control as="select" custom onChange = {e => setRepeatFrequencyType(e.target.value)}>
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
            <Form.Check type="radio" name="repeatChoice" className="align-self-center"/>
            <div className="col-4 col-md-2 align-self-center">
              <Form.Label className="noBottonMargin">Repeats every</Form.Label>
            </div>
            <div className="col-3 col-md-1">
              <Form.Control type="number" />
            </div>
            <div className="col-4 col-md-2 align-self-center">
              <Form.Label className="noBottonMargin">weeks on</Form.Label>
            </div>
            <div className="col-12 col-md-6 align-self-center">
              <div className="row">
                {["M", "T", "W", "T", "F", "S", "S"].map((day,i) => (                 
                    <Form.Check key={i} inline label={day} />                  
                ))}
              </div>
            </div>
          </Form.Row> */}
        </Form>
        </Card.Body>
      </Collapse>
    </Card >
  );
}

export default AddTask;
