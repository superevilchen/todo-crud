import React from 'react'
import { Link, Routes } from 'react-router-dom'
import AuthMenu from './AuthArea/AuthMenu'

function Nav() {
  return (
      <div>
          <Link to='/add'><span>add task</span></Link>
      <Link to='/'><span>view tasks</span></Link>
      <AuthMenu/>
    </div>
  )
}

export default Nav