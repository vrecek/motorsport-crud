import React from 'react'
import '../../css/About.css'
import saloon from '../../images/saloon.png'

const About = () => {
   return (
      <section className='about'>
         <h1>Who we are ?</h1>

         <section>
            <article>
               <h2>Lorem ipsum dolore amet</h2>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aliquam nostrum facere unde vel aut sunt corrupti eum temporibus qui! Sapiente minus quisquam at veniam corrupti nam commodi eligendi mollitia.</p>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aliquam nostrum facere unde vel aut sunt corrupti eum temporibus qui! Sapiente minus quisquam at veniam corrupti nam commodi eligendi mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aliquam nostrum.</p>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aliquam nostrum facere unde vel aut sunt corrupti eum temporibus qui! Sapiente minus quisquam at veniam corrupti nam commodi eligendi mollitia.</p>
               <p className='bottom'>Short bottom sample text in page</p>
            </article>

            <article>
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12131.663390991744!2d-83.17211052584717!3d42.39421354453058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824ca0110cb1d75%3A0x5776864e35b9c4d2!2sDetroit%2C%20Michigan%2C%20Stany%20Zjednoczone!5e0!3m2!1spl!2spl!4v1637258963302!5m2!1spl!2spl" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>
            </article>
         </section>

         <section>
            <article>
               <h2>Nostrum qui sapiente</h2>
               <ul>
                  <li> <span>Veniam</span> - Debitis aliquam 2-900</li>
                  <li> <span>Veniam</span> - Debitis aliquam 2-900</li>
                  <li> <span>Beatae</span> - Debitis aliquam 2-900</li>
                  <li> <span>Dolores</span> - Debitis aliquam 2-900</li>
                  <li> <span>Veniam</span> - Debitis aliquam 2-900</li>
                  <li> <span>Veniam</span> - Debitis aliquam 2-900</li>
                  <li> <span>Soluta</span> - Debitis aliquam 2-900</li>
               </ul>
            </article>

            <article>
               <img src={ saloon } />
            </article>
         </section>
      </section>
   )
}

export default About
