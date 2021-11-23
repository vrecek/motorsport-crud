import React from 'react'
import Button from '../../Reusable/Button'
import { useState } from 'react'
import gif from '../../../images/loading.gif'
import EditForm from './EditForm'

const TableItem = ({ id, mark, name }) => {
   const [load, setLoad] = useState(false);
   const [disp, setDisp] = useState(false);
   function deleteProd(){
      setLoad(true);
      fetch(`/items/${id}`, {
         method: "DELETE"
      })
      .then(res => res.json())
      .then(data => {
         if(data.hasOwnProperty('ERROR')){
            window.location.href=`/error?m=${data.ERROR}&s=${data.status}`;
         }

         window.location.reload(true);
      })
   }

   function toggleForm(e){
      e.preventDefault();

      setDisp(!disp);
   }

   return (
      <tr>
         <td className='idCont'>{ id }</td>
         <td>{ mark }</td>
         <td>{ name }</td>
         <td>
            <Button action={ deleteProd } classn='tableBtn del' text='Del' fWeight='500' />
            <Button action={ toggleForm } classn='tableBtn edit' text='Edit' fWeight='500' />
         </td>
         { load && <div className='loadCl'> <img alt='load' src={ gif } /> </div> }

         {disp && <EditForm toggleForm={ toggleForm } id={ id } />}
      </tr>
   )
}

export default TableItem
