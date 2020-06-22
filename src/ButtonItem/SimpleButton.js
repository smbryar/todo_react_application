import React from 'react';

import './SimpleButton.css';


function SimpleButton (props) {
  return (
    <button className={`simple-button-${props.variant} simple-button btn btn-block mt-3 ${props.disabled ? "disabled":""}`} onClick={props.onClick}>{props.children}</button>
  )
}


export default SimpleButton;
