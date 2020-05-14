import React from 'react';
import ButtonItem, { AddIcon } from '../ButtonItem/ButtonItem';
import { Card, Collapse, Form, OverlayTrigger, Tooltip } from 'react-bootstrap';
import './AddTask.css';

function AddTask(props) {
  const [open, setOpen] = React.useState(false);
  return (
    <Card className="add-task">
      <Card.Header
        tabindex="0"  
        as="h4"
        onClick={() => setOpen(!open)}
        onKeyPress={(target) => target.charCode === 13 ? setOpen(!open) : null}
        aria-controls="add-task-contents"
        aria-expanded={open}
      >
        <div className="row">
          <div className="col-10 align-self-center">
            Add Task
          </div>
          <div className="col-2">
            <div className="float-right">
            <OverlayTrigger placement="left" overlay={<Tooltip>Add task</Tooltip>}>
              <ButtonItem type="submit" aria-label="Add task">
                <AddIcon squareHeight="2em" />
              </ButtonItem>
              </OverlayTrigger>
            </div>
          </div>
        </div>
      </Card.Header>

      <Collapse in={open}>
        <Card.Body>
          <div id="add-task-contents">
            <Form>
              <Form.Group controlId="formTaskName">
                <Form.Control type="text" placeholder="Name your next task" />
              </Form.Group>
            </Form>

          <div className="row">
            <div className="col-6">
              <Form>
                <Form.Group controlId="formStartDate">
                  <Form.Label>Start date</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>
              </Form>
            </div>
            <div className="col-6">
              <Form>
                <Form.Group controlId="formEndDate">
                  <Form.Label>End date</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>
              </Form>
            </div>
          </div>
          </div>

        <Form>
          <Form.Row className="customRow">
            <Form.Check type="radio" name="repeatChoice" className="align-self-center" />
            <div className="col align-self-center">
              <Form.Label className="noBottonMargin">Does not repeat</Form.Label>
            </div>
          </Form.Row>

          <Form.Row className="customRow">
            <Form.Check type="radio" name="repeatChoice" className="align-self-center" />
            <div className="col-4 col-md-2 align-self-center">
              <Form.Label className="noBottonMargin">Repeats every</Form.Label>
            </div>

            <div className="col-3 col-md-1">
              <Form.Control type="number" />
            </div>
            <div className="col-4 col-md-2">
              <Form.Control as="select" custom>
                <option>days</option>
                <option>weeks</option>
                <option>months</option>
                <option>years</option>
              </Form.Control>

            </div>
            <div className="col-12 col-md-6 align-self-center">
              <Form.Label className="noBottonMargin">after the task has been completed</Form.Label>
            </div>

          </Form.Row>
          <Form.Row className="customRow">
            <Form.Check type="radio" name="repeatChoice" className="align-self-center" />
            <div className="col-4 col-md-2 align-self-center">
              <Form.Label className="noBottonMargin">Repeats every</Form.Label>
            </div>
            <div className="col-3 col-md-1">
              <Form.Control type="number" />
            </div>
            <div className="col-4 col-md-2 align-self-center">
              <Form.Label className="noBottonMargin">weeks on</Form.Label>
            </div>
            <div className="col-12 col-md-6 align-self-center">
              <div className="row">
                {["M", "T", "W", "T", "F", "S", "S"].map((day,i) => (                 
                    <Form.Check key={i} inline label={day} />                  
                ))}
              </div>
            </div>
          </Form.Row>
        </Form>
        </Card.Body>
      </Collapse>
    </Card >
  );
}

export default AddTask;
