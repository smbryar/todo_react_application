import React from 'react';
import './TaskDisplay.css';
import TaskList from '../TaskList/TaskList';
import DetailDisplay from '../DetailDisplay/DetailDisplay';

function TaskDisplay(props) {
  return (
    <main className="container-fluid">
        <div className="row">
            <TaskList tasks = {props.tasks}/>
            <DetailDisplay tasks = {props.tasks}/>
        </div>
    </main>
  );
}

export default TaskDisplay;