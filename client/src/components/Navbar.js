import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>

      <NavWrap>
        <div id="logo"></div>
        <div id='tabs'>
          <Link className="link" to="/"> <li>Home</li></Link>
          <Link className="link" to="/about"> <li>About </li></Link>
          <Link className="link" to="/contact"> <li>Contact </li></Link>
        </div>
        <div>
          <Link className="link" to="/login"> <li id='login'>Login</li></Link>
          
          <Link className="link" to="/logout"> <li id='login'>Logout</li></Link>
          <Link className="link" to="/signup"><li id='signup'>Sign Up</li></Link>
        </div>
      </NavWrap>

    </div>
  )
}

const NavWrap = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;

padding: 1rem;
list-style: none;

#logo{
  flex-basis: 12rem;
}
div{
  display: flex;
}
 li{
   font-family: 'Montserrat';
   font-size: 1rem;
  font-weight: 500;
   color: #00268b;
   padding: 0.5rem  1rem;

   cursor: pointer;
 }
 #login{
  margin: 0 0.3rem;
  width: 6.5rem;
   background-color: white;
   border-radius: 1rem;
   text-align: center;
   padding: 0.8rem 1rem;
   color: #1E40C8;
 }
 #signup{
  margin: 0 0.9rem;
  width: 6.5rem;
  text-align: center;
  color: white;
   border-radius: 1rem;
   padding:.8rem 1rem;
   background-color: #1E40C8;
 }
`

export default Navbar