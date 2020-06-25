import React from 'react';
import { Col } from 'react-bootstrap';

function NoDayPlanList(props) {
    return (
        <Col xs={12} lg={8} className="py-2">
            <h1 className="h3 mb-3 font-weight-normal">Today's Task Plan</h1>
            <h2 className="h5 font-weight-normal">Select tasks to start building your day plan</h2>
        </Col>
    );
}

export default NoDayPlanList;
