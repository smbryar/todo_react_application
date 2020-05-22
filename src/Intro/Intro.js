import React from 'react';
import moment from 'moment';
import { Card } from 'react-bootstrap';

import './Intro.css';

function Intro(props) {
    const tasksDueToday = props.tasks.filter(t=>t.endDate === moment().format("YYYY-MM-DD")).length;
    const tasksNotCompleted = props.tasks.filter(t=>t.completed === false).length;

    return (
        <Card.Header className="intro" tabIndex="0">
            <h4>You have {tasksDueToday} task{tasksDueToday === 1? "":"s"} to complete today out of {tasksNotCompleted} unfinished task{tasksNotCompleted === 1? "":"s"}</h4>
        </Card.Header>
    );
}

export default Intro;