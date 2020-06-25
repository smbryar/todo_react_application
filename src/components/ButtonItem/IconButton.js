import React from 'react';
import ReactTooltip from 'react-tooltip';

function IconButton(props) {
  return (
    <>
    <button {...props} className="btn" data-tip data-for={props.tooltip}>{props.children}</button>
    <ReactTooltip id={props.tooltip} effect="solid">{props.tooltip}</ReactTooltip>
    </>
  )
}

export default IconButton;
