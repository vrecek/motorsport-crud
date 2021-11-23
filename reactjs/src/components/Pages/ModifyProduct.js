import React from 'react'
import '../../css/ModMain.css'
import '../../css/EditForm.css'
import { useState, useEffect } from 'react'
import load from '../../images/loading.gif'
import TableItem from '../Other/Modify/TableItem'

const DeleteProduct = () => {
   const [prods, setProds] = useState([]);
   const [loaded, setLoaded] = useState(false);
   useEffect(() => {
      fetch('/items', {
         method : 'GET'
      })
      .then(res => res.json())
      .then(data => { 
         if(data.hasOwnProperty('ERROR')){
            window.location.href=`/error?m=${data.ERROR}&s=${data.status}`;
         }

         setProds(data); 
         setLoaded(true) 
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
      <main className='delProd'>
         <h1>List of products</h1>
         <table>
            <thead>
               <tr className='names'>
                  <th>ID</th>
                  <th>MARK</th>
                  <th>NAME</th>
                  <th>ACTION</th>
               </tr>
               <tr className='namesRespons'>
                  <th>Products</th>
               </tr>
            </thead>

            <tbody>
               {
                  prods.map(it => (
                     <TableItem key={ it._id } id={ it._id } mark={ it.mark } name={ it.name } />
                  ))
               }
            </tbody>
         </table>
      </main>
   )
}

export default DeleteProduct
