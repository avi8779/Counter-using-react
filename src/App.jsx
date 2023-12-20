import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const Increment = function Increment(){
    setCount(count+1);
  }

  const Decrement = function Decrement(){
    setCount(count-1);
  }

  return (
    <>
      <div className='Counter-box'>
        <div className='Counter-box1'>
            <h1>{count}</h1>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
        </div>
      </div>
    </>
  )
}

export default App
