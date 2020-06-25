import React, { useState } from 'react';
import moment from 'moment';
import { Card, Collapse, Form, Row } from 'react-bootstrap';

import AddTaskHeader from './FormComponents/AddTaskHeader';
import NameField from './FormComponents/NameField';
import TaskDetailsField from './FormComponents/TaskDetailsField';
import DatesField from './FormComponents/DatesField';
import DoesNotRepeatField from './FormComponents/DoesNotRepeatField';
import RepeatsAfterCompletionField from './FormComponents/RepeatsAfterCompletionField';
import SimpleButton from '../ButtonItem/SimpleButton';

import './AddTask.css';

function AddTask(props) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [taskDetails, setTaskDetails] = useState("");
  const [startDate, setStartDate] = useState(moment().format("YYYY-MM-DD"));
  const [endDate, setEndDate] = useState(moment().format("YYYY-MM-DD"));
  const [repeats, setRepeats] = useState(false);
  const [repeatType, setRepeatType] = useState(null);
  const [repeatAfterCompletionFrequency, setRepeatAfterCompletionFrequency] = useState(null);
  const [repeatAfterCompletionFrequencyType, setRepeatAfterCompletionFrequencyType] = useState("days");
  const [errors, setErrors] = useState({ name: false, repeatAfterCompletionFrequency: false });

  function handleAddTaskClick(e) {
    e.preventDefault();
    if (name === "" || repeats === null || (repeatType === "repeatsAfterCompletion" && repeatAfterCompletionFrequency === null)) {
      const updatedErrors = Object.assign({}, errors);
      name === "" ? updatedErrors.name = true : updatedErrors.name = false;
      repeatType === "repeatsAfterCompletion" && repeatAfterCompletionFrequency === null ? updatedErrors.repeatAfterCompletionFrequency = true : updatedErrors.repeatAfterCompletionFrequency = false;
      setErrors(updatedErrors);
    }
    else {
      props.addTask(name, taskDetails, startDate, endDate, repeats, repeatType,
        repeatAfterCompletionFrequency,
        repeatAfterCompletionFrequencyType);
    }
  }

  function handleRepeatType(repeatType) {
    if (repeatType === "repeatsAfterCompletion") {
      setRepeats(true);
      setRepeatType("repeatsAfterCompletion");
    }
    else {
      setRepeats(false)
    };
  }

  return (
    <Row className="my-2">
      <Card className="add-task">
        <AddTaskHeader open={open} setOpen={setOpen} />
        <Collapse in={open}>
          <Card.Body>
            <Form>
              <NameField setName={setName} errors={errors} />
              <TaskDetailsField setTaskDetails={setTaskDetails} />
              <DatesField setStartDate={setStartDate} setEndDate={setEndDate} />
              <DoesNotRepeatField errors={errors} handleRepeatType={handleRepeatType} />
              <RepeatsAfterCompletionField errors={errors} handleRepeatType={handleRepeatType} setRepeatAfterCompletionFrequency={setRepeatAfterCompletionFrequency} setRepeatAfterCompletionFrequencyType={setRepeatAfterCompletionFrequencyType} />
              <SimpleButton variant="add-task" type="submit" onClick={handleAddTaskClick}>Submit Task</SimpleButton>
            </Form>            
          </Card.Body>
        </Collapse>
      </Card >
    </Row>
  );
}

export default AddTask;
