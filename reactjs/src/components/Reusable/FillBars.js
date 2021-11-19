import React from 'react'
import { useEffect, useRef, useState } from 'react';

const FillBars = ({ desc, perc }) => {
   const fil = useRef(null); 
   const [cls, setCls] = useState('fill');

   useEffect(() => {
      window.innerWidth <= 479 ? setCls('fill2') : setCls('fill');

      window.addEventListener('scroll', e => {
         if(document.documentElement.scrollTop >= 3900 && fil.current !== null && window.innerWidth <= 479){
            fil.current.style.height = '100%';
            fil.current.style.width = perc;
            setCls('fill2');
         }
         
         else if(document.documentElement.scrollTop >= 3900 && fil.current !== null){
            fil.current.style.height = perc;
            fil.current.style.width = "100%";
            setCls('fill');
         }
       })
       // eslint-disable-next-line
   }, [])

   return (
      <div className='bar'>
         <div ref={ fil } per={ perc } className={ cls }></div>
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
