import React from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai'

const ScrollUp = () => { 
   function scrlup(){
      window.scrollTo(0,0); 
   }

   return (
      <div  onClick={ scrlup } className='scrollup'>
         <AiOutlineArrowUp />
         <div>Return to top</div>
      </div>
   )
}

export default ScrollUp
