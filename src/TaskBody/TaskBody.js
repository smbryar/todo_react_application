import React from 'react';
import './TaskBody.css';

function TaskBody(props) {
    return (
        <div className="task-body">
            {!props.completed &&
                <div className="row">
                    <div className="col-6">
                        <h5>Start: {props.startDate}</h5>
                    </div>
                    <div className="col-6 text-right">
                        <h5>Due: {props.endDate}</h5>
                    </div>

                </div>}
            {props.completed && <h5>Completed: {props.completeDate}</h5>}
            <div className="row">
                <div className="col">
                    <h6>{props.taskDetails}</h6>
                </div>
            </div>
            {props.repeats &&
                <div className="row">
                    <div className="col">
                        <h6>This task repeats every...</h6>
                    </div>
                </div>
            }
        </div>
    );
}

export default TaskBody;
