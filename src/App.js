import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';

import Login from './Login/Login';
import Header from './Header/Header';
import TaskList from './TaskList/TaskList';
import TaskGraph from './TaskGraph/TaskGraph';
import NoTasksGraph from './TaskGraph/NoTasksGraph';
import Cookies from 'js-cookie';

import './App.css';

function App() {
  // listen for use of mouse
  document.body.addEventListener('mousedown', function () {
    document.body.classList.add('using-mouse');
  });

  // listen for use of tab
  document.body.addEventListener('keydown', function (event) {
    if (event.keyCode === 9) {
      document.body.classList.remove('using-mouse');
    }
  });

  const [tasks, setTasks] = useState();
  const [loggedIn, setLoggedIn] = useState(false);
  const [userGreeting, setUserGreeting] = useState("");


  useEffect(() => {
    setLoggedIn(!!Cookies.get("userID"));
    axios
      .get(`https://3f77y34kad.execute-api.eu-west-2.amazonaws.com/dev/tasks?userID=${Cookies.get("userID")}`)
      .then(response => {
        let updatedTasks =
          response
            .data
            .tasks
            .map(task => {
              task.percentageCompletion = calculatePercentageCompletion(task.startDate, task.endDate);
              task.cardOpen = false;
              return task;
            });
        let sortedTasks = sortTasks(updatedTasks);
        setTasks(sortedTasks);
      })
      .catch(error => {
        console.log("Error fetching data", error);
      })
    axios
      .get(`https://3f77y34kad.execute-api.eu-west-2.amazonaws.com/dev/users?userID=${Cookies.get("userID")}`)
      .then(response => {
        const username = response.data.user[0].username;
        setUserGreeting(username);
      })
      .catch(error => {
        console.log("Error fetching data", error);
      })
  }, []);

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

  function sortTasks(tasks) {
    function comparer(a, b) {
      if (a.completed && !b.completed) return 1; // completed tasks come at bottom of list
      if (!a.completed && b.completed) return -1;
      if (moment(a.endDate).isAfter(b.endDate)) return 1; // items ordered by proximity of end date
      if (moment(b.endDate).isAfter(a.endDate)) return -1;
      return 0;
    }
    return tasks.sort(comparer);
  }

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
      userID: Cookies.get("userID"),
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
        let sortedTasks = sortTasks(updatedTasks);
        setTasks(sortedTasks);
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
      updatedTask.percentageCompletion = calculatePercentageCompletion(updatedTask.startDate, updatedTask.endDate);
    }

    axios
      .put(`https://3f77y34kad.execute-api.eu-west-2.amazonaws.com/dev/tasks/${taskID}`, updatedTask)
      .then(response => {
        const updatedTasks = [...tasks].map(task => task.taskID === taskID ? updatedTask : task);
        let sortedTasks = sortTasks(updatedTasks);
        setTasks(sortedTasks);
      })
      .catch(error => {
        console.log("Error fetching data", error);
      })
  }

  function openTaskCard(taskID) {
    const updatedTasks = tasks.map(task => {
      if (task.taskID === taskID) { task.cardOpen = !task.cardOpen }
      return task
    })
    setTasks(updatedTasks)
  }

  function openFromGraphId(id) {
    const updatedTasks = tasks.map(task => {
      if (task.taskID.toString() === id) { task.cardOpen = true }
      else { task.cardOpen = false }
      return task
    })
    setTasks(updatedTasks);
  }

  function handleLogOut() {
    Cookies.remove("userID");
    setLoggedIn(false);
  }

  return (
    <Router>
      <div className="App">
        <Header loggedIn={loggedIn} handleLogOut={handleLogOut} />
        <Switch>
          {loggedIn ?
            <><Route path="/todo_react_application/graph">
              {(tasks && tasks.length > 0) ? <TaskGraph tasks={tasks} openFromGraphId={openFromGraphId} /> : <NoTasksGraph />}
            </Route>
              <Route exact path="/todo_react_application/">
                <TaskList userGreeting={userGreeting} addTask={addTask} completeTask={completeTask} deleteTask={deleteTask} tasks={tasks} openFromGraphId={openFromGraphId} openTaskCard={openTaskCard} />
              </Route> </> :
            <Login setLoggedIn={setLoggedIn} />}
        </Switch>
      </div>
    </Router>
  );
}

export default App;