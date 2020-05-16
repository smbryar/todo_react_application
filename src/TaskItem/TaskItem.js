import React from 'react';
import ButtonItem, { CheckboxIcon, DeleteIcon, RepeatIcon } from '../ButtonItem/ButtonItem';
import TaskProgressBar from '../TaskProgressBar/TaskProgressBar';
import TaskBody from '../TaskBody/TaskBody';
import { Card, Collapse, OverlayTrigger, Tooltip } from 'react-bootstrap';
import './TaskItem.css';

function TaskItem(props) {
  const [open, setOpen] = React.useState(false);

  function handleDeleteClick() {
    props.deleteTask(props.id)
  }

  function handleCompleteClick() {    
    props.completeTask(props.id)
  }

  return (
    <Card className="task-item" style={{backgroundColor: props.completed ? 'rgba(130, 138, 146, 0.74)' : '#BADEC6'}}>
      <Card.Header
        tabIndex="0"
        className="h4"
        aria-controls="task-item-contents"
        aria-expanded={open}
      >
        <div className="row">
          <div className="col-8" 
            style={{textDecoration: props.completed ? 'line-through' : ''}} 
            onClick={() => setOpen(!open)} 
            onKeyPress={(target) => target.charCode === 13 ? setOpen(!open) : null}>
            {props.repeats && <RepeatIcon squareHeight="1.2em" />} {props.name}
          </div>
          <div className="col-4">
            <div className="btn-group float-right">

              {!props.completed &&
                <OverlayTrigger placement="top" overlay={<Tooltip>Mark as complete</Tooltip>}>
                  <ButtonItem onClick={ handleCompleteClick } aria-label="Mark as complete">
                    <CheckboxIcon squareHeight="1.5em" />
                  </ButtonItem>
                </OverlayTrigger>}

              <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                <ButtonItem onClick={ handleDeleteClick } aria-label="Delete">
                  <DeleteIcon squareHeight="1.3em" />
                </ButtonItem>
              </OverlayTrigger>
            </div>
          </div>
        </div>
        {!props.completed && <div className="row">
          <div className="col">
            <TaskProgressBar percentageCompletion={props.percentageCompletion} />
          </div>
        </div>}
      </Card.Header>

      <Collapse in={open}>
        <Card.Body 
        tabIndex="0">
          <TaskBody {...props}/>
        </Card.Body>
      </Collapse>
    </Card >
  );
}

export default TaskItem;
