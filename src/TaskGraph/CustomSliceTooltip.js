import React from 'react';
import moment from 'moment';
import './CustomSliceTooltip.css';
import tinycolor from 'tinycolor2';

function CustomSliceTooltip(props) {  
  return (
        <div className="tooltip--container" style={{backgroundColor: `${tinycolor(props.slice.points[0].serieColor).lighten(15).toString()}`}}>
            {props.slice.points[0].serieId} <br/>
            {moment(props.slice.points[1].data.x).format("MMM DD")} - {moment(props.slice.points[0].data.x).format("MMM DD")}
        </div>
        )      
}

export default CustomSliceTooltip;


