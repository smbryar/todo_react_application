import React, { useState } from 'react';
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
      repeatsAfterDays: 7
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
  }

  function completeTask(id) {
    const updatedTasks = tasks.map(task => {
      if(task.id === id) task.completed = true
      return task;
    });
    setTasks(updatedTasks);
  }

  return (
    <div className="App">
      <Header />
      <TaskDisplay completeTask = {completeTask} deleteTask={deleteTask} tasks={tasks} />
      <Footer />
    </div>
  );
}

export default App;