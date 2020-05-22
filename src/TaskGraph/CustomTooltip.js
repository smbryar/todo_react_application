import React from 'react';
import moment from 'moment';
import './CustomTooltip.css';
import tinycolor from 'tinycolor2';

function CustomTooltip(props) {  
  return (
        <div className="tooltip--container" style={{backgroundColor: `${tinycolor(props.point.serieColor).lighten(15).toString()}`}}>
            {props.point.data.y} <br/>
            {props.point.id.endsWith("0") && "Start: "}            
            {props.point.id.endsWith("1") && "Due: "}
            {moment(props.point.data.x).format("MMM DD")}
        </div>
        )      
}

export default CustomTooltip;


