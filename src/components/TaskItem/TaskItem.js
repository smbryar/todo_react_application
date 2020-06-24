import React from 'react';
import { Card, Row } from 'react-bootstrap';

import TaskBody from './TaskComponents/TaskBody';
import TaskHeader from './TaskComponents/TaskHeader';

import './TaskItem.css';

function TaskItem(props) {

  function handleDeleteClick() {
    props.deleteTask(props.taskID)
  }

  function handleCompleteClick() {
    props.completeTask(props.taskID)
  }

  return (
    <Row className="my-2">
      <Card className="task-item" style={{ backgroundColor: props.completed ? 'rgba(130, 138, 146, 0.74)' : '#BADEC6' }}>
        <TaskHeader {...props} open={props.open} setOpen={props.setOpen} handleCompleteClick={handleCompleteClick} handleDeleteClick={handleDeleteClick} openTaskCard={props.openTaskCard} />
        <TaskBody {...props} open={props.open} handleDeleteClick={handleDeleteClick} handleCompleteClick={handleCompleteClick} />
      </Card >
    </Row>

  );
}

export default TaskItem;
