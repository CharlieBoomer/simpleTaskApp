import React from 'react'
import PropTypes from 'prop-types' //This line can be imported via impt shortand
const Button = ({ onClick, showAddTask}) => {
 
  
    return (
    <button className='btn' 
    style={showAddTask ? {backgroundColor: "red"} : {backgroundColor: "green"}}
    onClick ={onClick}
    >{showAddTask?"Hide":"Add"}</button> // note for inline style declaration you must use {{}}
  )
}

Button.defaultProps ={
    color: 'steelblue',
}

Button.propTypes ={
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button