import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './TaskProgressBar.css';

function TaskProgressBar(props) {
  return (
    <ProgressBar now={60} />
  )
}

export default TaskProgressBar;
