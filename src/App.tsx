import React from 'react';
import logo from './logo.svg';
import './App.css';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Page404 from './components/Page404';
import UpdateTask from './components/UpdateTask';
import DeleteTask from './components/DeleteTask';
import Login from './components/AuthArea/Login';
import Logout from './components/AuthArea/Logout';
import Register from './components/AuthArea/Register';
import YesNoDialog from './components/YesNoDialog';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Nav/>
      <Routes>
          <Route path="/" element={<App />} />
          <Route index element={<TaskList />}/>
          <Route path="/add" element={<AddTask />} />
          <Route path="/update/:id" element={<UpdateTask />}/>
          {/* <Route path="/delete/:id" element={<DeleteTask />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Page404/>}/>
        </Routes>
      </div>
      </BrowserRouter>
  );
}

export default App;
