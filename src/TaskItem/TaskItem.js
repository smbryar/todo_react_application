import React from 'react';
import { Card } from 'react-bootstrap';

import TaskBody from './TaskComponents/TaskBody';
import TaskHeader from './TaskComponents/TaskHeader';

import './TaskItem.css';

function TaskItem(props) {
  // const [open, setOpen] = React.useState(false);

  function handleDeleteClick() {
    props.deleteTask(props.id)
  }

  function handleCompleteClick() {
    props.completeTask(props.id)
  }

  function handleHeaderClick() {
    props.openTaskCard(props.id);
  }

  return (
    <Card className="task-item" style={{ backgroundColor: props.completed ? 'rgba(130, 138, 146, 0.74)' : '#BADEC6' }}>
      <TaskHeader {...props} open={props.open} setOpen={props.setOpen} handleCompleteClick={handleCompleteClick} handleDeleteClick={handleDeleteClick} handleHeaderClick ={handleHeaderClick}/>
      <TaskBody {...props} open={props.open} handleDeleteClick={handleDeleteClick} handleCompleteClick={handleCompleteClick} />
    </Card >
  );
}

export default TaskItem;
