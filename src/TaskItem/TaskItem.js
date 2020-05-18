import React from 'react';
import { Card } from 'react-bootstrap';

import TaskBody from './TaskComponents/TaskBody';
import TaskHeader from './TaskComponents/TaskHeader';

import './TaskItem.css';

function TaskItem(props) {
  const [open, setOpen] = React.useState(false);

  function handleDeleteClick() {
    props.deleteTask(props.id)
  }

  function handleCompleteClick() {
    props.completeTask(props.id)
  }

  return (
    <Card className="task-item" style={{ backgroundColor: props.completed ? 'rgba(130, 138, 146, 0.74)' : '#BADEC6' }}>
      <TaskHeader {...props} open={open} setOpen={setOpen} handleCompleteClick={handleCompleteClick} handleDeleteClick={handleDeleteClick} />
      <TaskBody {...props} open={open} handleDeleteClick={handleDeleteClick} handleCompleteClick={handleCompleteClick} />
    </Card >
  );
}

export default TaskItem;
