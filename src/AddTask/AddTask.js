import React from 'react';
import ButtonItem, { AddIcon } from '../ButtonItem/ButtonItem';
import Collapse from 'react-bootstrap/Collapse';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import './AddTask.css';

function AddTask(props) {
  const [open, setOpen] = React.useState(false);
  return (
    <Card className="add-task">
    <Card.Header
      as="h4"
      onClick={() => setOpen(!open)}
      aria-controls="add-task-contents"
      aria-expanded={open}
    >
      Add Task
    </Card.Header>

    <Collapse in={open}>
          <Card.Body>
          <div id="add-task-contents">
          <div className="row">
            
            <div className="col-10">
              <Form>
                <Form.Group controlId="formTaskName">
                  <Form.Label>Add new task</Form.Label>
                  <Form.Control type="text" placeholder="Name your next task" />
                </Form.Group>
              </Form>
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
              <Form>
                <Form.Group controlId="formStartDate">
                  <Form.Label>Start date</Form.Label>
                  <Form.Control type="date"/>
                </Form.Group>
              </Form>
            </div>
            <div className="col-6">
              <Form>
                <Form.Group controlId="formEndDate">
                  <Form.Label>End date</Form.Label>
                  <Form.Control type="date"/>
                </Form.Group>
              </Form>
            </div>
          </div>
        </div>
        
        <Form>
          <Form.Group controlId="formRepeatSwitch">
            <Form.Check type="switch" label="Repeat Task"/> 
          </Form.Group>
            <Form.Row>
            <Form.Label column lg={2}>Repeats every</Form.Label>
              <div className="col-2">                
                <Form.Control type="number"/>
              </div>
              <div className="col-2">
              <Form.Control as="select" custom>
              <option>days</option>
              <option>weeks</option>
              <option>months</option>
              <option>years</option>
            </Form.Control>
            
            </div>
              <Form.Label column lg={6}>
                after the task has been completed.
              </Form.Label>
            </Form.Row>
            

        </Form>

                  </Card.Body>
        
      </Collapse>
    </Card>
  );
}

export default AddTask;
