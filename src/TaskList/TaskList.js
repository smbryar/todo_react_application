import React from 'react';
import moment from 'moment';
import TaskItem from '../TaskItem/TaskItem';
import AddTask from '../AddTask/AddTask';
import Intro from '../Intro/Intro';
import './TaskList.css';

function TaskList(props) {
    function compare(a, b) {
        if (a.completed === true || a.startDate > moment().format("YYYY-MM-DD") || a.endDate > b.endDate) return 1;
        if (a.endDate < b.endDate || a.startDate < b.startDate) return -1;
        return 0;
    }

    return (
        <div className="col-12 col-lg-8">
            <div className="mx-2">

                <div className="row my-2 d-lg-none">
                    <Intro tasks={props.tasks} />
                </div>

                <div className="row my-2">
                    <AddTask />
                </div>


                {props.tasks.sort(compare).map(task => (
                    <div key={task.key} className="row my-2">
                        <TaskItem {...task} />
                    </div>
                ))}

            </div>
        </div>
    );
}

export default TaskList;
