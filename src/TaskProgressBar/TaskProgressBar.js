import React from 'react';
import './TaskProgressBar.css';

function TaskProgressBar(props) {
  const width = props.percentageCompletion;
  let colour1 = "rgb(0,128,0)"
  let colour2, colour3, colourRange;

  if (width <= 50) {
    let red2 = 255 * width / 50;
    let green2 = 128 + 127 * width / 50;
    colour2 = `rgb(${red2},${green2},0)`;
    colourRange = `${colour1},${colour2}`;
  }

  if (width >= 50) {
    let red2 = 255*width/(2*50);
    let green2 = 128 + 127 * width / (2*50);
    colour2 = `rgb(${red2},${green2},0)`;
    let green3 = 255 - 255 * (width - 50) / 50;
    colour3 = `rgb(255,${green3},0)`;
    colourRange = `${colour1},${colour2},${colour3}`;
  }

  return (
    <div className="progress">
      <div className="progress-bar" role="progressbar" style={{ backgroundImage: `linear-gradient(to right,${colourRange})`, width: `${width}%` }} aria-valuenow={props.percentageCompletion} aria-valuemin="0" aria-valuemax="100" aria-label="Percentage of way through time allocated for task"></div>
    </div>
  )
}

export default TaskProgressBar;
