import React from 'react';
import { Container, Row } from 'react-bootstrap';
import TaskSelector from 'components/DayPlan/TaskSelector';
import DayPlanList from 'components/DayPlan/DayPlanList';
import NoDayPlanList from 'components/DayPlan/NoDayPlanList';

function DayPlan(props) {
    return (
        <Container className="day-plan">
            <Row className="px-2">
                <TaskSelector {...props}/>
                {props.tasks && props.tasks.some(task => !!task.dayPlan) ? <DayPlanList {...props}/> : <NoDayPlanList/>}
            </Row>
        </Container>
    );
}

export default DayPlan;
