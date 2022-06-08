import Header from './components/Header'// import necessary components
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { useState } from 'react' //This is used to used the state hook const[tasls, setTasks] = useState()
// This file is the top level function which should push all your components to index.js, note components are invoked as <Compname/> in function outputs
function App() { 
  const [showAddTask,setShowAddTask]=useState(false)
  const [tasks, setTasks]=useState([  
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: true
    },
    {
    id: 3,
    text: "Food Shopping",
    day: "Feb 5th at 2:30pm",
    reminder: true
    }

  ])

  //delete task, Because components cannot mutate state, you must pass up an action(or an event) from the component it is set to fire from to the app. 
  //This is done via properties. This function deleteTask is the last stop to execute the call.
  //The function deleteTask is passed from the APP to Tasks via its property onDelete which takes a function arg, which is then passed to Task, which fills the 
  //the function args when a condition is met
  const deleteTask=(id)=>{
    setTasks(tasks.filter((task)=>(task.id !== id)))
  }

  //toggle reminder
  const toggleReminder=(id)=>{
    setTasks(tasks.map((task)=>(task.id === id ? {...task, reminder: !task.reminder}:task)))
  }

  //add task
  const addTask =(task)=>{
    console.log(task);
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  
  return (//JSX expressions can only return ONE PARENT ELEMENT (One top level HTML tag) (if you only want to return single level elemements use <></> empty tag) 
  //Note the class attribute for div is modified using className in JSK as class is a reserved word /* {tasks.length > 0 ? <Tasks tasks={tasks} onDelete ={deleteTask}/> : 'Nothing to do'} */
  //note the curly brackets below <AddTast/> represent the addition of a script.
  //Note showAddTask && <AddTask onAdd = {addTask}/>, is indicating if then statement, with no else.
    <div className="container">
      <Header title ="hello" onShow ={() =>(setShowAddTask(!showAddTask))}
      showAddTask = {showAddTask}/>
      {showAddTask && <AddTask onAdd = {addTask}/> }
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onReminder={toggleReminder}/> : 'Nothing to do'} 
    </div>
  );
  
}

export default App

// class app extends React.component{ **This is the way to declare a component OBJECT which are functionally the same as component functions (the behave the same)**
//   render(){
//     return <h1>hello</h1>
//   }
// }