import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ text, action, classn }) => {
   return (
      <button 
         style={ classn === '' ? defStyle : null } 
         className={ classn === '' ? null : classn }
         onClick={ action }>

         <span>{ text }</span>
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
   classn: ''
}

const defStyle = {
   padding: '1em 2em',
   borderRadius: '.5em',
   border: '2px solid #0a76f2',
   background: 'none',
   color: '#0a76f2'
}

export default Button
