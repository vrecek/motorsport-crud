import React from 'react'
import '../../css/FillMetric.css'
import FillBars from '../Reusable/FillBars'

const FillMetric = () => {
   return (
      <section className='fillmetric'>
         <section>
            <h1>Amet coneqestaur dolor</h1>
            <p>Lorem ipsum dolor sit <span className='mark'>amet consectetur adipisicing elit. </span> Voluptatum, culpa quae enim ipsum illum accusantium adipisci exercitationem libero nobis blanditiis commodi neque quibusdam, itaque similique rerum atque fugiat officiis dolorum.</p>
            <p> <span className='mark'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </span> Voluptatum, culpa quae enim ipsum illum accusantium adipisci exercitationem libero nobis blanditiis commodi neque quibusdam, itaque similique rerum atque fugiat officiis dolorum.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, culpa quae enim ipsum illum accusantium adipisci exercitationem libero nobis blanditiis commodi neque quibusdam, <span className='mark'>itaque similique</span> rerum atque fugiat officiis dolorum.</p>
         </section>

         <section className='barscont'>
            <FillBars perc='70%' />
            <FillBars perc='92%' />
            <FillBars perc='88%' />
            <FillBars perc='76%' />
         </section>
      </section>
   )
}

export default FillMetric
