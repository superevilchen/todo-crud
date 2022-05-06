import React from 'react';
import logo from './logo.svg';
import './App.css';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Page404 from './components/Page404';
import UpdateTask from './components/UpdateTask';
import DeleteTask from './components/DeleteTask';
import Login from './components/AuthArea/Login';
import Logout from './components/AuthArea/Logout';
import Register from './components/AuthArea/Register';
import IconMenu from './components/IconMenu';
import Main from './components/Main';

function App() {
  return (
      <div className="App">
      <Main />
      <IconMenu />
      </div>
  );
}

export default App;
