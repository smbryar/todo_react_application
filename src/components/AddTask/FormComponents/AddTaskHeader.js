import React from 'react';

import { AddIcon } from '../../ButtonItem/Icons';
import { Card} from 'react-bootstrap';

import '../AddTask.css';

function AddTaskHeader(props) {
    return (
        <Card.Header
            tabIndex="0"
            as="h4"
            aria-controls="add-task-contents"
            aria-expanded={props.open}
            style={{cursor: "pointer"}}
            onClick={() => props.setOpen(!props.open)}
            onKeyPress={(target) => target.charCode === 13 ? props.setOpen(!props.open) : null}
        >
            <div className="row">
                <div className="col-10 align-self-center"
                    >
                    Add Task
          </div>
                <div className="col-2">
                    <div className="float-right">
                        <AddIcon squareHeight="1.2em" />
                    </div>
                </div>
            </div>
        </Card.Header>
    )
}

export default AddTaskHeader;