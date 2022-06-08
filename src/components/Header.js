import PropTypes from 'prop-types'
import Button from './Button'
//The boilerplate was created using the ES7+ Native codeblocks extension by typing "rafe into empty .js file"
import React from 'react'


const Header = ({ title, onShow, showAddTask }) => { //{ variableName } deconstructs the input as type of input, allowing you to invoke it using variableName/ You can change this to props, which imports props object, but then you must access its props.variableName attribute to invoke it
    return (
    <header className='header'>
        <h1 style={headingStyle}>{title}</h1> 
        <Button onClick={onShow} showAddTask={showAddTask}/>
    </header>
  )
}



Header.defaultProps = { //Defines default value of function fields
    title: 'Task Tracker',
}

Header.propTypes = {  //Requires importing PropTypes from 'prop-types' to define which values a function accepts. These will be caught by console as errors. add (.isRequired) property to force only one type of input. Note(lowercase .propTypes)
    title: PropTypes.string, 
}
const headingStyle = { //Simply a variable containing css code passed into <h1> style attribute
    color: "red",
    backgroundColor: 'black',
}

export default Header