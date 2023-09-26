import { useState } from 'react'
import './App.css'

function App() {
  const [person, setPerson] = useState({ name: 'John', age: 100 });

  // BAD - Don't do this!
/*   const badHandleIncreaseAge = () =>{
    // mutating the current state object
    person.age = person.age + 1;
    setPerson(person);
  } */

  // Good
/*   const handleIncreaseAge = () => {
    // copy the existing person object into a new object while updating the age property
    const newPerson = {...person, age: person.age +1};
    setPerson(newPerson)
  } */

  const handleIncreaseAge = () =>{
    console.log("in handleIncreaseAge (before setPerson call): ", person)
    setPerson({ ...person, age: person.age + 1 });
    // we've called setPerson, surely person has updated?
    console.log("in handleIncreaseAge (after setPerson call): ", person);
  }

   // this console.log runs every time the component renders 
   // what do you think this will print?
   console.log("during render: ", person);

  return (
    <>
      <h1>{person.name}</h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase Age</button>
    </>
  )
}

export default App
