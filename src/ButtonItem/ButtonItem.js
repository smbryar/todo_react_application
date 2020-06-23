import React from 'react';

import './ButtonItem.css';

function ButtonItem(props) {
  return (
    <button {...props} className="btn">{props.children}</button>
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

export function ListDeleteIcon(props) {
  return (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 226.772 226.772" width={props.squareHeight} height={props.squareHeight}><defs><path d="M176.72 13.87L177.51 13.95L178.29 14.06L179.06 14.2L179.82 14.37L180.57 14.57L181.3 14.8L182.03 15.05L182.73 15.34L183.43 15.65L184.11 15.98L184.77 16.35L185.42 16.73L186.06 17.14L186.67 17.57L187.27 18.03L187.85 18.51L188.41 19.01L188.95 19.53L189.47 20.07L189.97 20.63L190.45 21.21L190.91 21.81L191.34 22.43L191.75 23.06L192.14 23.71L192.5 24.37L192.83 25.05L193.14 25.75L193.43 26.46L193.68 27.18L193.91 27.91L194.11 28.66L194.28 29.42L194.42 30.19L194.54 30.97L194.62 31.76L194.66 32.56L194.68 33.36L194.68 117.72L193.67 117.12L191.74 116.07L189.77 115.1L187.76 114.2L185.7 113.38L183.61 112.63L181.48 111.97L179.32 111.39L177.12 110.89L174.89 110.48L172.63 110.16L170.35 109.93L168.03 109.79L165.7 109.74L163.36 109.79L161.05 109.93L158.77 110.16L156.51 110.48L154.28 110.89L152.08 111.39L149.92 111.97L147.79 112.63L145.69 113.38L143.64 114.2L141.63 115.1L139.65 116.07L137.73 117.12L135.85 118.24L134.01 119.43L132.23 120.68L130.49 122.01L128.81 123.39L127.19 124.84L125.62 126.35L124.11 127.92L122.66 129.55L121.27 131.23L119.95 132.96L118.69 134.75L117.51 136.58L116.39 138.46L115.34 140.39L114.36 142.36L113.46 144.37L112.64 146.43L111.9 148.52L111.24 150.65L110.66 152.82L110.16 155.01L109.75 157.24L109.43 159.5L109.19 161.79L109.05 164.1L109.01 166.43L109.05 168.77L109.19 171.08L109.43 173.37L109.75 175.62L110.16 177.85L110.66 180.05L111.24 182.22L111.9 184.34L112.64 186.44L113.46 188.49L114.36 190.51L115.34 192.48L116.06 193.8L34.24 193.8L33.44 193.78L32.64 193.74L31.85 193.66L31.07 193.54L30.3 193.4L29.54 193.23L28.79 193.03L28.06 192.8L27.34 192.55L26.63 192.26L25.93 191.95L25.25 191.62L24.59 191.26L23.94 190.87L23.3 190.46L22.69 190.03L22.09 189.57L21.51 189.09L20.95 188.59L20.41 188.07L19.89 187.53L19.39 186.97L18.91 186.39L18.45 185.79L18.02 185.18L17.61 184.54L17.23 183.89L16.86 183.23L16.53 182.55L16.22 181.85L15.93 181.15L15.68 180.42L15.45 179.69L15.25 178.94L15.08 178.18L14.94 177.41L14.83 176.63L14.75 175.84L14.7 175.05L14.68 174.24L14.68 33.36L14.7 32.56L14.75 31.76L14.83 30.97L14.94 30.19L15.08 29.42L15.25 28.66L15.45 27.91L15.68 27.18L15.93 26.46L16.22 25.75L16.53 25.05L16.86 24.37L17.23 23.71L17.61 23.06L18.02 22.43L18.45 21.81L18.91 21.21L19.39 20.63L19.89 20.07L20.41 19.53L20.95 19.01L21.51 18.51L22.09 18.03L22.69 17.57L23.3 17.14L23.94 16.73L24.59 16.35L25.25 15.98L25.93 15.65L26.63 15.34L27.34 15.05L28.06 14.8L28.79 14.57L29.54 14.37L30.3 14.2L31.07 14.06L31.85 13.95L32.64 13.87L33.44 13.82L34.24 13.8L175.12 13.8L175.93 13.82L176.72 13.87Z" id="b92DkvElzO"></path><path d="M58.09 62.42C58.09 67.94 53.6 72.42 48.09 72.42C42.57 72.42 38.09 67.94 38.09 62.42C38.09 56.9 42.57 52.42 48.09 52.42C53.6 52.42 58.09 56.9 58.09 62.42Z" id="b4FGfu3EoI"></path><path d="M58.09 97.42C58.09 102.94 53.6 107.42 48.09 107.42C42.57 107.42 38.09 102.94 38.09 97.42C38.09 91.9 42.57 87.42 48.09 87.42C53.6 87.42 58.09 91.9 58.09 97.42Z" id="dmgZhuvUK"></path><path d="M58.09 132.42C58.09 137.94 53.6 142.42 48.09 142.42C42.57 142.42 38.09 137.94 38.09 132.42C38.09 126.9 42.57 122.42 48.09 122.42C53.6 122.42 58.09 126.9 58.09 132.42Z" id="a1DOKA8Ibz"></path><path d="M150.66 57.42C153.3 57.42 155.45 59.56 155.45 62.21C155.45 63.17 155.45 61.25 155.45 62.21C155.45 64.85 153.3 67 150.66 67C135.62 67 95.28 67 80.23 67C77.59 67 75.45 64.85 75.45 62.21C75.45 61.25 75.45 63.17 75.45 62.21C75.45 59.56 77.59 57.42 80.23 57.42C95.28 57.42 135.62 57.42 150.66 57.42Z" id="c28AxDqoQo"></path><path d="M140.66 92.42C143.3 92.42 145.45 94.56 145.45 97.21C145.45 98.17 145.45 96.25 145.45 97.21C145.45 99.85 143.3 102 140.66 102C127.62 102 93.28 102 80.23 102C77.59 102 75.45 99.85 75.45 97.21C75.45 96.25 75.45 98.17 75.45 97.21C75.45 94.56 77.59 92.42 80.23 92.42C93.28 92.42 127.62 92.42 140.66 92.42Z" id="bqYnaTyHU"></path><path d="M107.91 127.42C109.31 127.42 110.45 128.56 110.45 129.96C110.45 131.37 110.45 133.05 110.45 134.45C110.45 135.86 109.31 136.99 107.91 136.99C101.41 136.99 84.48 136.99 77.99 136.99C76.58 136.99 75.45 135.86 75.45 134.45C75.45 133.05 75.45 131.37 75.45 129.96C75.45 128.56 76.58 127.42 77.99 127.42C84.48 127.42 101.41 127.42 107.91 127.42Z" id="a71ceKizCq"></path><path d="M192.71 188.56C194.84 190.68 194.84 194.13 192.71 196.25C191.64 197.32 192.28 196.68 191.22 197.75C189.09 199.87 185.64 199.87 183.52 197.75C173.68 187.91 148.02 162.25 138.18 152.41C136.06 150.29 136.06 146.84 138.18 144.72C139.25 143.65 138.61 144.29 139.68 143.22C141.8 141.1 145.25 141.1 147.38 143.22C157.21 153.06 182.87 178.72 192.71 188.56Z" id="aOXryVz0X"></path><path d="M220.45 166.68C220.45 196.98 195.8 221.59 165.45 221.59C135.09 221.59 110.45 196.98 110.45 166.68C110.45 136.37 135.09 111.77 165.45 111.77C195.8 111.77 220.45 136.37 220.45 166.68Z" id="a2MuRFIqIR"></path><path d="M147.38 197.75C145.25 199.87 141.8 199.87 139.68 197.75C138.61 196.68 139.25 197.32 138.18 196.25C136.06 194.13 136.06 190.68 138.18 188.56C148.02 178.72 173.68 153.06 183.52 143.22C185.64 141.1 189.09 141.1 191.22 143.22C192.28 144.29 191.64 143.65 192.71 144.72C194.84 146.84 194.84 150.29 192.71 152.41C182.87 162.25 157.21 187.91 147.38 197.75Z" id="cnNdDSLRO"></path></defs><g><g><g><use xlinkHref="#b92DkvElzO" opacity="1" fill="#000000" fill-opacity="0"></use><g><use xlinkHref="#b92DkvElzO" opacity="1" fill-opacity="0" stroke="#000000" stroke-width="10" stroke-opacity="1"></use></g></g><g><use xlinkHref="#b4FGfu3EoI" opacity="1" fill="#000000" fill-opacity="0.99"></use></g><g><use xlinkHref="#dmgZhuvUK" opacity="1" fill="#000000" fill-opacity="0.99"></use></g><g><use xlinkHref="#a1DOKA8Ibz" opacity="1" fill="#000000" fill-opacity="0.99"></use></g><g><use xlinkHref="#c28AxDqoQo" opacity="1" fill="#000000" fill-opacity="1"></use></g><g><use xlinkHref="#bqYnaTyHU" opacity="1" fill="#000000" fill-opacity="1"></use></g><g><use xlinkHref="#a71ceKizCq" opacity="1" fill="#000000" fill-opacity="1"></use></g><g><use xlinkHref="#aOXryVz0X" opacity="1" fill="#000000" fill-opacity="1"></use></g><g><g><filter id="shadow5582260" x="101.45" y="102.77" width="129" height="128.82" filterUnits="userSpaceOnUse" primitiveUnits="userSpaceOnUse"><feFlood></feFlood><feComposite in2="SourceAlpha" operator="in"></feComposite><feGaussianBlur stdDeviation="1"></feGaussianBlur><feOffset dx="1" dy="1" result="afterOffset"></feOffset><feFlood flood-color="#000000" flood-opacity="0.5"></feFlood><feComposite in2="afterOffset" operator="in"></feComposite><feMorphology operator="dilate" radius="1"></feMorphology><feComposite in2="SourceAlpha" operator="out"></feComposite></filter><path d="M220.45 166.68C220.45 196.98 195.8 221.59 165.45 221.59C135.09 221.59 110.45 196.98 110.45 166.68C110.45 136.37 135.09 111.77 165.45 111.77C195.8 111.77 220.45 136.37 220.45 166.68Z" id="cobvpoTIR" fill="white" fill-opacity="1" filter="url(#shadow5582260)"></path></g><use xlinkHref="#a2MuRFIqIR" opacity="1" fill="#000000" fill-opacity="0"></use><g><use xlinkHref="#a2MuRFIqIR" opacity="1" fill-opacity="0" stroke="#000000" stroke-width="10" stroke-opacity="1"></use></g></g><g><use xlinkHref="#cnNdDSLRO" opacity="1" fill="#000000" fill-opacity="1"></use></g></g></g></svg>
  )
}

export default ButtonItem;
