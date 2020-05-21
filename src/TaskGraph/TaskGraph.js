import React from 'react';
import { ResponsiveLine } from '@nivo/line';

import CustomSliceTooltip from './CustomSliceTooltip';

import './TaskGraph.css';

function TaskGraph(props) {
  
  const theme = {
      fontSize: "1em",
      fontFamily: "Verdana, Arial, sans-serif"
  };

  const data = props.tasks.map(task => {
    let newTask = {};
    newTask.id = task.name;
    let startData = {};
    startData.x = task.startDate;
    startData.y = task.name;
    let endData = {};
    endData.x = task.endDate;
    endData.y = task.name;
    newTask.data = [startData,endData];
    return newTask;
  })

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
        tickRotation: 0
      }}
      axisBottom={{
        format: "%b %d",
        tickRotation: -45,
        tickPadding: 15
      }}
      theme={theme}
      colors={{ scheme: "accent" }}
      lineWidth={20}
      enablePoints={false}
      enableGridX={true}
      enableGridY={true}
      enableSlices="y"
      sliceTooltip={CustomSliceTooltip}
    />
  );
}

export default TaskGraph;


