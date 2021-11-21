import React from 'react'
import '../../css/Error.css'

const ErrorMes = () => {
   const params = new URLSearchParams(window.location.search);
   const msg = params.get('m');
   const status = params.get('s');

   return (
      <main className='errCont'>
         <img alt='wrench' src='https://openclipart.org/image/2000px/324189' />

         <div className='errtext'>
            <h1>An error occured!</h1>
            <p>If you have encountered this message many times</p>
            <p>Report this <a href='/'> to us </a> with details.</p>
         </div>

         <div className='innercont'>
            <div>
               <h2>Error message:</h2> <span>{ `${msg}` }</span>
            </div>
            <div>
               <h2>Error status code:</h2> <span>{ `${status}` }</span>
            </div>         
         </div>
      </main>
   )
}

export default ErrorMes
