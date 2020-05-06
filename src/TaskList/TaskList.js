import React from 'react';
import TaskItem from '../TaskItem/TaskItem';
import AddTask from '../AddTask/AddTask';
import Intro from '../Intro/Intro';
import './TaskList.css';

function TaskList() {
    let tasks = [
        {
            key: 1,
            name: "Tidying",
            taskDetails: "Sort through paperwork",
            startDate: "03/06/2020",
            endDate: "10/06/2020",
            percentageCompletion: 20,
            completed: false,
            repeats: false
        },
        {
            key: 2,
            name: "Cleaning",
            taskDetails: "Clean bathrooms",
            startDate: "03/06/2020",
            endDate: "10/06/2020",
            percentageCompletion: 60,
            completed: false,
            repeats: true
        },
        {
            key: 3,
            name: "Hoovering",
            taskDetails: "Downstairs",
            startDate: "03/06/2020",
            endDate: "10/06/2020",
            percentageCompletion: 80,
            completed: true,
            completeDate: "06/04/2020",
            repeats: false
        }];

    return (
        <div className="col-12 col-lg-6">
            <div className="mx-2">

                <div className="row my-2 d-lg-none">
                    <Intro />
                </div>

                <div className="row my-2">
                    <AddTask />
                </div>


                {tasks.map(task => (
                    <div key={task.key} className="row my-2">
                        <TaskItem {...task} />
                    </div>
                ))}

            </div>
        </div>
    );
}

export default TaskList;
