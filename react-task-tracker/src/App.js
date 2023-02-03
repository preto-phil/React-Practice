// import React from "react";

import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import { useState } from 'react'

function App() {
  
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

  return (
    <div className="Container">
      <Header />
      <Tasks tasks={tasks} />
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
