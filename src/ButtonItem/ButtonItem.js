import React from 'react';
import ReactTooltip from 'react-tooltip';

import './ButtonItem.css';

function ButtonItem (props) {
  return (
    <>
    <button {...props} className="btn" data-tip data-for={props.tooltip}>{props.children}</button>
    <ReactTooltip id={props.tooltip} effect="solid">{props.tooltip}</ReactTooltip>
    </>
  )
} 

export function CheckboxIcon(props) {
  return (
    <svg className="bi bi-check-box" width={props.squareHeight} height={props.squareHeight} viewBox="0 0 16 16"
      fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd"
        d="M15.354 2.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3-3a.5.5 0 11.708-.708L8 9.293l6.646-6.647a.5.5 0 01.708 0z"
        clipRule="evenodd" />
      <path fillRule="evenodd"
        d="M1.5 13A1.5 1.5 0 003 14.5h10a1.5 1.5 0 001.5-1.5V8a.5.5 0 00-1 0v5a.5.5 0 01-.5.5H3a.5.5 0 01-.5-.5V3a.5.5 0 01.5-.5h8a.5.5 0 000-1H3A1.5 1.5 0 001.5 3v10z"
        clipRule="evenodd" />
    </svg>
  );
}

export function DeleteIcon(props) {
  return (
    <svg className="bi bi-x-square" width={props.squareHeight} height={props.squareHeight} viewBox="0 0 16 16"
      fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd"
        d="M14 1H2a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V2a1 1 0 00-1-1zM2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2z"
        clipRule="evenodd" />
      <path fillRule="evenodd"
        d="M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z"
        clipRule="evenodd" />
      <path fillRule="evenodd"
        d="M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z"
        clipRule="evenodd" />
    </svg>
  )
}

export function AddIcon(props) {
  return (
    <svg className="bi bi-plus-circle" width={props.squareHeight} height={props.squareHeight} viewBox="0 0 16 16"
      fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd"
        d="M8 3.5a.5.5 0 01.5.5v4a.5.5 0 01-.5.5H4a.5.5 0 010-1h3.5V4a.5.5 0 01.5-.5z"
        clipRule="evenodd" />
      <path fillRule="evenodd"
        d="M7.5 8a.5.5 0 01.5-.5h4a.5.5 0 010 1H8.5V12a.5.5 0 01-1 0V8z"
        clipRule="evenodd" />
      <path fillRule="evenodd"
        d="M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z"
        clipRule="evenodd" />
    </svg>
  )
}

export function RepeatIcon(props) {
  return (
    <svg className="bi bi-arrow-clockwise" width={props.squareHeight} height={props.squareHeight} viewBox="0 0 16 16"
      fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd"
        d="M3.17 6.706a5 5 0 017.103-3.16.5.5 0 10.454-.892A6 6 0 1013.455 5.5a.5.5 0 00-.91.417 5 5 0 11-9.375.789z"
        clipRule="evenodd" />
      <path fillRule="evenodd"
        d="M8.147.146a.5.5 0 01.707 0l2.5 2.5a.5.5 0 010 .708l-2.5 2.5a.5.5 0 11-.707-.708L10.293 3 8.147.854a.5.5 0 010-.708z"
        clipRule="evenodd" />
    </svg>
  )
}

export default ButtonItem;
