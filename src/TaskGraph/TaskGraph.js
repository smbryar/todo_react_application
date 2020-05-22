import React from 'react';
import { ResponsiveLine } from '@nivo/line';

import CustomTooltip from './CustomTooltip';

import './TaskGraph.css';

function TaskGraph(props) {

  const theme = {
    fontSize: 14,
    fontFamily: "Verdana, Arial, sans-serif"
  };

  const data = props.tasks.filter(task => task.completed === false).map(task => {
    let newTask = {};
    newTask.id = task.id;
    let startData = {};
    startData.x = task.startDate;
    startData.y = task.name;
    let endData = {};
    endData.x = task.endDate;
    endData.y = task.name;
    newTask.data = [startData, endData];
    return newTask;
  })

  function handleGraphClick(Point) {
    const id = Point.id.slice(0, -2);
    props.setPage("Tasks");
    props.openFromGraphId(id);
  }

  // Using code from tylercrosse https://github.com/plouc/nivo/issues/353
  const HorizontalTick = ({ textAnchor, textBaseline, value, x, y }) => {
    const MAX_LINE_LENGTH = 16;
    const MAX_LINES = 2;
    const LENGTH_OF_ELLIPSIS = 3;
    const TRIM_LENGTH = MAX_LINE_LENGTH * MAX_LINES - LENGTH_OF_ELLIPSIS;
    const trimWordsOverLength = new RegExp(`^(.{${TRIM_LENGTH}}[^\\w]*).*`);
    const groupWordsByLength = new RegExp(
      `([^\\s].{0,${MAX_LINE_LENGTH}}(?=[\\s\\W]|$))`,
      'gm',
    );
    const splitValues = value
      .replace(trimWordsOverLength, '$1...')
      .match(groupWordsByLength)
      .slice(0, 2)
      .map((val, i) => (
        <tspan
          key={val}
          dy={16 * i}
          x={-15}
          style={{ fontFamily: "Verdana, Arial, sans-serif", fontSize: "14px" }}
        >
          {val}
        </tspan>
      ));
    return (
      <g transform={`translate(${x},${y})`}>
        <text alignmentBaseline={textBaseline} textAnchor={textAnchor}>
          {splitValues}
        </text>
      </g>
    );
  };

  return (
    <ResponsiveLine className="graph" style={{cursor:"crosshair"}}
      data={data}
      margin={{ top: 70, right: 20, bottom: 70, left: 150 }}
      xScale={{
        type: "time",
        format: "%Y-%m-%d"
      }}
      xFormat="time:%Y-%m-%d"
      yScale={{
        type: "point"
      }}
      axisTop={null}
      axisRight={null}
      axisLeft={{
        renderTick: HorizontalTick
      }}
      axisBottom={{
        format: "%b %d",
        tickRotation: -45,
        tickPadding: 15
      }}
      theme={theme}
      colors={{ scheme: "accent" }}
      lineWidth={20}
      pointSize={20}
      enableGridX={true}
      enableGridY={true}
      tooltip={CustomTooltip}
      useMesh={true}
      onClick={handleGraphClick}
      enableCrosshair={false}
    />
  );
}

export default TaskGraph;


