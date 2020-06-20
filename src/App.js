import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';

import Header from './Header/Header';
import TaskList from './TaskList/TaskList';
import TaskGraph from './TaskGraph/TaskGraph';

import './App.css';

function App() {
  // listen for use of mouse
  document.body.addEventListener('mousedown', function() {
    document.body.classList.add('using-mouse');
  });

  // listen for use of tab
  document.body.addEventListener('keydown', function(event) {
    if (event.keyCode === 9) {
      document.body.classList.remove('using-mouse');   
    }
  });

  const [tasks, setTasks] = useState();

  useEffect(() => {
    axios
      .get("https://3f77y34kad.execute-api.eu-west-2.amazonaws.com/dev/tasks")
      .then(response => {
        let updatedTasks = response.data.tasks.map(task => {
          task.percentageCompletion = calculatePercentageCompletion(task.startDate, task.endDate);
          task.cardOpen = false;
          return task;
        })
        setTasks(updatedTasks);
      })
      .catch(error => {
        console.log("Error fetching data", error);
      })
  },[]);

  function deleteTask(taskID) {
    axios
      .delete(`https://3f77y34kad.execute-api.eu-west-2.amazonaws.com/dev/tasks/${taskID}`)
      .then(response => {
        const updatedTasks = tasks.filter(task => task.taskID !== taskID);
        setTasks(updatedTasks);
      })
      .catch(error => {
        console.log("Error fetching data", error);
      })
  };

  function calculatePercentageCompletion(startDate, endDate) {
    const now = moment().valueOf();
    const start = moment(startDate, "YYYY-MM-DD").valueOf();
    const end = moment(endDate, "YYYY-MM-DD").valueOf();
    const percentageCompletion = ((now - start) / (end - start)) * 100;
    if (percentageCompletion < 0) return 0;
    return isFinite(percentageCompletion) ? percentageCompletion : 100;
  }

  function addTask(name, taskDetails, startDate, endDate, repeats, repeatType, repeatAfterCompletionFrequency,
    repeatAfterCompletionFrequencyType) {
    const newTask = {
      userID: 1,
      name,
      taskDetails,
      startDate,
      endDate,
      repeats,
      repeatType,
      repeatAfterCompletionFrequency,
      repeatAfterCompletionFrequencyType,
      completed: false,
      percentageCompletion: calculatePercentageCompletion(startDate, endDate),
      cardOpen: false
    };

    axios
      .post("https://3f77y34kad.execute-api.eu-west-2.amazonaws.com/dev/tasks", newTask)
      .then(response => {
        newTask.taskID = response.data.newTask[0].taskID;
        const updatedTasks = [...tasks, newTask];
        setTasks(updatedTasks);
      })
      .catch(error => {
        console.log("Error fetching data", error);
      })    
  };

  function completeTask(taskID) {
    const updatedTask = tasks.find(task => task.taskID === taskID);

    if (!updatedTask.repeats) {
      updatedTask.completed = true;
      updatedTask.completeDate = moment().format("YYYY-MM-DD");
    }
    else if (updatedTask.repeatType === "repeatsAfterCompletion") {
      updatedTask.endDate = moment().add(updatedTask.repeatAfterCompletionFrequency, updatedTask.repeatAfterCompletionFrequencyType).format("YYYY-MM-DD");
      updatedTask.startDate = moment().format("YYYY-MM-DD");
    }

    axios
      .put(`https://3f77y34kad.execute-api.eu-west-2.amazonaws.com/dev/tasks/${taskID}`, updatedTask)
      .then(response => {
        const updatedTasks = [...tasks].map(task => task.taskID === taskID ? updatedTask : task);
        setTasks(updatedTasks);
      })
      .catch(error => {
        console.log("Error fetching data", error);
      })
  }

  function openTaskCard(taskID) {
    const updatedTasks = tasks.map(task => {
      if (task.taskID === taskID) {task.cardOpen = !task.cardOpen}
      return task
    })
    setTasks(updatedTasks)
  }

  function openFromGraphId(taskID) {
    const updatedTasks = tasks.map(task => {
      if (task.taskID === taskID) {task.cardOpen = true}
      else {task.cardOpen = false}
      return task
    })
    setTasks(updatedTasks);
  }

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/graph">
            <Container fluid="lg" style={{ height: window.innerHeight - 125 < 600 ? window.innerHeight - 125 : 600 }}>
              <TaskGraph tasks={tasks} openFromGraphId={openFromGraphId}></TaskGraph>
            </Container>
          </Route>
          <Route path="/">
            <Container fluid="lg">
              <TaskList addTask={addTask} completeTask={completeTask} deleteTask={deleteTask} tasks={tasks} openFromGraphId={openFromGraphId} openTaskCard={openTaskCard}/>
            </Container>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;