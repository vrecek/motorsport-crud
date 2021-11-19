import React from 'react'
import '../../css/MPheader.css'
import car1 from '../../images/car1.png'
import car2 from '../../images/car2.png'
import carLast from '../../images/car3.png'
import { useRef, useEffect } from 'react'
import Button from '../Reusable/Button'

const MPHeader = () => {
   const images = [carLast, car1, car2, carLast];
   const imgCont = useRef(null);
   const radios = useRef(null);
   const num = images.slice(0,images.length - 1);
   let slide = null;
   let counter = 0;
   
   function changeImg(nr, click=null){
      if(imgCont.current == null) return;

      if(click){
         clearInterval(slide);
         slide = setInterval(() => { // NORMAL ROUTE
            if(!document.hasFocus()) return;
         
            counter++;
            changeImg(counter)  
         }, 6000) 
      } 

      counter = nr;
      nr === 0 && !click ? imgCont.current.style.transition='0s' : imgCont.current.style.transition='linear 1s';

      imgCont.current.style.transform = `translateX(-${imgCont.current.clientWidth * nr}px)`;
      radios.current.childNodes.forEach(element => {
         element.className='';
      });

      if(nr === images.length - 1) nr = 0;
      radios.current.childNodes[nr].className = 'active';

   }

   useEffect(()=>{

      radios.current.childNodes[0].className = 'active';

      // eslint-disable-next-line
      slide = setInterval(() => { // NORMAL ROUTE
         if(!document.hasFocus()) return;
      
         counter++;
         changeImg(counter)  
      }, 6000) 

      imgCont.current.addEventListener('transitionend', ()=>{ // LAST PICTURE
         if(counter === images.length - 1){
            // eslint-disable-next-line
            counter = 0;    
            changeImg(counter)                  
         }
      })
      
   }, [] );  
   

   return (
      <header className='main-header'>
         <section>
            <h1>Lorem ipsum</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <div>
               <Button text='Button one' classn='btnclass' />
               <Button text='Button two' classn='btnclass' />
            </div>
         </section>

         <section className='imagecont'>
            <figure>
               <div ref={ imgCont }>
                  {
                     images.map((item,ind)=> (
                        <img key={ ind } src={ item } alt='car' />
                     ))
                  }
               </div>
            </figure>

            <section ref={ radios } className='radios'>
               {
                  num.map( (item, ind) => (
                     <div onClick={ ()=> changeImg(ind, 'click') } key={ ind }></div>
                  ))
               }
            </section>
         </section>
      </header>
   )
}

export default MPHeader
