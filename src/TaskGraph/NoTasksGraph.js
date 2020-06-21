import React from 'react';
import {Container, Image} from 'react-bootstrap';


function NoTasksGraph(props) {
  return (
    <Container fluid="lg">
        <h3 style = {{textAlign: "center"}}>Start adding tasks to see them displayed here, like the example below.</h3>
        <Image src={require(`./Example_Task_Graph.jpg`)} fluid/>
    </Container>
  );
}

export default NoTasksGraph;


