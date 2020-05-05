import React from 'react';
import ButtonItem, { CheckboxIcon, DeleteIcon } from '../ButtonItem/ButtonItem';
import Collapse from 'react-bootstrap/Collapse';
import Card from 'react-bootstrap/Card';
import TaskProgressBar from '../TaskProgressBar/TaskProgressBar';
import './TaskItem.css';

function TaskItem(props) {
  const [open, setOpen] = React.useState(false);
  return (
    <Card className="task-item">
      <Card.Header
        className="h4"
        onClick={() => setOpen(!open)}
        aria-controls="task-item-contents"
        aria-expanded={open}
      >
        <div className="row">
          <div className="col-8">
            {props.name}
          </div>
          <div className="col-4">
            <div className="btn-group float-right">
              <ButtonItem hoverText="Mark as complete">
                <CheckboxIcon squareHeight="1.5em" />
              </ButtonItem>
              <ButtonItem hoverText="Delete">
                <DeleteIcon squareHeight="1.3em" />
              </ButtonItem>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <TaskProgressBar />
          </div>
        </div>
      </Card.Header>

    <Collapse in={open}>
      <Card.Body>
        <div className="row">
          <div class="col">
            <h5>Task details</h5>
          </div>
        </div>
        <div className="row">
          <div class="col-6">
            <h5>{props.startDate}</h5>
          </div>
          <div class="col-6 text-right">
            <h5>{props.endDate}</h5>
          </div>
        </div>
      </Card.Body>
    </Collapse>
    </Card >
  );
}

export default TaskItem;
