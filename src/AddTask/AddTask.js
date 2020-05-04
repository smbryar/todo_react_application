import React from 'react';
import ButtonItem, { AddIcon } from '../ButtonItem/ButtonItem'
import './AddTask.css';

function AddTask(props) {
  return (
        <div className="card-header container-fluid rounded add-task">
          <div className="row">
            
            <div className="col-11">
              <form>
                <div className="form-group">
                  <label for="task-name">Add new task</label>
                  <input type="text" className="form-control" id="task-name"
                    placeholder="Name your next task" />
                </div>
              </form>
            </div>
            
            <div className="col-1">
                <ButtonItem type="submit">
                  <AddIcon squareHeight="1.5em"/>
                </ButtonItem>
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
  );
}

export default AddTask;
