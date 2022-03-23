import React from 'react'
import { Link, Routes } from 'react-router-dom'

function Nav() {
  return (
      <div>
          <Link to='/add'><span>add task</span></Link>
          <Link to='/'><span>view tasks</span></Link>
    </div>
  )
}

export default Nav