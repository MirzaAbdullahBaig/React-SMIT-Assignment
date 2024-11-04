import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <>
      <div>
        <p>Counter That Update Together</p>
        <button onClick={handleClick}>Clicked {count} Times</button>
        <button onClick={handleClick}>Clicked {count} Times</button>
      </div>
    </>
  )
}

export default App
