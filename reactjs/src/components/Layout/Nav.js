import React from 'react'
import '../../css/Nav.css'
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom'

const Nav = () => {
   return (
      <nav className='nav1'>
         <figure>
            <img src={ logo } alt='logo' />
            <figcaption>
               <p>Lorem ipsum</p>
               <p>Motorsports</p>
            </figcaption>
         </figure>
         <ul>
            <li> <Link to='/' className='home' > Homepage </Link> </li>
            <li> <Link to='/catalog'> Catalog </Link> </li>
            <li> <Link to='/cart'> Cart </Link> </li>
            <li> <Link to='/add-new' className='addLink' > Add </Link> </li>
            <li> <Link to='/mod-prod' className='addLink' > Mod </Link> </li>
         </ul>
      </nav>
   )
}

export default Nav
