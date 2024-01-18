import { useState } from 'react'
import './App.css'


function App() {

  //let counter = 15
  let [counter, setCounter] = useState(15) // initially countr value set to 15 array destructuring

  const addValue = () => {
    //counter = counter + 1
    setCounter(counter + 1)
  }

  const removeValue = () => {
    //counter = counter - 1
    setCounter(counter - 1)
  }

  return (
    <>
    <h1>Hi I'm SWARAJ!</h1>
    <h2>counter value : {counter}</h2>
    <button onClick={addValue}>Add Value</button>
    <br />
    <button onClick={removeValue}>Remove Value</button>
    </>
     
  )
}

export default App
