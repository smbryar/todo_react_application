import React, { useState } from 'react';
import moment from 'moment';
import { Card, Collapse, Form } from 'react-bootstrap';

import AddTaskHeader from './FormComponents/AddTaskHeader';
import NameField from './FormComponents/NameField';
import TaskDetailsField from './FormComponents/TaskDetailsField';
import DatesField from './FormComponents/DatesField';
import DoesNotRepeatField from './FormComponents/DoesNotRepeatField';
import RepeatsAfterCompletionField from './FormComponents/RepeatsAfterCompletionField';
import RepeatsRegularDaysField from './FormComponents/RepeatsRegularDaysField';

import './AddTask.css';

function AddTask(props) {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState("");
  const [taskDetails, setTaskDetails] = useState("");
  const [startDate, setStartDate] = useState(moment().format("YYYY-MM-DD"));
  const [endDate, setEndDate] = useState(moment().format("YYYY-MM-DD"));
  const [repeats, setRepeats] = useState(null);
  const [repeatType, setRepeatType] = useState(null);
  const [repeatAfterCompletionFrequency, setRepeatAfterCompletionFrequency] = useState(null);
  const [repeatAfterCompletionFrequencyType, setRepeatAfterCompletionFrequencyType] = useState("days");
  const [repeatRegularDaysFrequency, setRepeatRegularDaysFrequency] = useState(null);
  const [repeatRegularDaysArrayDays, setRepeatRegularDaysArrayDays] = useState([false, false, false, false, false, false, false]);
  const [errors, setErrors] = useState({ name: false, repeats: false, repeatAfterCompletionFrequency: false });

  function handleAddTaskClick() {
    if (name === "" || repeats === null || (repeatType === "repeatsAfterCompletion" && repeatAfterCompletionFrequency === null)) {
      const updatedErrors = Object.assign({}, errors);
      if (name === "") {
        updatedErrors.name = true;
      }
      if (repeats === null) {
        updatedErrors.repeats = true;
      }
      if (repeatType === "repeatsAfterCompletion" && repeatAfterCompletionFrequency === null) {
        updatedErrors.repeatAfterCompletionFrequency = true;
      }
      setErrors(updatedErrors);
    }
    else {
      props.addTask(name, taskDetails, startDate, endDate, repeats, repeatType,
        repeatAfterCompletionFrequency,
        repeatAfterCompletionFrequencyType,
        repeatRegularDaysFrequency,
        repeatRegularDaysArrayDays);
    }
  }

  function handleRadioButton(event) {
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
      <AddTaskHeader open={open} setOpen={setOpen} />
      <Collapse in={open}>
        <Card.Body>
          <Form>
            <NameField setName={setName} errors={errors} />
            <TaskDetailsField setTaskDetails={setTaskDetails} />
            <DatesField setStartDate={setStartDate} setEndDate={setEndDate} />
            <DoesNotRepeatField errors={errors} handleRadioButton={handleRadioButton} />
            <RepeatsAfterCompletionField errors={errors} handleRadioButton={handleRadioButton} setRepeatAfterCompletionFrequency={setRepeatAfterCompletionFrequency} setRepeatAfterCompletionFrequencyType={setRepeatAfterCompletionFrequencyType} />
            {/* <RepeatsRegularDaysField errors={errors} handleRadioButton={handleRadioButton} setRepeatRegularDaysFrequency={setRepeatRegularDaysFrequency} handleDayCheckboxes={handleDayCheckboxes} /> */}
            <button type="submit" className="btn btn-light btn-outline-secondary btn-block mt-3" onClick={handleAddTaskClick}>Submit task</button>
          </Form>
        </Card.Body>
      </Collapse>
    </Card >
  );
}

export default AddTask;
