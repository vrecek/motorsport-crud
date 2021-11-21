import React from 'react'
import '../../css/catMain.css'
import ItemCont from '../Other/Catalog/ItemCont'
import LineSeparator from '../Reusable/LineSeparator'
import FilterCol from '../Other/Catalog/FilterCol'

const Catalog = () => {
   return (
      <main className='catMain'>
         <h1 className='catTitle'>Catalog</h1>
         <p className='catDesc'>All available products</p>
         <LineSeparator wid='60%' mTop="1em" mBot="4em" />

         <section className='mainCont'>
            <FilterCol />
            <ItemCont />
         </section>
         
      </main>
   )
}

export default Catalog
