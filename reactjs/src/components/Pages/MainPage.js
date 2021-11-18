import React from 'react'
import MPHeader from '../Other/MPHeader'
import Introduction from '../Other/Introduction'
import BikePres from '../Other/BikePres'
import Separator from '../Reusable/Separator'
import Offer from '../Other/Offer'
import NotifyScreen from '../Other/NotifyScreen'
import FillMetric from '../Other/FillMetric'
import About from '../Other/About'

const MainPage = () => {
   return (
      <main>
         <MPHeader />

         <BikePres />

            <Separator top='10em' />
            
         <Introduction />

         <Offer />

         <NotifyScreen />

         <FillMetric />

         <About />
         
      </main>
   )
}

/*
   -obrazek(moze gif byc) na 100vh albo prawie ,tekst h1 p 2 btn log i regist i -tekst-LUB- nizej mail na bierzaca news itd input text button send 

   -prawo 3 pasek z fill do gory lewo h1 tekst i niektore kolor pod button na 100% width cont

   h1 opis about
   jak wczesnije prawo lewow tesskt img
   1. l teskt p img mapa
   2. l img budynek p tekst
   p 100% widh
   obrazek ludzie

   logo teskt righ res itd

   footer
*/

export default MainPage
