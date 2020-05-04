import React from 'react';
import './TaskDisplay.css';
import TaskList from '../TaskList/TaskList';
import DetailDisplay from '../DetailDisplay/DetailDisplay';

function TaskDisplay() {
  return (
    <main className="container-fluid">
        <div className="row">
            <TaskList/>
            <DetailDisplay/>
        </div>
    </main>
  );
}

export default TaskDisplay;
