import React from 'react'
import Button from '../../Reusable/Button'

const EditForm = ({ toggleForm, id }) => {
   return (
      <section className='editSec'>
         <form action={`/items/edit/${id}`} method='POST'>
            <label>Editing product nr <span>{ id }</span></label>
            <div>
               <p>Image URL</p>
               <input name='src' type='text' />
            </div>
            <div>
               <p>Mark</p>
               <input name='mark' type='text' />
            </div>
            <div>
               <p>Name</p>
               <input name='name' type='text' />
            </div>

            <div className='formBtns'>
               <Button text='Save' classn='editFormBtn green' fSize='1.2rem' fWeight='700' />
               <Button action={ toggleForm } text='Cancel' classn='editFormBtn red' fSize='1.2rem' fWeight='700' />
            </div>
         </form>
      </section>
   )
}

export default EditForm
