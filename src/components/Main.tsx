import React from 'react'
import { Outlet } from 'react-router-dom'
import Routing from '../utils/Routing/Routing'

function Main() {
  return (
    <div className="Main">
           <Routing/>
          <Outlet/>
    </div>
  )
}

export default Main