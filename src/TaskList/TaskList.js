import React from 'react';
import TaskItem from '../TaskItem/TaskItem';
import AddTask from '../AddTask/AddTask';
import Intro from '../Intro/Intro';
import './TaskList.css';

function TaskList(props) {
    return (
        <div className="col-12 col-lg-6">
            <div className="mx-2">

                <div className="row my-2 d-lg-none">
                    <Intro count = {props.tasks.length}/>
                </div>

                <div className="row my-2">
                    <AddTask />
                </div>               


                {props.tasks.map(task => (
                    <div key={task.key} className="row my-2">
                        <TaskItem {...task} />
                    </div>
                ))}

            </div>
        </div>
    );
}

export default TaskList;
