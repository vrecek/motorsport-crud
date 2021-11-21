import React from 'react'
import '../../../css/FilterCol.css'
import Button from '../../Reusable/Button'
import { GiSettingsKnobs } from 'react-icons/gi'

const FilterCol = () => {
   return (
      <section className='filtercol'>
         <form>
            <h4>Filter by:</h4>

            <div>
               <label htmlFor='selName'>Type:</label>
               <select id='selName'>
                  <option>Bikes</option>
                  <option>Sports</option>
                  <option>SUVs</option>
                  <option>Exclusives</option>
               </select>
            </div>

            <div>
               <label htmlFor='selName'>Alphabetic:</label>
               <select id='selName'>              
                  <option>Default</option>
                  <option>A - Z</option>
                  <option>Z - a</option>
               </select>
            </div>          

            <Button text='Sort' classn='filtBtn' />
            
         </form>
         <GiSettingsKnobs />
      </section>
   )
}

export default FilterCol
