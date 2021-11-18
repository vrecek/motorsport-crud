import React from 'react'
import '../../css/Footer.css'
import logo from '../../images/logo.png'
import { AiFillFacebook, AiFillGooglePlusSquare } from 'react-icons/ai'
import { FaSteamSquare, FaGithubSquare } from 'react-icons/fa'

const Footer = () => {
   return (
      <footer>
         <img src={ logo } />
         <div className='icons'>
            <AiFillFacebook />
            <AiFillGooglePlusSquare />
            <FaSteamSquare />
            <FaGithubSquare />
         </div>
         <div className='lists'>
            <ul>
               <li>Links</li>
               <li>sdds</li>
               <li>sdds</li>
               <li>sdds</li>
            </ul>

            <ul>
               <li>Author</li>
               <li>sdds</li>
               <li>sdds</li>
               <li>sdds</li>
            </ul>

            <ul>
               <li>Other</li>
               <li>sdds</li>
               <li>sdds</li>
               <li>sdds</li>
            </ul>
         </div>
      </footer>
   )
}

export default Footer
