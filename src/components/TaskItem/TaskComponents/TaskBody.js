import React from 'react';
import moment from 'moment';
import { Card, Collapse, Row, Col } from 'react-bootstrap';

import SimpleButton from '../../ButtonItem/SimpleButton';

function TaskBody(props) {
    return (
        <Collapse in={props.cardOpen}>
            <Card.Body tabIndex="0">
                {!props.completed &&
                    <Row>
                        <Col xs={6}>
                            <h5>Start: {moment(props.startDate).format("DD/MM/YYYY")}</h5>
                        </Col>
                        <Col xs={6} className="col-6 text-right">
                            <h5>Due: {moment(props.endDate).format("DD/MM/YYYY")}</h5>
                        </Col>
                    </Row>}
                {!!props.completed && <h5>Completed: {moment(props.completeDate).format("DD/MM/YYYY")}</h5>}
                <Row>
                    <Col>
                        <h6>{props.taskDetails}</h6>
                    </Col>
                </Row>
                {!!props.repeats &&
                    <Row>
                        <Col>
                            <h6>This task repeats {props.repeatAfterCompletionFrequency} {props.repeatAfterCompletionFrequency === 1? props.repeatAfterCompletionFrequencyType.substring(0,props.repeatAfterCompletionFrequencyType.length-1):props.repeatAfterCompletionFrequencyType} after being completed.</h6>
                        </Col>
                    </Row>
                }
                <Row>
                    {!props.completed && <Col>
                        <SimpleButton onClick={props.handleCompleteClick} variant="complete">Complete task</SimpleButton>
                    </Col>}
                    <Col>
                        <SimpleButton onClick={props.handleDeleteClick} variant="delete">Delete task</SimpleButton>
                    </Col>
                    {props.dayPlanListPage &&
                    <Col>
                        <SimpleButton onClick={props.handleListDeleteClick} variant="remove-from-plan">Remove from plan</SimpleButton>
                    </Col>}
                </Row>
            </Card.Body>
        </Collapse>
    );
}

export default TaskBody;
