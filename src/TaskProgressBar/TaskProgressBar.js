import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './TaskProgressBar.css';

function TaskProgressBar(props) {
  return (
    <ProgressBar 
    // min={props.startDate.getTime()} 
    // max = {props.endDate.getTime()} 
    // now={Date.now()}
    now={props.percentageCompletion} />
  )
}

export default TaskProgressBar;
