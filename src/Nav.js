import React from 'react'
import {
  NavLink
} from 'react-router-dom'

function Nav(){

  
  return(
    <nav>
      <h3>Logo</h3>
      <ul className = 'nav-link'>
        <NavLink exact activeStyle = {{background:'#fff', textDecoration:'none'}}  to= '/' >Home</NavLink>
        <NavLink activeStyle = {{background:'#fff', textDecoration:'none'}}  to='/about' >About</NavLink>
        <NavLink activeStyle = {{background:'#fff', textDecoration:'none'}}  to='/shop' >Shop</NavLink>
      </ul>
    </nav>
  )
}

export default Nav