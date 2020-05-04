import React from 'react';
import ButtonItem, { AddIcon } from '../ButtonItem/ButtonItem';
import Collapse from 'react-bootstrap/Collapse';
import Card from 'react-bootstrap/Card';
import './AddTask.css';

function AddTask(props) {
  const [open, setOpen] = React.useState(false);
  return (
    <Card className="add-task">
    <Card.Header
      as="h5"
      onClick={() => setOpen(!open)}
      aria-controls="add-task-contents"
      aria-expanded={open}
    >
      Click to Add Task
    </Card.Header>

    <Collapse in={open}>
          <Card.Body>
          <div id="add-task-contents">
          <div className="row">
            
            <div className="col-10">
              <form>
                <div className="form-group">
                  <label for="task-name">Add new task</label>
                  <input type="text" className="form-control" id="task-name"
                    placeholder="Name your next task" />
                </div>
              </form>
            </div>
            
            <div className="col-2">
              <div className="float-right">
                <ButtonItem type="submit" hoverText="Add Task">
                  <AddIcon squareHeight="2em"/>
                </ButtonItem>
            </div>
            </div>
          
          </div>
          
          <div className="row">
            <div className="col-6">
              <form>
                <div className="form-group">
                  <label for="end-date">Start date</label>
                  <input type="date" className="form-control" id="start-date"
                    placeholder="Start date" />
                </div>
              </form>
            </div>
            <div className="col-6">
              <form>
                <div className="form-group">
                  <label for="end-date">End date</label>
                  <input type="date" className="form-control" id="end-date" />
                </div>
              </form>
            </div>
          </div>
        </div>
          </Card.Body>
        
      </Collapse>
    </Card>
  );
}

export default AddTask;
