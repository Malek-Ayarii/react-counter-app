import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <h1>Counter App</h1>
      <div className="card">
        <div className="board">
          <div>{count}</div>
          <button onClick={() => setCount(count + 1)}>ADD</button>
          <button onClick={() => setCount(count - 1)}>SUBSTRACT</button>
          <button onClick={() => setCount(0)}>RESET</button>
        </div>
      </div>
    </div>
  )
}

export default App
