import React from 'react'
import { useEffect, useRef } from 'react';

const FillBars = ({ desc, perc }) => {
   const fil = useRef(null); 
   useEffect(() => {
      window.addEventListener('scroll', e => {
         if(document.documentElement.scrollTop >= 3900){
            fil.current.style.height = perc;
         }
       })
   }, [])

   return (
      <div className='bar'>
         <div ref={ fil } per={ perc } className='fill'></div>
         <span>{ desc }</span>
      </div>
   )
}

FillBars.defaultProps = {
   cname: "fill",
   desc: "Description",
   perc: "50%"
}

export default FillBars
