import React from 'react'
import Button from '../../Reusable/Button'
import { useState } from 'react';
import gif from '../../../images/loading.gif'

const CartItem = ({ mark, name, src, id, fav }) => {
   const [loaded, setLoaded] = useState(false);

   function toggleFav(){
      setLoaded(true);
      fetch(`/items/${id}&${!fav}`, {
         method: 'PATCH'
      })
      .then(() => window.location.reload(true))
   }

   return (
      <article className='cartItem'>
         <div className='cartImg'>
            <img alt='motoImg' src={ src } />
         </div>
         <div className='cartText'>
            <div className='cartInfo'>
               <span>{ mark }</span> <span>{ name }</span>
            </div>

            <div>
              <Button action={ toggleFav } text='Remove from cart' classn='cartBtn' fWeight='700' fSize='clamp(.7rem,1.5vw,1.1rem)' />
            </div>
         </div>
         { loaded && <div className='loadCl'> <img alt='load' src={ gif } /> </div> }   
      </article>
   )
}

export default CartItem
