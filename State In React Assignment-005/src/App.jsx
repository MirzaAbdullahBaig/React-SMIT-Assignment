import { useState } from 'react'
import './App.css'

function App() {
  const [num, setnum] = useState(10)

  return (
    <>
    <button onClick={() => {setnum(num+1)}}>Num Add</button>

    <p>{num}</p>

    <button onClick={() => {setnum(num-1)}}>Num Sub</button>
    </>
  )
}

export default App
