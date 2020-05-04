import React from 'react';
import TaskItem from '../TaskItem/TaskItem';
import AddTask from '../AddTask/AddTask';
import Intro from '../Intro/Intro';
import './TaskList.css';

function TaskList() {
    let tasks = [{ name: "Tidying", startDate: "03/06/2020", endDate: "10/06/2020" }, { name: "Cleaning", startDate: "03/06/2020", endDate: "10/06/2020" }];
    return (
        <div className="col-12 col-lg-6">
            <div className="mx-2">
                
                <div className="row my-2">
                    <Intro />
                </div>

                <div className="row my-2">
                    <AddTask />
                </div>


                {tasks.map(task => (
                    <div className="row my-2">
                        <TaskItem {...task} />
                    </div>
                ))}

            </div>
        </div>
    );
}

export default TaskList;
