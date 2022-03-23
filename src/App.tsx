import React from 'react';
import logo from './logo.svg';
import './App.css';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Page404 from './components/Page404';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<TaskList />} />
          <Route path="/add" element={<AddTask />} />
          <Route path="*" element={<Page404/>}/>
        </Routes>
      </div>
      </BrowserRouter>
  );
}

export default App;
