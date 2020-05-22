import React, { useState } from 'react';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import { Container } from 'react-bootstrap';
import { Router, Switch, Route } from 'react-router-dom';

import TaskList from '../TaskList/TaskList';
import TaskGraph from '../TaskGraph/TaskGraph';
import history from './history';

function Routes(props) {
    return (
        <Router history={history}>
      <Switch>
        <Route path="/TaskList">
          <Container fluid="lg">
            <TaskList addTask={props.addTask} completeTask={props.completeTask} deleteTask={props.deleteTask} tasks={props.tasks} />
          </Container>
        </Route>
        <Route path="/TaskGraph">
          <Container fluid="lg" style={{ height: window.innerHeight - 125 < 600 ? window.innerHeight - 125 : 600 }}>
            <TaskGraph tasks={props.tasks}></TaskGraph>
          </Container>}
      </Route>
      </Switch>
      </Router>
  );
}

export default Routes;