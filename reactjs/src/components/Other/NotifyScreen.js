import React from 'react'
import '../../css/NotifyScreen.css'
import { useRef, useEffect } from 'react'
import Button from '../Reusable/Button';
import { AiOutlineMail } from 'react-icons/ai';

const NotifyScreen = () => {
   const header = useRef(null);
   
   useEffect(() => {
      window.addEventListener('scroll', e => {
         let x = document.documentElement.scrollTop;
     
         if(x >= 2836){
            header.current.style.letterSpacing='0px';
         }
       })
   }, [header])

   return (
      <section className='notifyscreen'>
         <h1 ref={ header }>Don't miss new collections</h1>
         <p className='hdrpara'>Lorem ipsum sit dolore amet coneqestaur ameto finite olomonus</p>

         <article>
            <section className='logreg'>
               <div>
                  <h2>Login or Register</h2>
                  <p>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis!</p>
               </div>
               
               <div className='logregBtn'>
                  <Button text='Login' classn='btnlog' />
                  <Button text='Register' classn='btnreg' />
               </div>
            </section>

            <h4>OR</h4>

            <section className='mailinp'>
               <p>Lorem dolore amet ipsum notoro mail.</p>
               <div>
                  <AiOutlineMail /> <input type='text' />
               </div>
               <Button text='Send' classn='mailBtn' />
            </section>
         </article>
      </section>
   )
}

export default NotifyScreen
