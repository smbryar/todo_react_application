import React from 'react';
import { Row, Col } from 'react-bootstrap';
import TaskItem from 'components/TaskItem/TaskItem.js';

function DayPlanList(props) {
    return (
        <Col xs={12} lg={8} className="py-2">
            <h1 className="h3 mb-3 font-weight-normal">Today's Task Plan</h1>
            {props.tasks && props.tasks.filter(task => !!task.dayPlan).map(task => (
                <Row key={task.taskID} id={task.taskID} className="my-2">
                    <TaskItem dayPlanListPage={true} deleteDayPlanTask={props.deleteDayPlanTask} completeTask={props.completeTask} deleteTask={props.deleteTask} openTaskCard={props.openTaskCard} {...task} />
                </Row>
            ))}
        </Col>
    );
}

export default DayPlanList;
