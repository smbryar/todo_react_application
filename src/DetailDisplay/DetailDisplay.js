import React from 'react';
import './DetailDisplay.css';

function DetailDisplay() {
    return (
        <div className="d-none d-lg-block col-lg-6 ">
            <div className="mx-2">
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
