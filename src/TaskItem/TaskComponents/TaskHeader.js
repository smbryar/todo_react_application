import React from 'react';
import { Card, OverlayTrigger, Tooltip, Row, Col, ButtonGroup } from 'react-bootstrap';

import ButtonItem, { CheckboxIcon, DeleteIcon, RepeatIcon } from '../../ButtonItem/ButtonItem';
import TaskProgressBar from './TaskProgressBar';


function TaskHeader(props) {

  function handleHeaderClick() {
    props.openTaskCard(props.id);
  }
  return (
    <Card.Header
      className="h4"
      aria-controls="task-item-contents"
      aria-expanded={props.open}
    >
      <Row>
        <Col xs={8}
          style={{ textDecoration: props.completed ? 'line-through' : '' }}
          tabIndex="0"
          style={{cursor: "pointer"}}
          onClick={handleHeaderClick}
          onKeyPress={(target) => target.charCode === 13 ? props.openTaskCard(props.id) : null}>
          {props.repeats && <RepeatIcon squareHeight="1.2em" />} {props.name}
        </Col>

        <Col xs={4}>
          <ButtonGroup className="float-right">
            {!props.completed &&
              <OverlayTrigger placement="top" overlay={<Tooltip>Mark as complete</Tooltip>}>
                <ButtonItem onClick={props.handleCompleteClick} aria-label="Mark as complete">
                  <CheckboxIcon squareHeight="1.5em" />
                </ButtonItem>
              </OverlayTrigger>}

            <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
              <ButtonItem onClick={props.handleDeleteClick} aria-label="Delete">
                <DeleteIcon squareHeight="1.3em" />
              </ButtonItem>
            </OverlayTrigger>
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
