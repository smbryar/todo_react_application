import React from 'react';
import {Col, Form } from 'react-bootstrap';

function TaskSelector(props) {
    const taskOptions = props.tasks && props.tasks.filter(task => !task.completed && !task.dayPlan);

    function handleSelectTask(e) {
        const taskID = e.target.value;
        props.addToDayPlan(taskID);
    }

    return (
        <Col xs={12} lg={4} className="py-2">
            <Form className="choose-tasks">
                <h1 className="h3 mb-3 font-weight-normal">Select Tasks</h1>
                <Form.Group controlId="choose-tasks">
                    <Form.Control
                        as="select"
                        onChange={handleSelectTask}
                        placeholder="Choose from tasks"
                    >
                        <option>Choose task</option>
                        {taskOptions && taskOptions.map(task => (
                            <option key={task.taskID} value={task.taskID}>{task.name}</option>
                        ))}</Form.Control>
                </Form.Group>
            </Form>
        </Col>
    );
}

export default TaskSelector;
