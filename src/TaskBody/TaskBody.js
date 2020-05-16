import React from 'react';
import moment from 'moment';
import './TaskBody.css';

function TaskBody(props) {
    return (
        <div className="task-body">
            {!props.completed &&
                <div className="row">
                    <div className="col-6">
                        <h5>Start: {moment(props.startDate).format("DD/MM/YYYY")}</h5>
                    </div>
                    <div className="col-6 text-right">
                        <h5>Due: {moment(props.endDate).format("DD/MM/YYYY")}</h5>
                    </div>

                </div>}
            {props.completed && <h5>Completed: {moment(props.completeDate).format("DD/MM/YYYY")}</h5>}
            <div className="row">
                <div className="col">
                    <h6>{props.taskDetails}</h6>
                </div>
            </div>
            {props.repeats &&
                <div className="row">
                    <div className="col">
                        <h6>This task repeats every {props.repeatFrequency} {props.repeatFrequencyType}.</h6>
                    </div>
                </div>
            }
        </div>
    );
}

export default TaskBody;
