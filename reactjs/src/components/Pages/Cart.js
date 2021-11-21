import React from 'react'
import '../../css/cartMain.css'
import LineSeparator from '../Reusable/LineSeparator'
import CartItem from '../Other/Cart/cartItem'
import '../../css/cartItem.css'
import { useState, useEffect } from 'react'
import load from '../../images/loading.gif'

const Cart = () => {
   const [items, setItems] = useState([]);
   const [loaded, setLoaded] = useState(false);
   useEffect(() => {
      fetch('/items', {
         method: 'GET'
      })
      .then(res => res.json())
      .then(data => {
         if(data.hasOwnProperty('ERROR')){
            window.location.href=`/error?m=${data.ERROR}&s=${data.status}`;
         }
         
         const added = data.filter(it => it.isFav);
         setItems(added);
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
      <main className='cart'>
         <h1>Your cart</h1>
         <p className='pDesc'>There are displayed all products that have been added to ,,cart``</p>
         <LineSeparator wid='85%' mTop='1em' mBot='4em' />

         <section className='cartCont'>
            { items.length > 0 ?

               items.map(it => (
                  <CartItem key={ it._id } mark={ it.mark } name={ it.name } src={ it.src } id={ it._id } fav={ it.isFav } />
               ))

               :

               <h1 className='emptyCart'>Cart is empty</h1>
            }
         </section>

      </main>
   )
}

export default Cart
