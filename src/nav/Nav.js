import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    
<nav className='p-4'>
    
    
    <ul className='cluster'>
      <NavLink to={'/List'} key={1} className="border-b-2  border-primary-300"> List </NavLink>
      <NavLink to={'/Dropdown'} key={2}className="border-b-2 border-primary-300"> Dropdown </NavLink>
      <NavLink to={'/Date'} key={3} className="border-b-2 border-primary-300"> Date </NavLink>
    </ul>
    <Outlet />
  </nav>
  )
}

export default Nav


