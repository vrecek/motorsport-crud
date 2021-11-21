import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ text, action, classn, fSize, fWeight }) => {
   return (
      <button 
         style={ classn === '' ? defStyle : null } 
         className={ classn === '' ? null : classn }
         onClick={ action }>

         <span style={{ fontSize: fSize, fontWeight: fWeight }}>{ text }</span>
      </button>
   )
}

Button.propTypes = {
   text: PropTypes.string,
   action: PropTypes.func
}

Button.defaultProps = {
   action: () => { console.log(`default clicked`) },
   text: "Button",
   classn: '',
   fSize: '1rem',
   fWeight: '300'
}

const defStyle = {
   padding: '1em 2em',
   borderRadius: '.5em',
   border: '2px solid #0a76f2',
   background: 'none',
   color: '#0a76f2'
}

export default Button
