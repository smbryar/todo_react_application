import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

import sortTasks from 'utilities/sortTasks';
import calculatePercentageCompletion from 'utilities/calculatePercentageCompletion';

import Login from 'components/Login/Login';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import TaskList from 'components/TaskList/TaskList';
import TaskGraph from 'components/TaskGraph/TaskGraph';
import NoTasksGraph from 'components/TaskGraph/NoTasksGraph';
import DayPlan from 'components/DayPlan/DayPlan';

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

  // set state
  const [tasks, setTasks] = useState();
  const [loggedIn, setLoggedIn] = useState(false);
  const [userGreeting, setUserGreeting] = useState("");

  // when user logs in
  useEffect(() => {
    setLoggedIn(!!Cookies.get("userID"));
    if (loggedIn) {
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
    }
  }, [loggedIn]);

  // updating tasks
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

  function addTask(name, taskDetails, startDate, endDate, repeats, repeatAfterCompletionFrequency,
    repeatAfterCompletionFrequencyType) {
    const newTask = {
      userID: Cookies.get("userID"),
      name,
      taskDetails,
      startDate,
      endDate,
      repeats,
      repeatAfterCompletionFrequency,
      repeatAfterCompletionFrequencyType,
      completed: false,
      dayPlan: 0,
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
    else {
      const taskDays = moment(updatedTask.endDate).diff(moment(updatedTask.startDate), "days");
      updatedTask.startDate = moment().add(updatedTask.repeatAfterCompletionFrequency, updatedTask.repeatAfterCompletionFrequencyType).format("YYYY-MM-DD");
      updatedTask.endDate = moment(updatedTask.startDate).add(taskDays, "days").format("YYYY-MM-DD");
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

  // updating dayPlan tasks

  function deleteDayPlanTask(taskID) {
    const updatedTask = tasks.find(task => task.taskID === taskID);
    updatedTask.dayPlan = 0;

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

  function addToDayPlan(taskID) {
    const updatedTask = tasks.find(task => task.taskID.toString() === taskID);
    updatedTask.dayPlan = 1;

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

  // opening taskcards
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

  // logging out
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
              <Route exact path="/todo_react_application/day-plan">
                <DayPlan tasks={tasks} addToDayPlan={addToDayPlan} deleteDayPlanTask={deleteDayPlanTask} completeTask={completeTask} deleteTask={deleteTask} openTaskCard={openTaskCard} />
              </Route>
              <Route exact path="/todo_react_application/">
                <TaskList userGreeting={userGreeting} addTask={addTask} completeTask={completeTask} deleteTask={deleteTask} tasks={tasks} openFromGraphId={openFromGraphId} openTaskCard={openTaskCard} />
              </Route> </> :
            <Login setLoggedIn={setLoggedIn} />}
        </Switch>
        <Footer/>
      </div>
    </Router >
  );
}

export default App;