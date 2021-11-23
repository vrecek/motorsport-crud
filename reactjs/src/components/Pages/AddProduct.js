import React from 'react'
import '../../css/AddMain.css'
import LineSeparator from '../Reusable/LineSeparator'
import Button from '../Reusable/Button'

const AddProduct = () => {
   return (
      <main className='addProd'>
         <section className='addText'>
            <h1>Add new product</h1>
            <p>All fields are required.</p>
            <LineSeparator wid='65%' mBot='3em' mTop='1em' />
         </section>
         <form action='/items' method='POST' className='addContent'>
            <div>
               <label>Image URL</label>
               <input name='src' autoComplete='off' spellCheck='false' type='text' />
            </div>
            <div>
               <label>Mark</label>
               <input name='mark' autoComplete='off' spellCheck='false' type='text' />
            </div>
            <div>
               <label>Name</label>
               <input name='name' autoComplete='off' spellCheck='false' type='text' />
            </div>
            <Button text='Add' />
         </form>
      </main>
   )
}

export default AddProduct
