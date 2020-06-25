import React from 'react';
import { ResponsiveLine } from '@nivo/line';
import { withRouter } from 'react-router-dom';
import moment from 'moment';
import { Container } from 'react-bootstrap';

import CustomTooltip from './CustomTooltip';

import './TaskGraph.css';

function TaskGraph(props) {

  const theme = {
    fontSize: 14,
    fontFamily: "Verdana, Arial, sans-serif"
  };  

  const data = [{id:"Today", data:[{x:moment().format("YYYY-MM-DD"),y:"Today"}, {x:moment().format("YYYY-MM-DD"),y:"Today"}]}];

  data.push(...props.tasks.filter(task => !task.completed).map(task => {
    let newTask = {};
    newTask.id = task.taskID;
    let startData = {};
    startData.x = moment(task.startDate).format("YYYY-MM-DD");
    startData.y = task.name;
    let endData = {};
    endData.x = moment(task.endDate).format("YYYY-MM-DD");
    endData.y = task.name;
    newTask.data = [startData, endData];
    return newTask;
  }));

  function handleGraphClick(Point) {
    const id = Point.id.slice(0, -2);
    if (id==="Today") {
      props.history.push("/todo_react_application/day-plan")
    }
    else {
      props.openFromGraphId(id);
      props.history.push("/todo_react_application/");
    }
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
    <Container fluid="lg" style={{ height: window.innerHeight - 125 < 600 ? window.innerHeight - 125 : 600 }}>
      <ResponsiveLine className="graph" style={{ cursor: "crosshair" }}
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
    </Container>
  );
}

export default withRouter(TaskGraph);


