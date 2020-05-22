import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';

import TaskItem from '../TaskItem/TaskItem';
import AddTask from '../AddTask/AddTask';
import Intro from '../Intro/Intro';

import './TaskList.css';

function TaskList(props) {
    const [addTaskKey, setAddTaskKey] = useState(uuidv4());  

    function compare(a, b) {
        if (a.completed === true || a.startDate > moment().format("YYYY-MM-DD") || a.endDate > b.endDate) return 1;
        if (a.endDate < b.endDate || a.startDate < b.startDate) return -1;
        return 0;
    }

    function addTask(name, taskDetails, startDate, endDate, repeats, repeatType, repeatAfterCompletionFrequency,
        repeatAfterCompletionFrequencyType, repeatRegularDaysFrequency, repeatRegularDaysArrayDays) {

        setAddTaskKey(uuidv4());

        props.addTask(name, taskDetails, startDate, endDate, repeats, repeatType, repeatAfterCompletionFrequency,
            repeatAfterCompletionFrequencyType, repeatRegularDaysFrequency, repeatRegularDaysArrayDays);
    }

    return (
        <Col>
            <Row className="my-2">
                <Intro tasks={props.tasks} />
            </Row>

            <Row className="my-2">
                <AddTask key={addTaskKey} addTask={addTask} tasks={props.tasks}/>
                </Row>

            {props.tasks.sort(compare).map(task => (
                <Row key={task.id} className="my-2">
                    <TaskItem completeTask={props.completeTask} deleteTask={props.deleteTask} openTaskCard={props.openTaskCard} {...task} />
                </Row>
            ))}

        </Col>
    );
}

export default TaskList;
