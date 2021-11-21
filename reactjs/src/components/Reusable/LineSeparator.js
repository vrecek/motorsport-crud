import React from 'react'

const LineSeparator = ({ wid, mTop, mBot, clr }) => {
   return (
      <div style=
      {{ 
         width: wid, 
         height: '2px', 
         marginTop: mTop, 
         marginBottom: mBot, 
         marginLeft: 'auto', 
         marginRight: 'auto',
         background: clr 
      }} className='lineSep'>
         
      </div>
   )
}

LineSeparator.defaultProps = {
   wid: '50%',
   mTop: '0em',
   mBot: '0em',
   clr: 'lightgrey'
}

export default LineSeparator
