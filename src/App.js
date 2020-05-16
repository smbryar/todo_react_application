import React, { useState } from 'react';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';

import Header from './Header/Header';
import TaskDisplay from './TaskDisplay/TaskDisplay';
import Footer from './Footer/Footer';

import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: uuidv4(),
      name: "Tidying",
      taskDetails: "Sort through paperwork",
      startDate: "2020-05-06",
      endDate: "2020-08-11",
      percentageCompletion: 20,
      completed: false,
      repeats: false
    },
    {
      id: uuidv4(),
      name: "Cleaning",
      taskDetails: "Clean bathrooms",
      startDate: "2020-05-05",
      endDate: "2020-08-11",
      percentageCompletion: 60,
      completed: false,
      repeats: true,
      repeatFrequency: 7,
      repeatFrequencyType: "days"
    },
    {
      id: uuidv4(),
      name: "Hoovering",
      taskDetails: "Downstairs",
      startDate: "2020-04-03",
      endDate: "2020-05-01",
      percentageCompletion: 80,
      completed: true,
      completeDate: "2020-04-26",
      repeats: false
    }
  ]);

  function deleteTask(id) {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  function addTask(name, taskDetails, startDate, endDate, repeats, repeatFrequency, repeatFrequencyType) {
    const newTask = {
      id: uuidv4(),
      name,
      taskDetails,
      startDate,
      endDate,
      repeats,
      repeatFrequency,
      repeatFrequencyType,
      completed: false,
    };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
  };

  function completeTask(id) {
    const updatedTasks = tasks.map(task => {
      if(task.id === id) {
        if(task.repeats === false) {
          task.completed = true
          task.completeDate = moment().format("YYYY-MM-DD");
        }
        else if(task.repeats === true){
          task.endDate = moment(task.endDate).add(task.repeatFrequency,task.repeatFrequencyType).format("YYYY-MM-DD");
          task.startDate = moment().format("YYYY-MM-DD");
        }
      }
      return task;
    });
    setTasks(updatedTasks);
  }



  return (
    <div className="App">
      <Header />
      <TaskDisplay addTask = {addTask} completeTask = {completeTask} deleteTask={deleteTask} tasks={tasks} />
      <Footer />
    </div>
  );
}

export default App;