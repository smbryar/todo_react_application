import React from 'react';
import { ResponsiveLine } from '@nivo/line';
import { withRouter } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import CustomTooltip from './CustomTooltip';
import createGraphData from 'components/TaskGraph/createGraphData';
import HorizontalTick from 'components/TaskGraph/HorizontalTick';

import './TaskGraph.css';

function TaskGraph(props) {

  const theme = {
    fontSize: 14,
    fontFamily: "Verdana, Arial, sans-serif"
  }; 

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

  return (
    <Container fluid="lg" style={{ height: window.innerHeight - 125 < 600 ? window.innerHeight - 125 : 600 }}>
      <ResponsiveLine className="graph" style={{ cursor: "crosshair" }}
        data={createGraphData(props.tasks)}
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


