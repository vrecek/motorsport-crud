import React from 'react'

const Circle = ({ text, value, cname, innerText }) => {
   return (
      <div className={ cname }>
         <h4>{ text }</h4>
         <h5>{ value }</h5> 
         <div>
            { innerText }
         </div>      
      </div>
   )
}

Circle.defaultProps = {
   text: "Info",
   value: "value",
   innerText: "text in hidden div"
}

export default Circle
