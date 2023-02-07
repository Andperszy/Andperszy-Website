import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://github.com/Andperszy">
          <img src="logo.png" className="logo" alt="Andperszy" />
        </a>
      </div>
      <h1>Andperszy</h1>
      <p>
        Known for our <a href="https://github.com/Andperszy/Snack-And-Self">Self & Snack website project</a>
      </p>
    </div>
  )
}

export default App
