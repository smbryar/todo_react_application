import React from 'react';
import { ResponsiveLine } from '@nivo/line';

import CustomSliceTooltip from './CustomSliceTooltip';

import './TaskGraph.css';

function getStartDate(tasks, taskName) {
  return tasks.find(task => task.name === taskName).startDate;
}

function getEndDate(tasks, taskName) {
  return tasks.find(task => task.name === taskName).endDate;
}

function TaskGraph(props) {
  const lineGraphSettings = {
    theme: {
      fontSize: "1em",
      fontFamily: "Verdana, Arial, sans-serif"
    },
  };

  const data = 
    [
    {
      id: "Tidying",
      data: [
        { x: `${getStartDate(props.tasks, "Tidying")}`, y: "Tidying" },
        { x: `${getEndDate(props.tasks, "Tidying")}`, y: "Tidying" }
      ]
    },
    {
      id: "Cleaning",
      data: [
        { x: `${getStartDate(props.tasks, "Cleaning")}`, y: "Cleaning" },
        { x: `${getEndDate(props.tasks, "Cleaning")}`, y: "Cleaning" }
      ]
    },
    {
      id: "Hoovering",
      data: [
        { x: `${getStartDate(props.tasks, "Hoovering")}`, y: "Hoovering" },
        { x: `${getEndDate(props.tasks, "Hoovering")}`, y: "Hoovering" }
      ]
    }
  ]

  return (
    <ResponsiveLine className="graph"
      data={data}
      margin={{ top: 20, right: 20, bottom: 70, left: 100 }}
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
        orient: 'left',
        tickPadding: 15,
        tickRotation: 0,

      }}
      axisBottom={{
        format: "%b %d",
        tickRotation: -45,
        tickPadding: 15
      }}
      theme={lineGraphSettings.theme}
      colors={{ scheme: "accent" }}
      lineWidth={20}
      pointSize={0}
      enableGridX={true}
      enableGridY={true}
      enableSlices="y"
      sliceTooltip={CustomSliceTooltip}
    />
  );
}

export default TaskGraph;


