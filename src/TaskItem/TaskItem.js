import React from 'react';
import ButtonItem, { CheckboxIcon, DeleteIcon } from '../ButtonItem/ButtonItem';
import './TaskItem.css';

function TaskItem(props) {
  return (
    <div className="card-header container-fluid rounded task-item">
      <div className="row">
        <div className="col-10">
          <h3>{props.name}</h3>
        </div>
        <div className="col-2">
          <div className="btn-group">
          <ButtonItem>
            <CheckboxIcon squareHeight="1.5em" />
          </ButtonItem>
          <ButtonItem>
            <DeleteIcon squareHeight="1.3em" />
          </ButtonItem>
          </div>
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
    </div>
  );
}

export default TaskItem;
