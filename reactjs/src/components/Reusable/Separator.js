import React from 'react'
import separator from '../../images/separator.png'

const Separator = ({ top, bottom }) => {
   return (
      <img alt='separator' style={{ marginTop:`${top}`, marginBottom:`${bottom}` }} className='lineseparator' src={ separator } />
   )
}

Separator.defaultProps = {
   top: "5em",
   bottom: "5em"
}

export default Separator
