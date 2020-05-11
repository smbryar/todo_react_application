import React from 'react';
import Intro from '../Intro/Intro';
import './DetailDisplay.css';

function DetailDisplay(props) {
    return (
        <div className="d-none d-lg-block col-lg-4 ">
            <div className="mx-2">
            <div className="row my-2">
                    <Intro tasks = {props.tasks}/>
                </div>                
                <div className="row my-2">
                    <div className="card-header rounded detail-display">
                        <h4>Side detail display.</h4>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailDisplay;