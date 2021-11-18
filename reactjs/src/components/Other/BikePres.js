import React from 'react'
import '../../css/BikePres.css'
import bikepres from '../../images/bikepres.png'
import Circle from '../Reusable/Circle'
import Separator from '../Reusable/Separator'

const BikePres = () => {
   return (
      <section className='bikepres'>
         <h1>New model presentation</h1>
         <h3>Lorem ipsum 94-100</h3>
         <article>
            <img alt='bike' src={bikepres} />

            <section className='circlecont one'>
               <Circle text='speed' value='value' cname='circle' />
               <Circle text='engine' value='value' cname='circle' />
            </section>

            <section className='circlecont two'>
               <Circle text='0-100' value='value' cname='circle' />
               <Circle text='year' value='value' cname='circle' />
            </section>
            
         </article>   
         
         <Separator /> 
      </section>
   )
}

export default BikePres
