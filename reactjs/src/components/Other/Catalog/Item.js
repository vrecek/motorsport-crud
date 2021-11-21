import React from 'react'
import '../../../css/ItemCont.css'
import Button from '../../Reusable/Button'
import { useState } from 'react'
import gif from '../../../images/loading.gif'

const Item = ({ mark, name, src, id, fav }) => {
   const [loaded, setLoaded] = useState(false);
   const [isfav, setIsfav] = useState(fav);
   const textBtn = isfav ? 'Delete from cart' : 'Add to cart';
   const styl = isfav ? 'cartBtn btRed' : 'cartBtn btOrang';

   function toggleFav(){
      setLoaded(true)
      fetch(`/items/${id}&${!isfav}`, {
         method: 'PATCH'
      })
      .then(res => res.json())
      .then(data => { setIsfav(data); setLoaded(false) })
   }

   return (
      <div className='item'>
         <div className='image'> 
            <img alt='img' src={ src } />
         </div>
         <section>
            <div>
               <h6>{ mark }</h6>
               <h5>{ name }</h5>
            </div>      
           <Button action={ toggleFav } text={ textBtn } classn={ styl } fSize='clamp(.9em,1.5vw,1.1rem)' fWeight='700' />
         </section> 
         { loaded && <div className='loadCl'> <img alt='load' src={ gif }  /> </div> }  
      </div>
   )
}

export default Item
