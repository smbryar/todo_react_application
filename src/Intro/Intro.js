import React from 'react';
import './Intro.css';

function Intro(props) {
    return (
        <div className="card-header rounded intro">
            <h4>You have n tasks to complete today out of {props.count} unfinished tasks.</h4>
        </div>
    );
}

export default Intro;
