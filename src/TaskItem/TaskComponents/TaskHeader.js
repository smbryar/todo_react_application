import React from 'react';
import { Card, Row, Col, ButtonGroup } from 'react-bootstrap';

import ButtonItem, { CheckboxIcon, DeleteIcon, RepeatIcon } from '../../ButtonItem/ButtonItem';
import TaskProgressBar from './TaskProgressBar';


function TaskHeader(props) {

  function handleHeaderClick() {
    props.openTaskCard(props.taskID);
  }

  return (
    <Card.Header
      className="h4"
      aria-controls="task-item-contents"
      aria-expanded={props.open}
    >
      <Row>
        <Col xs={8}
          style={{ textDecoration: props.completed ? 'line-through' : '', cursor: "pointer" }}
          tabIndex="0"
          onClick={handleHeaderClick}
          onKeyPress={(target) => target.charCode === 13 ? props.openTaskCard(props.taskID) : null}>
          {props.repeats === 1 && <RepeatIcon squareHeight="1.2em" />} {props.name}
        </Col>

        <Col xs={4}>
          <ButtonGroup className="float-right">
            {!props.completed &&
              <ButtonItem onClick={props.handleCompleteClick} aria-label="Mark as complete">
                <CheckboxIcon squareHeight="1.5em" />
              </ButtonItem>}
            <ButtonItem onClick={props.handleDeleteClick} aria-label="Delete">
              <DeleteIcon squareHeight="1.3em" />
            </ButtonItem>
          </ButtonGroup>
        </Col>
      </Row>

      {!props.completed && <Row>
        <Col>
          <TaskProgressBar percentageCompletion={props.percentageCompletion} />
        </Col>
      </Row>}

    </Card.Header>
  );
}

export default TaskHeader;
