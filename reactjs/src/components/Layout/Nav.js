import React from 'react'
import '../../css/Nav.css'
import logo from '../../images/logo.png'

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
            <li> <a className='home' href='/'> Homepage </a> </li>
            <li> <a href='/'> Catalog </a> </li>
            <li> <a href='/'> Favourites </a> </li>
            <li> <a href='/'> About </a> </li>
         </ul>
      </nav>
   )
}

export default Nav
