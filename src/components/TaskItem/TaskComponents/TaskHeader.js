import React from 'react';
import { Card, Row, Col, ButtonGroup } from 'react-bootstrap';

import ButtonItem, { CheckboxIcon, DeleteIcon, RepeatIcon, ListDeleteIcon } from '../../ButtonItem/ButtonItem';
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
          {!!props.repeats && <RepeatIcon squareHeight="1.2em" />} {props.name}
        </Col>

        <Col xs={4}>
          <ButtonGroup className="float-right">
            {!props.completed &&
              <ButtonItem onClick={props.handleCompleteClick} aria-label="Mark as complete" tooltip="Mark as complete">
                <CheckboxIcon squareHeight="1.5em" />
              </ButtonItem>}
            <ButtonItem onClick={props.handleDeleteClick} aria-label="Delete" tooltip="Delete">
              <DeleteIcon squareHeight="1.3em" />
            </ButtonItem>
          {!!props.dayPlan &&
              <ButtonItem onClick={props.handleListDeleteClick} aria-label="Remove from day plan" tooltip="Remove from day plan">
                <ListDeleteIcon squareHeight="1.5em" />
              </ButtonItem>}
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
