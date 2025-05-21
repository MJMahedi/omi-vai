import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import omivai from "./assets/omivai.jpg"
import saraApu from "./assets/saraapu.jpg"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex items-center'>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className='text-4xl'>Omi Vai + Sara Apu</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
       
      </div>
      <div className="carousel carousel-center bg-neutral rounded-box max-w-md space-x-4 p-4 grid grid-cols-2">
        <div className="carousel-item">
          <img
            src={omivai}
            className="rounded-box w-[full] h-[250px]" />
        </div>
        <div className="carousel-item">
          <img
            src={saraApu}
            className="rounded-box h-[250px]" />
        </div>
        
      </div>
    </>
  )
}

export default App
