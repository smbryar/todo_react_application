import React from 'react';
import ButtonItem, { CheckboxIcon, DeleteIcon, RepeatIcon } from '../ButtonItem/ButtonItem';
import Collapse from 'react-bootstrap/Collapse';
import Card from 'react-bootstrap/Card';
import TaskProgressBar from '../TaskProgressBar/TaskProgressBar';
import TaskBody from '../TaskBody/TaskBody';
import './TaskItem.css';

function TaskItem(props) {
  const [open, setOpen] = React.useState(false);
  return (
    <Card className="task-item" 
    style={{backgroundColor: props.completed ? 'rgba(130, 138, 146, 0.74)' : '#BADEC6',
            color: props.completed ? 'rgba(0, 0, 0, 0.25)' : 'black'}}
    >
      <Card.Header
        className="h4"
        onClick={() => setOpen(!open)}
        aria-controls="task-item-contents"
        aria-expanded={open}
        >
        <div className="row">
          <div className="col-8">
            {props.repeats && <RepeatIcon squareHeight="1.2em"/>} {props.name}
          </div>
          <div className="col-4">
            <div className="btn-group float-right">
              {!props.completed && <ButtonItem hoverText="Mark as complete">
                <CheckboxIcon squareHeight="1.5em" />
              </ButtonItem>}              
              <ButtonItem hoverText="Delete">
                <DeleteIcon squareHeight="1.3em" />
              </ButtonItem>
            </div>
          </div>
        </div>
        {!props.completed && <div className="row">
          <div className="col">
            <TaskProgressBar percentageCompletion={props.percentageCompletion}/>
          </div>
        </div>}
      </Card.Header>

    <Collapse in={open}>
      <Card.Body>
        <TaskBody
        startDate={props.startDate}
        endDate={props.endDate}
        taskDetails={props.taskDetails}
        repeats={props.repeats}
        completed={props.completed}
        completeDate={props.completeDate}         
        />
      </Card.Body>
    </Collapse>
    </Card >
  );
}

export default TaskItem;
