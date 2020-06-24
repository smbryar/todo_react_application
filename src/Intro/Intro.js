import React from 'react';
import moment from 'moment';
import { Card } from 'react-bootstrap';

import './Intro.css';

function Intro(props) {

    const tasksDueToday = props.tasks && props.tasks.filter(t=>!t.completed && t.endDate.substring(0,10) === moment().format("YYYY-MM-DD")).length;
    const tasksNotCompleted = props.tasks && props.tasks.filter(t=>t.completed === 0).length;

    return (        
        <Card.Header className="intro" tabIndex="0">
            <h4>Hello {props.userGreeting}, you have {tasksDueToday} task{tasksDueToday === 1? "":"s"} to complete today out of {tasksNotCompleted} unfinished task{tasksNotCompleted === 1? "":"s"}</h4>
        </Card.Header>
    );
}

export default Intro;
