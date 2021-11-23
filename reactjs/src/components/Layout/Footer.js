import React from 'react'
import '../../css/Footer.css'
import logo from '../../images/logo.png'
import { AiFillFacebook, AiFillGooglePlusSquare } from 'react-icons/ai'
import { FaSteamSquare, FaGithubSquare } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
   return (
      <footer>
         <div className='icons'>
            <h2>Social medias</h2>
            <div>
               <AiFillFacebook />
               <AiFillGooglePlusSquare />
               <FaSteamSquare />
               <FaGithubSquare />
            </div>        
         </div>

         <div className='lists'>
            <ul>
               <li>Links</li>
               <li> <Link to='/'> homepage </Link> </li>
               <li> <Link to='/catalog'> catalog </Link> </li>
               <li> <Link to='/cart'> cart </Link> </li>
               <li> <Link to='/add-new'> add product </Link> </li>
               <li> <Link to='/mod-prod'> modify product </Link> </li>
            </ul>

            <ul>
               <li>Other</li>
               <li> <Link to='/'> security </Link> </li>
               <li> <Link to='/'> regulamin </Link> </li>
               <li> <Link to='/'> policy </Link> </li>
               <li> <Link to='/'> hosting </Link> </li>
            </ul>
         </div>

         <img alt='logo' src={ logo } />

      </footer>
   )
}

export default Footer
