import React from 'react'
import MPHeader from '../Other/MPHeader'
import Introduction from '../Other/Introduction'
import BikePres from '../Other/BikePres'
import Offer from '../Other/Offer'
import NotifyScreen from '../Other/NotifyScreen'
import FillMetric from '../Other/FillMetric'
import About from '../Other/About'

const MainPage = () => {
   return (
      <main>
         <MPHeader />

         <BikePres />
            
         <Introduction />

         <Offer />

         <NotifyScreen />

         <FillMetric />

         <About />
         
      </main>
   )
}

export default MainPage
