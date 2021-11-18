import React from 'react'
import Button from './Button'

const Card = ({ text, img, textClass, btnClass, size, posX, posY }) => {
   return (
      <div 
         style=
         {{ 
            background: `url('${img}')`, 
            backgroundSize: `${size}` ,
            backgroundPosition: `${posX} ${posY}`
         }} 
         className={ textClass }>
            
         <h3>{ text }</h3>
         <Button text='Check out' classn={ btnClass } />
      </div>
   )
}

Card.defaultProps = {
   text: "Card text",
   size: "cover",
   posX: "50%",
   posY: "50%"
}

export default Card
