// import React from "react";

import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import { useState } from 'react'
import AddTask from "./Components/AddTask";

function App() {
  
const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState(
    [
        {
            id: 1,
            text: 'Doctor\'s Appointment',
            day: '5th of Feb at 12:30',
            reminder: true,
        },
        {
            id: 2,
            text: 'Gym Workout with Fred',
            day: '6th of Feb at 14:30',
            reminder: true,
        },
        {
            id: 3,
            text: 'Walk my dog',
            day: '7th of Feb at 19:30',
            reminder: false,
        },
    ]
  )

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1
    const newTask = { id, ...task } 
    setTasks([...tasks, newTask])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id
    ? { ...task, reminder: !task.reminder} : task
    ))
  }

  return (
    <div className="Container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : ("No Tasks")}
    </div>
  );
} 

/* Making a class

class App extends React.Component {
  render() {
    return <h1>Hello from a class</h1>
  }
}
*/

export default App;
