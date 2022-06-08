import React from 'react'

import Task from './Task' //note this component Tasks takes in sub-component Task

const Tasks = ({tasks, onDelete, onReminder}) => {

    return (
    <>
        {tasks.map((task) => (
        <Task key ={task.id} task ={task}
        onDelete = {onDelete}
        onReminder = {onReminder}
        />
        ))}  
    </>
  )
}

export default Tasks