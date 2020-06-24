import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import TaskItem from 'components/TaskItem/TaskItem.js';

function DayPlan(props) {
    const taskOptions = props.tasks && props.tasks.filter(task => !task.completed && !task.dayPlan);

    function handleSelectTask(e) {
        const taskID = e.target.value;
        props.addToDayPlan(taskID);        
    }

    return (
        <Container className="day-plan">
            <Row className="px-2">
                <Col xs={12} lg={4} className="py-2">
                    <Form className="choose-tasks">
                        <h1 className="h3 mb-3 font-weight-normal">Select Tasks</h1>
                        <Form.Group controlId="choose-tasks">
                            <Form.Control
                                as="select"
                                onChange = {handleSelectTask}
                                placeholder = "Choose from tasks"
                            >
                                <option>Choose task</option>
                            {taskOptions && taskOptions.map(task => (
                                <option key={task.taskID} value = {task.taskID}>{task.name}</option>
                            ))}</Form.Control>
                        </Form.Group>
                    </Form>
                </Col>
                <Col xs={12} lg={8} className="py-2">
                <h1 className="h3 mb-3 font-weight-normal">Today's Task Plan</h1>
                {props.tasks && props.tasks.filter(task => !!task.dayPlan).map(task => (
                    <Row key={task.taskID} id={task.taskID} className="my-2">
                        <TaskItem dayPlan ={true} deleteDayPlanTask = {props.deleteDayPlanTask} completeTask={props.completeTask} deleteTask={props.deleteTask} openTaskCard={props.openTaskCard} {...task} />
                    </Row>
                ))}
                </Col>
            </Row>

        </Container>
    );
}

export default DayPlan;
