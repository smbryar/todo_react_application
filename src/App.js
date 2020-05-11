import React, { useState } from 'react';
import Header from './Header/Header';
import TaskDisplay from './TaskDisplay/TaskDisplay';
import Footer from './Footer/Footer';
import './App.css';

function App() {
  const [ tasks, setTasks ] = useState([
    {
        key: 1,
        name: "Tidying",
        taskDetails: "Sort through paperwork",
        startDate: "2020-06-03",
        endDate: "2020-10-01",
        percentageCompletion: 20,
        completed: false,
        repeats: false
    },
    {
        key: 2,
        name: "Cleaning",
        taskDetails: "Clean bathrooms",
        startDate: "2020-06-03",
        endDate: "2020-10-01",
        percentageCompletion: 60,
        completed: false,
        repeats: true
    },
    {
        key: 3,
        name: "Hoovering",
        taskDetails: "Downstairs",
        startDate: "2020-06-03",
        endDate: "2020-10-01",
        percentageCompletion: 80,
        completed: true,
        completeDate: "2020-07-01",
        repeats: false
    }
  ]); 

  return (
    <div className="App">
      <Header/>
      <TaskDisplay tasks = {tasks}/> 
      <Footer/>
    </div>
  );
}

export default App;