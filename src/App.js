import React from 'react';
import Header from './Header/Header';
import TaskDisplay from './TaskDisplay/TaskDisplay';
import './App.css';

function App() {  
  return (
    <div className="App">
      <Header/>
      <TaskDisplay/> 
    </div>
  );
}

export default App;
