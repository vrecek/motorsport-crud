import React from 'react'
import Button from './Button'

const Card = ({ text, img, textClass, btnClass, posX }) => {
   return (
      <div className={ textClass }>         
         <img alt='carimg' style={{right: `${posX}`}} src={img} />
         <h3>{ text }</h3>
         <Button text='Check out' classn={ btnClass } />
      </div>
   )
}

Card.defaultProps = {
   text: "Card text",
   size: "cover",
   posX: "-50%",
}

export default Card
