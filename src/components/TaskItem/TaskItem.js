import React from 'react';
import { Card } from 'react-bootstrap';

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

  function handleListDeleteClick() {
    props.deleteDayPlanTask(props.taskID)
  }

  return (
      <Card className="task-item" style={{ backgroundColor: props.completed ? 'rgba(130, 138, 146, 0.74)' : '#BADEC6' }}>
        <TaskHeader {...props} handleListDeleteClick={handleListDeleteClick} handleCompleteClick={handleCompleteClick} handleDeleteClick={handleDeleteClick} />
        <TaskBody {...props} handleListDeleteClick={handleListDeleteClick} handleDeleteClick={handleDeleteClick} handleCompleteClick={handleCompleteClick} />
      </Card >
  );
}

export default TaskItem;
