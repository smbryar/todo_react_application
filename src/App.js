import React from 'react';
import Header from './Header/Header';
import TaskDisplay from './TaskDisplay/TaskDisplay';
import Footer from './Footer/Footer';
import './App.css';

function App() {  
  return (
    <div className="App">
      <Header/>
      <TaskDisplay/> 
      <Footer/>
    </div>
  );
}

export default App;
