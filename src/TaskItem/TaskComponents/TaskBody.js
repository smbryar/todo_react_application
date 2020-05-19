import React from 'react';
import moment from 'moment';
import { Card, Collapse, Row, Col } from 'react-bootstrap';

function TaskBody(props) {
    return (
        <Collapse in={props.open}>
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
                {props.completed && <h5>Completed: {moment(props.completeDate).format("DD/MM/YYYY")}</h5>}
                <Row>
                    <Col>
                        <h6>{props.taskDetails}</h6>
                    </Col>
                </Row>
                {props.repeats &&
                    <Row>
                        <Col>
                            <h6>This task repeats {props.repeatAfterCompletionFrequency} {props.repeatAfterCompletionFrequencyType} after being completed.</h6>
                        </Col>
                    </Row>
                }
                <Row>
                    {!props.completed && <Col xs={6}>
                        <button type="button" className="btn btn-light btn-outline-secondary btn-block mt-3" onClick={props.handleCompleteClick}>Complete task</button>
                    </Col>}
                    <Col>
                        <button type="button" className="btn btn-light btn-outline-secondary btn-block mt-3" onClick={props.handleDeleteClick}>Delete task</button>
                    </Col>
                </Row>
            </Card.Body>
        </Collapse>
    );
}

export default TaskBody;
