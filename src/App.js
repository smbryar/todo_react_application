import React, { useState } from 'react';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import {Container} from 'react-bootstrap';

import Header from './Header/Header';
import TaskList from './TaskList/TaskList';
import Footer from './Footer/Footer';
import TaskGraph from './TaskGraph/TaskGraph';

import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: uuidv4(),
      name: "Tidying",
      taskDetails: "Sort through paperwork",
      startDate: "2020-06-06",
      endDate: "2020-06-11",
      percentageCompletion: 20,
      completed: false,
      repeats: false
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
      repeatAfterCompletionFrequencyType: "days"
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
      repeats: false
    }
  ]);

  const [page, setPage] = useState("Tasks");

  function deleteTask(id) {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  function calculatePercentageCompletion(startDate, endDate) {
    const now = moment().valueOf();
    const start = moment(startDate, "YYYY-MM-DD").valueOf();
    const end = moment(endDate, "YYYY-MM-DD").valueOf();
    const percentageCompletion = ((now - start) / (end - start)) * 100;
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
      percentageCompletion: calculatePercentageCompletion(startDate, endDate)
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

  return (
    <div className="App">
      <Header setPage={setPage}/>
      {page ==="Tasks" && 
      <Container fluid="lg">
        <TaskList addTask={addTask} completeTask={completeTask} deleteTask={deleteTask} tasks={tasks} />
      </Container>
      }
      {page === "Graph" &&
      <Container fluid="lg" style={{height: window.innerHeight-125 < 700 ? window.innerHeight-125 : 700}}>
      <TaskGraph tasks={tasks}></TaskGraph>
    </Container>}
      <Footer />
    </div>
  );
}

export default App;