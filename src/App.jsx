import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import omivai from "./assets/omivai.jpg"
import saraApu from "./assets/saraapu.jpg"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 flex flex-col items-center justify-center p-6 space-y-8">
      {/* Logos */}
      <div className="flex flex-col items-center space-y-2 animate-fade-in">
  <div className="text-4xl md:text-5xl animate-pulse">
    💑❤️‍🔥 Omi & Sara Forever ❤️‍🔥💑
  </div>
  <p className="text-center text-lg italic text-pink-700 max-w-md">
    "Two souls but a single thought, two hearts that beat as one."
  </p>
  <div className="flex gap-4 text-3xl mt-2">
    <span>💖</span>
    <span>🌸</span>
    <span>💍</span>
    <span>💫</span>
    <span>💖</span>
  </div>
</div>


      {/* Title */}
      <h1 className='text-5xl font-bold text-center text-purple-800 drop-shadow-md'>
        💖 Omi Vai + Sara Apu 💖
      </h1>

      {/* Counter Button */}
      {/* <div className="bg-white shadow-lg rounded-lg px-6 py-4">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg hover:scale-105 transition-transform font-medium"
        >
          Count is {count}
        </button>
      </div> */}

      {/* Friends Photo Gallery */}
      <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 bg-white p-6 rounded-xl shadow-xl max-w-2xl">
        <div className="overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
          <img
            src={omivai}
            alt="Omi Vai"
            className="w-full h-64 object-cover rounded-lg"
          />
          <p className="mt-2 text-center font-semibold text-lg text-purple-700">Omi Vai</p>
        </div>
        <div className="overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
          <img
            src={saraApu}
            alt="Sara Apu"
            className="w-full h-64 object-cover rounded-lg"
          />
          <p className="mt-2 text-center font-semibold text-lg text-pink-700">Sara Apu</p>
        </div>
      </div>
      <h1>
        From MJ Mahedi Hasan.....
      </h1>
    </div>
  )
}

export default App
