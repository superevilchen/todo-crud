import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from '../../App'
import About from '../../components/About'
import AddTask from '../../components/AddTask'
import Login from '../../components/AuthArea/Login'
import Logout from '../../components/AuthArea/Logout'
import Register from '../../components/AuthArea/Register'
import Page404 from '../../components/Page404'
import TaskList from '../../components/TaskList'

function Routing() {
  return (
      <div>
          <Routes>
          <Route path="/" element={<App />} />
          <Route index element={<TaskList />}/>
        {/* <Route path="/add" element={<AddTask />} /> */}
        {/* <Route path="/about" element={<About/>}/> */}
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Page404/>}/>
        </Routes>
    </div>
  )
}

export default Routing