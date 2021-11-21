import React from 'react'
import '../../../css/ItemCont.css'
import Item from './Item'
import { useState, useEffect } from 'react';
import load from '../../../images/loading.gif'

const ItemCont = () => {
   const [items, setItems] = useState([]);
   const [loaded, setLoaded] = useState(false);
   useEffect(() => {
      fetch('/items')
      .then(res => res.json())
      .then(data => { 
         if(data.hasOwnProperty('ERROR')){
            window.location.href=`/error?m=${data.ERROR}&s=${data.status}`;
         }

         setItems(data); 
         setLoaded(true);
      })
   }, [])

   if(!loaded){
      return(
         <div className='loadGif'>
            <img alt='loadGif' src={ load } />
         </div>     
      )
   }

   return (
      <section className='colCont'>
         {
            items.map( it => (
               <Item key={ it._id } mark={ it.mark } name={ it.name } src={ it.src } id={ it._id } fav={ it.isFav } />
            ))
         }
      </section>
   )
}

export default ItemCont
