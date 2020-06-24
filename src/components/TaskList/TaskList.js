import React, { useState } from 'react';
import { Container, Col } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

import TaskItem from '../TaskItem/TaskItem';
import AddTask from '../AddTask/AddTask';
import Intro from '../Intro/Intro';

import './TaskList.css';

function TaskList(props) {
    const [addTaskKey, setAddTaskKey] = useState(uuidv4());

    function addTask(name, taskDetails, startDate, endDate, repeats, repeatType, repeatAfterCompletionFrequency,
        repeatAfterCompletionFrequencyType, repeatRegularDaysFrequency, repeatRegularDaysArrayDays) {

        setAddTaskKey(uuidv4());

        props.addTask(name, taskDetails, startDate, endDate, repeats, repeatType, repeatAfterCompletionFrequency,
            repeatAfterCompletionFrequencyType, repeatRegularDaysFrequency, repeatRegularDaysArrayDays);
    }

    return (
        props.userGreeting &&
        <Container fluid="lg">
            <Col>
                <Intro tasks={props.tasks} userGreeting={props.userGreeting} />
                <AddTask key={addTaskKey} addTask={addTask} tasks={props.tasks} />
                {props.tasks && props.tasks.map(task => (
                    <TaskItem key={task.taskID} id={task.taskID} completeTask={props.completeTask} deleteTask={props.deleteTask} openTaskCard={props.openTaskCard} {...task} />
                ))}
            </Col>
        </Container>
    );
}

export default TaskList;
