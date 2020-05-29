import React, { useState } from 'react';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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

  const [tasks, setTasks] = useState([
    {
      id: uuidv4(),
      name: "Tidying",
      taskDetails: "Sort through paperwork",
      startDate: "2020-06-06",
      endDate: "2020-06-11",
      percentageCompletion: 20,
      completed: false,
      repeats: false,
      cardOpen: false
    },
    {
      id: uuidv4(),
      name: "Cleaning",
      taskDetails: "Clean bathrooms",
      startDate: "2020-06-05",
      endDate: "2020-06-10",
      percentageCompletion: 60,
      completed: false,
      repeats: true,
      repeatType: "repeatsAfterCompletion",
      repeatAfterCompletionFrequency: 7,
      repeatAfterCompletionFrequencyType: "days",
      cardOpen: false
    },
    {
      id: uuidv4(),
      name: "Hoovering",
      taskDetails: "Downstairs",
      startDate: "2020-06-03",
      endDate: "2020-06-04",
      percentageCompletion: 80,
      completed: true,
      completeDate: "2020-04-26",
      repeats: false,
      cardOpen: false
    },
    {
      id: uuidv4(),
      name: "Post Letter",
      taskDetails: "Return to sender",
      startDate: "2020-06-03",
      endDate: "2020-06-10",
      percentageCompletion: 30,
      completed: false,
      repeats: false,
      cardOpen: false
    },
    {
      id: uuidv4(),
      name: "Tesco Order",
      startDate: "2020-06-01",
      endDate: "2020-06-03",
      percentageCompletion: 0,
      completed: false,
      repeats: false,
      cardOpen: false
    },
    {
      id: uuidv4(),
      name: "Today's Task",
      startDate: moment().format("YYYY-MM-DD"),
      endDate: moment().format("YYYY-MM-DD"),
      percentageCompletion: 100,
      completed: false,
      repeats: false,
      cardOpen: false
    }
  ]);

  function deleteTask(id) {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
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
    repeatAfterCompletionFrequencyType, repeatRegularDaysFrequency, repeatRegularDaysArrayDays) {
    const newTask = {
      id: uuidv4(),
      name,
      taskDetails,
      startDate,
      endDate,
      repeats,
      repeatType,
      repeatAfterCompletionFrequency,
      repeatAfterCompletionFrequencyType,
      repeatRegularDaysFrequency,
      repeatRegularDaysArrayDays,
      completed: false,
      percentageCompletion: calculatePercentageCompletion(startDate, endDate),
      cardOpen: false
    };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
  };

  function completeTask(id) {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        if (task.repeats === false) {
          task.completed = true
          task.completeDate = moment().format("YYYY-MM-DD");
        }
        else if (task.repeatType === "repeatsAfterCompletion") {
          task.endDate = moment().add(task.repeatAfterCompletionFrequency, task.repeatAfterCompletionFrequencyType).format("YYYY-MM-DD");
          task.startDate = moment().format("YYYY-MM-DD");
        }
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function openTaskCard(id) {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {task.cardOpen = !task.cardOpen}
      return task
    })
    setTasks(updatedTasks)
  }

  function openFromGraphId(id) {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {task.cardOpen = true}
      else {task.cardOpen = false}
      return task
    })
    setTasks(updatedTasks);
    console.log(document.getElementById(id));
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