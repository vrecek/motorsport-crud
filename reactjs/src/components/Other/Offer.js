import React from 'react'
import '../../css/Offer.css'
import Card from '../Reusable/Card'
import img1 from '../../images/bike.png'
import img2 from '../../images/cat1.png'
import img3 from '../../images/cat2.png'
import img4 from '../../images/cat3.png'

const Offer = () => {
   return (
      <section className='offer'>
         <h1>Offer</h1>
         <p className='infp'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!
         </p>
         <section>
            <Card text='Motorcycles' textClass='cardclass' btnClass='btnclass' img={ img1 } posX='50%' posY='50%' />
            <Card text="Sport's" textClass='cardclass drk' btnClass='btnclass' img={ img2 } posX='30%' posY='30%' />
            <Card text="SUV's" textClass='cardclass drk' btnClass='btnclass' img={ img3 } posX='40%' posY='20%' />
            <Card text='Exclusive' textClass='cardclass drk' btnClass='btnclass' img={ img4 } posX='20%' posY='50%' />
         </section>
      </section>
   )
}

export default Offer
